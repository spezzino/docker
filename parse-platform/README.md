# Parse-Platform
This is a fork of https://github.com/CodeBuffet/parse-server-docker, all the original features are included, but additional features are:

- Alpine Edge base image
- NodeJS built from source
- Up to date nodejs (7.7.3)
- Up to date npm (4.1.2)
- Up to date parse server (2.3.7)
- Up to date parse dashboard (1.0.25)
- Dashboard included (server + dashboard in same image & same port!)
- Optional MongoDB support (ignore this if you want to run the builtin version)

The main advantages over the original version is ease-of-use, higher out-of-the-box factor and saves space and memory if you already run a MongoDB instance (since you can reuse that one)

## Variables
Environment variables and default values for parse-server;

- APP_ID myAppId
- MASTER_KEY mySecretMasterKey
- FILE_KEY optionalFileKey
- USER_NAME user
- PASSWORD pass
- SERVER_URL http://localhost:1337

## Running

With builtin MongoDB:

`docker run -d -t -i -p 1337:1337 --name parse spezzino/parse-platform`

With custom (existing MongoDB):

`docker run -d -t -i -p 1337:1337 -e MONGO_URL='MY_MONGO_URL' --name parse spezzino/parse-platform`


When all is done, you should have your dashboard at `http://localhost:1337/dashboard` and your parse API at `http://localhost:1337/dashboard`
