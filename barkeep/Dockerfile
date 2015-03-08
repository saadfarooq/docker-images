FROM ruby:1.9.3-onbuild
RUN apt-get update && apt-get install -y supervisor
ADD supervisord.conf /etc/supervisor/conf.d/supervisord.conf
EXPOSE 8040
CMD ["/usr/bin/supervisord"]