FROM node:10-alpine

# Create app directory
RUN mkdir -p /usr/src/app/graphmeql-server
WORKDIR /usr/src/app/graphmeql-server

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json /usr/src/app/graphmeql-server
COPY package-lock.json /usr/src/app/graphmeql-server

RUN npm install

# Bundle app source
COPY . /usr/src/app/graphmeql-server
 
CMD [ "npm", "start" ]