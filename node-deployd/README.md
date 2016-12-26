This image runs a Deployd [www.deployd.com](www.deployd.com) server as a node module. 
Mongodb access is configured through environment variables.

Environment variables:
----------------------
* MONGO_SERVER (required)
* MONGO_PORT (default: 27017)
* MONGO_DB (default: deployd)
* DPD_ENV (default: development)

Authentication is used if both of the following are provided:

* MONGO_USERNAME 
* MONGO_PASSWORD

Volumes and ports:
------------------
The server runs on port `3000`.

The `/app` folder in the container is the working dir for the app.
Deployd saves it's resource definitions to a `resources` folder so it
is created for you if one doesn't exist.

The `public` and `public-[DPD_ENV]` folders are used to load static files
and resources.

Sample Usage:
-------------

     docker run \
        --name deployd --rm \
        -e MONGO_SERVER=xxx.xxx.xxx.xxx \
        -e MONGO_PORT=27017 \
        -e MONGO_DB=dbname \
        -e MONGO_USERNAME=username \
        -e MONGO_PASSWORD=password \
        -v $PWD:/app \
        -p 3000:3000 \
        saadfarooq/deployd