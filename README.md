# RESTful Blog API

> This is a minimal blog api with some advance features using NodeJS, ExpressJS and MongoDB.

## Features

- JWT Authentication
- Reset Password with email
- User Create, Read, Update and Delete (CRUD) operations
- CRUD operations for blog post including image uploading
- Visitors can leave a comment
- Pagination and search implemented

## Config File

Modify the config/.env file to your environment variables,
set your JWT_SECRET and SMTP

Email Testing: Used MailTrap for email testing

## Installation

Run database seeder

- Seeder folder is \_data/

```console
node seeder -i
```

Delete all data

```console
node seeder -d
```
