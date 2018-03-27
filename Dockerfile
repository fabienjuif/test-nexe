FROM node

COPY . .

RUN yarn && \
  yarn build
