FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
ENV PORT=9777
EXPOSE 9777

CMD [ "node", "." ]