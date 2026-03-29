# 🚀 Backend — MyApp

## 📦 Stack technique
- **NestJS** — Framework Node.js structuré
- **PostgreSQL** — Base de données relationnelle
- **Drizzle ORM** — ORM TypeScript léger
- **Better Auth** — Authentification moderne
- **Docker Compose** — Orchestration des services

---

## ✅ Prérequis
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Node.js 20+](https://nodejs.org/)
- [WSL2 + Ubuntu](https://learn.microsoft.com/fr-fr/windows/wsl/install)

---

## 🛠️ Lancer le projet en développement

### 1. Cloner le dépôt
git clone <url-du-repo-backend>
cd backend

### 2. Configurer les variables d'environnement
cp .env.example .env
# Ouvre .env et remplis les valeurs

### 3. Installer les dépendances
npm install

### 4. Démarrer PostgreSQL avec Docker
docker compose up postgres -d

### 5. Lancer NestJS en mode développement
npm run start:dev

➡️ L'API est disponible sur : http://localhost:3000

---

## 🐳 Lancer tout avec Docker

docker compose up --build

---

## 🔌 Variables d'environnement

| Variable           | Description          | Exemple                        |
|--------------------|----------------------|--------------------------------|
| PORT               | Port du serveur      | 3000                           |
| NODE_ENV           | Environnement        | development                    |
| POSTGRES_USER      | Utilisateur BDD      | postgres                       |
| POSTGRES_PASSWORD  | Mot de passe BDD     | postgres                       |
| POSTGRES_DB        | Nom de la BDD        | myapp                          |
| DATABASE_URL       | URL complète BDD     | postgresql://postgres:...      |
| BETTER_AUTH_SECRET | Clé secrète auth     | min 32 caractères              |
| BETTER_AUTH_URL    | URL de l'app         | http://localhost:3000          |
