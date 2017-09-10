FROM alpine:3.6
MAINTAINER douglasralmeida <douglasralmeida@live.com>

# Instala os servidores
RUN apk --no-cache add mongodb
RUN apk --no-cache add nodejs

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
CMD [ "pm2", "start server.js" ]