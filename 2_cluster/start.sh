

#start zookeeper
echo 'starting ... '
./zookeeper.sh


#wait while zookeeper is not up
echo 'sleeping for 10 sec'
sleep 10


#start kafka
./kafka.sh
echo 'all components are up !!'

echo
echo
sudo docker ps