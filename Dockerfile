FROM node:16.8.0

ENV HOST 0.0.0.0
EXPOSE 80

CMD [ "yarn", "start" ]