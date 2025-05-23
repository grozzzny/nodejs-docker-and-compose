# Докеризация приложения

Перед тем как приступить к выполнению проектной работы разместите в репозитории исходный код фронтенд и бэкенд частей сервиса КупиПодариДай, реализованного вами ранее. 

# URL адреса приложений
- IP адрес 79.132.138.8
- Frontend https://kupipodariday.grozzzny.host (79.132.138.8:8081)
- Backend https://api.kupipodariday.grozzzny.host (79.132.138.8:4000)

# Создание и публикация образа для backend
```bash
cd backend
docker build -t grozzzny/api-kupipodariday:v1.0 .
# Тест на локальной машине:
docker run --rm -it --env-file .env -p 4000:3000 --name back grozzzny/api-kupipodariday:v1.0
# Публикация
docker push grozzzny/api-kupipodariday:v1.0
```

# Создание и публикация образа для frontend
```bash
cd frontend
docker build -t grozzzny/kupipodariday:v1.0 .
# Тест на локальной машине:
docker run --rm -it -p 8081:80 --name front grozzzny/kupipodariday:v1.0
# Публикация
docker push grozzzny/kupipodariday:v1.0
```

# Развертывание образов на сервере
```bash
# Копирование .env.production и docker-compose.yml
scp -P 19 .env.production docker-compose.yml developer@79.132.138.8:/home/developer/projects/kupipodariday/
# Запуск контейнеров
ssh -p 19 developer@79.132.138.8 "cd /home/developer/projects/kupipodariday/ && docker compose --env-file .env.production up -d"
```

