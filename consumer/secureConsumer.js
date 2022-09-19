const { Kafka, PartitionAssigners } = require("kafkajs")

const clientId = "my-app"
const groupId = "grp-12"
const fromBeginning = false
const topic = "gg"

// const brokers = ["localhost:9091"]
// const brokers = ["my_cluster_kafka_1:9091", "my_cluster_kafka_2:9092", "my_cluster_kafka_3:9093"]
// const brokers = ["0.0.0.0:9091","0.0.0.0:9092","0.0.0.0:9093"]
const brokers = [
    'b-1-public.kafkabroker3.8giqir.c4.kafka.ap-south-1.amazonaws.com:9196',
    'b-2-public.kafkabroker3.8giqir.c4.kafka.ap-south-1.amazonaws.com:9196'
]


const SECOND = 1000;





run();
async function run() {
    try {
        const kafka = new Kafka({
            clientId,
            brokers,
            ssl: true,
            sasl: {
                mechanism: 'scram-sha-512', // scram-sha-256 or scram-sha-512
                username: "test_kafka_user",
                password: "test_kafka_pass"
            }
        })

        const consumer = kafka.consumer({
            groupId,
        })
        console.log("Connecting.....")
        await consumer.connect()
        console.log("Connected!")

        await consumer.subscribe({
            topic,
            fromBeginning
        })

        //pause
        await consumer.run({
            autoCommit: false,
            eachMessage: async result => {
                consumer.pause([{ topic }]);
                await handleEvent(result, consumer);
            }
        })



    }
    catch (ex) {
        console.error(`Something bad happened ${ex}`)
    }
    finally {

    }


}




async function handleEvent(result, consumer) {
    const { heartbeat, message, partition, topic } = result;
    const { value: receivedMsg, offset } = message;
    console.log(`consumer : groupId=[${groupId}] msg=[${receivedMsg}] on partition=[${partition}]\n\n\n`)
    console.log(`pausing...`)
    setTimeout(() => {
        console.log(`resuming...`)
        // consumer.resume();
    }, 10 * SECOND
    )
}