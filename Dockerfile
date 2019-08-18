ARG NODE_ENV
FROM node:12-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install -g react react-dom next && \
    npm install --no-optional && \
    npm run build
CMD [ "npm", "start" ]
