FROM alpine:3.6
MAINTAINER douglasralmeida <douglasralmeida@live.com>

# Instala os servidores
RUN apk --no-cache add mongodb
RUN apk --no-cache add nodejs-npm
RUN npm install pm2 -g

# Cria o diretorio do app
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Adiciona o pacote do app
COPY package.json pm.json /usr/src/app/

# Instala as dependencias do app
RUN npm install

# Copia o app
COPY db.js dbconnect.js server.js /usr/src/app/

#Executa o servidor de banco de dados
RUN mongod
RUN mongo db.js

# Porta
EXPOSE 5055

# Iniciar a aplicação ao iniciar o container
CMD ["pm2-docker", "start", "--auto-exit", "--env", "production", "process.yml"]