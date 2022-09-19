
BASE_DIR=$PWD
DOCKER_NW_NAME='mynet2'


#create newtwork if not found
sudo docker network create --driver bridge ${DOCKER_NW_NAME} || true


#start zookeeper docker-compose
cd ${BASE_DIR}/docker/zookeeper
sudo docker-compose up -d