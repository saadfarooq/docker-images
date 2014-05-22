FROM        saad/apache-wsgi
MAINTAINER  Saad Farooq <sa@dfarooq.com>
RUN         apt-get install -y python-pip python-dev python-setuptools 
RUN         apt-get install -y postgresql-client python-psycopg2
RUN         pip install askbot 
VOLUME      ["/app"]
EXPOSE      80
WORKDIR     /app
RUN         chgrp www-data /app -R
RUN         chmod g+rwx /app -R
CMD         ["/usr/sbin/apache2", "-D", "FOREGROUND"]

####### NEED TO FIND A WAY TO RUN THESE #############
# python manage.py collectstatic --noinput
# python manage.py syncdb
# python manage.py migrate askbot
# python manage.py migrate django_authopenid #embedded login application
