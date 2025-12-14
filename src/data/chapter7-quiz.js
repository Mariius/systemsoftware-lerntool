export const chapter7Quiz = [
  // Thema 1: Shell-Skripting
  {
    question: "Was ist ein Shell-Skript?",
    options: [
      "Eine kompilierte Anwendung",
      "Eine Textdatei mit Shell-Befehlen",
      "Ein Betriebssystem",
      "Eine Programmiersprache"
    ],
    correctAnswer: 1,
    explanation: "Ein Shell-Skript ist eine Textdatei, die Shell-Befehle enthält und automatisch nacheinander ausgeführt werden kann."
  },
  {
    type: "text",
    question: "Mit welcher Zeile beginnt ein bash-Skript typischerweise?",
    acceptedAnswers: ["shebang", "#!/bin/bash", "hashbang"],
    sampleAnswer: "#!/bin/bash - Diese Zeile (Shebang) gibt an, welcher Interpreter verwendet werden soll.",
    explanation: "Die Shebang-Zeile (#!/bin/bash) am Anfang eines Skripts teilt dem System mit, dass das Skript mit der bash-Shell ausgeführt werden soll."
  },
  {
    question: "Wie definiert man eine Variable in bash?",
    options: [
      "var NAME=Wert",
      "NAME=Wert (ohne Leerzeichen)",
      "set NAME Wert",
      "NAME := Wert"
    ],
    correctAnswer: 1,
    explanation: "In bash definiert man Variablen ohne Leerzeichen: NAME=Wert. Zugriff erfolgt mit $NAME."
  },
  {
    type: "text",
    question: "Welche Kontrollstrukturen gibt es in bash-Skripten?",
    acceptedAnswers: ["if", "for", "while", "case", "schleife"],
    sampleAnswer: "bash unterstützt: if-then-else, for-Schleifen, while-Schleifen, case-Anweisungen und Funktionen.",
    explanation: "bash bietet vollständige Programmierstrukturen für Verzweigungen, Schleifen und Funktionen."
  },

  // Thema 2: Systemd und Services
  {
    question: "Was ist systemd?",
    options: [
      "Ein Texteditor",
      "Ein Init-System und Service-Manager",
      "Ein Dateisystem",
      "Eine Shell"
    ],
    correctAnswer: 1,
    explanation: "systemd ist das moderne Init-System und Service-Manager in vielen Linux-Distributionen."
  },
  {
    question: "Mit welchem Befehl startet man einen systemd-Service?",
    options: [
      "systemctl start servicename",
      "service start servicename",
      "start servicename",
      "run servicename"
    ],
    correctAnswer: 0,
    explanation: "'systemctl start servicename' startet einen systemd-Service."
  },
  {
    type: "text",
    question: "Was ist der Unterschied zwischen 'start' und 'enable' bei systemd?",
    acceptedAnswers: ["start", "enable", "boot", "automatisch", "neustart"],
    sampleAnswer: "'start' startet den Service sofort, 'enable' aktiviert den automatischen Start beim Systemstart. Beide Befehle können kombiniert werden.",
    explanation: "start ist für den sofortigen Start, enable sorgt dafür, dass der Service beim Booten automatisch gestartet wird."
  },
  {
    question: "Welcher Befehl zeigt den Status eines systemd-Services an?",
    options: [
      "systemctl show servicename",
      "systemctl status servicename",
      "systemctl info servicename",
      "systemctl check servicename"
    ],
    correctAnswer: 1,
    explanation: "'systemctl status servicename' zeigt den aktuellen Status, Logs und Details eines Services an."
  },

  // Thema 3: Virtualisierung
  {
    question: "Was ist der Unterschied zwischen einer virtuellen Maschine und einem Container?",
    options: [
      "Container sind schneller und teilen sich den Kernel mit dem Host",
      "VMs sind schneller als Container",
      "Es gibt keinen Unterschied",
      "Container brauchen mehr Ressourcen"
    ],
    correctAnswer: 0,
    explanation: "Container teilen sich den Kernel mit dem Host-System und sind daher leichtgewichtiger und schneller als VMs, die ein komplettes OS virtualisieren."
  },
  {
    type: "text",
    question: "Nenne zwei Vorteile von Docker gegenüber traditionellen VMs.",
    acceptedAnswers: ["schnell", "leichtgewichtig", "ressourcen", "start", "klein"],
    sampleAnswer: "1) Docker-Container starten in Sekunden (VMs in Minuten), 2) Container benötigen weniger Ressourcen, da sie den Kernel teilen, 3) Container-Images sind kleiner als VM-Images.",
    explanation: "Container-Virtualisierung ist effizienter als vollständige Virtualisierung, da der Kernel geteilt wird."
  },
  {
    question: "Was ist KVM?",
    options: [
      "Ein Container-System",
      "Eine Hypervisor-Technologie für vollständige Virtualisierung",
      "Ein Dateisystem",
      "Ein Netzwerk-Protokoll"
    ],
    correctAnswer: 1,
    explanation: "KVM (Kernel-based Virtual Machine) ist ein Hypervisor, der in den Linux-Kernel integriert ist und vollständige Virtualisierung ermöglicht."
  },
  {
    type: "text",
    question: "Was ist ein Docker-Image und wie unterscheidet es sich von einem Container?",
    acceptedAnswers: ["image", "container", "vorlage", "instanz", "template"],
    sampleAnswer: "Ein Docker-Image ist eine unveränderliche Vorlage mit Anwendung und Abhängigkeiten. Ein Container ist eine laufende Instanz eines Images.",
    explanation: "Images sind wie Klassen in der OOP, Container wie Objekte - mehrere Container können vom selben Image erstellt werden."
  },

  // Thema 4: Kernel-Module
  {
    question: "Was sind Kernel-Module?",
    options: [
      "Anwendungsprogramme",
      "Code-Teile, die dynamisch in den Kernel geladen werden können",
      "Konfigurationsdateien",
      "Benutzer-Bibliotheken"
    ],
    correctAnswer: 1,
    explanation: "Kernel-Module sind Code-Stücke, die zur Laufzeit in den Kernel geladen oder entfernt werden können, z.B. Gerätetreiber."
  },
  {
    type: "text",
    question: "Mit welchem Befehl kann man geladene Kernel-Module anzeigen?",
    acceptedAnswers: ["lsmod", "list modules"],
    sampleAnswer: "Der Befehl 'lsmod' zeigt alle aktuell geladenen Kernel-Module an.",
    explanation: "lsmod listet alle geladenen Module mit Größe und Abhängigkeiten auf."
  },
  {
    question: "Welcher Befehl lädt ein Kernel-Modul?",
    options: [
      "loadmod",
      "modprobe",
      "insmod",
      "addmod"
    ],
    correctAnswer: 1,
    explanation: "'modprobe' lädt ein Kernel-Modul und löst automatisch Abhängigkeiten auf. 'insmod' ist die Low-Level-Variante ohne Abhängigkeitsauflösung."
  },

  // Thema 5: Sicherheitskonzepte
  {
    type: "text",
    question: "Was ist der Unterschied zwischen DAC und MAC?",
    acceptedAnswers: ["dac", "mac", "discretionary", "mandatory", "zugriff"],
    sampleAnswer: "DAC (Discretionary Access Control) erlaubt Besitzern, Zugriffsrechte zu setzen. MAC (Mandatory Access Control) erzwingt systemweite Sicherheitsrichtlinien unabhängig vom Besitzer.",
    explanation: "DAC ist das Standard-Unix-Modell (chmod/chown), MAC wird von SELinux/AppArmor implementiert."
  },
  {
    question: "Was ist SELinux?",
    options: [
      "Ein Dateisystem",
      "Ein Sicherheitssystem mit Mandatory Access Control",
      "Ein Texteditor",
      "Ein Backup-Tool"
    ],
    correctAnswer: 1,
    explanation: "SELinux (Security-Enhanced Linux) ist ein Sicherheitsmodul, das MAC-Richtlinien (Mandatory Access Control) durchsetzt."
  },
  {
    question: "Welches Sicherheitssystem verwendet Ubuntu standardmäßig?",
    options: [
      "SELinux",
      "AppArmor",
      "Firewalld",
      "Keines"
    ],
    correctAnswer: 1,
    explanation: "Ubuntu verwendet standardmäßig AppArmor für MAC. Red Hat/Fedora/CentOS verwenden SELinux."
  },

  // Thema 6: Logging und Monitoring
  {
    type: "text",
    question: "Was ist der Zweck von System-Logging?",
    acceptedAnswers: ["protokoll", "fehler", "ereignis", "debug", "nachvollziehen"],
    sampleAnswer: "System-Logging protokolliert Ereignisse, Fehler und Aktivitäten für Fehlersuche, Sicherheitsaudits und Systemüberwachung.",
    explanation: "Logs sind essentiell für Troubleshooting, Sicherheit und Compliance."
  },
  {
    question: "Wo werden System-Logs typischerweise gespeichert?",
    options: [
      "/var/logs",
      "/var/log",
      "/etc/logs",
      "/usr/log"
    ],
    correctAnswer: 1,
    explanation: "System-Logs werden im Verzeichnis /var/log gespeichert, z.B. /var/log/syslog oder /var/log/auth.log."
  },
  {
    question: "Welcher Befehl zeigt die letzten Zeilen einer Log-Datei in Echtzeit an?",
    options: [
      "cat -f",
      "tail -f",
      "head -f",
      "watch"
    ],
    correctAnswer: 1,
    explanation: "'tail -f datei' zeigt die letzten Zeilen an und aktualisiert kontinuierlich bei neuen Einträgen."
  },
  {
    type: "text",
    question: "Was ist journald und wie unterscheidet es sich von traditionellem syslog?",
    acceptedAnswers: ["journald", "systemd", "binary", "strukturiert"],
    sampleAnswer: "journald ist der Logging-Dienst von systemd. Es speichert Logs in binärem, strukturiertem Format (statt Textdateien) und ermöglicht bessere Filterung und Abfragen.",
    explanation: "journald-Logs werden mit 'journalctl' abgerufen und bieten mehr Metadaten als klassische Text-Logs."
  },
  {
    question: "Mit welchem Befehl kann man systemd-Journal-Logs anzeigen?",
    options: [
      "logctl",
      "journalctl",
      "systemctl logs",
      "dmesg"
    ],
    correctAnswer: 1,
    explanation: "'journalctl' zeigt Logs aus dem systemd-Journal an, mit vielen Filteroptionen (z.B. nach Service, Zeit, Priorität)."
  }
];
