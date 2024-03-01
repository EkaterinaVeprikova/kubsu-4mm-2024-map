# Docker 

## Docker CLI

```bash
$ docker run --name postgres \
  -e POSTGRES_PASSWORD=postgres \
  -p 5432:5432 \
  -d postgres:16.1
  
$ docker run --name pgadmin 
  -e 'PGADMIN_DEFAULT_EMAIL=user@domain.com' \
  -e 'PGADMIN_DEFAULT_PASSWORD=password' \
  -p 80:80 \
  -d dpage/pgadmin4:latest
```

## Docker Compose

```bash
$ docker compose up -d

$ docker compose down
```