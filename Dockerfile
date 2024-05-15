FROM node:20-bookworm as development

WORKDIR /home/node/app

COPY package*.json .

RUN npm install

EXPOSE 3000

USER node

CMD ["npm", "run", "dev"]