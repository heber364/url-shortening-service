# URL Shortening Service

API backend para encurtar URLs, gerenciar links e rastrear estatísticas de acesso. Projeto baseado no desafio [URL Shortening Service](https://roadmap.sh/projects/url-shortening-service) do roadmap.sh.

## Arquitetura

```
Cliente (:80) → Nginx → Fastify (:3333) → Redis → PostgreSQL
```

| Camada | Função | TTL |
|---|---|---|
| **Nginx** | Cache HTTP para `/stats` | 10s |
| **Redis** | Cache de dados (URLs e stats) | 60s - 1h |
| **PostgreSQL** | Banco de dados persistente | — |

## Tech Stack

- **Runtime**: Node.js 20 + TypeScript
- **Framework**: Fastify 5 + Zod (validação)
- **ORM**: Prisma 7
- **Cache**: Redis 7
- **Banco**: PostgreSQL 15
- **Proxy**: Nginx
- **Containers**: Docker Compose

## Pré-requisitos

- [Docker](https://docs.docker.com/get-docker/) e [Docker Compose](https://docs.docker.com/compose/install/)

## Como iniciar

```bash
# 1. Clone o repositório
git clone https://github.com/heber364/url-shortening-service.git
cd url-shortening-service

# 2. Suba toda a infraestrutura (Postgres, Redis, App, Nginx)
docker compose up

# 3. Em outro terminal, rode as migrations do banco
docker compose exec app npx prisma migrate deploy
```

A API estará disponível em **http://localhost** (porta 80, via Nginx).

## Endpoints

### Criar URL encurtada
```bash
curl -X POST http://localhost/shorten \
  -H "Content-Type: application/json" \
  -d '{"url": "https://github.com"}'
```

**Resposta** (201):
```json
{
  "id": 1,
  "url": "https://github.com",
  "shortCode": "uw2YK1",
  "accessCount": 0,
  "createdAt": "2026-03-26T00:00:00.000Z",
  "updatedAt": "2026-03-26T00:00:00.000Z"
}
```

### Redirecionar
```bash
curl -i http://localhost/shorten/uw2YK1
# → 302 Redirect para https://github.com
```

### Ver estatísticas
```bash
curl http://localhost/shorten/uw2YK1/stats
```

### Atualizar URL de destino
```bash
curl -X PATCH http://localhost/shorten/uw2YK1 \
  -H "Content-Type: application/json" \
  -d '{"url": "https://roadmap.sh"}'
```

### Deletar
```bash
curl -X DELETE http://localhost/shorten/uw2YK1
```

## Cache

O projeto implementa cache em duas camadas:

### 1. Redis (Cache-Aside)
- **Redirect** (`GET /shorten/:code`): cacheia a URL por **1 hora**
- **Stats** (`GET /shorten/:code/stats`): cacheia o objeto completo por **60 segundos**
- **Update/Delete**: invalida o cache automaticamente

### 2. Nginx (HTTP Cache)
- **Stats** (`GET /shorten/:code/stats`): cacheia a resposta HTTP por **10 segundos**
- Headers de debug na resposta:
  - `X-Cache-Status`: `HIT`, `MISS` ou `EXPIRED`
  - `X-Response-Time`: tempo de resposta do upstream (Fastify)

### Verificar cache do Nginx
```bash
# 1ª chamada → X-Cache-Status: MISS
curl -i http://localhost/shorten/uw2YK1/stats

# 2ª chamada → X-Cache-Status: HIT (respondeu sem tocar no Node.js)
curl -i http://localhost/shorten/uw2YK1/stats
```

## Estrutura do Projeto

```
├── docker-compose.yml          # Infraestrutura (Postgres, Redis, App, Nginx)
├── nginx/
│   └── nginx.conf              # Reverse proxy + HTTP cache
├── prisma/
│   └── schema.prisma           # Modelo do banco de dados
├── src/
│   ├── index.ts                # Ponto de entrada
│   ├── app.ts                  # Configuração do Fastify
│   ├── controllers/            # Handlers das rotas
│   ├── services/               # Lógica de negócio + cache
│   ├── routes/                 # Definição de rotas
│   ├── validators/             # Schemas Zod
│   ├── interfaces/             # Tipos TypeScript
│   ├── db/                     # Clientes Prisma e Redis
│   └── utils/                  # Geração de short codes (Sqids)
└── .env                        # Variáveis de ambiente (dev local)
```

## Desenvolvimento Local (sem Docker)

```bash
# Suba apenas o banco e o Redis
docker compose up db cache -d

# Instale dependências
npm install

# Rode as migrations
npx prisma migrate deploy

# Inicie em modo dev (hot reload)
npm run dev
```

A API ficará em **http://localhost:3333** (sem Nginx).
