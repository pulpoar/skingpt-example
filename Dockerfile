FROM node:20-buster AS build

RUN npm i -g pnpm

WORKDIR /app

COPY . .

RUN pnpm install

ARG VITE_PLUGIN_URL=${VITE_PLUGIN_URL}
ENV VITE_PLUGIN_URL=${VITE_PLUGIN_URL}

ARG VITE_API_URL=${VITE_API_URL}
ENV VITE_API_URL=${VITE_API_URL}



RUN pnpm run build

#------------------------------

FROM node:20-buster-slim AS run

WORKDIR /app

COPY --from=build app/node_modules node_modules
COPY --from=build app/server.js server.js
COPY --from=build app/package.json package.json
COPY --from=build app/dist dist

EXPOSE 5173

CMD ["npm", "start"]
