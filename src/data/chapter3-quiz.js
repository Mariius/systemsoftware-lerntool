export const chapter3Quiz = [
  {
    question: "Welcher Editor ist der Standard-Editor von Ubuntu 24.04?",
    options: [
      "Vim",
      "Gnome Texteditor",
      "Kate",
      "nano"
    ],
    correctAnswer: 1,
    explanation: "Der Gnome Texteditor ist der Standard-Editor von Ubuntu 24.04 (seit 2022, vorher GEdit)."
  },
  {
    question: "Welcher Editor ist der Standard-Editor des KDE-Desktops?",
    options: [
      "Gnome Texteditor",
      "Vim",
      "Kate",
      "nano"
    ],
    correctAnswer: 2,
    explanation: "Kate ist der Standard-Editor des KDE-Desktops und bietet Features wie integrierten Dateimanager und Projektverwaltung."
  },
  {
    question: "Wie wechselt man in Vim aus dem Befehlsmodus in den Eingabemodus?",
    options: [
      "Mit der Taste D",
      "Mit Enter",
      "Mit den Tasten I, A, O oder Umschalt+I, Umschalt+A, Umschalt+O",
      "Mit der Taste Q"
    ],
    correctAnswer: 2,
    explanation: "Die Tasten I, A, O und ihre Umschalt-Varianten ermöglichen den Wechsel vom Befehlsmodus in den Eingabemodus an verschiedenen Positionen."
  },
  {
    type: "text",
    question: "Wie speichert man eine Datei in Vim mit Änderungen und beendet das Programm?",
    acceptedAnswers: ["wq", "write", "quit", "escape", "esc"],
    sampleAnswer: "Man drückt Esc (um sicherzugehen, dass man im Befehlsmodus ist), dann :wq und Enter. w steht für write (speichern) und q für quit (beenden).",
    explanation: "Der Befehl :wq kombiniert write (speichern) und quit (beenden). Man muss vorher mit Esc in den Befehlsmodus wechseln."
  },
  {
    question: "Was ist Secure Shell (SSH)?",
    options: [
      "Ein Antivirenprogramm",
      "Ein Tool zum sicheren Fernzugriff und zur verschlüsselten Datenübertragung",
      "Ein Dateisystem",
      "Ein Compiler"
    ],
    correctAnswer: 1,
    explanation: "SSH ist ein Softwarepaket für verschlüsselten Fernzugriff auf andere Unix/Linux-Systeme mit Tools wie ssh und scp."
  },
  {
    question: "Welches Tool wird für sichere Dateiübertragung mit SSH verwendet?",
    options: [
      "ssh",
      "telnet",
      "scp",
      "ftp"
    ],
    correctAnswer: 2,
    explanation: "scp (secure copy) ermöglicht sichere Dateiübertragung zwischen lokalen und entfernten Rechnern, auch rekursiv mit der Option -r."
  },
  {
    type: "text",
    question: "Welcher Compiler wird unter Linux für die C-Programmierung verwendet?",
    acceptedAnswers: ["gcc", "gnu compiler collection"],
    sampleAnswer: "gcc (GNU Compiler Collection) ist der Standard-C-Compiler unter Linux.",
    explanation: "gcc übersetzt C-Quellcode in Assembler-Code oder Objektdateien und ist das Standard-Compilersystem unter Linux."
  },
  {
    question: "Was ist die Funktion eines Linkers?",
    options: [
      "Quellcode in Maschinensprache zu übersetzen",
      "Mehrere Objektdateien zu einer ausführbaren Programmdatei zu kombinieren",
      "Das Betriebssystem zu laden",
      "Fehler im Quellcode zu finden"
    ],
    correctAnswer: 1,
    explanation: "Der Linker kombiniert eine oder mehrere Objektdateien (und Bibliotheken) zu einer ausführbaren Programmdatei."
  },
  {
    question: "Was ist ein Makefile?",
    options: [
      "Ein Editor für Dateien",
      "Eine Regel-Datei, die angibt, wie ein Projekt zu bauen ist",
      "Eine ausführbare Programmdatei",
      "Ein Konfigurationsdatei für SSH"
    ],
    correctAnswer: 1,
    explanation: "Ein Makefile ist eine Konfigurationsdatei (oft benannt 'Makefile' ohne Dateiendung), die Anleitungen für Build automation tools wie 'make' enthält."
  },
  {
    type: "text",
    question: "Welcher Befehl zeigt die Handbuchseite (Manpage) für ein Linux-Tool an?",
    acceptedAnswers: ["man", "manpage"],
    sampleAnswer: "Der Befehl 'man' zeigt die Dokumentation (Manpage) an, z.B. 'man ls'.",
    explanation: "Der Befehl 'man' zeigt die Dokumentation (Manpage) für Standard-Shell-Befehle an."
  },
  {
    question: "Wie beendet man die Anzeige einer Manpage?",
    options: [
      "Mit Strg+C",
      "Mit Q",
      "Mit Esc",
      "Mit x"
    ],
    correctAnswer: 1,
    explanation: "Man drückt Q (Großbuchstabe), um die Anzeige einer Manpage zu beenden."
  },
  {
    question: "Was sind reguläre Ausdrücke (RE)?",
    options: [
      "Symbole für Wildcard-Zeichen in Dateinamen",
      "Ausdruckstarke Muster für Suche und regelbasierte Automatisierungen",
      "Nur für Vim verfügbar",
      "Eine Art von Shell-Skript"
    ],
    correctAnswer: 1,
    explanation: "Reguläre Ausdrücke sind ausdrucksstarke Suchmuster, die in vielen Linux-Tools wie grep und sed verwendet werden."
  },
  {
    type: "text",
    question: "Schreibe einen regulären Ausdruck, der eine vierstellige Zahl beschreibt.",
    acceptedAnswers: ["[0-9]{4}", "\\d{4}", "zahl", "ziffer"],
    sampleAnswer: "[0-9]{4} - bedeutet: ein Zeichen aus 0-9, viermal wiederholt.",
    explanation: "[0-9] bedeutet ein Zeichen zwischen 0 und 9, {4} bedeutet diese viermal wiederholen."
  },
  {
    question: "Was bedeutet das Pipe-Zeichen | in regulären Ausdrücken?",
    options: [
      "Datei-Umleitung",
      "Logisches Oder (Alternative)",
      "Ende der Zeile",
      "Beliebiges Zeichen"
    ],
    correctAnswer: 1,
    explanation: "Das Pipe-Zeichen | bedeutet logisches Oder, z.B. (11|12) passt auf 11 oder 12."
  },
  {
    type: "text",
    question: "Wie werden Ausgaben von einem Kommando zu einem anderen Kommando weitergeleitet?",
    acceptedAnswers: ["pipe", "|", "umleitung"],
    sampleAnswer: "Durch das Pipe-Zeichen |, z.B. 'ls | grep txt'",
    explanation: "Das Pipe-Zeichen | leitet die Standard-Ausgabe eines Kommandos zur Standard-Eingabe des nächsten weiter."
  },
  {
    question: "Was ist das Ziel der Ein-/Ausgabe-Umleitung?",
    options: [
      "Den Computer schneller zu machen",
      "Daten zwischen Dateien und Programmen zu leiten",
      "Benutzer vom System abzumelden",
      "Dateien zu komprimieren"
    ],
    correctAnswer: 1,
    explanation: "Ein-/Ausgabe-Umleitung lenkt Standard-Eingabe, -Ausgabe und -Fehlerausgabe zwischen Dateien und Programmen."
  },
  {
    question: "Welches Unix-Tool wird zum Filtern von Textzeilen verwendet?",
    options: [
      "sed",
      "sort",
      "grep",
      "cut"
    ],
    correctAnswer: 2,
    explanation: "grep sucht nach Zeilen, die einem regulären Ausdruck entsprechen, und gibt diese aus."
  },
  {
    type: "text",
    question: "Nenne vier Unix-Baukasten-Tools zur Textverarbeitung.",
    acceptedAnswers: ["grep", "sed", "sort", "cut", "awk"],
    sampleAnswer: "grep, sed, sort, cut - diese sind die Haupttools des Unix-Baukastens.",
    explanation: "Die wichtigsten Baukasten-Tools sind: grep (Filtern), sed (Stream Editor), sort (Sortieren), cut (Spalten extrahieren)."
  },
  {
    question: "Was ist der Unterschied zwischen 'x' und 'X' in Vim?",
    options: [
      "Es gibt keinen Unterschied",
      "'x' löscht das Zeichen unter dem Cursor, 'X' das Zeichen links davon",
      "'x' ist für Eingabe, 'X' für Befehlsmodus",
      "'x' löscht Worte, 'X' Zeilen"
    ],
    correctAnswer: 1,
    explanation: "'x' löscht das Zeichen unter der Cursor-Position, 'X' (Backspace) löscht das Zeichen links davon."
  },
  {
    type: "text",
    question: "Erkläre den Unterschied zwischen 'dw' und 'de' in Vim.",
    acceptedAnswers: ["leerzeichen", "wort", "delete", "vim"],
    sampleAnswer: "'dw' löscht bis Wort-Ende inkl. Leerzeichen, 'de' löscht bis Wort-Ende ohne Leerzeichen.",
    explanation: "'dw' (delete word) löscht ab Cursor bis Wort-Ende mit Leerzeichen, 'de' (delete to end) nur bis Wort-Ende."
  }
];
