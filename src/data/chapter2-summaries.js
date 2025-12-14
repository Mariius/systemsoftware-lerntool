export const chapter2Topics = [
  {
    title: "Kernel vs. Dienstprogramme",
    summary: `Der Linux-Kernel ist das Herzstueck des Betriebssystems. Er verwaltet Hardware-Ressourcen, Prozesse, Speicher und stellt grundlegende Systemfunktionen bereit. Der Kernel laeuft im privilegierten Modus und hat direkten Zugriff auf die Hardware.

Dienstprogramme (Utilities) sind Anwendungsprogramme, die auf dem Kernel aufbauen. Sie bieten Funktionen fuer Dateioperationen, Textverarbeitung, Netzwerk und Systemverwaltung. Bekannte Dienstprogramme stammen aus dem GNU-Projekt.

Die Kombination aus Linux-Kernel und GNU-Utilities wird oft als GNU/Linux bezeichnet. Der Kernel allein ist kein vollstaendiges Betriebssystem - erst mit den Utilities wird es nutzbar.

Der Kernel kommuniziert mit der Hardware ueber Treiber und bietet Anwendungen eine einheitliche Schnittstelle. Utilities nutzen System Calls, um Kernel-Funktionen aufzurufen.`,
    keyPoints: [
      "Kernel: Herzstück des OS, Hardware-Verwaltung, privilegierter Modus",
      "Utilities: Anwendungsprogramme für Benutzer, nutzen Kernel-Funktionen",
      "GNU/Linux: Kombination aus Linux-Kernel und GNU-Tools",
      "Klare Trennung zwischen Kernel-Space und User-Space"
    ]
  },
  {
    title: "Linux-Distributionen",
    summary: `Eine Linux-Distribution ist eine Zusammenstellung aus Linux-Kernel, GNU-Utilities, zusaetzlicher Software und einem Paketverwaltungssystem. Verschiedene Distributionen haben unterschiedliche Philosophien und Zielgruppen.

Debian-basierte Distributionen (Ubuntu, Linux Mint) verwenden apt/dpkg zur Paketverwaltung und sind benutzerfreundlich. Red Hat-basierte Systeme (Fedora, CentOS, RHEL) nutzen yum/dnf und sind oft in Unternehmen verbreitet.

Arch Linux richtet sich an fortgeschrittene Benutzer mit Rolling Releases. Jede Distribution hat eigene Installationsroutinen, Standardkonfigurationen und Support-Modelle.

Ubuntu ist besonders fuer Einsteiger geeignet, waehrend Arch maximale Kontrolle bietet. Debian gilt als sehr stabil und wird oft fuer Server eingesetzt.`,
    keyPoints: [
      "Distribution = Kernel + Tools + Paketverwaltung + zusätzliche Software",
      "Debian-Familie: Ubuntu, Mint (apt/dpkg)",
      "Red Hat-Familie: Fedora, RHEL, CentOS (yum/dnf)",
      "Unterschiede in Philosophie, Zielgruppe und Release-Modell"
    ]
  },
  {
    title: "Partitionierung (MBR, GPT)",
    summary: `Festplatten muessen partitioniert werden, um Betriebssysteme installieren zu koennen. Es gibt zwei Hauptstandards: MBR (Master Boot Record) und GPT (GUID Partition Table).

MBR ist der aeltere Standard mit Einschraenkungen: maximal 4 primaere Partitionen, maximale Festplattengroesse 2 TB, anfaellig fuer Beschaedigungen. Eine primaere Partition kann als erweiterte Partition genutzt werden, um logische Partitionen zu erstellen.

GPT ist moderner und bietet bis zu 128 Partitionen, unterstuetzt Festplatten ueber 2 TB und speichert redundante Kopien der Partitionstabelle. GPT ist fuer UEFI-Systeme erforderlich.

Bei der Installation sollte GPT bevorzugt werden, es sei denn, aeltere Hardware erfordert MBR. Wichtige Partitionen sind: Root (/), Home (/home), Swap und optional Boot (/boot).`,
    keyPoints: [
      "MBR: Älter, max. 4 primäre Partitionen, max. 2 TB, BIOS-kompatibel",
      "GPT: Modern, 128 Partitionen, >2 TB, UEFI-erforderlich, redundant",
      "Partitionierung notwendig für Betriebssystem-Installation",
      "GPT ist die empfohlene Wahl für neue Systeme"
    ]
  },
  {
    title: "Installationsroutinen",
    summary: `Linux-Installationen laufen typischerweise ueber grafische oder textbasierte Installer. Der Prozess umfasst: Bootmedium erstellen, von USB/DVD booten, Sprache/Zeitzone waehlen, Partitionierung durchfuehren, Pakete auswaehlen und Bootloader installieren.

Ubuntu bietet einen benutzerfreundlichen grafischen Installer, der automatische Partitionierung unterstuetzt. Debian verwendet einen textbasierten Installer mit mehr Konfigurationsmoeglichkeiten.

Wichtige Schritte sind: Auswahl der Installationssprache, Netzwerkkonfiguration, Partitionsschema festlegen, Root-Passwort setzen, Benutzerkonto anlegen und Software-Auswahl treffen.

Live-Systeme ermoeglichen das Testen von Linux vor der Installation. Der Bootloader (GRUB) wird typischerweise in den MBR oder die EFI-Partition installiert.`,
    keyPoints: [
      "Installation: Bootmedium > Booten > Konfiguration > Installation",
      "Grafische Installer (Ubuntu) vs. textbasierte (Debian, Arch)",
      "Wichtig: Partitionierung, Netzwerk, Benutzer, Bootloader",
      "Live-Systeme ermöglichen Test vor Installation"
    ]
  },
  {
    title: "Die Shell und elementare Befehle",
    summary: `Die Shell ist die Kommandozeilenschnittstelle zu Linux. Bash (Bourne Again Shell) ist die Standard-Shell in den meisten Distributionen. Sie interpretiert Befehle und fuehrt Programme aus.

Elementare Befehle: pwd zeigt das aktuelle Verzeichnis, cd wechselt Verzeichnisse, ls listet Dateien auf. Diese Befehle bilden die Grundlage der Dateisystem-Navigation.

Die Shell bietet Tab-Vervollstaendigung, Befehlshistorie (Pfeiltasten), Wildcards und Pipes. Der Prompt zeigt typischerweise Benutzername, Hostname und aktuelles Verzeichnis.

Wichtige Konzepte: Absolute Pfade beginnen mit /, relative Pfade sind relativ zum aktuellen Verzeichnis. Der Punkt (.) steht fuer aktuelles Verzeichnis, zwei Punkte (..) fuer das uebergeordnete.`,
    keyPoints: [
      "Shell: Kommandozeilen-Interface, Bash ist Standard",
      "Grundbefehle: pwd, cd, ls für Navigation",
      "Features: Tab-Completion, History, Wildcards, Pipes",
      "Prompt zeigt Kontext (User, Host, Verzeichnis)"
    ]
  },
  {
    title: "Datei- und Verzeichnisoperationen",
    summary: `Linux bietet umfangreiche Befehle fuer Datei- und Verzeichnisoperationen. mkdir erstellt Verzeichnisse, rm loescht Dateien, cp kopiert und mv verschiebt oder benennt um.

Wichtige Optionen: mkdir -p erstellt Verzeichnishierarchien, rm -r loescht rekursiv, cp -r kopiert Verzeichnisse. mv kann sowohl verschieben als auch umbenennen.

Sicherheit: rm loescht unwiderruflich ohne Papierkorb. Bei rm -rf ist besondere Vorsicht geboten. Wildcards ermöglichen Operationen auf mehreren Dateien gleichzeitig.

touch erstellt leere Dateien oder aktualisiert Zeitstempel. cat zeigt Dateiinhalte an, less ermoeglicht seitenweises Blaettern. Die Befehle head und tail zeigen Anfang oder Ende einer Datei.`,
    keyPoints: [
      "mkdir: Verzeichnisse erstellen (-p für Hierarchien)",
      "rm: Dateien löschen (-r rekursiv, unwiderruflich!)",
      "cp: Kopieren (-r für Verzeichnisse)",
      "mv: Verschieben und Umbenennen"
    ]
  },
  {
    title: "Versteckte Dateien",
    summary: `Unter Linux sind Dateien und Verzeichnisse, deren Namen mit einem Punkt beginnen, versteckt. Beispiele: .bashrc, .ssh, .config

Versteckte Dateien werden von ls standardmaessig nicht angezeigt. Mit ls -a (all) werden sie sichtbar. Sie dienen typischerweise zur Konfiguration und sollten nicht versehentlich geloescht werden.

Das Home-Verzeichnis enthaelt viele versteckte Konfigurationsdateien fuer Programme und die Shell. .bashrc steuert das Verhalten der Bash-Shell, .profile wird beim Login ausgefuehrt.

Wichtige versteckte Verzeichnisse: .ssh enthaelt SSH-Schluessel, .config speichert Anwendungskonfigurationen, .cache enthaelt temporaere Daten.`,
    keyPoints: [
      "Versteckte Dateien beginnen mit Punkt (.bashrc, .ssh)",
      "ls -a zeigt versteckte Dateien an",
      "Typisch für Konfigurationsdateien im Home-Verzeichnis",
      "Vorsicht beim Löschen - oft systemrelevant"
    ]
  },
  {
    title: "Als Administrator arbeiten (sudo)",
    summary: `Linux unterscheidet zwischen normalem Benutzer und root (Administrator). Root hat uneingeschraenkte Systemrechte und kann das System beschaedigen.

sudo (superuser do) ermoeglicht die Ausfuehrung einzelner Befehle mit root-Rechten. Der Benutzer muss in der sudoers-Datei eingetragen sein. sudo fragt nach dem eigenen Passwort, nicht dem root-Passwort.

Best Practice: Immer als normaler Benutzer arbeiten und sudo nur bei Bedarf verwenden. Niemals sudo vor unbekannten Befehlen ausfuehren.

sudo -i oeffnet eine root-Shell (mit Vorsicht zu geniessen). su wechselt zu einem anderen Benutzer. Ubuntu deaktiviert standardmaessig das root-Konto und setzt auf sudo.`,
    keyPoints: [
      "root: Administrator mit allen Rechten (UID 0)",
      "sudo: Einzelne Befehle mit root-Rechten ausführen",
      "sudo fragt nach eigenem Passwort, nicht root-Passwort",
      "Best Practice: Minimal nötiger Einsatz von sudo"
    ]
  }
];
