# {{Name}}

## Local development

### Setup

```bash
# Copy and complete
cp .env.dist .env

# Install dependencies
yarn install
```

### Running

```bash
# Running in production mode
yarn run start

# Running in development mode
yarn run dev
```

## Docker

### Setup

```bash
# Copy and complete
cp .env.dist .env
cp docker-compose.development.yml docker-compose.override.yml

docker-compose build
```

### Running

```bash
# Running app
docker-compose up -d

# See app logs
docker-compose logs -f app
```
