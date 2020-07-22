# pull official base image
FROM node:12

# set working directory
ADD . /app
WORKDIR /app
RUN ls /app
RUN apt-get update
RUN apt-get install -y g++ make python bash libxext-dev libxss-dev libnss3 libgtk-3-0 libxss1 libasound2
RUN npm install -g @angular/cli typescript ts-node npm-run-all
RUN npm install
RUN npm rebuild node-sass
RUN npm run start:web
EXPOSE 4200
## add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

