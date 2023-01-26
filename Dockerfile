FROM node:latest
WORKDIR /app
COPY . .
RUN yarn install
EXPOSE 3000
CMD ["yarn", "nodemon", "app.ts"]