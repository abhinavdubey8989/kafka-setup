# curl --location --request POST 'localhost:8083/api/v1/devTest/checkKafka' \
# --header 'Content-Type: application/json' \
# --data-raw '{
#     "topic": "TPK1",
#     "msg": "hello world 1",
#     "useParition": false,
#     "partition": 0
# }'



curl --location --request POST 'localhost:8083/api/v1/devTest/checkKafka' \
--header 'Content-Type: application/json' \
--data-raw '{
    "topic": "TPK1",
    "msg":{
        "logId" : "123",
        "eventName" : "event-1" , 
        "eventData" : {
            "a" : 1,
            "b":  2
        }
    },
    "useParition": false,
    "partition": 2
}'

echo
echo