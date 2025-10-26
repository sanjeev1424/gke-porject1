# ---- Base build stage ----
FROM node:18 AS build
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# ✅ Install required libs for puppeteer (react-snap needs these)
RUN apt-get update && apt-get install -y \
  libx11-xcb1 libxcomposite1 libxcursor1 libxi6 libxtst6 libnss3 \
  libatk-bridge2.0-0 libgtk-3-0 libxdamage1 libxrandr2 libgbm-dev \
  libasound2 libpangocairo-1.0-0 libpangoft2-1.0-0 libcups2 fonts-liberation \
  libdrm2 libxkbcommon0 ca-certificates fonts-freefont-ttf \
  && rm -rf /var/lib/apt/lists/*

# Copy rest of the app
COPY . .

# Build React app (runs react-snap postbuild)
RUN npm run build

# ---- Production stage ----
FROM node:18-alpine
WORKDIR /app
COPY --from=build /app/build ./build
COPY server.js package*.json ./

RUN npm install --only=production

EXPOSE 6000
CMD ["node", "server.js"]
