

BASE_DIR=$PWD


#stop kafka
cd ${BASE_DIR}/docker/kafka-broker
sudo docker-compose down


#stop zookeeper
cd ${BASE_DIR}/docker/zookeeper
sudo docker-compose down



sudo docker container prune -f
sudo docker ps
echo 'all components are stopped !!'


