export const chapter7Topics = [
  {
    title: "Shell-Skripting (bash)",
    summary: `Shell-Skripte sind Textdateien, die Shell-Befehle enthalten und automatisch ausgefuehrt werden koennen. Sie beginnen typischerweise mit einer Shebang-Zeile (#!/bin/bash), die angibt, welcher Interpreter verwendet werden soll.

Variablen werden ohne Leerzeichen definiert: NAME=Wert. Der Zugriff erfolgt mit $NAME oder \${NAME}. Shell-Skripte unterstuetzen Kontrollstrukturen wie if-then-else, for-Schleifen, while-Schleifen und case-Anweisungen.

Funktionen koennen definiert werden, um Code wiederzuverwenden. Parameter werden als $1, $2, etc. uebergeben. Kommentare beginnen mit #.

Shell-Skripte sind maechtige Werkzeuge zur Automatisierung von Systemadministrationsaufgaben, Backups, Deployment-Prozessen und wiederkehrenden Aufgaben. Sie koennen mit chmod +x ausfuehrbar gemacht werden.`,
    keyPoints: [
      "Shebang (#!/bin/bash) definiert Interpreter",
      "Variablen: NAME=Wert, Zugriff mit $NAME",
      "Kontrollstrukturen: if, for, while, case, Funktionen",
      "Automatisierung von Systemaufgaben und Workflows"
    ]
  },
  {
    title: "Systemd und Services",
    summary: `systemd ist das moderne Init-System und Service-Manager in den meisten aktuellen Linux-Distributionen. Es startet das System, verwaltet Dienste und bietet umfangreiche Verwaltungsfunktionen.

Services werden mit systemctl gesteuert: 'systemctl start servicename' startet einen Dienst, 'systemctl stop' beendet ihn. 'systemctl restart' startet neu, 'systemctl status' zeigt den aktuellen Status an.

Der Unterschied zwischen 'start' und 'enable': start fuehrt den Service sofort aus, enable aktiviert den automatischen Start beim Systemstart. Beide koennen kombiniert werden.

Unit-Dateien in /etc/systemd/system/ oder /lib/systemd/system/ definieren Services. Sie enthalten Abschnitte wie [Unit], [Service] und [Install] mit Konfigurationsparametern. systemd bietet auch Timer (Cron-Alternative), Mounts und Sockets.`,
    keyPoints: [
      "systemd: Modernes Init-System und Service-Manager",
      "systemctl: start, stop, restart, status, enable, disable",
      "start = sofort ausführen, enable = Autostart beim Boot",
      "Unit-Dateien definieren Service-Konfiguration"
    ]
  },
  {
    title: "Virtualisierung (KVM, Docker)",
    summary: `Virtualisierung ermoeglicht es, mehrere Betriebssysteme oder Anwendungen isoliert auf einem Host-System auszufuehren. Es gibt zwei Hauptansaetze: vollstaendige Virtualisierung (VMs) und Container-Virtualisierung.

KVM (Kernel-based Virtual Machine) ist ein Hypervisor, der in den Linux-Kernel integriert ist. Er ermoeglicht vollstaendige Hardware-Virtualisierung, bei der jede VM ein komplettes Betriebssystem mit eigenem Kernel ausfuehrt. VMs sind vollstaendig isoliert, benoetigen aber mehr Ressourcen.

Docker ist eine Container-Plattform. Container teilen sich den Kernel des Host-Systems und sind daher leichtgewichtiger als VMs. Ein Docker-Image ist eine unveraenderliche Vorlage, ein Container ist eine laufende Instanz eines Images.

Container starten in Sekunden (VMs in Minuten), benoetigen weniger RAM und Speicherplatz. VMs bieten staerkere Isolation und koennen unterschiedliche Betriebssysteme auf einem Host ausfuehren.`,
    keyPoints: [
      "KVM: Hypervisor für vollständige Virtualisierung mit eigenem Kernel",
      "Docker: Container teilen Host-Kernel, leichtgewichtig und schnell",
      "Image = Vorlage, Container = laufende Instanz",
      "Container sind schneller, VMs bieten stärkere Isolation"
    ]
  },
  {
    title: "Kernel-Module",
    summary: `Kernel-Module sind Code-Stuecke, die dynamisch zur Laufzeit in den laufenden Kernel geladen oder entfernt werden koennen. Sie erweitern die Kernel-Funktionalitaet ohne Neustart oder Neukompilierung.

Typische Einsatzgebiete sind Geraetetreiber (z.B. fuer Netzwerkkarten, Grafikkarten, USB-Geraete), Dateisysteme und Netzwerkprotokolle. Module werden als .ko-Dateien (Kernel Object) gespeichert.

Wichtige Befehle: lsmod zeigt alle geladenen Module an, modprobe laedt ein Modul und loest automatisch Abhaengigkeiten auf, rmmod entfernt ein Modul. insmod ist die Low-Level-Variante ohne Abhaengigkeitsaufloesung.

Module koennen beim Systemstart automatisch geladen werden, indem sie in /etc/modules oder /etc/modules-load.d/ eingetragen werden. Konfigurationsparameter koennen in /etc/modprobe.d/ gesetzt werden.`,
    keyPoints: [
      "Kernel-Module: Dynamisch ladbare Code-Stücke (Treiber, Dateisysteme)",
      "lsmod zeigt Module, modprobe lädt mit Abhängigkeiten",
      "rmmod entfernt Module, insmod lädt ohne Abhängigkeitsauflösung",
      "Module als .ko-Dateien, konfigurierbar in /etc/modprobe.d/"
    ]
  },
  {
    title: "Sicherheitskonzepte (DAC vs. MAC)",
    summary: `Linux verwendet verschiedene Sicherheitsmodelle zur Zugriffskontrolle. Die beiden Hauptkonzepte sind DAC (Discretionary Access Control) und MAC (Mandatory Access Control).

DAC ist das Standard-Unix-Berechtigungsmodell. Der Besitzer einer Datei kann frei entscheiden, wer Zugriff erhaelt (chmod, chown). Benutzer haben diskretionaere Kontrolle ueber ihre eigenen Dateien. Dies ist flexibel, aber weniger sicher.

MAC erzwingt systemweite Sicherheitsrichtlinien unabhaengig vom Dateibesitzer. Selbst root muss sich an MAC-Regeln halten. Richtlinien werden zentral vom Administrator definiert und koennen nicht von normalen Benutzern umgangen werden.

MAC bietet stärkere Sicherheit durch das Principle of Least Privilege: Prozesse erhalten nur minimal noetige Rechte. Selbst wenn ein Dienst kompromittiert wird, sind die Schadensmöglichkeiten begrenzt. SELinux und AppArmor sind MAC-Implementierungen.`,
    keyPoints: [
      "DAC: Besitzer setzt Rechte (chmod/chown), Standard-Unix-Modell",
      "MAC: Systemweite Richtlinien, unabhängig vom Besitzer",
      "MAC bietet stärkere Sicherheit durch erzwungene Policies",
      "SELinux und AppArmor implementieren MAC in Linux"
    ]
  },
  {
    title: "SELinux und AppArmor",
    summary: `SELinux (Security-Enhanced Linux) und AppArmor sind zwei Implementierungen von Mandatory Access Control (MAC) fuer Linux. Beide erweitern das Standard-Unix-Berechtigungsmodell um zusaetzliche Sicherheitsschichten.

SELinux wurde von der NSA entwickelt und ist Standard in Red Hat, Fedora und CentOS. Es verwendet ein komplexes System von Security Contexts, Policies und Labels. SELinux-Modi: Enforcing (erzwingt Regeln), Permissive (protokolliert Verstoesse) und Disabled.

AppArmor ist einfacher zu konfigurieren und Standard in Ubuntu und SUSE. Es verwendet Pfad-basierte Policies statt Labels. Profile definieren, auf welche Dateien, Netzwerk-Ressourcen und Capabilities ein Programm zugreifen darf.

Beide Systeme schuetzen vor Zero-Day-Exploits, indem sie den Schaden begrenzen, den ein kompromittierter Prozess anrichten kann. Die Wahl haengt oft von der Distribution und der gewuenschten Komplexitaet ab.`,
    keyPoints: [
      "SELinux: Komplex, Label-basiert, Standard in Red Hat/Fedora/CentOS",
      "AppArmor: Einfacher, Pfad-basiert, Standard in Ubuntu/SUSE",
      "Beide implementieren MAC für zusätzliche Sicherheitsschicht",
      "Modi: Enforcing (erzwingen), Permissive (nur loggen), Disabled"
    ]
  },
  {
    title: "Logging und Monitoring",
    summary: `System-Logging protokolliert Ereignisse, Fehler und Aktivitaeten fuer Fehlersuche, Sicherheitsaudits und Systemueberwachung. Logs sind essentiell fuer Troubleshooting, Performance-Analyse und Compliance.

Traditionell werden Logs als Textdateien in /var/log gespeichert: /var/log/syslog fuer allgemeine Systemmeldungen, /var/log/auth.log fuer Authentifizierung, /var/log/kern.log fuer Kernel-Meldungen. Der Befehl tail -f zeigt neue Log-Eintraege in Echtzeit an.

systemd fuehrte journald ein, einen Logging-Dienst, der Logs in binaerem, strukturiertem Format speichert. journalctl zeigt diese Logs an und bietet maechtige Filteroptionen: nach Service, Zeit, Prioritaet, Boot-ID.

Monitoring-Tools wie top, htop, vmstat und iostat zeigen Systemressourcen in Echtzeit. Professionelle Loesungen wie Prometheus, Grafana und ELK-Stack (Elasticsearch, Logstash, Kibana) bieten zentrale Log-Aggregation und Visualisierung.`,
    keyPoints: [
      "Logs in /var/log (syslog, auth.log, kern.log), tail -f für Echtzeit",
      "journald: systemd-Logging in binärem Format, Abfrage mit journalctl",
      "journalctl bietet Filter nach Service, Zeit, Priorität",
      "Monitoring: top, htop, vmstat oder Prometheus/Grafana/ELK-Stack"
    ]
  }
];
