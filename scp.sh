

LOCAL_ZIP_FILE='/home/abd/Documents/kenko/code/kafka-poc/p_c_zip.zip'
USER_NAME='ubuntu'
PUBLIC_IP='52.66.145.132'
SERVER_LOCATION='/home/ubuntu'
PEM_FILE='/home/abd/Downloads/kafka-pem.pem'


sudo scp -i $PEM_FILE $LOCAL_ZIP_FILE $USER_NAME@$PUBLIC_IP:$SERVER_LOCATION