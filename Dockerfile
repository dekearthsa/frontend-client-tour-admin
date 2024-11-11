FROM node:18-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

ENV PYTHONPATH=${PYTHONPATH}:${PWD}

ENV PORT 5144

RUN npm install -g serve

RUN npm install
# Build the React app
RUN npm run build

CMD ["serve", "-s", "-l", "5144", "./build"]