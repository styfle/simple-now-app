FROM mhart/alpine-node:8

WORKDIR /app
COPY . /app
EXPOSE 3000
CMD ["node", "/app/server.js"]
