FROM 				kstaken/apache2-php
MAINTAINER 	Saad Farooq <sa@dfarooq.com>
RUN 				apt-get update && apt-get install -y php5-json php5-curl git-core && apt-get clean
RUN 				apt-get upgrade
ADD         https://getcomposer.org/composer.phar /usr/local/bin/composer
RUN         chmod +x /usr/local/bin/composer
CMD 				["/usr/sbin/apache2", "-D", "FOREGROUND"]