FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

# just in case if editing anything is needed
RUN apk add vim

COPY . . 

CMD ["npm", "run", "dev"]

# docker run -it -p 5173:5173 <IMAGE_ID>

