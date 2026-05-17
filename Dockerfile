FROM node:20-alpine

WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer toutes les dépendances (y compris devDependencies pour compiler)
# Utiliser npm ci pour une installation deterministe
RUN npm ci

# Copier tout le code source
COPY . .

# Compiler le TypeScript vers JavaScript
RUN npm run build

# Supprimer les devDependencies apres le build
RUN npm prune --production

# Exposer le port de l'application
EXPOSE 5007

# Commande de démarrage
CMD ["node", "dist/main.js"]
