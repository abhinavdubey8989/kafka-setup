const { Kafka, PartitionAssigners } = require("kafkajs")

const clientId = "my-app"
const groupId = "grp-2"
const fromBeginning = false
const topic = "TPK1"

// const brokers = ["localhost:9091"]
const brokers = ["my_cluster_kafka_1:9091", "my_cluster_kafka_2:9092", "my_cluster_kafka_3:9093"]
// const brokers = ["0.0.0.0:9091","0.0.0.0:9092","0.0.0.0:9093"]


const SECOND = 1000

run();
async function run() {
    try {
        const kafka = new Kafka({
            clientId,
            brokers
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

        //basic
        await consumer.run({
            autoCommit: true,
            eachMessage: async result => {
                const { message, partition } = result;
                const { value: receivedMsg } = message;
                console.log(`consumer : groupId=[${groupId}] msg=[${receivedMsg}] on partition=[${partition}]`)
                //manually commiting offset
                //await consumer.commitOffsets([{ topic, partition, offset: (Number(offset) + 1).toString() }]);

            }
        })
    }
    catch (ex) {
        console.error(`Something bad happened ${ex}`)
    }
    finally {

    }


}