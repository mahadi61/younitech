FROM node:20.17.0  
#  as build

RUN mkdir -p /var/www/frontend

# Set working directory
WORKDIR /var/www/frontend

RUN apt-get clean

COPY . /var/www/frontend


RUN rm -Rf node_modules

RUN yarn install

RUN yarn run build

# FROM node:20.3.0 

# COPY --from=build /var/www/frontend /
# RUN yarn build

# CMD ["npm","run", "start"]
CMD ["yarn","run" , "dev"]
