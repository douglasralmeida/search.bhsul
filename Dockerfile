FROM alpine:3.6
MAINTAINER douglasralmeida <douglasralmeida@live.com>

# Instala o Node.Js
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
COPY db.js db.js server.js /usr/src/app/

# Porta
EXPOSE 5055

# Iniciar a aplicação ao iniciar o container
CMD ["pm2-docker", "start", "--auto-exit", "--env", "production", "process.yml"]