

# changes in /etc/hosts file
127.0.0.1       localhost my_cluster_kafka_1 my_cluster_kafka_2 my_cluster_kafka_3


# how to go inside container
sudo docker exec -it my_cluster_kafka_1 bash


# properties directory
/etc/kafka


# list topics
/bin/kafka-topics --list --bootstrap-server localhost:9091


# create a topic
/bin/kafka-topics --create --bootstrap-server localhost:9091 --topic <tpc-name> --partitions <p> --replication-factor <r>
/bin/kafka-topics --create --bootstrap-server localhost:9091 --topic TPK1 --partitions 3 --replication-factor 3


# describe a topic
/bin/kafka-topics --describe --bootstrap-server localhost:9091 --topic <tpc-name> 


# delte a topic
/bin/kafka-topics --bootstrap-server localhost:9091 --delete --topic <tpc-name> 


# delete all topics 
/bin/kafka-topics --bootstrap-server localhost:9091 --delete --topic '.*'







# note
- replication factor <= number of kafka brokers (if number of brokers = 3 , replication can be atmost 3 , minimum=1)
- number of partions is independent of number of brokers (minimum 1 parition , no limit on max , but be sane , a topic can have 10 partitions split over 3 brokers)