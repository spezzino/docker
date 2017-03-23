#!/bin/sh
if [ -z "$MONGO_URL" ]; then
	export MONGO_URL='mongodb://localhost:27017/dev'
	echo "No Mongo URL set, auto-making one..."
	/usr/bin/mongod &
	sleep 5
fi
cd /usr/src/app
APP_ID=$APP_ID MASTER_KEY=$MASTER_KEY FILE_KEY=$FILE_KEY USER_NAME=$USER_NAME PASSWORD=$PASSWORD SERVER_URL=$SERVER_URL DOTNET_KEY=$DOTNET_KEY npm start
