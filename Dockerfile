FROM node:10

RUN mkdir -p /app
COPY . /app
WORKDIR /app
RUN npm install .

ENTRYPOINT ["npm", "run", "build"]
