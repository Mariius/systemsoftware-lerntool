# 📚 Systemsoftware Lerntool

Ein interaktives Lern-Tool für das Modul "Systemsoftware" im Master-Studiengang "Angewandte Künstliche Intelligenz" der FH Südwestfalen.

## ✨ Features

- **7 Interaktive Kapitel** basierend auf dem offiziellen Lehrbrief
- **Quiz-System** mit 5 Fragen pro Kapitel und Erklärungen
- **Fortschritts-Tracking** mit lokaler Speicherung
- **Linux Terminal Integration** (Demo-Modus + SSH-Unterstützung)
- **Mobile-optimiert** für Lernen unterwegs
- **Vollständig offline-fähig** nach dem ersten Laden

## 📖 Kapitel

1. **Grundlagen Rechneraufbau, Betriebssysteme**
2. **Linux-Installation und erste Schritte**
3. **Ausgewählte Standard-Anwendungen**
4. **Linux-Administration**
5. **Prozesse**
6. **Dateisystem**
7. **Zusatzthemen**

## 🚀 Installation & Start

### Voraussetzungen
- Node.js (v20 oder höher)
- npm oder yarn

### Lokale Entwicklung

```bash
# Repository klonen
git clone https://github.com/DEIN-USERNAME/systemsoftware-lerntool.git
cd systemsoftware-lerntool

# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev
```

Die App läuft dann auf `http://localhost:5173`

### Build für Produktion

```bash
npm run build
```

Die fertigen Dateien befinden sich im `dist/` Ordner.

## 💻 Linux Terminal Feature

Das Tool enthält ein integriertes Linux Terminal mit zwei Modi:

### 1. Demo-Modus (Standard)
Funktioniert ohne Backend und simuliert grundlegende Linux-Befehle:
- `ls`, `ls -la` - Dateien auflisten
- `pwd` - Aktuelles Verzeichnis
- `whoami` - Aktueller Benutzer
- `date` - Datum anzeigen
- `uname -a` - System-Informationen
- `clear` - Terminal leeren
- `help` - Hilfe anzeigen

### 2. SSH-Modus (mit Backend)
Für echte SSH-Verbindungen zu deiner Linux VM benötigst du ein WebSocket-Backend:

#### Option A: webssh (Python)
```bash
pip install webssh
wssh --port=8888
```

#### Option B: wetty (Node.js)
```bash
npm install -g wetty
wetty --port 3000
```

Dann kannst du dich über das Terminal-Interface mit deiner VM verbinden.

## 📦 Deployment auf GitHub Pages

### Automatisches Deployment (empfohlen)

1. Repository auf GitHub erstellen
2. Code pushen:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/DEIN-USERNAME/systemsoftware-lerntool.git
git push -u origin main
```

3. In den Repository-Einstellungen:
   - Gehe zu **Settings** → **Pages**
   - Wähle bei "Source": **GitHub Actions**

4. Die App wird automatisch gebaut und deployed bei jedem Push auf `main`

### Manuelles Deployment

```bash
npm run deploy
```

Die App ist dann verfügbar unter: `https://DEIN-USERNAME.github.io/systemsoftware-lerntool/`

## 🛠️ Technologie-Stack

- **React 19** - UI Framework
- **Vite** - Build Tool & Dev Server
- **xterm.js** - Terminal Emulator
- **LocalStorage** - Fortschritts-Speicherung
- **CSS3** - Styling mit Gradients & Animations

## 📱 Mobile Nutzung

Die App ist vollständig responsive und kann auf Smartphones und Tablets genutzt werden:
- Touch-optimierte Navigation
- Angepasste Layouts für kleine Bildschirme
- Optimierte Schriftgrößen

## 🎯 Nutzung

1. **Kapitel auswählen** - Klicke auf ein Kapitel in der Übersicht
2. **Themen durchgehen** - Lies die Lernthemen durch
3. **Quiz starten** - Teste dein Wissen mit den Quizfragen
4. **Fortschritt verfolgen** - Sieh deinen Gesamtfortschritt in der Übersicht
5. **Terminal nutzen** - Übe Linux-Befehle im integrierten Terminal

## 📚 Basierend auf

**Lehrbrief:** Systemsoftware
**Autor:** Hans-Georg Eßer
**Datum:** 21. Juni 2024
**Studiengang:** Master-Verbundstudiengang "Angewandte Künstliche Intelligenz"
**Institution:** FH Südwestfalen

## 🤝 Mitwirken

Verbesserungsvorschläge und Pull Requests sind willkommen!

1. Fork das Repository
2. Erstelle einen Feature Branch (`git checkout -b feature/NeuesFeature`)
3. Committe deine Änderungen (`git commit -m 'Füge neues Feature hinzu'`)
4. Push zum Branch (`git push origin feature/NeuesFeature`)
5. Öffne einen Pull Request

## 📝 Lizenz

Dieses Projekt ist ein Lern-Tool für Bildungszwecke.

## 🐛 Probleme melden

Falls du Probleme findest, öffne bitte ein Issue auf GitHub.

---

Entwickelt mit ❤️ für Studierende der FH Südwestfalen
