

# create a topic

sudo docker-compose exec broker kafka-topics --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1 --topic  <topic-name>


# list topics
sudo docker-compose exec broker kafka-topics --bootstrap-server localhost:9092 --list


# how to go inside container
sudo docker exec -it my_kafka_1 bash


# properties directory
/etc/kafka


# list topics
-go inside kafka container
-run : bin/kafka-topics --list --bootstrap-server localhost:9092


# create a topic
-go inside kafka container
-run : bin/kafka-topics --create --bootstrap-server localhost:9092 --topic <topic-name> --partitions <num> --replication-factor <num>