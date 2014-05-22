FROM        ubuntu:trusty
MAINTAINER  Saad Farooq <sa@dfarooq.com>
RUN         DEBIAN_FRONTEND=noninteractive apt-get -y install apache2 libapache2-mod-wsgi
ENV         APACHE_RUN_USER    www-data
ENV         APACHE_RUN_GROUP   www-data
ENV         APACHE_PID_FILE    /var/run/apache2.pid
ENV         APACHE_RUN_DIR     /var/run/apache2
ENV         APACHE_LOCK_DIR    /var/lock/apache2
ENV         APACHE_LOG_DIR     /var/log/apache2
ENV         APACHE_DOC_ROOT    /app
ENV         APACHE_WSGI_FILE   django.wsgi

ADD         app.vhost   /etc/apache2/sites-enabled/000-default.conf

EXPOSE      80
CMD         ["/usr/sbin/apache2", "-D", "FOREGROUND"]
