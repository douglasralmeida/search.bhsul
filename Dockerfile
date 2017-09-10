FROM node
MAINTAINER douglasralmeida <douglasralmeida@live.com>

# Atualiza e instala o MongoDB
RUN apt-get update \
  && apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927 \
  && echo "deb http://repo.mongodb.org/apt/debian/dists/wheezy/mongodb-org/3.5/main" | tee /etc/apt/sources.list.d/mongodb-org-3.5.list \
  && apt-get update \
  && apt-get install -y mongodb-org \
  && npm install -g pm2

# Cria o diretorio do app
WORKDIR /usr/src/app

# Adiciona o pacote do app
COPY package.json

# Instala as dependencias do app
RUN npm install

# Copia o app
COPY db.js dbconnect.js server.js

# Porta
EXPOSE 5055

# Iniciar a aplicação ao iniciar o container
CMD [ "mongod", "db.js" ]
CMD [ "npm", "start" ]