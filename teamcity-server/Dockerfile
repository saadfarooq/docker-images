FROM 				hudak/oracle-java7
MAINTAINER 	Saad Farooq <sa@dfarooq.com>
ADD 				http://download-cf.jetbrains.com/teamcity/TeamCity-8.1.2.tar.gz
RUN 				tar -xvf TeamCity-8.1.2.tar.gz && rm TeamCity-8.1.2.tar.gz
ENV 				TEAMCITY_DATA_PATH BuildServer
EXPOSE      8111
VOLUME			["/BuildServer"]
CMD 				["/TeamCity/bin/teamcity-server.sh","run"]