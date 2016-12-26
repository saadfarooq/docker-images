FROM          trickbooter/oracle-java7
MAINTAINER    Saad Farooq <sa@dfarooq.com>
ADD           TeamCity-9.0.3.tar.gz .
ENV           TEAMCITY_DATA_PATH /BuildServer
ADD           run.sh /TeamCity/bin/run.sh
EXPOSE        8111
VOLUME        ["/BuildServer"]
CMD           ["sh","/TeamCity/bin/run.sh"]
