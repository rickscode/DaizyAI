
<!-- ![alt text](https://i.ibb.co/G9DFQYH/daizyai.png) -->
# Daizy AI
- An Open Source Project
- OpenAI Powered Content Creation Suite For Digital Nomads & Online Content Creators

## Features
- Code Intepreter Agent
- Blog Content Generator Agent
- AI Social Media Content Generator Agent
- AI Image Generator Agent

### Requirements

- OpenAI account + API Key
- MongoDB Cloud instance database (free tier) + Cluster/Login.
- NodeJS 14+
- NPM
- Python


### Installation

- NPM install or Yarn in the root project directory to install modules
- Create and ENV file from DEV.ENV and enter credentials

### Start App

- PC and Linux  `npm run api` to start the back end instance of the project
- Mac `npm run apimac` to start the the back end instance of the project
- `npm start` To Boot Up The Front End React App

On first run, the database will initialise the admin user at `/routes/middleware/mongo.js`

You will be able to login with the following details:

Username: "admin@domain.com"
Password: "KeepingHumanSafe101"

You should have an instance of the backend and frontend running.