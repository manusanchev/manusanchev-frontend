FROM node:16.18.0-alpine
WORKDIR /app
COPY . .
RUN yarn install --frozen-lockfile
RUN yarn build-prod
CMD ["yarn", "preview"]
EXPOSE 3000