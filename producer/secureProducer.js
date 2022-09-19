const { Kafka } = require("kafkajs")


const msg = process.argv[2];
const clientId = "my-app"
const topic = "gg"

// const brokers = ["localhost:9091"]
// const brokers = ["my_cluster_kafka_1:9091", "my_cluster_kafka_2:9092", "my_cluster_kafka_3:9093"]
// const brokers = ["0.0.0.0:9091","0.0.0.0:9092","0.0.0.0:9093"]

const brokers = [
    'b-1-public.kafkabroker3.8giqir.c4.kafka.ap-south-1.amazonaws.com:9196',
    'b-2-public.kafkabroker3.8giqir.c4.kafka.ap-south-1.amazonaws.com:9196'
]


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

        const producer = kafka.producer();
        console.log("Connecting.....")
        await producer.connect()
        console.log("Connected!")
        //A-M 0 , N-Z 1 
        const partition = 0;
        const result = await producer.send({
            topic,
            "messages": [
                {
                    "value": msg,
                }
            ]
        })

        console.log(`Send Successfully! result=[${JSON.stringify(result)}]`)
        await producer.disconnect();
    }
    catch (ex) {
        console.error(`Something bad happened ${ex}`)
    }
    finally {
        process.exit(0);
    }


}