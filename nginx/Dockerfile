FROM node:20 AS build
WORKDIR /app

COPY frontend/package*.json ./frontend/
RUN npm install --prefix frontend
COPY frontend ./frontend

ENV REACT_APP_BACKEND_URL=http://localhost:8080/api
RUN npm run build --prefix frontend

# -------- Runtime Stage --------
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/frontend/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
