

# kafka visualization
https://softwaremill.com/kafka-visualisation/

# kafka js
https://kafka.js.org/


# naming conventions
https://medium.com/@kiranprabhu/kafka-topic-naming-conventions-best-practices-6b6b332769a3

https://blog.softwaremill.com/7-mistakes-when-using-apache-kafka-44358cd9cd6


# best practices
https://newrelic.com/blog/best-practices/kafka-best-practices 



# MSK public access
https://docs.aws.amazon.com/msk/latest/developerguide/public-access.html

# MSK setup secrets for SASL
https://docs.aws.amazon.com/msk/latest/developerguide/msk-password.html#msk-password-tutorial



# MSK setup secrets for SASL
- https://docs.aws.amazon.com/msk/latest/developerguide/msk-password.html#msk-password-tutorial

- need to change default key (redis , ppmc)
- allow.everyone.if.no.acl.found=false 


String region = "ap-south-1";
secret-name : AmazonMSK_test_kafka , AmazonMSK_test_kafka_2
{
  "username": "test_kafka_user",
  "password": "test_kafka_pass"
}