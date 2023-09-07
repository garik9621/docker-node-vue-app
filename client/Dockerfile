FROM node:18
WORKDIR /app/client
COPY ./package*.json ./
RUN npm install
COPY . .
EXPOSE 3002
VOLUME ./:/app/client
CMD [ "npm", "run", "dev" ]