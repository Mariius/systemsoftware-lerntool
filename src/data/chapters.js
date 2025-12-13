import { chapter1Topics } from './chapter1-summaries';
import { chapter1Quiz } from './chapter1-quiz';
import { chapter2Quiz } from './chapter2-quiz';

export const chapters = [
  {
    id: 1,
    title: "Grundlagen Rechneraufbau, Betriebssysteme",
    description: "Computer-Typen, Komponenten, Universalrechner, CPU-Architekturen, Aufgaben von Betriebssystemen",
    topics: chapter1Topics,
    quizQuestions: chapter1Quiz
  },
  {
    id: 1,
    title: "Grundlagen Rechneraufbau, Betriebssysteme - OLD FOR REFERENCE",
    description: "Computer-Typen, Komponenten, Universalrechner, CPU-Architekturen, Aufgaben von Betriebssystemen",
    topics: chapter1Topics,
    quizQuestions_DELETE_ME: [
      {
        question: "Was ist der Hauptunterschied zwischen der von-Neumann- und der Harvard-Architektur?",
        options: [
          "Von-Neumann hat getrennten Speicher für Daten und Programme",
          "Harvard hat getrennten Speicher für Daten und Programme",
          "Von-Neumann ist nur für Embedded Systems geeignet",
          "Harvard wird nur in Smartphones verwendet"
        ],
        correctAnswer: 1,
        explanation: "Die Harvard-Architektur verwendet getrennte Speicherbereiche für Daten und Programme, während die von-Neumann-Architektur einen gemeinsamen Speicher nutzt."
      },
      {
        question: "Was bedeutet RISC?",
        options: [
          "Reduced Instruction Set Computer",
          "Rich Instruction Set Computer",
          "Real-time Instruction Set Computer",
          "Random Instruction Set Computer"
        ],
        correctAnswer: 0,
        explanation: "RISC steht für Reduced Instruction Set Computer - eine CPU-Architektur mit einem reduzierten Befehlssatz."
      },
      {
        question: "Welche ist KEINE typische Aufgabe eines Betriebssystems?",
        options: [
          "Prozessverwaltung",
          "Speicherverwaltung",
          "Dateisystemverwaltung",
          "Anwendungsprogrammierung"
        ],
        correctAnswer: 3,
        explanation: "Anwendungsprogrammierung ist keine Aufgabe des Betriebssystems, sondern der Entwickler. Das BS stellt nur die Schnittstellen bereit."
      },
      {
        question: "Was ist ein Embedded Device?",
        options: [
          "Ein High-Performance Server",
          "Ein spezialisiertes Computersystem in einem größeren System",
          "Ein externer Datenspeicher",
          "Ein Netzwerkrouter"
        ],
        correctAnswer: 1,
        explanation: "Embedded Devices sind spezialisierte Computersysteme, die in größere Systeme eingebettet sind (z.B. in Autos, Waschmaschinen)."
      },
      {
        question: "Was ist der Unterschied zwischen Open Source und Freier Software?",
        options: [
          "Es gibt keinen Unterschied",
          "Open Source fokussiert auf praktische Vorteile, Freie Software auf ethische Freiheiten",
          "Freie Software ist immer kostenlos, Open Source nicht",
          "Open Source ist proprietär, Freie Software nicht"
        ],
        correctAnswer: 1,
        explanation: "Open Source betont die praktischen Vorteile offener Entwicklung, während Freie Software die ethischen Freiheiten der Nutzer in den Vordergrund stellt."
      }
    ]
  },
  {
    id: 2,
    title: "Linux-Installation und erste Schritte",
    description: "Linux-Kernel und Distributionen, Installation, Shell-Grundlagen, elementare Befehle",
    topics: [
      "Kernel vs. Dienstprogramme",
      "Linux-Distributionen",
      "Partitionierung (MBR, GPT)",
      "Installationsroutinen",
      "Die Shell und elementare Befehle",
      "Datei- und Verzeichnisoperationen",
      "Versteckte Dateien",
      "Als Administrator arbeiten (sudo)"
    ],
    quizQuestions: chapter2Quiz
  },
  {
    id: 2,
    title: "Linux-Installation und erste Schritte - OLD FOR REFERENCE",
    description: "Linux-Kernel und Distributionen, Installation, Shell-Grundlagen, elementare Befehle",
    topics: [
      "Kernel vs. Dienstprogramme",
      "Linux-Distributionen",
      "Partitionierung (MBR, GPT)",
      "Installationsroutinen",
      "Die Shell und elementare Befehle",
      "Datei- und Verzeichnisoperationen",
      "Versteckte Dateien",
      "Als Administrator arbeiten (sudo)"
    ],
    quizQuestions_DELETE_ME: [
      {
        question: "Was ist der Linux-Kernel?",
        options: [
          "Eine grafische Benutzeroberfläche",
          "Der Kern des Betriebssystems, der Hardware verwaltet",
          "Ein Texteditor",
          "Eine Linux-Distribution"
        ],
        correctAnswer: 1,
        explanation: "Der Kernel ist das Herzstück des Betriebssystems und verwaltet Hardware-Ressourcen und System-Calls."
      },
      {
        question: "Mit welchem Befehl listet man Dateien im aktuellen Verzeichnis auf?",
        options: [
          "dir",
          "list",
          "ls",
          "show"
        ],
        correctAnswer: 2,
        explanation: "Der Befehl 'ls' (list) zeigt den Inhalt eines Verzeichnisses an."
      },
      {
        question: "Was macht der Befehl 'cd ..'?",
        options: [
          "Wechselt ins Home-Verzeichnis",
          "Wechselt ins übergeordnete Verzeichnis",
          "Erstellt ein neues Verzeichnis",
          "Löscht das aktuelle Verzeichnis"
        ],
        correctAnswer: 1,
        explanation: "'cd ..' wechselt in das übergeordnete (parent) Verzeichnis."
      },
      {
        question: "Wie heißen Dateien, die mit einem Punkt beginnen?",
        options: [
          "System-Dateien",
          "Versteckte Dateien",
          "Konfigurationsdateien",
          "Temporäre Dateien"
        ],
        correctAnswer: 1,
        explanation: "Dateien, die mit einem Punkt beginnen (z.B. .bashrc), sind versteckte Dateien und werden von 'ls' standardmäßig nicht angezeigt."
      },
      {
        question: "Was bewirkt 'sudo' vor einem Befehl?",
        options: [
          "Führt den Befehl als normaler Benutzer aus",
          "Führt den Befehl mit Administrator-Rechten aus",
          "Führt den Befehl im Hintergrund aus",
          "Führt den Befehl zweimal aus"
        ],
        correctAnswer: 1,
        explanation: "'sudo' (superuser do) ermöglicht die Ausführung von Befehlen mit Administrator-/Root-Rechten."
      }
    ]
  },
  {
    id: 3,
    title: "Ausgewählte Standard-Anwendungen",
    description: "Editoren, SSH, Software-Entwicklung, reguläre Ausdrücke, Unix-Baukasten",
    topics: [
      "Editoren (vim, nano, Kate)",
      "Secure Shell (SSH)",
      "Software-Entwicklung (gcc, make)",
      "Eingebaute Hilfe (man-Pages)",
      "Reguläre Ausdrücke",
      "Ein-/Ausgabe-Umleitung und Pipes",
      "Unix-Baukasten (grep, sed, sort, cut)"
    ],
    quizQuestions: [
      {
        question: "Mit welchem Befehl kann man sich per SSH auf einem entfernten Rechner anmelden?",
        options: [
          "ssh username@hostname",
          "login username@hostname",
          "connect username@hostname",
          "remote username@hostname"
        ],
        correctAnswer: 0,
        explanation: "Der Befehl 'ssh username@hostname' baut eine SSH-Verbindung zu einem entfernten Rechner auf."
      },
      {
        question: "Was bedeutet der Ausdruck '[0-9]+' in regulären Ausdrücken?",
        options: [
          "Genau eine Ziffer",
          "Eine oder mehrere Ziffern",
          "Null oder mehr Ziffern",
          "Genau 9 Ziffern"
        ],
        correctAnswer: 1,
        explanation: "[0-9]+ matched eine oder mehrere Ziffern. Das + bedeutet 'ein oder mehrmals'."
      },
      {
        question: "Was macht der Befehl 'grep'?",
        options: [
          "Dateien kopieren",
          "Text nach Mustern durchsuchen",
          "Dateien löschen",
          "Verzeichnisse erstellen"
        ],
        correctAnswer: 1,
        explanation: "'grep' durchsucht Text nach bestimmten Mustern (regulären Ausdrücken) und gibt passende Zeilen aus."
      },
      {
        question: "Was bewirkt das Pipe-Symbol '|' zwischen zwei Befehlen?",
        options: [
          "Führt beide Befehle parallel aus",
          "Leitet die Ausgabe des ersten Befehls als Eingabe an den zweiten weiter",
          "Führt den zweiten Befehl nur aus, wenn der erste fehlschlägt",
          "Kombiniert die Ausgaben beider Befehle"
        ],
        correctAnswer: 1,
        explanation: "Die Pipe '|' leitet die Standardausgabe des ersten Befehls als Standardeingabe an den zweiten Befehl weiter."
      },
      {
        question: "Wie öffnet man die man-Page für den Befehl 'ls'?",
        options: [
          "help ls",
          "man ls",
          "info ls",
          "doc ls"
        ],
        correctAnswer: 1,
        explanation: "'man ls' öffnet die Manual-Page (Dokumentation) für den Befehl ls."
      }
    ]
  },
  {
    id: 4,
    title: "Linux-Administration",
    description: "Benutzer und Gruppen, Zugriffsrechte, Software-Verwaltung, Netzwerk-Basics",
    topics: [
      "Benutzer und Gruppen",
      "Zugriffsrechte (chmod, chown)",
      "Software-/Paket-Verwaltung (apt, dpkg)",
      "System-Aktualisierung",
      "Snap-Pakete",
      "Netzwerk-Konfiguration"
    ],
    quizQuestions: [
      {
        question: "Was bedeuten die Rechte 'rwxr-xr--'?",
        options: [
          "Owner: lesen/schreiben/ausführen, Gruppe: lesen/ausführen, Andere: lesen",
          "Owner: lesen, Gruppe: schreiben, Andere: ausführen",
          "Alle: lesen/schreiben/ausführen",
          "Owner: ausführen, Gruppe: lesen, Andere: schreiben"
        ],
        correctAnswer: 0,
        explanation: "rwx (Owner kann lesen/schreiben/ausführen), r-x (Gruppe kann lesen/ausführen), r-- (Andere können nur lesen)."
      },
      {
        question: "Mit welchem Befehl installiert man unter Ubuntu ein Paket?",
        options: [
          "apt install paketname",
          "install paketname",
          "yum install paketname",
          "get paketname"
        ],
        correctAnswer: 0,
        explanation: "Unter Ubuntu (Debian-basiert) verwendet man 'apt install paketname' oder 'apt-get install paketname'."
      },
      {
        question: "Was macht der Befehl 'chmod 755 datei'?",
        options: [
          "Setzt Rechte auf rwxr-xr-x",
          "Setzt Rechte auf rw-r--r--",
          "Löscht alle Rechte",
          "Setzt Rechte auf rwxrwxrwx"
        ],
        correctAnswer: 0,
        explanation: "755 entspricht rwxr-xr-x: Owner hat volle Rechte (7=rwx), Gruppe und Andere haben Lese- und Ausführrechte (5=r-x)."
      },
      {
        question: "Mit welchem Befehl aktualisiert man alle installierten Pakete?",
        options: [
          "apt update && apt upgrade",
          "apt install --all",
          "apt refresh",
          "apt update-all"
        ],
        correctAnswer: 0,
        explanation: "'apt update' aktualisiert die Paketlisten, 'apt upgrade' installiert die verfügbaren Updates."
      },
      {
        question: "Was ist der Unterschied zwischen einem normalen apt-Paket und einem Snap-Paket?",
        options: [
          "Snap-Pakete sind kleiner",
          "Snap-Pakete enthalten alle Abhängigkeiten und laufen isoliert",
          "Snap-Pakete sind schneller",
          "Es gibt keinen Unterschied"
        ],
        correctAnswer: 1,
        explanation: "Snap-Pakete sind selbstständige Container mit allen Abhängigkeiten und laufen in einer isolierten Umgebung."
      }
    ]
  },
  {
    id: 5,
    title: "Prozesse",
    description: "Prozessverwaltung, Multitasking, Scheduling, Speicherverwaltung, virtuelle Adressierung",
    topics: [
      "Prozesse und Programme",
      "Prozesserzeugung (fork, exec)",
      "Multitasking und Scheduling",
      "Prozess-Prioritäten",
      "Inter-Prozess-Kommunikation (IPC)",
      "Signals",
      "Speicherverwaltung",
      "Virtuelle Adressierung",
      "Paging und Segmentierung"
    ],
    quizQuestions: [
      {
        question: "Was ist der Unterschied zwischen einem Prozess und einem Programm?",
        options: [
          "Es gibt keinen Unterschied",
          "Ein Programm ist der ausführbare Code, ein Prozess ist eine laufende Instanz davon",
          "Ein Prozess ist gespeichert, ein Programm läuft im RAM",
          "Programme können nur einmal laufen, Prozesse mehrmals"
        ],
        correctAnswer: 1,
        explanation: "Ein Programm ist statischer Code auf der Festplatte, ein Prozess ist eine laufende Instanz dieses Programms im Speicher."
      },
      {
        question: "Was macht der System-Call 'fork()'?",
        options: [
          "Beendet einen Prozess",
          "Erstellt einen neuen Child-Prozess",
          "Lädt ein neues Programm",
          "Wartet auf einen Prozess"
        ],
        correctAnswer: 1,
        explanation: "'fork()' erstellt einen neuen Child-Prozess als Kopie des aufrufenden Parent-Prozesses."
      },
      {
        question: "Was ist Preemptive Multitasking?",
        options: [
          "Prozesse geben freiwillig die CPU ab",
          "Das Betriebssystem kann Prozessen die CPU entziehen",
          "Nur ein Prozess läuft zur Zeit",
          "Prozesse laufen nacheinander"
        ],
        correctAnswer: 1,
        explanation: "Bei Preemptive Multitasking kann das OS Prozessen zwangsweise die CPU entziehen, um anderen Prozessen Rechenzeit zu geben."
      },
      {
        question: "Was ist ein Page Fault?",
        options: [
          "Ein Programmierfehler",
          "Ein Zugriff auf eine Seite, die nicht im RAM ist",
          "Ein Festplattenfehler",
          "Ein Netzwerkfehler"
        ],
        correctAnswer: 1,
        explanation: "Ein Page Fault tritt auf, wenn ein Prozess auf eine Speicherseite zugreift, die aktuell nicht im RAM ist und nachgeladen werden muss."
      },
      {
        question: "Was bedeutet 'nice' bei Prozessen?",
        options: [
          "Die Prozess-ID",
          "Die Priorität des Prozesses",
          "Der Speicherverbrauch",
          "Die Laufzeit des Prozesses"
        ],
        correctAnswer: 1,
        explanation: "Der 'nice'-Wert bestimmt die Priorität eines Prozesses. Höhere nice-Werte bedeuten niedrigere Priorität."
      }
    ]
  },
  {
    id: 6,
    title: "Dateisystem",
    description: "Dateisystem-Konzepte, Inodes, Links, Partitionierung, verschiedene Dateisysteme",
    topics: [
      "Dateisystem-Grundlagen",
      "Inodes und Datenblöcke",
      "Hard Links und Soft Links",
      "Partitionstabellen (MBR, GPT)",
      "Dateisystem-Typen (ext4, XFS, Btrfs)",
      "Mount-Konzept",
      "Journaling"
    ],
    quizQuestions: [
      {
        question: "Was ist ein Inode?",
        options: [
          "Der Dateiinhalt",
          "Eine Datenstruktur mit Metadaten über eine Datei",
          "Ein Verzeichnis",
          "Ein Dateisystem-Typ"
        ],
        correctAnswer: 1,
        explanation: "Ein Inode enthält Metadaten über eine Datei (Rechte, Owner, Größe, Zeitstempel, Zeiger auf Datenblöcke), aber nicht den Dateinamen oder Inhalt."
      },
      {
        question: "Was ist der Unterschied zwischen Hard Link und Symbolic Link?",
        options: [
          "Hard Links verweisen auf Inodes, Symbolic Links auf Pfade",
          "Hard Links verweisen auf Pfade, Symbolic Links auf Inodes",
          "Es gibt keinen Unterschied",
          "Symbolic Links funktionieren nur bei Verzeichnissen"
        ],
        correctAnswer: 0,
        explanation: "Hard Links verweisen direkt auf den Inode, Symbolic Links speichern einen Pfad zur Zieldatei."
      },
      {
        question: "Wie viele primäre Partitionen erlaubt MBR maximal?",
        options: [
          "2",
          "4",
          "8",
          "Unbegrenzt"
        ],
        correctAnswer: 1,
        explanation: "MBR (Master Boot Record) erlaubt maximal 4 primäre Partitionen. Eine davon kann als erweiterte Partition genutzt werden."
      },
      {
        question: "Was ist Journaling in einem Dateisystem?",
        options: [
          "Eine Backup-Funktion",
          "Ein Protokoll von Änderungen für bessere Crash-Recovery",
          "Eine Komprimierungstechnik",
          "Eine Verschlüsselungsmethode"
        ],
        correctAnswer: 1,
        explanation: "Journaling protokolliert geplante Änderungen bevor sie durchgeführt werden, um nach Systemabstürzen den Dateisystem-Status wiederherstellen zu können."
      },
      {
        question: "Was macht der Befehl 'mount'?",
        options: [
          "Erstellt ein neues Dateisystem",
          "Bindet ein Dateisystem in den Verzeichnisbaum ein",
          "Formatiert eine Partition",
          "Löscht eine Partition"
        ],
        correctAnswer: 1,
        explanation: "'mount' bindet ein Dateisystem (z.B. von einer Partition oder einem USB-Stick) in den bestehenden Verzeichnisbaum ein."
      }
    ]
  },
  {
    id: 7,
    title: "Zusatzthemen",
    description: "Shells und Skripting, Systemd, Virtualisierung, Kernel-Module, Sicherheit",
    topics: [
      "Shell-Skripting (bash)",
      "Systemd und Services",
      "Virtualisierung (KVM, Docker)",
      "Kernel-Module",
      "Sicherheitskonzepte",
      "SELinux und AppArmor",
      "Logging und Monitoring"
    ],
    quizQuestions: [
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
        question: "Was sind Kernel-Module?",
        options: [
          "Anwendungsprogramme",
          "Code-Teile, die dynamisch in den Kernel geladen werden können",
          "Konfigurationsdateien",
          "Benutzer-Bibliotheken"
        ],
        correctAnswer: 1,
        explanation: "Kernel-Module sind Code-Stücke (z.B. Treiber), die zur Laufzeit in den Kernel geladen oder entfernt werden können, ohne Neustart."
      }
    ]
  }
];
