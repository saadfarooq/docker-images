FROM          hudak/oracle-java7
MAINTAINER    Saad Farooq <sa@dfarooq.com>
ADD           http://download-cf.jetbrains.com/teamcity/TeamCity-8.1.4.tar.gz .
ENV           TEAMCITY_DATA_PATH /BuildServer
ADD           run.sh /TeamCity/bin/run.sh
EXPOSE        8111
VOLUME        ["/BuildServer"]
CMD           ["sh","/TeamCity/bin/run.sh"]
