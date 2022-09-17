# docker build -t with_ignore -f Dockerfile . 
# docker run --rm with_ignore git

FROM node:16.15.1 as base

FROM base as dev
# RUN sleep 25
ENV NODE_ENV=development
COPY . /src
WORKDIR /src
RUN rm -rf node_modules/
RUN npm i -y