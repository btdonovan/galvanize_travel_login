# What image do you want to start building on?
FROM node:12.18.0-alpine

# Make a folder in your image where your app's source code can live
RUN mkdir -p /src/app

# Tell your container where your app's source code will live
WORKDIR /src/app

# What source code do you what to copy, and where to put it?
COPY . /src/app

# Does your app have any dependencies that should be installed?
RUN npm install
# RUN npm install express
# RUN npm install pool
# RUN npm install body-parser
# RUN npm install cors
# RUN npm install node-fetch
# RUN npm install pg


# What port will the container talk to the outside world with once created?
EXPOSE 3002

# How do you start your app?
CMD [ "node", "index.js" ]
