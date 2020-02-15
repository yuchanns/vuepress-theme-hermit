FROM node:alpine

WORKDIR /app

COPY ./package.json .

ENV TZ=Asia/Shanghai

RUN sed -i "s/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g" /etc/apk/repositories \
          & apk update && apk add --no-cache yarn && yarn

CMD ["yarn", "dev"]