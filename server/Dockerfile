FROM node:18
WORKDIR /app/server
COPY ./package*.json ./
RUN npm install
COPY . .
EXPOSE 3001
VOLUME ./:/app/server
CMD ["npm", "run", "start"]