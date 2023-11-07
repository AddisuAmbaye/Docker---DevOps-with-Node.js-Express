FROM node:15
WORKDIR /app
COPY package*.json ./
COPY package-lock.json ./
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
        then npm ci; \
        else npm ci --only=production; \
        fi
RUN npm install -g nodemon
COPY . ./
EXPOSE 3000
CMD ["node", "index.js"]