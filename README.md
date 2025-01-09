Objective
Design and create a database schema by writing SQL statements to define tables and relationships - you can use a tool like Database.build to help give guidance on your process
Write a SQL script to set up the database schema, creating any necessary tables and columns - again, Database.build can help
Connect to an external PostgreSQL database from a Node/Express app using the pg package
Secure the database credentials within environment variables accessed from a .env file.
Implement basic CRUD API routes in Express that query the database and return JSON responses.
Return appropriate HTTP status codes and messages based on API request outcomes.

Technical Requirements
Programming Language: JavaScript
Environment: Node.js
UI: None (Optional, but you can demo through Postman / Thunderclient / etc)
Data Source: A Hosted PostgreSQL Database
Response Specification: All JSON responses from your API should adhere to the JSend specification. This specification provides a consistent structure for your responses, making your API more predictable and easier to interact with.


Milestones
Plan and design your database schema (You should have a minimum of 2 tables that are linked with a primary and foreign key)

Write a database initialisation script. Create a SQL script that will:

Drop any existing tables (if they exist)

Recreate all the tables based on the schema

Populate the tables with some initial seed data

Plan out your API routes and resources. Create your requirements tables similar to the one above.

Set up a basic Express server with a test route.

Implement CRUD operations using the pg package to interact with your database.

Test the API using tools like Postman or Thunder Client.
