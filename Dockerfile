FROM node:20
LABEL authors="miguel soto"


# Establecer el directorio de trabajo
WORKDIR /usr/src/app

RUN npm install -g typescript ts-node

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3002

CMD ["npm", "start"]
