FROM node:20.16.0-alpine3.20

USER node

ENV PORT 8000
EXPOSE 8000

WORKDIR /app

COPY index.js .

ENTRYPOINT ["node", "index.js"]
