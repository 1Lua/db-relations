## Description

This repository contains branches where the database schema was implemented:
- [typeorm+postgres](https://github.com/1Lua/db-relations/tree/typeorm+postgres): implement with TypeORM & Posgre
- [mongoose+mongo](https://github.com/1Lua/db-relations/tree/mongoose+mongo): implement wirh Mongoose & Mongo

## Tests

For tests creates the following entities:
- One User
- One Status belonging to the User
- Two Jokes belonging to the User
- One Role belonging to the User
- One Group that the user belongs to
- One Level belonging to the Group

## Result
Performance comparison

<p align="center">
<a href="https://ibb.co/SVBN6Yb"><img src="https://i.ibb.co/2cdqFVx/Screenshot-from-2021-11-04-18-00-12.png" alt="Screenshot-from-2021-11-04-18-00-12" border="0"></a>
</p>

## P.S. 
Извиняюсь за нейминг