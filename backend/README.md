# Contact API (Node + SMTP)

## 1) Install
```bash
cd backend
npm install
cp .env.example .env
```

## 2) Configure
Edit `.env` and set SMTP credentials + recipient.

## 3) Run
```bash
npm start
```

Health check:
- `GET http://localhost:3001/api/health`

Contact endpoint:
- `POST http://localhost:3001/api/contact`
- JSON body: `{ "name": "...", "email": "...", "message": "..." }`
