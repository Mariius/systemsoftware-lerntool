export const chapter4Quiz = [
  {
    question: "Was ist ein Benutzer (User) in Linux?",
    options: [
      "Eine Person, die den Computer bedient",
      "Ein Konto mit eindeutiger ID (UID) für Zugriffskontrolle",
      "Ein Systemdienst",
      "Ein Dateityp"
    ],
    correctAnswer: 1,
    explanation: "Ein Benutzer ist ein Konto mit einer eindeutigen User ID (UID), das der Zugriffskontrolle und Authentifizierung dient."
  },
  {
    question: "Was ist eine Gruppe in Linux?",
    options: [
      "Eine Sammlung von Benutzern, die gemeinsame Zugriffsrechte haben",
      "Eine Datei",
      "Ein Verzeichnis",
      "Ein Shell-Script"
    ],
    correctAnswer: 0,
    explanation: "Eine Gruppe ist eine Sammlung von Benutzern, denen gemeinsame Zugriffsrechte auf Dateien und Verzeichnisse gewährt werden können."
  },
  {
    type: "text",
    question: "Welcher Benutzer hat auf Linux-Systemen alle Rechte?",
    acceptedAnswers: ["root", "superuser", "administrator"],
    sampleAnswer: "Der root-Benutzer (Superuser) hat uneingeschränkte Rechte auf dem System.",
    explanation: "root ist der Administratorbenutzer mit UID 0, der über alle Rechte verfügt und kritische Systemoperationen durchführen kann."
  },
  {
    question: "Was sind Zugriffsrechte (Permissions) in Linux?",
    options: [
      "Verschlüsselungscodes",
      "Regelwerk für Dateizugriff (read, write, execute)",
      "Netzwerkports",
      "Backup-Einstellungen"
    ],
    correctAnswer: 1,
    explanation: "Zugriffsrechte bestimmen, wer eine Datei/Verzeichnis lesen (r), schreiben (w) oder ausführen (x) darf."
  },
  {
    type: "text",
    question: "Welcher Befehl ändert die Zugriffsrechte von Dateien?",
    acceptedAnswers: ["chmod", "change mode"],
    sampleAnswer: "Der Befehl chmod wird verwendet, z.B. 'chmod 755 datei'",
    explanation: "chmod (change mode) ändert die Datei-Zugriffsmodi für Besitzer, Gruppe und Andere."
  },
  {
    question: "Was bedeutet '755' beim chmod-Befehl in Oktalnotation?",
    options: [
      "Gesamtgröße der Datei in KB",
      "rwxr-xr-x (Besitzer: rwx, Gruppe: r-x, Andere: r-x)",
      "Passwortschutz",
      "Verschlüsselungsebene"
    ],
    correctAnswer: 1,
    explanation: "755 bedeutet: Besitzer hat alle Rechte (7=rwx), Gruppe hat Lese- und Ausführungsrecht (5=r-x), Andere haben Lese- und Ausführungsrecht (5=r-x)."
  },
  {
    type: "text",
    question: "Welcher Befehl ändert den Besitzer einer Datei?",
    acceptedAnswers: ["chown", "change owner"],
    sampleAnswer: "Der Befehl chown wird verwendet, z.B. 'chown benutzer:gruppe datei'",
    explanation: "chown (change owner) ändert den Besitzer und optional die Gruppe einer Datei oder eines Verzeichnisses."
  },
  {
    question: "Was ist apt in Linux?",
    options: [
      "Ein Dateisystem",
      "Ein Paketmanager für Debian-basierte Distributionen",
      "Ein Netzwerk-Tool",
      "Ein Text-Editor"
    ],
    correctAnswer: 1,
    explanation: "apt (Advanced Package Tool) ist der Paketmanager für Debian/Ubuntu-Systeme und verwaltet Software-Installation, Updates und Deinstallation."
  },
  {
    type: "text",
    question: "Mit welchem Befehl aktualisiert man Paketlisten in apt?",
    acceptedAnswers: ["apt update", "sudo apt update", "update"],
    sampleAnswer: "apt update aktualisiert die lokale Paketliste",
    explanation: "apt update lädt die aktuellen Paketinformationen von den Repositories herunter, benötigt aber sudo-Rechte."
  },
  {
    question: "Was ist dpkg?",
    options: [
      "Ein Desktop-Environment",
      "Ein Netzwerk-Protokoll",
      "Ein Low-Level-Paketmanager für .deb-Dateien",
      "Ein Compiler"
    ],
    correctAnswer: 2,
    explanation: "dpkg ist der Debian Package Manager, der auf niedriger Ebene .deb-Pakete installiert und verwaltet, ohne Abhängigkeiten automatisch zu lösen."
  },
  {
    type: "text",
    question: "Wie installiert man ein Paket mit apt?",
    acceptedAnswers: ["apt install", "sudo apt install", "install"],
    sampleAnswer: "Mit 'sudo apt install paketname'",
    explanation: "apt install installiert ein Paket und alle erforderlichen Abhängigkeiten automatisch."
  },
  {
    question: "Wie aktualisiert man alle installierten Pakete?",
    options: [
      "apt update",
      "apt upgrade",
      "apt install",
      "apt remove"
    ],
    correctAnswer: 1,
    explanation: "apt upgrade aktualisiert alle installierten Pakete auf ihre neuesten Versionen (nach apt update)."
  },
  {
    question: "Was sind Snap-Pakete in Linux?",
    options: [
      "Komprimierte Dateien",
      "Applikationen in isolierten Containern mit automatischen Updates",
      "Netzwerk-Protokolle",
      "Dateisystem-Tools"
    ],
    correctAnswer: 1,
    explanation: "Snap-Pakete sind containerisierte Anwendungen, die unabhängig vom System und automatisch aktualisiert werden, universell über Linux-Distributionen funktionieren."
  },
  {
    type: "text",
    question: "Nenne ein Beispiel für eine Netzwerk-Konfigurationsdatei in Linux.",
    acceptedAnswers: ["interfaces", "netplan", "resolv.conf", "/etc/network"],
    sampleAnswer: "/etc/network/interfaces oder /etc/netplan/config.yaml",
    explanation: "Wichtige Netzwerk-Konfigurationsdateien sind /etc/network/interfaces, /etc/netplan/config.yaml und /etc/resolv.conf für DNS-Einstellungen."
  },
  {
    question: "Welcher Befehl zeigt aktuelle Netzwerk-Verbindungen an?",
    options: [
      "ping",
      "ifconfig oder ip addr",
      "netstat",
      "route"
    ],
    correctAnswer: 1,
    explanation: "ifconfig (veraltet) oder ip addr (moderner) zeigt die Netzwerk-Schnittstellen und deren IP-Adressen an."
  },
  {
    type: "text",
    question: "Wie startet man einen Systemdienst neu?",
    acceptedAnswers: ["systemctl restart", "service restart", "restart"],
    sampleAnswer: "Mit 'sudo systemctl restart servicename'",
    explanation: "Der Befehl systemctl restart servicename startet einen Systemdienst neu und erfordert sudo-Rechte."
  },
  {
    question: "Was ist das Ziel der Paket-Verwaltung?",
    options: [
      "Dateien zu sichern",
      "Software zu installieren, aktualisieren und deinstallieren",
      "Benutzer zu verwalten",
      "Netzwerk-Verbindungen zu konfigurieren"
    ],
    correctAnswer: 1,
    explanation: "Paket-Verwaltungssysteme ermöglichen einfache Installation, Update und Deinstallation von Software mit automatischer Abhängigkeitsauflösung."
  },
  {
    type: "text",
    question: "Nenne drei Aufgaben eines Systemadministrators.",
    acceptedAnswers: ["benutzer", "sicherung", "updates", "verwaltung", "monitoring"],
    sampleAnswer: "1) Benutzerverwaltung, 2) Systemaktualisierungen und -überwachung, 3) Backup und Sicherheit",
    explanation: "Systemadministratoren verwalten Benutzer, führen Aktualisierungen durch, sichern Daten, überwachen Performance und beheben Probleme."
  },
  {
    question: "Wann sollten System-Aktualisierungen durchgeführt werden?",
    options: [
      "Willkürlich, wenn Zeit vorhanden ist",
      "Regelmäßig und besonders bei Sicherheitsaktualisierungen",
      "Nie, um Stabilität zu bewahren",
      "Nur bei Fehlern"
    ],
    correctAnswer: 1,
    explanation: "System-Aktualisierungen sollten regelmäßig durchgeführt werden, besonders Sicherheit-Updates, um Schwachstellen zu schließen und Systemstabilität zu gewährleisten."
  }
];
