FROM node:20-alpine
WORKDIR /app
# ENV NODE_ENV=development

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i; \
  else echo "Warning: Lockfile not found. It is recommended to commit lockfiles to version control." && npm install; \
  fi

COPY . .

EXPOSE 3000

CMD \
  if [ -f yarn.lock ]; then yarn build && yarn start; \
  elif [ -f package-lock.json ]; then npm run build && npm run start; \
  elif [ -f pnpm-lock.yaml ]; then pnpm build && pnpm start; \
  else npm run build && npm run start; \
  fi

