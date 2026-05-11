# ================================
# ÉTAPE 1 : Build de l'application
# ================================
FROM node:20-alpine AS builder

# Définir le dossier de travail dans le conteneur
WORKDIR /app

# Copier les fichiers de dépendances en premier
# (optimisation cache Docker : si package.json n'a pas changé,
# Docker réutilise cette couche sans réinstaller)
COPY package*.json ./

# Installer toutes les dépendances (y compris devDependencies pour compiler)
RUN npm install

# Copier tout le code source
COPY . .

# Compiler le TypeScript → JavaScript
RUN npm run build

# ================================
# ÉTAPE 2 : Image de production
# ================================
FROM node:20-alpine

WORKDIR /app

# Copier seulement package.json
COPY package*.json ./

# Installer UNIQUEMENT les dépendances de production
RUN npm install --only=production

# Copier le code compilé depuis l'étape 1
COPY --from=builder /app/dist ./dist

# Exposer le port de l'application
EXPOSE 3000

# Commande de démarrage
CMD ["node", "dist/main.js"
