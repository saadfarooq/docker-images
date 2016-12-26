FROM    node
MAINTAINER  Saad Farooq <sa@dfarooq.com>
RUN     npm install -g deployd
EXPOSE  3000
VOLUME  ["/app"]
WORKDIR /app
ADD app.js /app.js
RUN mkdir -p /app/resources
CMD ["node", "/app.js"]
