


# change permission of pem file
sudo chmod 400 /home/abd/Downloads/kafka-pem.pem


# ssh into client machine 
sudo ssh -i /home/abd/Downloads/kafka-pem.pem ubuntu@52.66.145.132

# install java
sudo apt install default-jre
sudo apt install default-jdk

# verify
java -version


# get kafka
wget https://archive.apache.org/dist/kafka/2.6.2/kafka_2.12-2.6.2.tgz

# unzip
tar -xzf kafka_2.12-2.6.2.tgz

# goto the untar directory

# copy plain text connection string from MSK client info
STR=b-2.kafkacluster2.ybjs3w.c4.kafka.ap-south-1.amazonaws.com:9092,b-1.kafkacluster2.ybjs3w.c4.kafka.ap-south-1.amazonaws.com:9092


# STR un-protected
'b-1.kafkacluster2.ybjs3w.c4.kafka.ap-south-1.amazonaws.com:9092',
'b-2.kafkacluster2.ybjs3w.c4.kafka.ap-south-1.amazonaws.com:9092'

# STR protected
'b-1-public.kafkabroker3.8giqir.c4.kafka.ap-south-1.amazonaws.com:9196',
'b-2-public.kafkabroker3.8giqir.c4.kafka.ap-south-1.amazonaws.com:9196'

b-1-public.kafkabroker3.8giqir.c4.kafka.ap-south-1.amazonaws.com:9196,b-2-public.kafkabroker3.8giqir.c4.kafka.ap-south-1.amazonaws.com:9196
# list topics 
<path_to_kafka_dir>/bin/kafka-topics.sh --list --bootstrap-server STR

/home/ubuntu/kafka/bin/kafka-topics.sh --list --bootstrap-server b-2.kafkacluster2.ybjs3w.c4.kafka.ap-south-1.amazonaws.com:9092,b-1.kafkacluster2.ybjs3w.c4.kafka.ap-south-1.amazonaws.com:9092

- private
/home/ubuntu/kafka/bin/kafka-topics.sh --list --bootstrap-server b-2.kafkabroker3.8giqir.c4.kafka.ap-south-1.amazonaws.com:9096,b-1.kafkabroker3.8giqir.c4.kafka.ap-south-1.amazonaws.com:9096 --command-config /home/ubuntu/test.properties

- public
/home/ubuntu/kafka/bin/kafka-topics.sh --list --bootstrap-server b-1-public.kafkabroker3.8giqir.c4.kafka.ap-south-1.amazonaws.com:9196,b-2-public.kafkabroker3.8giqir.c4.kafka.ap-south-1.amazonaws.com:9196 --command-config /home/ubuntu/test.properties


# create topics
<path_to_kafka_dir>/bin/kafka-topics.sh --create --bootstrap-server STR --topic TPK1 --partitions 2 --replication-factor 2 

/home/ubuntu/kafka/bin/kafka-topics.sh --create --bootstrap-server b-2.kafkacluster2.ybjs3w.c4.kafka.ap-south-1.amazonaws.com:9092,b-1.kafkacluster2.ybjs3w.c4.kafka.ap-south-1.amazonaws.com:9092 --topic TPK1 --partitions 2 --replication-factor 2 


- private
/home/ubuntu/kafka/bin/kafka-topics.sh --create --bootstrap-server b-2.kafkabroker3.8giqir.c4.kafka.ap-south-1.amazonaws.com:9096,b-1.kafkabroker3.8giqir.c4.kafka.ap-south-1.amazonaws.com:9096 --topic TPK23 --partitions 2 --replication-factor 2


- public
/home/ubuntu/kafka/bin/kafka-topics.sh --create --bootstrap-server b-1-public.kafkabroker3.8giqir.c4.kafka.ap-south-1.amazonaws.com:9196,b-2-public.kafkabroker3.8giqir.c4.kafka.ap-south-1.amazonaws.com:9196 --topic TPK23 --partitions 2 --replication-factor 2



# copy zip of producer consumer to remote EC2 using SCP


# install npm & node

# local node app + MSK
- turn on SASL in cluster
- make changes in producer