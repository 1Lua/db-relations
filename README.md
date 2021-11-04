## Description

This is the implementation of a database schema using typeorm & postrges.

## Installation

Run next commands:

```bash
git clone https://https://github.com/1Lua/db-relations -b typeorm+postgres

npm install
```

Also you need create .env file consists information like .env.example and launch PostgreSQL DB it youself

## Tests

This have a configured test file: pql.module.spec.ts

The test creates a specified number of entities (1 by default), allows you to measure the speed of writing and reading data

For launch test run next command:

```bash
CREATE_USER_COUNT=10 npm run test:pql
```

## Details

It is possible to get data about users with relationships:
<p align="center">
<a href="https://ibb.co/k6g5HyW"><img src="https://i.ibb.co/84DNKBS/Screenshot-from-2021-11-04-17-06-51.png" alt="Screenshot-from-2021-11-04-17-06-51" border="0"></a>
</p>

This example of function, which returns user Entity. Example of returned user:
<p align="center">
<a href="https://ibb.co/f9jv32B"><img src="https://i.ibb.co/dt8gNr1/Screenshot-from-2021-11-02-18-58-42.png" alt="Screenshot-from-2021-11-02-18-58-42" border="0"></a>
</p>

## Test results

Test results when creating a different number of entities

<p align="center">
<a href="https://ibb.co/1KpLLpH"><img src="https://i.ibb.co/sQD22DL/Screenshot-from-2021-11-03-23-32-03.png" alt="Screenshot-from-2021-11-03-23-32-03" border="0"></a>
<a href="https://ibb.co/zFqtwmK"><img src="https://i.ibb.co/NrcGzFw/Screenshot-from-2021-11-03-23-33-03.png" alt="Screenshot-from-2021-11-03-23-33-03" border="0"></a>
<a href="https://ibb.co/XjhPCGT"><img src="https://i.ibb.co/5GN3RJV/Screenshot-from-2021-11-04-17-19-15.png" alt="Screenshot-from-2021-11-04-17-19-15" border="0"></a>
<a href="https://ibb.co/rygXwKH"><img src="https://i.ibb.co/cTPsrKQ/Screenshot-from-2021-11-03-23-35-05.png" alt="Screenshot-from-2021-11-03-23-35-05" border="0"></a>
</p>