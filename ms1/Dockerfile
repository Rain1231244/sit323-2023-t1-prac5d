FROM node:16

# the directory app files put
WORKDIR /ms1

# install app dependencies with package.json file
COPY package*.json ./
RUN npm install

# get app source file
COPY server.js .
EXPOSE 30600
CMD ["node","server.js"]
