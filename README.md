# 🛍️ Prod Store

**Prod Store** egy egyszerű Node.js alapú backend alkalmazás, amely egy termékeket kezelő RESTful API-t valósít meg. A projekt célja egy alap backend létrehozása termékek listázásához, létrehozásához, módosításához és törléséhez.

## 📁 Projekt struktúra

```
prod-store/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── package.json
└── .gitignore
```

## 💻Tech Stack
- Node.js
- Express.js
- React
- Vite
- MongoDB
- Postman

## 🚀 Telepítés

1. **Repo klónozása:**

```bash
git clone https://github.com/jantokoci/prod-store.git
cd prod-store
```

2. **Függőségek telepítése:**

```bash
npm install
```

3. **Szerver indítása:**

```bash
npm run dev
```

Az alkalmazás alapértelmezés szerint a http://localhost:5000 címen fut.

## 📦 API végpontok

| Módszer | Útvonal             | Leírás                        |
|--------|----------------------|-------------------------------|
| GET    | /api/products/       | Összes termék lekérdezése     |
| POST   | /api/products/       | Új termék hozzáadása          |
| PUT    | /api/products/:id    | Létező termék módosítása      |
| DELETE | /api/products/:id    | Termék törlése                |

## 🧪 Tesztelés

Az API teszteléséhez használhatod a következő eszközöket:

- [Postman](https://www.postman.com/)
- [Insomnia](https://insomnia.rest/)


**Készítette:** [jantokoci](https://github.com/jantokoci)
