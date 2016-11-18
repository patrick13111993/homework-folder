DROP TABLE IF EXISTS tickets;
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS films;


CREATE TABLE films (
id SERIAL8 primary key,
title VARCHAR(255) not null,
price INT8 not null,
);

CREATE TABLE customers (
id SERIAL8 primary key,
name VARCHAR(255) not null,
funds INT8 not null
);

CREATE TABLE tickets (
id SERIAL8 primary key,
customer_id SERIAL8 references customers(id)
film_id SERIAL8 references films(id)
);