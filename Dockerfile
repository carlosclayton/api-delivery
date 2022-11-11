FROM node
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install
RUN npm install --save reflect-metadata
RUN npm install --save ts-node-dev@2.0.0
RUN npx prisma generate
RUN npx prisma generate
COPY . /usr/src/app
EXPOSE 3000
CMD ["npm", "run", "dev"]