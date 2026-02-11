# --------- Dev Stage ---------
FROM node:20 AS dev
WORKDIR /app
COPY package*.json ./
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "dev", "--", "--host"]

# --------- Build Stage ---------
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# --------- Runtime Stage ---------
FROM nginx:alpine AS runtime
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist .
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
