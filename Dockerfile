FROM iojs:onbuild

RUN npm install --global gulp

ADD . /home
RUN cd /home/ && npm install

EXPOSE 8080

WORKDIR /home/
CMD gulp
