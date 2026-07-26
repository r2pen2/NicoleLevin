# syntax=docker/dockerfile:1

FROM node:18-bookworm-slim AS client-builder
WORKDIR /app/client

COPY client/package*.json ./
RUN npm ci --legacy-peer-deps

COPY client/ ./
RUN npm run build

FROM node:18-bookworm-slim AS server-deps
WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

FROM node:18-bookworm-slim AS runtime
ENV NODE_ENV=production
ENV PORT=3005

WORKDIR /app

COPY --from=server-deps /app/node_modules ./node_modules
COPY package*.json ./
COPY server.js firebase.js ./
COPY libraries ./libraries
COPY static ./static
COPY --from=client-builder /app/client/build ./client/build

RUN mkdir -p /app/static/images /app/config

EXPOSE 3005

CMD ["node", "server.js"]
