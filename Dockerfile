#FROM node:16.13.2-alpine as node

#WORKDIR /app
#COPY package*.json ./
#RUN npm install --force
#COPY . .
#RUN npm run build --aot

FROM nginx:1.21.5-alpine
COPY /dist /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
#COPY --from=node /app/** /usr/share/nginx/html
EXPOSE 80
CMD nginx -g "daemon off;"

