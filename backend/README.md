## 🎁 Kupipodariday API (NestJS + TypeORM)

### 📌 Описание

Kupipodariday API — это серверное приложение на NestJS, которое управляет пользователями, подарками и предложениями на совместные сборы.

### 🚀 Функциональность
-	📌 Пользователи: регистрация, аутентификация, обновление профиля
-	🎁 Подарки (Wish): добавление, копирование, обновление, удаление
-	💰 Предложения (Offer): создание оффера, обновление сбора (raised)
-	🔒 Аутентификация: через JWT (Bearer Token)

### 🛠️ Установка

1️⃣ Клонирование репозитория
```
git clone https://github.com/grozzzny/kupipodariday-backend.git
cd kupipodariday-backend
```

2️⃣ Установка зависимостей
```
npm install
```
3️⃣ Настройка переменных окружения

Создай файл .env и добавь в него:
```
PORT=3000
POSTGRES_URI=postgres://user:password@localhost:5432/kupipodariday
JWT_SECRET=your-secret-key
NODE_ENV=production
```
4️⃣ Запуск сервера
```
npm run build && npm run start
```

### 🏗️ Технологии
-	NestJS (TypeScript)
-	TypeORM (PostgreSQL)
-	JWT (JSON Web Token)

### ✨ Авторы:

👨‍💻 grozzzny
