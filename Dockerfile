# On part d'une image officielle qui a déjà Node.js installé
FROM node:20-alpine

# On définit le dossier de travail à l'intérieur du conteneur
WORKDIR /app

# On copie d'abord les fichiers de dépendances (package.json)
COPY package*.json ./

# On installe les dépendances
RUN npm install

# On copie tout le reste du code
COPY . .

# On expose le port que Next.js utilise
EXPOSE 3000

# La commande qui démarre le serveur quand le conteneur se lance
CMD ["npm", "run", "dev"]

#Le "hot reload" Ça dit à Docker : "utilise mon code local en temps réel, sauf node_modules qui reste celui du conteneur."
#docker run -p 3000:3000 -v $(pwd):/app -v /app/node_modules mon-portfolio

# on build: docker build -t mon-portfolio .
# on run: docker run -p 3000:3000 mon-portfolio
# to see running containers: docker ps
# to stop: docker stop <container_id>
# delete image: docker rmi <image_name>