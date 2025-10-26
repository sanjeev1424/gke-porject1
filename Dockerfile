# ---------- Step 1: Build React App ----------
FROM node:18 AS build
WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN npm install

# Copy source and build production React app
COPY . .
RUN npm run build


# ---------- Step 2: Run Express Server ----------
FROM node:18-alpine
WORKDIR /app

# Copy only necessary files for server
COPY package*.json ./
RUN npm install --omit=dev

# Copy server.js and build output
COPY server.js ./
COPY --from=build /app/build ./build

# Expose the port Express listens on
EXPOSE 6000
ENV PORT=6000

# Start Express server
CMD ["node", "server.js"]
