## Description

This is the implementation of a database schema using Mongoose & MongoDB

## Installation

Run next commands:

```bash
git clone https://https://github.com/1Lua/db-relations -b mongoose+mongo

npm install
```

Also you need create .env file consists information like .env.example and launch MongoDB server it youself

## Tests

This have a configured test file: mongo.service.spec.ts

The test creates a specified number of entities (1 by default), allows you to measure the speed of writing and reading data

For launch test run next command:

```bash
CREATE_USER_COUNT=10 npm run test:mongo
```

## Details

It is possible to get data about users with relationships:
<p align="center">
<a href="https://imgbb.com/"><img src="https://i.ibb.co/4W9WLbG/Screenshot-from-2021-11-03-21-57-28.png" alt="Screenshot-from-2021-11-03-21-57-28" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/Zzrm3ms/Screenshot-from-2021-11-03-21-57-46.png" alt="Screenshot-from-2021-11-03-21-57-46" border="0"></a>
</p>

This example of function, which returns user Entity. Example of returned user:
<p align="center">
<a href="https://ibb.co/pyMZPgx"><img src="https://i.ibb.co/PQP4YRN/Screenshot-from-2021-11-03-21-55-24.png" alt="Screenshot-from-2021-11-03-21-55-24" border="0"></a>
</p>

## Test results

Test results when creating a different number of entities

<p align="center">
<a href="https://ibb.co/YfVVVX1"><img src="https://i.ibb.co/F8dddXy/Screenshot-from-2021-11-03-22-55-40.png" alt="Screenshot-from-2021-11-03-22-55-40" border="0"></a>
<a href="https://ibb.co/7tJ2PDw"><img src="https://i.ibb.co/YB7pmSz/Screenshot-from-2021-11-03-22-56-36.png" alt="Screenshot-from-2021-11-03-22-56-36" border="0"></a>
<a href="https://ibb.co/NSy3XVs"><img src="https://i.ibb.co/hfmMk7y/Screenshot-from-2021-11-03-22-57-30.png" alt="Screenshot-from-2021-11-03-22-57-30" border="0"></a>
<a href="https://ibb.co/ydPJTx8"><img src="https://i.ibb.co/KbhHZ89/Screenshot-from-2021-11-03-23-05-09.png" alt="Screenshot-from-2021-11-03-23-05-09" border="0"></a>
</p>