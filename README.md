# Getting Started with the APP

# the project contains two separate apps which inludes frontend and Backend development
# Frontend named devcenter_fe and Backend development named devcenter_be/

# FIRST SETUP AND RUN THE BACKEND DEVELOPMENT

# STEP1
- CD into the project folder  (cd devcenter_be)
- Open the terminal and run npm install
- Create .env file on the root folder

# STEP2
- create a database on mongodb atlas and copy the url that looks like this:
        mongodb+srv://<username>:<password>@atlascluster.4wgmr.mongodb.net/<databasename>
# STEP #
- populate your .env file created with the following but only change (MONGO_URL to the one you copied)
PORT = 3200
JWT_SECRET=devcenter_secret_key
MONGO_URL = (the copied url from step 2 e.g mongodb+srv://<username>:<password>@atlascluster.4wgmr.mongodb.net/<databasename>)


# STEP3
- run
npm run start:dev

# FIRST SETUP AND RUN THE FRONTEND DEVELOPMENT

# STEP1
- CD into the project folder  (cd devcenter_fe)
- Open the terminal and run npm install
- Create .env.local file on the root folder

# STEP2
- populate your .env.local file created with
    REACT_APP_LOCAL_BASE_URL = http://127.0.0.1:3200/
    REACT_APP_PRODUCTION_BASE_URL = http://127.0.0.1:3200/
    NODE_ENV= development

# STEP3
- run
npm start

# STEP4
- visit the website on your browser by visiting http://127.0.0.1:3000
- explore the website functionality on your browser.

# LAST STEP
- consider me for a meeting , Thank you.