FROM node:latest
RUN  mkdir -p /src/app
COPY . .
RUN npm install
RUN npm run seed
EXPOSE 3030
CMD ["npm", "node-start"]