export const chapter2Quiz = [
  // Thema 1: Linux-Basisbefehle
  {
    question: "Welcher Befehl zeigt das aktuelle Arbeitsverzeichnis an?",
    options: [
      "cd",
      "pwd",
      "ls",
      "mkdir"
    ],
    correctAnswer: 1,
    explanation: "pwd (print working directory) gibt das aktuelle Arbeitsverzeichnis aus. Dies ist wichtig zu wissen, besonders vor zerstörerischen Befehlen wie rm (löschen)."
  },
  {
    question: "Was ist der Unterschied zwischen einem absoluten und einem relativen Pfad?",
    options: [
      "Absolute Pfade sind kürzer, relative Pfade sind länger",
      "Absolute Pfade beginnen mit / und enthalten den vollständigen Weg, relative Pfade sind relativ zum aktuellen Verzeichnis",
      "Absolute Pfade verwenden Backslash, relative Pfade verwenden Schrägstrich",
      "Absolute Pfade funktionieren nur unter Linux, relative Pfade unter allen Systemen"
    ],
    correctAnswer: 1,
    explanation: "Ein absoluter Pfad wie /home/studi/Daten ist unabhängig vom aktuellen Arbeitsverzeichnis, während ein relativer Pfad wie Daten/Bilder relativ zum aktuellen Verzeichnis interpretiert wird."
  },
  {
    question: "Mit welchem Befehl wechseln Sie zum Home-Verzeichnis?",
    options: [
      "cd /",
      "cd ..",
      "cd (ohne Parameter)",
      "home"
    ],
    correctAnswer: 2,
    explanation: "Wenn Sie cd ohne Parameter aufrufen, springen Sie direkt in Ihr Home-Verzeichnis (normalerweise /home/username)."
  },
  {
    type: "text",
    question: "Erklären Sie, welche Funktion die beiden Symbole '.' und '..' in Linux-Pfaden haben.",
    acceptedAnswers: ["aktuell", "übergeordnet", "parent", "current", "punkt"],
    explanation: "Ein Punkt (.) verweist auf das aktuelle Verzeichnis, zwei Punkte (..) auf das übergeordnete Verzeichnis (eine Ebene höher). Dies ermöglicht relative Navigation im Dateisystem.",
    sampleAnswer: "Ein Punkt (.) steht für das aktuelle Arbeitsverzeichnis, zwei Punkte (..) für das übergeordnete Verzeichnis (eine Ebene höher, näher zur Wurzel /)."
  },

  // Thema 2: Dateisystem-Navigation
  {
    question: "Welcher Befehl zeigt die Dateien im aktuellen Verzeichnis an?",
    options: [
      "pwd",
      "cd",
      "ls",
      "mkdir"
    ],
    correctAnswer: 2,
    explanation: "ls (list) zeigt alle Einträge (Dateien, Unterordner) im aktuellen Arbeitsverzeichnis an."
  },
  {
    question: "Was bedeutet die Option -l beim ls-Befehl?",
    options: [
      "Zeigt versteckte Dateien an (all)",
      "Zeigt Dateien im Langformat mit Zugriffsrechten, Besitzer und Datum",
      "Listet nur Dateien auf, keine Verzeichnisse",
      "Sortiert Dateien alphabetisch rückwärts"
    ],
    correctAnswer: 1,
    explanation: "ls -l zeigt für jede Datei eine komplette Zeile mit Dateityp, Zugriffsrechten, Besitzer, Gruppenzugehörigkeit, Größe, Datum und Namen."
  },
  {
    question: "Welche Option von ls zeigt versteckte Dateien (Punktdateien) an?",
    options: [
      "-h (human)",
      "-a (all)",
      "-d (directory)",
      "-F (classify)"
    ],
    correctAnswer: 1,
    explanation: "Dateien und Verzeichnisse, deren Namen mit einem Punkt (.) beginnen, sind versteckt und werden von ls standardmäßig ignoriert. Mit ls -a werden sie angezeigt."
  },
  {
    type: "text",
    question: "Für welche drei Benutzerkategorien zeigt ls -l die Zugriffsrechte an?",
    acceptedAnswers: ["owner", "group", "others", "besitzer", "gruppe", "andere"],
    explanation: "Die Zugriffsrechte werden in drei Gruppen à je drei Zeichen angezeigt: rwx für den Besitzer, gefolgt von r-- für die Gruppe, gefolgt von r-- für alle anderen.",
    sampleAnswer: "Die drei Kategorien sind: 1) der/die Dateibesitzer:in, 2) Anwender:innen der zugehörigen Gruppe, 3) sonstige Benutzer:innen."
  },

  // Thema 3: Optionen und Argumente
  {
    question: "Wie werden Optionen in Linux typischerweise eingeleitet?",
    options: [
      "Mit Schrägstrich (/)",
      "Mit Doppelpunkt (:)",
      "Mit Minuszeichen (-)",
      "Mit Gleichheitszeichen (=)"
    ],
    correctAnswer: 2,
    explanation: "Optionen werden mit Minuszeichen eingeleitet. Kurzoptionen haben ein Minuszeichen (z.B. -l), Langoptionen zwei (z.B. --lines)."
  },
  {
    question: "Was ist der Unterschied zwischen einer Kurzoption und einer Langoption?",
    options: [
      "Kurzoptionen sind schneller zu verarbeiten",
      "Kurzoptionen bestehen aus einem Minuszeichen und einem Buchstaben, Langoptionen aus zwei Minuszeichen und einem Wort",
      "Kurzoptionen funktionieren nur mit Dateien, Langoptionen mit Verzeichnissen",
      "Es gibt keinen Unterschied, es ist nur eine Schreibweise"
    ],
    correctAnswer: 1,
    explanation: "Eine Kurzoption wie -v besteht aus Minuszeichen und einem Buchstaben. Eine Langoption wie --verbose besteht aus zwei Minuszeichen und einem aussagekräftigen Wort. Mehrere Kurzoptionen können kombiniert werden (-abc statt -a -b -c)."
  },
  {
    type: "text",
    question: "Erklären Sie die Unterschiede zwischen Befehl, Argument und Option am Beispiel des tail-Befehls.",
    acceptedAnswers: ["tail", "befehl", "option", "argument", "parameter"],
    explanation: "Ein Befehl ist das Programm (tail), Optionen modifizieren das Verhalten (-v für verbose), Argumente sind die Eingaben für den Befehl oder die Option (/etc/passwd für tail, 2 für --lines).",
    sampleAnswer: "tail ist der Befehlsname, -v und --lines sind Optionen, die das Verhalten ändern (verbose Output, nur 2 Zeilen), und /etc/passwd ist das Argument für den Befehl."
  },

  // Thema 4: Wildcards und Pattern Matching
  {
    question: "Was bedeutet das Wildcard-Zeichen '*' in Linux?",
    options: [
      "Genau ein beliebiges Zeichen",
      "Beliebig viele beliebige Zeichen (auch null)",
      "Nur Ziffern",
      "Nur Buchstaben"
    ],
    correctAnswer: 1,
    explanation: "Das Sternchen (*) steht für beliebig viele Zeichen (auch null). Der Ausdruck *.txt passt z.B. auf alle Dateien, die auf .txt enden."
  },
  {
    question: "Welches Wildcard-Zeichen ersetzt genau ein Zeichen?",
    options: [
      "* (Sternchen)",
      "? (Fragezeichen)",
      "# (Raute)",
      "& (Ampersand)"
    ],
    correctAnswer: 1,
    explanation: "Das Fragezeichen (?) ersetzt genau ein beliebiges Zeichen. Mit ab?.txt werden z.B. ab1.txt und ab2.txt gefunden, nicht aber abc.txt oder ab.txt."
  },
  {
    type: "text",
    question: "Geben Sie an, auf welche Dateien die Wildcard-Muster *.txt und test?.txt passen würden.",
    acceptedAnswers: ["*.txt", "test?.txt", "datei.txt", "test1", "wildcard"],
    explanation: "Das Wildcard-Zeichen * steht für beliebig viele Zeichen, also passt *.txt auf alle Dateien mit Endung .txt. Das ? steht für genau ein Zeichen, also test?.txt passt auf test1.txt, test2.txt, testx.txt usw.",
    sampleAnswer: "*.txt passt auf: datei.txt, text.txt, readme.txt. test?.txt passt auf: test1.txt, test2.txt, testa.txt"
  },

  // Thema 5: Terminal-Nutzung
  {
    question: "Wie erstellen Sie ein neues Verzeichnis mit mkdir?",
    options: [
      "mkdir /Verzeichnisname",
      "mkdir Verzeichnisname",
      "Beides ist möglich",
      "mkdirnew Verzeichnisname"
    ],
    correctAnswer: 2,
    explanation: "Sie können mkdir mit relativen Pfaden (mkdir test) oder absoluten Pfaden (mkdir /tmp/test) aufrufen. Beide Varianten sind korrekt."
  },
  {
    question: "Mit welcher Option von mkdir können Sie eine Hierarchie von Verzeichnissen auf einmal erzeugen?",
    options: [
      "-h (help)",
      "-d (deep)",
      "-p (parents)",
      "-r (recursive)"
    ],
    correctAnswer: 2,
    explanation: "Die Option -p bewirkt, dass auch alle Zwischenverzeichnisse erzeugt werden. So erstellt mkdir -p /tmp/a/b/c/d alle notwendigen Verzeichnisse auf einmal."
  },
  {
    question: "Welcher Befehl würde die Datei test.txt im aktuellen Verzeichnis löschen?",
    options: [
      "delete test.txt",
      "rm test.txt",
      "del test.txt",
      "remove test.txt"
    ],
    correctAnswer: 1,
    explanation: "rm (remove) ist der Befehl zum Löschen von Dateien. Er führt die Löschung sofort und ohne Rückfrage durch. Unter Windows heißt der Vergleichsbefehl del oder erase."
  },
  {
    question: "Wie kopieren Sie mehrere Dateien in ein anderes Verzeichnis?",
    options: [
      "cp datei1 datei2 /zielverzeichnis/ (Ziel muss ein Verzeichnis sein)",
      "cp datei1 datei2 /zielverzeichnis/datei1 /zielverzeichnis/datei2 (Ziel muss Dateien sein)",
      "cp kann immer nur eine Datei kopieren",
      "copy datei1 datei2 /zielverzeichnis/"
    ],
    correctAnswer: 0,
    explanation: "cp kann mehrere Dateien kopieren, wenn das Ziel ein Verzeichnis ist. Geben Sie alle Quelldateien an, gefolgt vom Zielverzeichnis."
  },
  {
    type: "text",
    question: "Welcher Befehl könnte mehrere Dateitypen auf einmal verschieben/umbenennen, und welche Wildcard würden Sie verwenden, um alle .txt-Dateien zu erfassen?",
    acceptedAnswers: ["mv", "*.txt", "wildcard", "move", "verschieben"],
    explanation: "Mit mv können Sie mehrere Dateien mit Wildcards verschieben. mv *.txt /tmp/ verschiebt alle .txt-Dateien nach /tmp. Die Wildcard * steht für beliebig viele Zeichen.",
    sampleAnswer: "Der Befehl mv (move) kann mehrere Dateien verschieben, wenn das Ziel ein Verzeichnis ist. Die Wildcard *.txt erfasst alle Dateien, die auf .txt enden."
  },
  {
    type: "text",
    question: "Sie möchten ein ganzes Verzeichnis mit allen Unterverzeichnissen und Dateien löschen. Mit welchem Befehl würde das funktionieren?",
    acceptedAnswers: ["rm -r", "recursive", "remove", "löschen"],
    explanation: "Der Befehl rm mit der Option -r (rekursiv) löscht ein Verzeichnis und seinen gesamten Inhalt. Mit -rf wird zusätzlich ohne Rückfrage gelöscht (-f für force). Achtung: Das ist ein gefährlicher Befehl!",
    sampleAnswer: "Mit rm -r verzeichnisname werden das Verzeichnis und alle darin enthaltenen Dateien und Unterverzeichnisse gelöscht. Die Option -r steht für rekursiv."
  }
];
