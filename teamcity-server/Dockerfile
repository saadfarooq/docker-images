FROM 				hudak/oracle-java7
MAINTAINER 	Saad Farooq <sa@dfarooq.com>
# ADD 				http://download-cf.jetbrains.com/teamcity/TeamCity-8.1.2.tar.gz teamcity.tar.gz
# RUN 				tar -xvf teamcity.tar.gz && rm teamcity.tar.gz
ADD 				TeamCity-8.1.2.tar.gz /
EXPOSE      8111
VOLUME			["/root/.BuildServer"]
CMD 				["/TeamCity/bin/teamcity-server.sh","run"]