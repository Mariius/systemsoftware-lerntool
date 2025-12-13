# 🚀 Deployment Anleitung

## Quick Start - Lokale Nutzung

Da deine Node.js Version (v20.9.0) etwas veraltet ist, empfehle ich:

### Option 1: Build verwenden (empfohlen)
```bash
# Build wurde bereits erstellt im dist/ Ordner
# Öffne einfach: dist/index.html im Browser
```

### Option 2: Node.js aktualisieren
```bash
# Installiere Node.js v20.19+ oder v22.12+
# Von: https://nodejs.org/

# Dann:
npm run dev
```

### Option 3: Einfacher HTTP Server
```bash
# Im Projektverzeichnis:
npx serve dist

# Oder mit Python:
cd dist
python -m http.server 8080
```

## 📦 Deployment auf GitHub Pages

### Schritt 1: GitHub Repository erstellen

1. Gehe zu [github.com](https://github.com) und erstelle ein neues Repository
2. Name: `systemsoftware-lerntool` (oder wie du möchtest)
3. **Wichtig:** Mache es Public (für GitHub Pages)

### Schritt 2: Code zu GitHub pushen

```bash
cd c:\Users\mariu\Desktop\fh-swf\Systemesoftware\systemsoftware-lerntool

# Git initialisieren (falls noch nicht geschehen)
git init

# Alle Dateien hinzufügen
git add .

# Ersten Commit erstellen
git commit -m "Initial commit: Systemsoftware Lerntool"

# Branch umbenennen
git branch -M main

# Remote Repository hinzufügen (ersetze DEIN-USERNAME mit deinem GitHub Username)
git remote add origin https://github.com/DEIN-USERNAME/systemsoftware-lerntool.git 

# Code hochladen
git push -u origin main
```

### Schritt 3: GitHub Pages aktivieren

1. Gehe zu deinem Repository auf GitHub
2. Klicke auf **Settings** (Einstellungen)
3. Scrolle zu **Pages** (in der linken Sidebar)
4. Bei **Source** wähle: **GitHub Actions**
5. Der Workflow wird automatisch getriggert beim nächsten Push

### Schritt 4: Fertig!

Nach ca. 1-2 Minuten ist deine App verfügbar unter: 
```
https://DEIN-USERNAME.github.io/systemsoftware-lerntool/
```

## 🔄 Updates deployen

Jedes Mal wenn du Änderungen machst:

```bash
git add .
git commit -m "Beschreibung der Änderung"
git push
```

Die App wird automatisch neu gebaut und deployed!

## ⚙️ Vite Config für eigenes Projekt

Falls du den Repository-Namen änderst, aktualisiere die `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/DEIN-REPO-NAME/',  // <- Hier anpassen
  // ...
})
```

## 🌐 Alternative Deployment Optionen

### Vercel (empfohlen für einfaches Deployment)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod
```

### Eigener Server
```bash
# Build erstellen
npm run build

# dist/ Ordner auf deinen Server kopieren
# Mit nginx oder Apache hosten
```

## 🐛 Troubleshooting

### Node.js Version Problem
```bash
# Installiere neueste LTS Version von nodejs.org
# Oder nutze nvm (Node Version Manager):
nvm install 22
nvm use 22
```

### Build schlägt fehl
```bash
# Cache löschen und neu installieren
rm -rf node_modules package-lock.json
npm install
npm run build
```

### GitHub Pages zeigt 404
- Stelle sicher, dass `base` in `vite.config.js` korrekt ist
- Warte 2-3 Minuten nach dem Push
- Checke den Actions Tab auf GitHub für Build-Errors

## 📱 Mobile Nutzung

Die App ist PWA-ready und kann als App auf dem Handy gespeichert werden:

1. Öffne die URL auf dem Handy
2. Im Browser-Menü: "Zum Startbildschirm hinzufügen"
3. Die App läuft dann wie eine native App!

## 🔒 SSH Terminal Backend (Optional)

Für echte SSH-Verbindungen:

### Mit Docker (einfachste Methode)
```bash
docker run -d -p 8888:8888 \
  --name webssh \
  huashengdun/webssh
```

### Mit Python
```bash
pip install webssh
wssh --port=8888
```

### Mit Node.js
```bash
npm install -g wetty
wetty --port 3000
```

Dann in der Terminal-Komponente den WebSocket-Server konfigurieren.

---

Viel Erfolg beim Deployment! 🚀
