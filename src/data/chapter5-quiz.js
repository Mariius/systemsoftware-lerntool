export const chapter5Quiz = [
  {
    question: "Was ist ein Prozess in einem Betriebssystem?",
    options: [
      "Eine Datei im Dateisystem",
      "Eine laufende Instanz eines Programms mit eigenem Speicher und Ressourcen",
      "Ein Shell-Kommando",
      "Eine Netzwerk-Verbindung"
    ],
    correctAnswer: 1,
    explanation: "Ein Prozess ist eine laufende Instanz eines Programms mit eigenem Speicherbereich, Dateideskriptoren und anderen Systemressourcen."
  },
  {
    question: "Was ist der Unterschied zwischen einem Programm und einem Prozess?",
    options: [
      "Es gibt keinen Unterschied",
      "Ein Programm ist eine statische Datei, ein Prozess ist die laufende Ausführung",
      "Ein Prozess kann nur ein Programm sein",
      "Programme laufen nur im RAM"
    ],
    correctAnswer: 1,
    explanation: "Ein Programm ist eine ausführbare Datei auf der Festplatte, ein Prozess ist die aktive Ausführung eines Programms im RAM mit eigenen Ressourcen."
  },
  {
    type: "text",
    question: "Welcher Systemaufruf erzeugt einen neuen Prozess in Unix/Linux?",
    acceptedAnswers: ["fork", "spawn"],
    sampleAnswer: "Der Systemaufruf fork() erzeugt einen neuen Prozess",
    explanation: "fork() erstellt einen Kopie-Prozess (Kind-Prozess) des aufrufenden Prozesses (Eltern-Prozess)."
  },
  {
    type: "text",
    question: "Welcher Systemaufruf führt ein neues Programm in einem Prozess aus?",
    acceptedAnswers: ["exec", "execve", "execute"],
    sampleAnswer: "Die exec-Familie von Systemaufrufen (execve, execvp, etc.)",
    explanation: "exec-Systemaufrufe ersetzen das Programm eines laufenden Prozesses durch ein anderes Programm, behalten aber die PID."
  },
  {
    question: "Was ist der Scheduler in einem Betriebssystem?",
    options: [
      "Ein Programm zum Erstellen von Zeitplänen",
      "Der Mechanismus, der entscheidet, welcher Prozess CPU-Zeit erhält",
      "Ein Dateisystem",
      "Ein Netzwerk-Dienst"
    ],
    correctAnswer: 1,
    explanation: "Der Scheduler ist die Komponente des Betriebssystems, die CPU-Zeit zwischen verschiedenen Prozessen verteilt."
  },
  {
    question: "Was ist Multitasking?",
    options: [
      "Das gleichzeitige Ausführen mehrerer Prozesse",
      "Eine Person, die mehrere Aufgaben macht",
      "Ein Dateityp",
      "Eine Netzwerk-Architektur"
    ],
    correctAnswer: 0,
    explanation: "Multitasking ermöglicht die gleichzeitige (oder scheinbar gleichzeitige durch Zeitmultiplexing) Ausführung mehrerer Prozesse auf einer CPU."
  },
  {
    type: "text",
    question: "Wie wird die Priorität eines Prozesses in Linux beeinflusst?",
    acceptedAnswers: ["nice", "priority", "priorität", "renice"],
    sampleAnswer: "Mit dem nice-Wert oder dem Befehl nice/renice",
    explanation: "Der nice-Wert bestimmt die Prozess-Priorität: negative Werte = höhere Priorität, positive Werte = niedrigere Priorität."
  },
  {
    question: "Welcher Befehl zeigt laufende Prozesse an?",
    options: [
      "ls",
      "ps",
      "cat",
      "grep"
    ],
    correctAnswer: 1,
    explanation: "ps zeigt eine Liste der aktuell laufenden Prozesse mit PID, User, CPU- und Speicherverbrauch an."
  },
  {
    type: "text",
    question: "Was ist Inter-Prozess-Kommunikation (IPC)?",
    acceptedAnswers: ["pipes", "sockets", "messages", "shared memory", "ipc"],
    sampleAnswer: "Mechanismen wie Pipes, Sockets, Message Queues oder Shared Memory zur Kommunikation zwischen Prozessen",
    explanation: "IPC ermöglicht es Prozessen, Daten auszutauschen und zu synchronisieren, z.B. über Pipes, Sockets oder Shared Memory."
  },
  {
    question: "Was ist eine Pipe (|) in der Prozess-Kommunikation?",
    options: [
      "Ein Netzwerk-Kabel",
      "Ein Mechanismus, um die Ausgabe eines Prozesses als Eingabe zu einem anderen zu verwenden",
      "Ein Dateisystem",
      "Ein Dateityp"
    ],
    correctAnswer: 1,
    explanation: "Eine Pipe verbindet zwei Prozesse, so dass die Ausgabe des einen als Eingabe des anderen dient, z.B. 'cat file | grep text'."
  },
  {
    type: "text",
    question: "Was sind Signals in Unix/Linux?",
    acceptedAnswers: ["signal", "sigterm", "sigkill", "interrupt"],
    sampleAnswer: "Asynchrone Benachrichtigungen an Prozesse zur Signalisierung von Ereignissen wie SIGTERM oder SIGKILL",
    explanation: "Signals sind Software-Interrupts, die einem Prozess mitteilen, dass etwas passiert ist (z.B. SIGTERM=Beendigung, SIGKILL=erzwungene Beendigung)."
  },
  {
    question: "Welches Signal wird verwendet, um einen Prozess sofort zu beenden?",
    options: [
      "SIGTERM",
      "SIGSTOP",
      "SIGKILL",
      "SIGCONT"
    ],
    correctAnswer: 2,
    explanation: "SIGKILL (Signal 9) beendet einen Prozess sofort, ohne ihm die Möglichkeit zu geben, aufzuräumen. SIGTERM ermöglicht eine saubere Beendigung."
  },
  {
    type: "text",
    question: "Nenne zwei Speicherverwaltungstechniken in modernen Betriebssystemen.",
    acceptedAnswers: ["paging", "segmentation", "virtual memory", "virtuell"],
    sampleAnswer: "Paging und Segmentierung (oder virtuelle Speicherverwaltung)",
    explanation: "Paging teilt den Speicher in feste Seiten, Segmentierung in variable Segmente. Beide ermöglichen virtuelle Adressierung."
  },
  {
    question: "Was ist Paging?",
    options: [
      "Eine Art von Dateiformat",
      "Ein Speicherverwaltungsverfahren mit festen Seitengröße",
      "Ein Netzwerk-Protokoll",
      "Ein Editor"
    ],
    correctAnswer: 1,
    explanation: "Paging teilt den physischen Speicher in gleichgroße Seiten (Pages) und den virtuellen Speicher in entsprechende virtuelle Seiten auf."
  },
  {
    type: "text",
    question: "Was ist virtuelle Adressierung?",
    acceptedAnswers: ["virtual address", "virtual memory", "adressierung", "mmu"],
    sampleAnswer: "Ein Mechanismus, bei dem Prozesse logische Adressen nutzen, die vom MMU in physische Adressen übersetzt werden",
    explanation: "Virtuelle Adressierung ermöglicht es, dass jeder Prozess seinen eigenen virtuellen Adressraum hat, der vom Betriebssystem auf physische Adressen gemappt wird."
  },
  {
    question: "Was ist Segmentierung im Speichermanagement?",
    options: [
      "Ein Festplatten-Format",
      "Ein Verfahren, Speicher in logische Segmente variabler Größe zu teilen",
      "Ein Komprimierungs-Algorithmus",
      "Ein Netzwerk-Tool"
    ],
    correctAnswer: 1,
    explanation: "Segmentierung teilt den Speicher in Segmente (Code, Daten, Stack, Heap) variabler Größe, die den logischen Struktur von Programmen entsprechen."
  },
  {
    type: "text",
    question: "Welcher Mechanismus verhindert, dass ein Prozess auf Speicher eines anderen Prozesses zugreift?",
    acceptedAnswers: ["memory protection", "isolation", "mmu", "virtual memory", "schutz"],
    sampleAnswer: "Die Memory Management Unit (MMU) und virtuelle Speicherverwaltung isolieren Prozesse voneinander",
    explanation: "Die MMU übersetzt virtuelle Adressen in physische und verhindert unerlaubte Speicherzugriffe durch Zugriffskontrolle."
  },
  {
    question: "Was ist ein Zombie-Prozess?",
    options: [
      "Ein infizierter Prozess",
      "Ein beendeter Prozess, dessen Eintrag noch in der Prozesstabelle existiert",
      "Ein gehackter Prozess",
      "Ein fehlerhafter Prozess"
    ],
    correctAnswer: 1,
    explanation: "Ein Zombie-Prozess ist ein beendeter Prozess, dessen Eintrag in der Prozesstabelle noch existiert, weil der Eltern-Prozess den Exit-Status nicht gelesen hat."
  },
  {
    type: "text",
    question: "Wie wird ein Zombie-Prozess aufgeräumt?",
    acceptedAnswers: ["parent", "wait", "reap", "waitpid"],
    sampleAnswer: "Wenn der Eltern-Prozess wait() aufruft, um den Exit-Status des Kind-Prozesses zu lesen",
    explanation: "Der Eltern-Prozess muss wait() oder waitpid() aufrufen, um die Ressourcen des beendeten Kind-Prozesses freizugeben."
  }
];
