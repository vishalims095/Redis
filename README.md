# Reids
![alt text](https://redis.io/images/redis-white.png)

 It's a type of nosql database and not similar to any other nosql database, redis doesn't have any idea of table or documents. All data store in redis in the form of key value pairs. Another most important difference is other traditional database store data in disks and redis stores data in vertual memory or ram so it's too fast.
## Features
- Redis is the most popular caching tool.
- Store data in key value pair
- Faster than any other database.

## Some commands
- redis-server (for check)
- redis-cli (open redis terminal)
- SET name vishal (store key value)
- GET name (get value)
- DEL name (for delete)
- EXISTS name (check exist or not)
- keys * (show all keys)
- flushall (remove all keys)
- ttl name (time to leave)
- expire name 10 (expire in 10 second)
- setex name 10 vishal (automatically expire in 10 second)
- lpush friends vishal (add element in list, leftPush)
- rpush friends vishal (add element in list, rightPush)
- lrange friend 0 -1 (get list of items)
- LPOP friend (remove from left)

# SETs : (also check in JS) it's always unique

- SADD hobbies "Riding Travel" (add value in set)
- SMEMBERS hobbies (get value from set)
- SREM hobbies "travel bike" (Remove element from sets)

