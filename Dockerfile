FROM node:12.18.1

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN apt-get update && apt-get install -y vim

RUN npm install

COPY . .

ENTRYPOINT [ "/bin/bash"]