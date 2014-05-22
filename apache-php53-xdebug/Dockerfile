FROM        kstaken/apache2-php
MAINTAINER  Saad Farooq <sa@dfarooq.com>
RUN         echo "deb http://us.archive.ubuntu.com/ubuntu/ precise universe" >> /etc/apt/sources.list
RUN         apt-get update
RUN         DEBIAN_FRONTEND=noninteractive apt-get install -y php5-xdebug
RUN         echo "xdebug.remote_enable=on" >> /etc/php5/apache2/conf.d/xdebug.ini
RUN         echo "xdebug.remote_connect_back=on" >> /etc/php5/apache2/conf.d/xdebug.ini
CMD         ["/usr/sbin/apache2", "-D", "FOREGROUND"]