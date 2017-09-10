FROM alpine:3.6
MAINTAINER douglasralmeida <douglasralmeida@live.com>

# Instala os servidores
RUN apk --no-cache add mongodb
RUN apk --no-cache add nodejs
RUN npm install pm2 -g

# Cria o diretorio do app
WORKDIR /usr/src/app

# Adiciona o pacote do app
COPY package.json /usr/src/app

# Instala as dependencias do app
RUN npm install

# Copia o app
COPY db.js dbconnect.js server.js
RUN mongod db.js

# Porta
EXPOSE 5055

# Iniciar a aplicação ao iniciar o container
CMD ["pm2-docker", "start", "--auto-exit", "--env", "production", "process.yml"]