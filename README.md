Task 1: MongoDB API Development
Create an API to upload data into MongoDB:

The API should accept XLSX or CSV files and upload the data to MongoDB.
Use worker threads to handle the file processing and data insertion to ensure efficient use of resources.
Endpoint: http://localhost:3000/upload
Search API to find policy info using the username:

Develop an API that searches and retrieves policy information based on a provided username.
Endpoint: http://localhost:3000/search
API to provide aggregated policy information by user:

Create an API that aggregates policy information for each user. This could involve grouping policy data by user and providing a summary or count.
Endpoint: http://localhost:3000/aggregate
Considerations for MongoDB Collections:

Each type of information (Agent, User, User's Account, LOB, Carrier, Policy) should be stored in separate collections within MongoDB.
Task 2: Node Server and Post Service Development
Monitor and manage CPU utilization:
Implement a mechanism to track the real-time CPU usage of your Node.js server.
If CPU usage exceeds 70%, the server should automatically restart to prevent overloading.
Post-service for scheduled message insertion:
Create a service that takes a message, day, and time as input parameters.
This service should schedule the insertion of the message into the database at the specified date and time.
Endpoint: http://localhost:3000/scheduleMessage
Additional Instructions:
Endpoints Recap:

http://localhost:3000/upload - Upload data to MongoDB.
http://localhost:3000/search - Search for policy information by username.
http://localhost:3000/aggregate - Aggregate policy data by user.
http://localhost:3000/scheduleMessage - Schedule a message for future insertion.
