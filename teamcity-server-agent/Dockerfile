FROM 		hudak/oracle-java7
MAINTAINER 	Saad Farooq <sa@dfarooq.com>
ADD 		http://download-cf.jetbrains.com/teamcity/TeamCity-8.1.2.tar.gz .
ENV 		TEAMCITY_DATA_PATH /BuildServer
EXPOSE          8111 9090
VOLUME		["/BuildServer"]
CMD 		["/TeamCity/bin/run.sh"]
