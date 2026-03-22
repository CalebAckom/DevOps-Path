FROM node:alpine

WORKDIR /usr/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

ENV PORT=8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=60s --retries=3 \
    CMD curl -f http://localhost:${PORT}/health || exit 1
EXPOSE 8080

CMD ["node", "index.js"]
