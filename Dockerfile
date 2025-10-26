# Step 1: Build React app
FROM node:18 AS build
WORKDIR /app

# Force rebuild when ARG changes
ARG CACHEBUST=1

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Step 2: Serve with Express
FROM node:18-alpine
WORKDIR /app
COPY --from=build /app /app
EXPOSE 6000
ENV PORT=6000
CMD ["node", "server.js"]
