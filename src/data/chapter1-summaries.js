export const chapter1Topics = [
  {
    title: "Computer-Typen (PCs, Server, Mobilgeräte, Embedded Devices)",
    summary: `Computer durchdringen den Alltag in vielfältigen Formen, von der Musikwiedergabe über Textverarbeitung bis hin zu medizinischen Messgeräten. Die verschiedenen Computer-Typen lassen sich nach ihrem Einsatzzweck und Aufbau kategorisieren.

Personal Computer (PCs) sind besonders sichtbar und für interaktive Nutzung durch einzelne Anwender gedacht. Ihr Kernstück ist die Hauptplatine (Mainboard), die über Sockel und Slots weitere Komponenten wie CPU, Erweiterungskarten und Hauptspeicher aufnimmt. Das Design ermöglicht flexible Konfiguration und Upgrades über mehrere Jahre. Notebooks und Laptops sind ebenfalls PCs, bieten aber weniger Flexibilität aufgrund des geringeren Platzangebots. Typische Betriebssysteme für PCs sind Windows, macOS und Linux.

Server-Computer haben prinzipiell denselben Aufbau wie PCs, sind aber für einen anderen Anwendungszweck bestimmt. Sie werden nicht interaktiv verwendet, sondern bieten Dienste über das Netzwerk an (Webserver, Datenbankserver, Datei- und Druckdienste). Da Server im Dauerbetrieb laufen, werden höhere Anforderungen an Lebenszeit und Performance gestellt. Sie verfügen oft über RAID-Verbunde für redundante Speicherung und unterstützen Hot-Swap zum Austausch von Komponenten im laufenden Betrieb.

Mobilgeräte wie Smartphones und Tablets sind auf durchgehenden Batteriebetrieb ausgelegt und müssen daher besonders sparsam sein. Sie verzichten auf Festplatten, bieten weniger Schnittstellen und setzen auf drahtlose Kommunikation (WLAN, Bluetooth). Die Bedienung erfolgt primär über Touch-Displays. Im Smartphone- und Tablet-Bereich haben sich nur zwei Betriebssysteme durchgesetzt: iOS von Apple und das Linux-basierte Android von Google.

Embedded Devices sind Geräte, die einen Computer enthalten, aber nicht wie ein Computer aussehen oder bedient werden. Beispiele sind Smart TVs, Küchenmaschinen, Heizungssteuerungen und Herzschrittmacher. Ihr Hardwareaufbau ist meist nicht durch den Benutzer veränderbar. Moderne Beispiele aus der Maker-Szene sind Raspberry Pi und Arduino.`,
    keyPoints: [
      "PCs: Flexible, modulare Systeme für individuelle Nutzer",
      "Server: Für Dauerbetrieb mit Redundanz und Fernwartung",
      "Mobilgeräte: Batteriebetrieb, Touch-Bedienung, zwei dominante OS",
      "Embedded: Computer in Alltagsgeräten, nicht erweiterbar"
    ]
  },
  {
    title: "Computer-Komponenten (Hauptplatine, Busse, Prozessor, Chipsatz)",
    summary: `Die Hauptplatine (Mainboard) ist bei PCs und Servern die zentrale Komponente, die alle übrigen Bauteile miteinander verbindet. Sie enthält zahlreiche Anschlüsse und Sockel und nimmt die CPU, den Hauptspeicher und Erweiterungskarten auf. Controller für Festplatten oder Netzwerk können als Karte eingesteckt oder als Chip direkt auf der Platine angebracht werden.

Für die Verbindung der diversen Komponenten besitzen Hauptplatinen Bussysteme. Ein Bus ist ein gemeinsames Kommunikationssystem, an das mehrere Komponenten angeschlossen sind. Der Datenbus verbindet CPU und Hauptspeicher. Moderne Erweiterungskarten unterstützen Direct Memory Access (DMA), wodurch sie unabhängig vom Prozessor auf den Hauptspeicher zugreifen können.

PCI (Peripheral Component Interconnect) ist ein wichtiges Bussystem für Erweiterungskarten, das den älteren ISA-Bus abgelöst hat. Erweiterungskarten definieren I/O-Ports für die Ansteuerung und ermöglichen verschiedene Formen der Datenübertragung: einzelne Byte-Transfers, Wiederholungsmodus für größere Datenblöcke, oder DMA-Zugriff für parallele Übertragung.

Der Prozessor (CPU) führt den Programmcode aus. Moderne CPUs unterscheiden mehrere Betriebsarten mit unterschiedlichen Zugriffsrechten - nur das Betriebssystem darf im privilegierten Modus direkt auf Hardware zugreifen. Über Interrupts kann der reguläre Programmfluss unterbrochen werden.

Der Chipsatz verbindet die CPU mit anderen Bauteilen und ist in zwei Hälften unterteilt: Die North Bridge verbindet Arbeitsspeicher und Grafikkarte mit der CPU. Die South Bridge bietet Anschlüsse für PCI-Bus, USB und BIOS-Speicher. Bei neueren Prozessoren ist die North Bridge direkt in die CPU integriert.`,
    keyPoints: [
      "Mainboard: Zentrale Verbindungsplattform aller Komponenten",
      "Busse: Kommunikationssysteme (Datenbus, Adressbus, Kontrollbus)",
      "DMA: Erweiterungskarten können direkt auf Speicher zugreifen",
      "Chipsatz: North Bridge (Speicher/GPU) und South Bridge (Peripherie)"
    ]
  },
  {
    title: "Universalrechner (von Neumann, Harvard)",
    summary: `Der Mathematiker John von Neumann beschrieb 1945 den Universalrechner EDVAC. Neu waren die Idee, Programmcode und Daten gleich zu behandeln durch Unterbringung im Hauptspeicher, und die Entscheidung für das Dualsystem statt Dezimaldarstellung.

Eine von-Neumann-Maschine muss fünf Komponenten aufweisen: Steuerwerk, Rechenwerk (ALU), Speicherwerk, Eingabewerk und Ausgabewerk. In moderner Terminologie werden Steuer- und Rechenwerk zur CPU zusammengefasst. Der Aufbau ist unabhängig vom Zweck - der Rechner ist programmierbar und universal.

Die Befehlsausführung läuft folgendermaßen ab: Der nächste Befehl wird aus dem Speicher gelesen und in einem Befehlsregister abgelegt. Der Befehl wird dekodiert und ausgeführt. Befehle gliedern sich in arithmetische/logische Befehle, Transportbefehle, Sprungbefehle, Ein-/Ausgabebefehle und sonstige Befehle.

Da von-Neumann-Maschinen nicht zwischen Daten und Code unterscheiden, ergeben sich besondere Möglichkeiten und Risiken: Ein Programm kann seinen eigenen Code lesen und modifizieren, oder Sprünge an Speicheradressen mit Daten ausführen.

Als Alternative gibt es die Harvard-Architektur, bei der Daten und Code in getrennten Speichern mit separaten Bussen untergebracht sind. Dadurch können gleichzeitig Instruktionen und Daten gelesen werden, und der Code-Speicher kann im Read-Only-Modus betrieben werden.`,
    keyPoints: [
      "Von-Neumann: Daten und Code im gemeinsamen Speicher",
      "5 Komponenten: Steuerwerk, Rechenwerk, Speicher, Ein-/Ausgabe",
      "Programmierbar und universal einsetzbar",
      "Harvard: Getrennte Speicher für Code und Daten"
    ]
  },
  {
    title: "CPU-Architekturen (RISC vs. CISC)",
    summary: `Die Befehlssatzarchitektur (ISA) umfasst vier Aspekte: Registerstruktur (CPU-interne Speicherplätze), Adressierungsarten (wie Speicher zugegriffen wird), Maschinenbefehlssatz (welche Befehle die CPU kennt), und Interruptbehandlung (wie Unterbrechungen ablaufen).

RISC steht für Reduced Instruction Set Computing mit einem kleinen, einfachen Befehlssatz. Eigenschaften: Alle Befehle haben dieselbe Länge in Maschinensprache. Die Anzahl nutzbarer Adressen ist fest, typisch genau eine. Auf Speicher kann nur über Transportbefehle zugegriffen werden. RISC-CPUs verzichten auf spezielle, selten benötigte Befehle.

CISC steht für Complex Instruction Set Computing und definiert sich als 'nicht RISC'. Eigenschaften: Befehle können sehr unterschiedliche Längen haben. Die Anzahl nutzbarer Adressen ist variabler. Es gibt arithmetische Befehle, deren Argumente Speicherinhalte sein können - solche Befehle gelten als komplex, weil sie Speicherzugriff und Berechnung kombinieren.

Assembler-Befehle sind lesbare Befehle in Textform, während Maschinen-Befehle die umgewandelte Form als Byte-Sequenz sind, die der Prozessor tatsächlich versteht. Ein Assembler-Programm wandelt Assembler-Code in Maschinensprache um.`,
    keyPoints: [
      "RISC: Einfache Befehle, alle gleiche Länge, schnelle Verarbeitung",
      "CISC: Komplexe Befehle, variable Länge, mächtigere Einzelbefehle",
      "ISA definiert: Register, Adressierung, Befehlssatz, Interrupts",
      "Assembler wandelt lesbaren Code in Maschinensprache um"
    ]
  },
  {
    title: "Aufgaben eines Betriebssystems",
    summary: `Frühe Computer führten Anwendungscode direkt aus: Nach dem Einschalten wurde Programmcode geladen und gestartet, wobei das Programm vollständige Kontrolle hatte. Dies bedeutete volle Zugriffsrechte auf Hardware ohne explizite Definition. Das Programm musste umfassende Hardware-Kenntnisse haben.

Diese klassische Vorgehensweise hatte Nachteile: Es ließ sich nur ein Programm ausführen. Jedes Programm musste Hardware-Details kennen. Fehlerhafter Code konnte Geräte beschädigen. Programme mussten sich ein eigenes Dateisystem ausdenken.

Ein Betriebssystem ist eine zusätzliche Software-Schicht zwischen Hardware und Anwendungen. Alle Aufgaben rund um Erkennen, Initialisieren, Verwalten und Nutzen der Hardware werden vom Betriebssystem übernommen. Initialisieren bedeutet, dass Komponenten nach dem Einschalten in einen definierten Zustand versetzt werden.

Das Betriebssystem bietet eine definierte Schnittstelle für Anwendungen. Anwendungen müssen sich nicht mehr mit Hardware-Eigenheiten beschäftigen, sondern nur noch die Betriebssystem-Schnittstelle kennen und nutzen.

Durch diese Abstraktion entstehen Vorteile: Programme werden einfacher und portabler. Hardware-Details werden verborgen. Mehrere Programme können sicher gleichzeitig laufen. Eine standardisierte Dateiverwaltung wird bereitgestellt.`,
    keyPoints: [
      "BS als Vermittler zwischen Hardware und Anwendungen",
      "Hardware-Initialisierung und -Verwaltung",
      "Definierte Schnittstelle für Programme",
      "Vorteile: Portabilität, Sicherheit, Multitasking, Dateiverwaltung"
    ]
  },
  {
    title: "Geschichte der Betriebssysteme",
    summary: `Frühe Computer hatten kein Betriebssystem. Nach dem Einschalten konnte ein Operator Programmcode und Daten eingeben. Wenn die Anwendung Peripheriegeräte nutzen wollte, musste sie diese direkt ansteuern. Eine Verbesserung brachten Lochkartenleser.

Erste BS-Ansätze zeigten sich beim BIOS (Basic Input/Output System) - eine Sammlung von Systemfunktionen, die aus Programmen aufrufbar waren. Diese BIOS-Funktionen lagen im ROM und ließen sich nicht überschreiben. Je mächtiger das BIOS, desto leichter wurde die Anwendungsentwicklung.

CP/M (Control Program for Microcomputers) führte ein Schichtenmodell ein: Das maschinenspezifische BIOS, das BDOS (Basic Disk Operating System) mit hardwareunabhängigen Funktionen, und Anwendungen sowie die Shell. Dies erleichterte Portierung auf neue Maschinen.

Diskettenlaufwerke ermöglichten wahlfreien Zugriff, wodurch ein Dateisystem nötig wurde. CP/M bot ein flaches Dateisystem. PC-DOS/MS-DOS führte mit FAT hierarchische Verzeichnisse ein. Unix nutzte von Anfang an ein hierarchisches Dateisystem mit einer einzigen Baumstruktur.

Multitasking erlaubt mehrere gleichzeitige Anwendungen. Kooperatives Scheduling setzte voraus, dass Programme freiwillig Kontrolle abgaben. Präemptives Scheduling nutzt Timer-Interrupts für erzwungene Prozesswechsel. Mehrbenutzer-Betrieb erlaubt Unterscheidung verschiedener Benutzer mit Zugriffsrechten und Speicherschutz.`,
    keyPoints: [
      "Evolution: Ohne BS → BIOS → CP/M → DOS → moderne Systeme",
      "Dateisysteme: Flach (CP/M) → Hierarchisch (DOS, Unix)",
      "Multitasking: Kooperativ → Präemptiv (erzwungen)",
      "Mehrbenutzer: Anmeldung, Zugriffsrechte, Speicherschutz"
    ]
  },
  {
    title: "Schichten und Abstraktion",
    summary: `Ein System ohne Schichten ermöglicht unmittelbaren Hardware-Zugriff - Programme schreiben direkt in Grafikspeicher oder senden Befehle an Controller. Dies erfordert detaillierte Hardware-Kenntnisse und macht Programme komplex und fehleranfällig.

Ein System mit Schichten sorgt für Abstraktion und Kapselung. Die oberste Schicht ist das Anwendungsprogramm. Darunter folgen Bibliotheksfunktionen mit wiederverwendbarem Code. Die nächste Schicht bilden Schnittstellenfunktionen des Betriebssystems (System Call Handler) - die einzige Möglichkeit für Programme, das BS um Hilfe zu bitten.

Weitere Schichten im Betriebssystem trennen allgemeinen von speziellem Code. Code für allgemeine Dateioperationen ist getrennt von Code für spezielle Dateisysteme (NTFS, FAT). Am Ende stehen Funktionen, die unmittelbar die Hardware ansprechen.

Dieses Schichtenmodell bietet Vorteile: Anwendungen müssen keine Hardware-Details kennen. Portierung wird einfacher - nur unterste Schichten müssen angepasst werden. Verschiedene Anwendungen nutzen einheitliche Schnittstellen. Sicherheit wird erhöht, da nur privilegierte Schichten auf Hardware zugreifen dürfen.

Die Abstraktion ermöglicht, dass ein Programm Dateien öffnen kann, ohne berücksichtigen zu müssen, ob sich die Datei auf Festplatte, USB-Stick oder DVD befindet.`,
    keyPoints: [
      "Schichtenmodell: Anwendung → Bibliothek → System Calls → BS → Hardware",
      "Abstraktion verbirgt Hardware-Komplexität",
      "Nur unterste Schicht greift direkt auf Hardware zu",
      "Vorteile: Portabilität, Einheitlichkeit, Sicherheit"
    ]
  },
  {
    title: "Lizenzmodelle (frei/proprietär, open/closed)",
    summary: `Traditionell waren Systeme unter Lizenzen erhältlich, die den Einsatz beschränkten, Änderungen verboten und Quelltext nicht verfügbar machten. Eine Ausnahme war Unix, dessen Quellcode anfangs in akademischen Kreisen zirkulierte.

Richard Stallman gründete 1983 das GNU-Projekt mit dem Ziel, ein freies Unix-System zu schaffen. Die Free Software Foundation definiert vier Freiheiten: Programm für jeden Zweck ausführen; Programm modifizieren (Quellcode-Zugang nötig); Kopien weitergeben; modifizierte Versionen verteilen.

Das Begriffspaar frei/proprietär unterscheidet sich von open/closed source. Bei frei/unfrei geht es um gesellschaftliche Aspekte und Freiheitsrechte. Bei open/closed source geht es um Quellcode-Verfügbarkeit für Überprüfungen und Anpassungen. In der Praxis sind alle freien Programme auch quelloffen.

Das GNU-Projekt plante GNU Hurd als Kernel. Da Linux als alternativer Kernel verfügbar wurde und sich schneller entwickelte, etablierte sich die Kombination der GNU-Tools mit dem Linux-Kernel (von der FSF als 'GNU/Linux' bezeichnet).

Linux dominiert den Server-Markt und in Gestalt von Android den Smartphone-Markt. Die BSD-Familie (FreeBSD, OpenBSD, NetBSD) nutzt die einfachere BSD-Lizenz. Durch verfügbare Quellen eignen sich freie Betriebssysteme besonders gut für Hochschullehre.`,
    keyPoints: [
      "Freie Software: 4 Freiheiten (nutzen, modifizieren, verteilen)",
      "Open Source: Quellcode-Verfügbarkeit für Transparenz",
      "GNU/Linux: Kombination aus GNU-Tools und Linux-Kernel",
      "Alternativen: BSD-Familie, FreeDOS, ReactOS"
    ]
  }
];
