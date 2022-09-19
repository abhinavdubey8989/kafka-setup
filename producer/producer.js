const { Kafka } = require("kafkajs")


const msg = process.argv[2];
const clientId = "my-app"
const topic = "TPK1"

// const brokers = ["localhost:9091"]
const brokers = ["my_cluster_kafka_1:9091", "my_cluster_kafka_2:9092", "my_cluster_kafka_3:9093"]
// const brokers = ["0.0.0.0:9091","0.0.0.0:9092","0.0.0.0:9093"]

// const brokers = [
//     'b-1.kafkacluster2.ybjs3w.c4.kafka.ap-south-1.amazonaws.com:9092',
//     'b-2.kafkacluster2.ybjs3w.c4.kafka.ap-south-1.amazonaws.com:9092'
// ]


run();
async function run() {
    try {
        const kafka = new Kafka({
            clientId,
            brokers
        })

        const producer = kafka.producer();
        console.log("Connecting.....")
        await producer.connect()
        console.log("Connected!")
        //A-M 0 , N-Z 1 
        // const partition = 0;
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