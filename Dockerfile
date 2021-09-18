FROM node:14.17.6-alpine3.14

USER node

ENV PORT 8000
EXPOSE 8000

WORKDIR /app

COPY index.js .

ENTRYPOINT ["node", "index.js"]
