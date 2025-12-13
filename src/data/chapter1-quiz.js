export const chapter1Quiz = [
  // Thema 1: Computer-Typen
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
    question: "Was ist ein Embedded Device?",
    options: [
      "Ein High-Performance Server",
      "Ein spezialisiertes Computersystem in einem größeren System",
      "Ein externer Datenspeicher",
      "Ein Netzwerkrouter"
    ],
    correctAnswer: 1,
    explanation: "Embedded Devices sind spezialisierte Computersysteme, die in größere Systeme eingebettet sind (z.B. in Autos, Waschmaschinen, Herzschrittmacher)."
  },
  {
    type: "text",
    question: "Nenne drei Unterschiede zwischen PCs und Servern.",
    acceptedAnswers: ["interaktiv", "dauerbetrieb", "raid", "hot-swap", "dienste", "netzwerk"],
    explanation: "Server: Bieten Dienste über Netzwerk an, laufen im Dauerbetrieb, haben RAID-Verbunde, unterstützen Hot-Swap. PCs: Interaktive Nutzung, für einzelne Anwender, flexible Konfiguration.",
    sampleAnswer: "1) Server werden nicht interaktiv genutzt, sondern bieten Dienste über das Netzwerk an, während PCs für interaktive Nutzung gedacht sind. 2) Server laufen im Dauerbetrieb mit höheren Anforderungen an Zuverlässigkeit, während PCs oft ein- und ausgeschaltet werden. 3) Server haben oft RAID-Verbunde für Redundanz und Hot-Swap-Fähigkeiten, was bei normalen PCs selten der Fall ist."
  },

  // Thema 2: Computer-Komponenten
  {
    question: "Was bedeutet DMA (Direct Memory Access)?",
    options: [
      "Die CPU greift direkt auf den Speicher zu",
      "Erweiterungskarten können unabhängig vom Prozessor auf den Hauptspeicher zugreifen",
      "Der Speicher wird direkt angesprochen ohne Adressbus",
      "Daten werden direkt in die Festplatte geschrieben"
    ],
    correctAnswer: 1,
    explanation: "DMA ermöglicht es Erweiterungskarten, unabhängig vom Prozessor auf den Hauptspeicher zuzugreifen, wodurch parallele Datenübertragung ohne Prozessorbeteiligung möglich wird."
  },
  {
    question: "Welche Funktion hat die North Bridge im Chipsatz?",
    options: [
      "Verbindet PCI-Bus und USB-Ports",
      "Verbindet Arbeitsspeicher und Grafikkarte mit der CPU",
      "Verwaltet das BIOS",
      "Steuert Festplatten-Controller"
    ],
    correctAnswer: 1,
    explanation: "Die North Bridge verbindet Arbeitsspeicher und Grafikkarte (GPU) mit der CPU über den Front Side Bus (FSB). Bei neueren Prozessoren ist sie direkt in die CPU integriert."
  },
  {
    type: "text",
    question: "Erkläre den Unterschied zwischen Datenbus, Adressbus und Kontrollbus.",
    acceptedAnswers: ["daten", "adresse", "kontroll", "lesen", "schreiben", "speicher"],
    explanation: "Datenbus: Überträgt die eigentlichen Daten zwischen CPU und Speicher. Adressbus: Legt fest, auf welche Speicheradresse zugegriffen wird. Kontrollbus: Gibt an, ob ein Zugriff lesend oder schreibend erfolgt.",
    sampleAnswer: "Der Datenbus überträgt die eigentlichen Daten zwischen CPU und Speicher. Der Adressbus legt fest, auf welche Speicheradresse zugegriffen wird. Der Kontrollbus gibt an, ob ein Zugriff lesend oder schreibend erfolgt und steuert den Ablauf der Operationen."
  },

  // Thema 3: Universalrechner
  {
    question: "Welche fünf Komponenten muss eine von-Neumann-Maschine aufweisen?",
    options: [
      "CPU, RAM, ROM, GPU, I/O",
      "Steuerwerk, Rechenwerk, Speicherwerk, Eingabewerk, Ausgabewerk",
      "Prozessor, Festplatte, Bildschirm, Tastatur, Maus",
      "BIOS, Bootloader, Kernel, Shell, Anwendungen"
    ],
    correctAnswer: 1,
    explanation: "Eine von-Neumann-Maschine benötigt: Steuerwerk (steuert Verarbeitung), Rechenwerk/ALU (Berechnungen), Speicherwerk (Information), Eingabewerk und Ausgabewerk."
  },
  {
    question: "Warum kann selbstmodifizierender Code ein Sicherheitsrisiko darstellen?",
    options: [
      "Er verbraucht zu viel Speicher",
      "Er ist zu langsam",
      "Schwachstellen können ausgenutzt werden, um eigenen Code einzuschleusen",
      "Er funktioniert nur auf von-Neumann-Maschinen"
    ],
    correctAnswer: 2,
    explanation: "Da von-Neumann-Maschinen nicht zwischen Daten und Code unterscheiden, können Schwachstellen ausgenutzt werden, um Code zu überschreiben oder Sprünge an Datenadressen auszuführen."
  },

  // Thema 4: CPU-Architekturen
  {
    question: "Was bedeutet RISC?",
    options: [
      "Reduced Instruction Set Computer",
      "Rich Instruction Set Computer",
      "Real-time Instruction Set Computer",
      "Random Instruction Set Computer"
    ],
    correctAnswer: 0,
    explanation: "RISC steht für Reduced Instruction Set Computer - eine CPU-Architektur mit einem reduzierten, einfachen Befehlssatz."
  },
  {
    question: "Was ist ein typisches Merkmal von CISC-Architekturen?",
    options: [
      "Alle Befehle haben dieselbe Länge",
      "Nur Transportbefehle können auf Speicher zugreifen",
      "Befehle können verschiedene Längen haben und direkt auf Speicher zugreifen",
      "Es gibt nur sehr wenige Befehle"
    ],
    correctAnswer: 2,
    explanation: "CISC (Complex Instruction Set Computing) zeichnet sich durch Befehle unterschiedlicher Länge aus und erlaubt arithmetische Befehle, die direkt auf Speicherinhalte zugreifen."
  },
  {
    type: "text",
    question: "Welche vier Aspekte umfasst die Befehlssatzarchitektur (ISA)?",
    acceptedAnswers: ["register", "adressierung", "befehl", "interrupt"],
    explanation: "Die ISA umfasst: 1) Registerstruktur (CPU-interne Speicherplätze), 2) Adressierungsarten (wie auf Speicher zugegriffen wird), 3) Maschinenbefehlssatz (welche Befehle die CPU kennt), 4) Interruptbehandlung (wie Unterbrechungen ablaufen).",
    sampleAnswer: "Die Befehlssatzarchitektur umfasst vier Aspekte: 1) Registerstruktur - die CPU-internen Speicherplätze, 2) Adressierungsarten - wie auf Speicher zugegriffen wird, 3) Maschinenbefehlssatz - welche Befehle die CPU versteht, 4) Interruptbehandlung - wie Unterbrechungen verarbeitet werden."
  },

  // Thema 5: Aufgaben eines Betriebssystems
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
    question: "Was ist der Vorteil eines Schichtenmodells im Betriebssystem?",
    options: [
      "Programme werden schneller ausgeführt",
      "Hardware-Details werden verborgen und Programme werden portabler",
      "Weniger Speicher wird benötigt",
      "Die Hardware wird günstiger"
    ],
    correctAnswer: 1,
    explanation: "Das Schichtenmodell abstrahiert Hardware-Details, macht Programme einfacher und portabler, und erhöht die Sicherheit, da nur privilegierte Schichten auf Hardware zugreifen."
  },

  // Thema 6: Geschichte der Betriebssysteme
  {
    question: "Was war die Innovation von CP/M gegenüber früheren Systemen?",
    options: [
      "Grafische Benutzeroberfläche",
      "Schichtenmodell zur leichteren Portierung auf neue Maschinen",
      "Multitasking-Fähigkeit",
      "Internet-Unterstützung"
    ],
    correctAnswer: 1,
    explanation: "CP/M führte ein Schichtenmodell ein (BIOS, BDOS, Anwendungen), das die Portierung auf neue Maschinen erleichterte, da nur das BIOS angepasst werden musste."
  },
  {
    question: "Was ist der Unterschied zwischen kooperativem und präemptivem Multitasking?",
    options: [
      "Es gibt keinen Unterschied",
      "Kooperativ: Programme geben freiwillig Kontrolle ab; Präemptiv: OS entzieht zwangsweise die CPU",
      "Präemptiv ist langsamer als kooperativ",
      "Kooperativ funktioniert nur bei Servern"
    ],
    correctAnswer: 1,
    explanation: "Kooperatives Scheduling setzt voraus, dass Programme freiwillig Kontrolle abgeben. Präemptives Scheduling nutzt Timer-Interrupts, um Prozessen zwangsweise die CPU zu entziehen."
  },
  {
    type: "text",
    question: "Warum wurden hierarchische Dateisysteme notwendig?",
    acceptedAnswers: ["groß", "festplatte", "organisation", "ordner", "verzeichnis"],
    explanation: "Mit wachsenden Speicherkapazitäten (von Disketten zu Festplatten) reichte ein flaches Dateisystem nicht mehr aus. Hierarchische Dateisysteme mit Ordnern und Unterordnern ermöglichten bessere Organisation großer Datenmengen.",
    sampleAnswer: "Frühe Systeme wie CP/M hatten flache Dateisysteme ohne Verzeichnisse, was für kleine Disketten ausreichte. Mit größeren Festplatten wurde eine hierarchische Organisation mit Ordnern und Unterordnern notwendig, um Dateien besser zu strukturieren und wiederzufinden. DOS führte daher Verzeichnisbäume ein."
  },

  // Thema 7: Schichten und Abstraktion
  {
    question: "Welche Schicht kommuniziert direkt mit der Hardware?",
    options: [
      "Anwendungsschicht",
      "Bibliotheksschicht",
      "System Call Handler",
      "Die unterste Schicht mit Hardware-spezifischen Funktionen"
    ],
    correctAnswer: 3,
    explanation: "Nur die unterste Schicht des Betriebssystems greift direkt auf die Hardware zu. Alle darüber liegenden Schichten nutzen jeweils nur Funktionen der nächsttieferen Schicht."
  },
  {
    question: "Was passiert, wenn ein Programm das Betriebssystem um Hilfe bittet (System Call)?",
    options: [
      "Das Programm wird beendet",
      "Der Prozessor wechselt in einen privilegierten Modus",
      "Die Hardware wird neu gestartet",
      "Ein neues Programm wird geladen"
    ],
    correctAnswer: 1,
    explanation: "Bei einem System Call wechselt der Prozessor in einen privilegierten Modus, wodurch Hardware-Zugriff möglich wird, der im Benutzermodus verboten ist."
  },

  // Thema 8: Lizenzmodelle
  {
    question: "Was ist der Unterschied zwischen Open Source und Freier Software?",
    options: [
      "Es gibt keinen Unterschied",
      "Open Source fokussiert auf praktische Vorteile, Freie Software auf ethische Freiheiten",
      "Freie Software ist immer kostenlos, Open Source nicht",
      "Open Source ist proprietär, Freie Software nicht"
    ],
    correctAnswer: 1,
    explanation: "Open Source betont die praktischen Vorteile offener Entwicklung, während Freie Software die ethischen Freiheiten der Nutzer (die vier Freiheiten) in den Vordergrund stellt."
  },
  {
    question: "Welche vier Freiheiten definiert die Free Software Foundation?",
    options: [
      "Kaufen, Verkaufen, Verleihen, Tauschen",
      "Ausführen, Modifizieren, Kopien weitergeben, Modifizierte Versionen verteilen",
      "Installieren, Deinstallieren, Updaten, Konfigurieren",
      "Lesen, Schreiben, Ändern, Löschen"
    ],
    correctAnswer: 1,
    explanation: "Die vier Freiheiten sind: 1) Programm für jeden Zweck ausführen, 2) Programm modifizieren (Quellcode-Zugang), 3) Kopien weitergeben, 4) Modifizierte Versionen verteilen."
  },
  {
    type: "text",
    question: "Warum wird die Kombination aus GNU-Tools und Linux-Kernel als 'GNU/Linux' bezeichnet?",
    acceptedAnswers: ["gnu", "linux", "kernel", "tools", "kombination"],
    explanation: "Das GNU-Projekt entwickelte zuerst die Anwendungen und Tools, während der Kernel (Hurd) später folgen sollte. Linux entwickelte sich als alternativer Kernel schneller. Die Kombination nutzt GNU-Tools mit dem Linux-Kernel.",
    sampleAnswer: "Die Free Software Foundation bezeichnet das System als GNU/Linux, weil es eine Kombination aus GNU-Tools (Shell, Compiler, Editoren etc.) und dem Linux-Kernel ist. Das GNU-Projekt entwickelte zuerst die Werkzeuge, während Linux den fehlenden Kernel lieferte."
  }
];
