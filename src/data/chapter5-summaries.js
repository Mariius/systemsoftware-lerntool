export const chapter5Topics = [
  {
    title: "Prozesse und Programme",
    summary: `Ein Programm ist statischer Code auf der Festplatte, während ein Prozess eine laufende Instanz dieses Programms im Speicher ist. Diese Unterscheidung ist fundamental für das Verständnis von Betriebssystemen.

Programm vs. Prozess:

Programm:
- Ausführbare Datei auf dem Datenträger
- Statischer Maschinencode und Daten
- Passiv, führt keine Aktionen aus
- Ein Programm kann mehrfach gestartet werden

Prozess:
- Laufende Instanz eines Programms
- Aktiv, wird vom Prozessor ausgeführt
- Hat eigenen Speicherbereich
- Besitzt Systemressourcen (Dateien, Netzwerkverbindungen)
- Wird vom Betriebssystem verwaltet

Ein Programm kann mehrere Prozesse erzeugen (z.B. mehrere Firefox-Fenster = mehrere Prozesse).

Prozess-Eigenschaften:

Jeder Prozess hat:
- PID (Process ID): Eindeutige Nummer
- PPID (Parent Process ID): PID des Elternprozesses
- UID/GID: Benutzer und Gruppe
- Priorität: Scheduling-Gewichtung
- Status: Running, Sleeping, Stopped, Zombie
- Speicherbereich: Code, Daten, Stack, Heap
- Offene Dateien und Netzwerkverbindungen
- Umgebungsvariablen
- Arbeitsverzeichnis (Current Working Directory)

Prozess-Hierarchie:

Linux-Prozesse bilden eine Baumstruktur:
- init/systemd (PID 1): Wurzel aller Prozesse
- Jeder Prozess (außer init) hat einen Elternprozess
- Parent-Child-Beziehung vererbt Eigenschaften

Verwaiste Prozesse (deren Parent beendet wurde) werden von init adoptiert.

Prozess-Status:

R (Running): Prozess läuft oder ist bereit
- Aktiv auf CPU oder in Run-Queue

S (Sleeping): Interruptible Sleep
- Wartet auf Ereignis (I/O, Netzwerk)
- Kann durch Signal unterbrochen werden

D (Uninterruptible Sleep):
- Wartet auf kritische Operation (meist Festplatten-I/O)
- Kann nicht unterbrochen werden

T (Stopped): Angehalten
- Durch Signal SIGSTOP oder Debug

Z (Zombie): Beendet, aber nicht aufgeräumt
- Prozess ist fertig, aber Parent hat Status nicht abgeholt
- Verbraucht nur PID-Eintrag, keine anderen Ressourcen

Prozesse anzeigen:

ps (Process Status):
- ps: Eigene Prozesse
- ps aux: Alle Prozesse, detailliert
  - a: Alle Benutzer
  - u: Benutzer-orientiertes Format
  - x: Auch Prozesse ohne Terminal
- ps -ef: Alternative Darstellung
- ps -eo pid,ppid,cmd,%mem,%cpu --sort=-%cpu: Benutzerdefiniert

Spalten in ps aux:

USER  PID  %CPU  %MEM  VSZ   RSS   TTY  STAT START TIME COMMAND
john  1234 2.5   1.0   45000 12000 pts/0 S   10:30 0:05 firefox


- VSZ: Virtual Memory Size (virtueller Speicher)
- RSS: Resident Set Size (tatsächlich im RAM)
- TTY: Terminal (? = kein Terminal)
- STAT: Status (R, S, D, T, Z)

pstree: Zeigt Prozessbaum:

pstree -p         # Mit PIDs
pstree -u john    # Für Benutzer john


top/htop: Dynamische Prozessübersicht:

top:
- Echtzeit-Aktualisierung der Prozessliste
- CPU- und Speicherauslastung
- Interaktiv: k (kill), r (renice), q (quit)
- Sortierung: P (CPU), M (Memory), T (Time)

htop (falls installiert):
- Farben, Maussteuerung
- Prozessbaum (F5)
- Suchen (F3), Filtern (F4)
- Kill (F9), Nice (F7/F8)

Prozesse beeinflussen:

Prozesse beenden:

kill: Sendet Signal an Prozess
- kill PID: SIGTERM (15) - höfliche Anfrage zu beenden
- kill -9 PID: SIGKILL (9) - erzwungenes Beenden
- kill -STOP PID: Prozess anhalten
- kill -CONT PID: Fortsetzen

killall: Nach Programmname
- killall firefox: Alle Firefox-Prozesse
- killall -9 firefox: Erzwungen

pkill: Nach Muster
- pkill -f "python.*script.py": Mustersuche

Priorität ändern (nice/renice):

nice: Startet Programm mit Priorität
- nice -n 10 befehl: Niedrigere Priorität (+10)
- nice -n -10 befehl: Höhere Priorität (-10, benötigt root)

Nice-Werte: -20 (höchste) bis +19 (niedrigste), Standard: 0

renice: Ändert Priorität laufender Prozesse
- renice 10 -p PID: Setzt nice auf 10
- renice -5 -u john: Für alle Prozesse von john

Hintergrund und Vordergrund:

Jobs: Shell-Konzept für Prozessgruppen

Hintergrund starten:
- befehl &: Startet im Hintergrund
- Gibt Shell frei für weitere Eingaben

Steuerung:
- jobs: Zeigt laufende Jobs
- fg %jobnr: Bringt Job in Vordergrund (foreground)
- bg %jobnr: Setzt Job im Hintergrund fort (background)
- Strg+Z: Stoppt Vordergrund-Job
- disown: Job von Shell lösen
- nohup befehl &: Läuft weiter nach Shell-Beendigung

Beispiel-Workflow:

# Prozess starten
find / -name "*.log" > results.txt &

# Anzeigen
jobs
# [1]+ Running   find / -name "*.log" > results.txt &

# Anderen Prozess starten und stoppen
vim dokument.txt
# Strg+Z drücken
# [2]+ Stopped   vim dokument.txt

# Jobs anzeigen
jobs
# [1]- Running   find / -name "*.log" > results.txt &
# [2]+ Stopped   vim dokument.txt

# vim fortsetzen
fg %2


/proc-Dateisystem:

Virtuelle Dateien mit Prozessinformationen:
- /proc/PID/: Verzeichnis für jeden Prozess
- /proc/PID/status: Status und Details
- /proc/PID/cmdline: Kommandozeile
- /proc/PID/environ: Umgebungsvariablen
- /proc/PID/fd/: Offene Dateien
- /proc/PID/maps: Speicher-Mapping

System-weite Informationen:
- /proc/cpuinfo: CPU-Details
- /proc/meminfo: Speicher-Statistiken
- /proc/uptime: Systemlaufzeit

Beispiel:

cat /proc/1234/status
ls -l /proc/1234/fd
`,
    keyPoints: [
      "Programm: Statische Datei; Prozess: Laufende Instanz im Speicher",
      "Prozess-Eigenschaften: PID, PPID, UID/GID, Status, Priorität",
      "Anzeigen: ps aux, top, htop, pstree",
      "Beenden: kill (15=TERM, 9=KILL), Priorität: nice/renice"
    ]
  },
  {
    title: "Prozesserzeugung (fork, exec)",
    summary: `Unter Unix/Linux werden neue Prozesse durch die Systemaufrufe fork() und exec() erzeugt. Dieses Konzept ist fundamental für das Verständnis der Prozessverwaltung.

fork() - Prozess duplizieren:

fork() erstellt eine exakte Kopie des aufrufenden Prozesses:

Funktionsweise:
- Parent-Prozess ruft fork() auf
- Kernel erstellt Child-Prozess als Kopie
- Child erhält eigene PID, aber gleiche PPID (Parent-PID)
- Beide Prozesse laufen ab fork() weiter

Rückgabewert entscheidet, wer was tut:
- Im Parent: fork() gibt PID des Child zurück
- Im Child: fork() gibt 0 zurück
- Bei Fehler: fork() gibt -1 zurück

Beispiel in C:

#include <stdio.h>
#include <unistd.h>

int main() {
    pid_t pid = fork();

    if (pid < 0) {
        // Fehler
        perror("fork failed");
        return 1;
    } else if (pid == 0) {
        // Child-Prozess
        printf("Child: PID=%d, PPID=%d\\n", getpid(), getppid());
    } else {
        // Parent-Prozess
        printf("Parent: PID=%d, Child-PID=%d\\n", getpid(), pid);
    }

    return 0;
}


Was wird kopiert:
- Programm-Code (shared, Copy-on-Write)
- Daten, Stack, Heap (zunächst shared, dann COW)
- Offene Dateien (File Descriptors)
- Umgebungsvariablen
- Arbeitsverzeichnis

Was ist unterschiedlich:
- PID (eigene neue PID)
- PPID (zeigt auf Parent)
- Locks (nicht geerbt)
- Pending Signals (leer)

Copy-on-Write (COW):
Moderne Systeme kopieren Speicher nicht sofort, sondern erst bei Schreibzugriff. Spart Ressourcen, wenn Child sofort exec() aufruft.

exec-Familie - Programm laden:

exec() ersetzt den aktuellen Prozess durch ein neues Programm:

Funktionsweise:
- Behält PID, PPID, offene Dateien
- Lädt neuen Code
- Ersetzt Speicherinhalt komplett
- Springt zum Einstiegspunkt des neuen Programms

exec-Varianten (alle ersetzen aktuellen Prozess):

execl(path, arg0, arg1, ..., NULL):
- l: List - Argumente als Liste
- Absoluter Pfad erforderlich

execl("/bin/ls", "ls", "-l", "/tmp", NULL);


execv(path, argv[]):
- v: Vector - Argumente als Array

char *args[] = {"ls", "-l", "/tmp", NULL};
execv("/bin/ls", args);


execlp(file, arg0, arg1, ..., NULL):
- p: Path - Sucht in $PATH

execlp("ls", "ls", "-l", "/tmp", NULL);


execvp(file, argv[]):
- Kombiniert v und p

char *args[] = {"ls", "-l", "/tmp", NULL};
execvp("ls", args);


execle(path, arg0, ..., NULL, envp[]):
- e: Environment - Eigene Umgebungsvariablen

char *env[] = {"PATH=/bin", NULL};
execle("/bin/ls", "ls", "-l", NULL, env);


Fork + Exec Pattern:

Typisches Muster für neues Programm:


pid_t pid = fork();

if (pid == 0) {
    // Child: Neues Programm laden
    execl("/bin/ls", "ls", "-l", NULL);

    // Nur bei Fehler erreicht
    perror("exec failed");
    exit(1);
} else if (pid > 0) {
    // Parent: Auf Child warten
    int status;
    wait(&status);
    printf("Child beendet mit Status %d\\n", WEXITSTATUS(status));
} else {
    perror("fork failed");
}


wait() - Auf Child warten:

Parent sollte auf Child-Beendigung warten:

wait(&status):
- Blockiert, bis ein Child beendet
- status enthält Exit-Code
- Verhindert Zombie-Prozesse

waitpid(pid, &status, options):
- Wartet auf spezifisches Child
- WNOHANG: Nicht blockieren

Zombie-Prozesse:

Entstehung:
- Child beendet, aber Parent ruft wait() nicht auf
- Prozess bleibt als Zombie (Status Z)
- Verbraucht nur PID-Eintrag, keine anderen Ressourcen

Verhinderung:
- Parent muss wait() aufrufen
- Oder: Child von init adoptieren lassen (Parent beenden)
- Oder: Signal-Handler für SIGCHLD


#include <signal.h>

void sigchld_handler(int sig) {
    // Zombie aufräumen
    while (waitpid(-1, NULL, WNOHANG) > 0);
}

signal(SIGCHLD, sigchld_handler);


Praktische Anwendung:

Shell-Befehl ausführen:


#include <unistd.h>
#include <sys/wait.h>

int run_command(char *command, char **args) {
    pid_t pid = fork();

    if (pid == 0) {
        execvp(command, args);
        perror("exec failed");
        exit(1);
    } else if (pid > 0) {
        int status;
        waitpid(pid, &status, 0);
        return WEXITSTATUS(status);
    } else {
        return -1;
    }
}

// Verwendung
char *args[] = {"ls", "-l", "/tmp", NULL};
int exit_code = run_command("ls", args);


Daemon-Prozess erstellen:


// Doppeltes fork() für echten Daemon
pid_t pid = fork();
if (pid > 0) exit(0);  // Parent beenden

setsid();  // Neue Session

pid = fork();
if (pid > 0) exit(0);  // Intermediate beenden

// Jetzt echter Daemon (kein Terminal, kein Parent außer init)
chdir("/");
umask(0);
// Dateien schließen, Daemon-Arbeit...


system() - Vereinfachung:

system(command):
- Kombiniert fork, exec, wait
- Führt Command über Shell aus
- Praktisch, aber Sicherheitsrisiko (Shell-Injection)


system("ls -l /tmp");
// Äquivalent zu:
// fork() + execl("/bin/sh", "sh", "-c", "ls -l /tmp", NULL) + wait()


Sicherheit:
- Vorsicht mit Benutzereingaben
- exec*() bevorzugen statt system()
 - Keine Shell-Metazeichen erlauben`,
    keyPoints: [
      "fork(): Dupliziert Prozess, gibt 0 im Child, PID im Parent zurück",
      "exec(): Ersetzt aktuellen Prozess durch neues Programm",
      "Fork+Exec-Pattern: Standard für neues Programm starten",
      "wait(): Parent wartet auf Child, verhindert Zombies"
    ]
  },
  {
    title: "Multitasking und Scheduling",
    summary: `Multitasking ermöglicht die gleichzeitige Ausführung mehrerer Programme. Der Scheduler entscheidet, welcher Prozess wann die CPU nutzt.

Multitasking-Konzepte:

Kooperatives Multitasking (veraltet):
- Prozesse geben CPU freiwillig ab
- Ein hängender Prozess blockiert das ganze System
- Beispiele: Windows 3.x, Classic Mac OS

Präemptives Multitasking (modern):
- Betriebssystem kann Prozessen CPU entziehen
- Timer-Interrupt erzwingt Prozesswechsel
- Prozess kann nicht System blockieren
- Alle modernen OS (Linux, Windows NT+, macOS)

Time Slicing:
- CPU-Zeit wird in kleine Zeitscheiben aufgeteilt (Quantum)
- Jeder Prozess erhält abwechselnd ein Quantum
- Typisch: 1-100 Millisekunden

Prozess-Zustände im Scheduling:

Running: Prozess läuft aktuell auf CPU
Ready: Prozess ist bereit, wartet auf CPU
Blocked/Waiting: Wartet auf Ereignis (I/O, Lock)

Zustandsübergänge:
- Ready → Running: Scheduler wählt Prozess (Dispatch)
- Running → Ready: Zeitscheibe abgelaufen (Preemption)
- Running → Blocked: Wartet auf I/O
- Blocked → Ready: I/O abgeschlossen

Der Scheduler:

Scheduling ist die Entscheidung, welcher Prozess als nächstes läuft.

Ziele:
- Fairness: Alle Prozesse erhalten CPU-Zeit
- Effizienz: CPU-Auslastung maximieren
- Antwortzeit: Interaktive Prozesse schnell reagieren
- Durchsatz: Viele Prozesse in kurzer Zeit
- Vorhersagbarkeit: Echtzeit-Garantien (bei RTOS)

Oft Konflikt zwischen Zielen (z.B. Durchsatz vs. Antwortzeit).

Scheduling-Algorithmen:

First-Come, First-Served (FCFS):
- Einfachste Variante: Warteschlange
- Prozess läuft bis Beendigung oder Blockierung
- Problem: Kurze Prozesse warten auf lange (Convoy Effect)

Shortest Job First (SJF):
- Kürzester Prozess zuerst
- Optimal für durchschnittliche Wartezeit
- Problem: Lange Prozesse können verhungern
- Laufzeit meist unbekannt

Round-Robin (RR):
- Time Slicing mit fester Zeitscheibe
- Prozesse in kreisförmiger Queue
- Nach Quantum: An Ende der Queue
- Fair, aber nicht optimal für verschiedene Prozesstypen

Priority Scheduling:
- Jeder Prozess hat Priorität
- Höchste Priorität zuerst
- Problem: Verhungern niedrig priorisierter Prozesse
- Lösung: Priority Aging (Priorität steigt mit Wartezeit)

Multi-Level Feedback Queue (MLFQ):
- Mehrere Queues mit verschiedenen Prioritäten
- Prozess startet in höchster Queue
- Nach Quantum: In niedrigere Queue
- I/O-intensive Prozesse bleiben oben (kurze Bursts)
- CPU-intensive sinken ab
- Dynamische Anpassung an Prozessverhalten

Completely Fair Scheduler (CFS) - Linux:

Linux verwendet CFS seit Kernel 2.6.23:

Konzept:
- Jeder Prozess erhält faire CPU-Zeit proportional zu Priorität
- Keine festen Queues oder Zeitscheiben
- Virtueller Laufzeit-Tracker (vruntime)

Funktionsweise:
- Prozess mit niedrigster vruntime läuft
- vruntime steigt während Ausführung
- Red-Black-Tree für effiziente Suche (O(log n))

Berücksichtigt:
- Nice-Werte (-20 bis +19)
- Anzahl laufender Prozesse
- Interaktivität

Prioritäten und Nice:

Nice-Werte:
- -20: Höchste Priorität (nur root)
- 0: Normale Priorität
- +19: Niedrigste Priorität

Einfluss auf CPU-Zeit:
- Niedrigerer Nice = mehr CPU-Zeit
- Verhältnis nicht linear
- nice -10 bekommt ~10x mehr CPU als nice +10

Setzen:

# Bei Start
nice -n 10 ./programm

# Laufenden Prozess
renice 5 -p 1234


Echtzeit-Scheduling (Real-Time):

SCHED_FIFO (First-In, First-Out):
- Prozess läuft bis er blockiert oder höher priorisierter kommt
- Keine Zeitscheiben
- Nur für Echtzeit-Prozesse (benötigt Privilegien)

SCHED_RR (Round-Robin):
- Wie FIFO, aber mit Zeitscheiben
- Zwischen gleich priorisierten Prozessen

SCHED_DEADLINE:
- Garantierte Ausführung vor Deadline
- Für harte Echtzeit-Anforderungen

Echtzeit-Prioritäten: 1-99 (höher als normale Prozesse)

Priorisierung:

# Echtzeit-Priorität setzen (benötigt CAP_SYS_NICE)
chrt -f 50 ./rt-programm  # FIFO mit Priorität 50
chrt -r 50 ./rt-programm  # RR mit Priorität 50


CPU-Affinität:

Prozess an bestimmte CPU-Kerne binden:


# Anzeigen
taskset -cp 1234

# Setzen (Kerne 0 und 2)
taskset -cp 0,2 1234

# Bei Start
taskset -c 0,2 ./programm


Vorteile:
- Cache-Locality verbessert
- Vorhersagbare Performance
- Vermeidet CPU-Migration

Nachteile:
- Kann Load-Balancing stören
- Weniger flexibel

Scheduling-Klassen in Linux:

0-99: Echtzeit (SCHED_FIFO, SCHED_RR)
100-139: Normal (SCHED_OTHER/SCHED_NORMAL)
- Entspricht Nice -20 bis +19
- Default: 120 (Nice 0)

Scheduler-Statistiken:


# Pro Prozess
cat /proc/PID/sched

# System-weit
cat /proc/schedstat


Context Switch:

Prozesswechsel (Context Switch) ist teuer:

Ablauf:
1. Aktuellen Prozesszustand sichern (Register, PC, SP)
2. Neuen Prozess auswählen (Scheduling)
3. Neuen Prozesszustand laden
4. TLB/Cache oft ungültig → Performance-Einbuße

Statistiken:

vmstat 1  # Spalte "cs" zeigt Context Switches pro Sekunde
`,
    keyPoints: [
      "Präemptives Multitasking: OS kann CPU entziehen (Timer-Interrupt)",
      "Scheduler: Entscheidet, wer läuft (Ziele: Fair, effizient, responsiv)",
      "Linux CFS: Fair Scheduling mit vruntime, Red-Black-Tree",
      "Nice -20 bis +19: Priorität, Echtzeit: FIFO/RR (1-99)"
    ]
  },
  {
    title: "Prozess-Prioritäten",
    summary: `Die Priorität eines Prozesses bestimmt, wie viel CPU-Zeit er relativ zu anderen Prozessen erhält. Linux unterscheidet zwischen normalen Nice-Werten und Echtzeit-Prioritäten.

Nice-Werte (Normale Prozesse):

Bereich: -20 (höchste) bis +19 (niedrigste)
Standard: 0 (normale Priorität)

Nur root kann:
- Negative Nice-Werte setzen (höhere Priorität)
- Nice-Wert erniedrigen (Priorität erhöhen)

Normale Benutzer können:
- Positive Nice-Werte setzen (niedrigere Priorität)
- Eigenen Nice-Wert nur erhöhen (Priorität senken)

CPU-Zeit-Verteilung:

CFS (Completely Fair Scheduler) berechnet CPU-Zeit basierend auf Nice:

Gewichtung (vereinfacht):
- Nice -20: ~88x mehr CPU als Nice +19
- Nice -10: ~10x mehr CPU als Nice +10
- Jeweils +/- 1 Nice ≈ 10% Unterschied

Beispiel:
- Prozess A: Nice 0
- Prozess B: Nice 10
- A erhält ~3x mehr CPU-Zeit als B

Nicht absolute Priorität, sondern Verhältnis zwischen Prozessen!

Nice setzen und ändern:

nice - Prozess mit Priorität starten:


# Mit höherer Priorität (benötigt root)
sudo nice -n -10 ./wichtig

# Mit niedrigerer Priorität
nice -n 10 ./unwichtig

# Standard (Nice 10)
nice ./programm

# Nice 19 (niedrigste)
nice -n 19 ./background-task


renice - Laufenden Prozess anpassen:


# Nach PID
renice 5 -p 1234

# Alle Prozesse eines Benutzers
sudo renice 10 -u john

# Alle Prozesse einer Gruppe
sudo renice 5 -g developers

# Mehrere gleichzeitig
renice 0 -p 100 -p 200 -p 300


Priorität anzeigen:


# Mit ps
ps -eo pid,ni,comm
ps -eo pid,pri,ni,comm  # PRI = tatsächliche Priorität (100-139)

# Mit top/htop
top  # Spalte "NI"
# Interaktiv in top:
# r = renice, PID eingeben, neuen Nice-Wert eingeben


Echtzeit-Prioritäten:

Scheduling-Klassen:

SCHED_OTHER (SCHED_NORMAL):
- Standard für normale Prozesse
- Nice -20 bis +19
- CFS Scheduler

SCHED_BATCH:
- Für Batch-Prozesse (nicht interaktiv)
- CPU-intensive Berechnungen
- Niedrigere Scheduling-Frequenz

SCHED_IDLE:
- Nur wenn CPU idle
- Niedrigste Priorität
- Für unwichtige Hintergrundaufgaben

SCHED_FIFO:
- Echtzeit: First-In, First-Out
- Läuft bis blockiert oder höher priorisierter kommt
- Keine Zeitscheiben zwischen gleichen Prioritäten
- Priorität 1-99

SCHED_RR:
- Echtzeit: Round-Robin
- Zeitscheiben zwischen gleichen Prioritäten
- Ansonsten wie FIFO
- Priorität 1-99

SCHED_DEADLINE:
- Deadline-basierte Echtzeit
- Garantierte Ausführung vor Deadline
- Für harte Echtzeit-Anforderungen

Echtzeit-Priorität setzen:

chrt (Change Real-Time attributes):


# Anzeigen
chrt -p 1234

# FIFO mit Priorität 50
sudo chrt -f 50 ./rt-programm
sudo chrt -f 50 -p 1234  # Laufenden Prozess

# RR mit Priorität 30
sudo chrt -r 30 ./rt-programm

# Zurück zu Normal
sudo chrt -o 0 -p 1234  # SCHED_OTHER, Nice 0


Prioritäts-Hierarchie:

Höchste: SCHED_FIFO/RR mit Priorität 99
⬇
SCHED_FIFO/RR mit Priorität 1
⬇
SCHED_OTHER mit Nice -20
⬇
SCHED_OTHER mit Nice 0
⬇
SCHED_OTHER mit Nice +19
⬇
SCHED_BATCH
⬇
Niedrigste: SCHED_IDLE

Echtzeit-Prozesse haben IMMER Vorrang vor normalen Prozessen!

Gefahren von Echtzeit-Prioritäten:

Vorsicht:
- Echtzeit-Prozess kann System lahmlegen
- Läuft vor allen anderen (inkl. System-Dämonen)
- Kann nur durch höher priorisierten oder init gestoppt werden

Schutz:
- /proc/sys/kernel/sched_rt_runtime_us: Max 950000 (95%)
- 5% für System reserviert
- Verhindert komplettes Blockieren

Beispiel-Katastrophe:

sudo chrt -f 99 bash
while true; do :; done  # Endlosschleife
# System friert ein, da Bash mit höchster Priorität läuft!


Prozess-Gruppen und cgroups:

Control Groups (cgroups):

Erlaubt Ressourcen-Limits für Prozessgruppen:

CPU-Limits:

# CPU-Shares (relative Gewichtung)
cgcreate -g cpu:/mygroup
echo 512 > /sys/fs/cgroup/cpu/mygroup/cpu.shares

# Prozess zuweisen
echo 1234 > /sys/fs/cgroup/cpu/mygroup/cgroup.procs

# CPU-Quote (absolut)
echo 50000 > /sys/fs/cgroup/cpu/mygroup/cpu.cfs_quota_us
# 50% einer CPU (quota=50000, period=100000)


systemd verwendet cgroups für Services:

# CPU-Limit für Service
systemctl set-property myservice.service CPUQuota=50%


ionice - I/O-Priorität:

Unabhängig von CPU-Priorität:


# Best-effort, Klasse 3 (normal)
ionice -c 2 -n 4 ./programm

# Idle (nur wenn keine anderen I/O)
ionice -c 3 ./backup

# Real-time (benötigt CAP_SYS_ADMIN)
sudo ionice -c 1 -n 0 ./database


Klassen:
- 0: None (erbt von Parent)
- 1: Real-time (0-7, 0=höchste)
- 2: Best-effort (0-7, 0=höchste)
- 3: Idle

Monitoring:


# Top sortiert nach Priorität
top
# Dann 'F' drücken, 'p' für Priorität wählen

# Alle Prozesse mit Nice != 0
ps -eo pid,ni,comm | awk '$2 != 0'

# Echtzeit-Prozesse
ps -eo pid,class,rtprio,comm | grep -E 'FF|RR'


Best Practices:

Normale Anwendungen:
- Standardpriorität (Nice 0) meist ausreichend
- Hintergrund-Jobs: Nice 10-19
- Wichtige Server-Dienste: Nice -5 bis 0

Echtzeit nur für:
- Audio/Video-Verarbeitung (Latenz-kritisch)
- Industriesteuerung
- Wissenschaftliche Messungen
- Mit Vorsicht und Tests!

Vermeiden:
- Echtzeit-Priorität für normale Apps
- Nice < -10 ohne guten Grund
 - Echtzeit ohne Ressourcen-Limits`,
    keyPoints: [
      "Nice -20 (hoch) bis +19 (niedrig), Standard 0",
      "nice: Prozess starten, renice: Laufenden ändern",
      "Echtzeit: FIFO/RR mit Priorität 1-99, immer vor Normal",
      "Vorsicht: Echtzeit kann System blockieren, nur für spezielle Fälle"
    ]
  },
  {
    title: "Inter-Prozess-Kommunikation (IPC)",
    summary: `Inter-Prozess-Kommunikation (IPC) ermöglicht den Datenaustausch zwischen Prozessen. Linux bietet verschiedene IPC-Mechanismen für unterschiedliche Anforderungen.

Warum IPC?

Prozesse sind isoliert (eigene Speicherbereiche):
- Schutz vor gegenseitiger Beeinflussung
- Aber: Kooperation zwischen Prozessen oft nötig

IPC-Anforderungen:
- Datenaustausch
- Synchronisation
- Signalisierung von Ereignissen

IPC-Mechanismen:

1. Pipes (Anonyme Pipes):

Einseitige Kommunikation zwischen verwandten Prozessen.

Eigenschaften:
- FIFO (First-In, First-Out)
- Unidirektional (eine Richtung)
- Nur zwischen Parent-Child oder Geschwistern
- Daten gehen verloren nach Lesen

Shell-Beispiel:

ls -l | grep txt | wc -l
# Pipe verbindet stdout von ls mit stdin von grep
# Und stdout von grep mit stdin von wc


C-Beispiel:

int pipefd[2];
pipe(pipefd);  // pipefd[0] = read, pipefd[1] = write

if (fork() == 0) {
    // Child schreibt
    close(pipefd[0]);
    write(pipefd[1], "Hallo", 5);
    close(pipefd[1]);
} else {
    // Parent liest
    close(pipefd[1]);
    char buf[10];
    read(pipefd[0], buf, 5);
    close(pipefd[0]);
}


2. Named Pipes (FIFOs):

Wie Pipes, aber im Dateisystem sichtbar.

Eigenschaften:
- Haben Dateinamen
- Kommunikation zwischen unverwandten Prozessen
- Überleben Prozess-Beendigung nicht (nur der Name bleibt)

Erstellen:

mkfifo mypipe
ls -l mypipe
# prw-r--r-- (p = pipe)

# Terminal 1
cat > mypipe

# Terminal 2
cat mypipe
# Was in Terminal 1 eingegeben wird, erscheint in Terminal 2


C-Beispiel:

mkfifo("/tmp/mypipe", 0666);

// Schreiber
int fd = open("/tmp/mypipe", O_WRONLY);
write(fd, "Nachricht", 9);
close(fd);

// Leser
int fd = open("/tmp/mypipe", O_RDONLY);
char buf[100];
read(fd, buf, 100);
close(fd);


3. Message Queues:

Nachrichten mit Priorität und Typ.

Eigenschaften:
- Bidirektional
- Typisierte Nachrichten
- Persistenz (überleben Prozess-Beendigung)
- POSIX und System V Varianten

POSIX Message Queue:

#include <mqueue.h>

// Erstellen/Öffnen
mqd_t mq = mq_open("/myqueue", O_CREAT | O_RDWR, 0644, NULL);

// Senden
char msg[] = "Hallo";
mq_send(mq, msg, strlen(msg), 0);  // Priorität 0

// Empfangen
char buffer[1024];
unsigned int prio;
mq_receive(mq, buffer, 1024, &prio);

// Schließen
mq_close(mq);
mq_unlink("/myqueue");


Anzeigen:

ls /dev/mqueue


4. Shared Memory:

Gemeinsamer Speicherbereich zwischen Prozessen.

Eigenschaften:
- Schnellste IPC (kein Kopieren)
- Bidirektional
- Erfordert Synchronisation (Semaphore/Mutex)
- POSIX und System V Varianten

POSIX Shared Memory:

#include <sys/mman.h>
#include <fcntl.h>

// Erstellen
int fd = shm_open("/myshm", O_CREAT | O_RDWR, 0644);
ftruncate(fd, 4096);  // Größe setzen

// Mapping
void *ptr = mmap(NULL, 4096, PROT_READ | PROT_WRITE\,
                 MAP_SHARED, fd, 0);

// Schreiben
strcpy(ptr, "Shared Data");

// Andere Prozess kann lesen
// char *data = (char *)ptr;

// Cleanup
munmap(ptr, 4096);
shm_unlink("/myshm");


Anzeigen:

ls /dev/shm


5. Semaphore:

Synchronisation und gegenseitiger Ausschluss.

Named Semaphore (POSIX):

#include <semaphore.h>

// Erstellen (initial=1 für Mutex)
sem_t *sem = sem_open("/mysem", O_CREAT, 0644, 1);

// Warten (lock)
sem_wait(sem);

// Kritischer Bereich
// ...

// Freigeben (unlock)
sem_post(sem);

// Cleanup
sem_close(sem);
sem_unlink("/mysem");


Unnamed Semaphore (zwischen Threads):

sem_t sem;
sem_init(&sem, 0, 1);  // 0 = zwischen Threads
sem_wait(&sem);
// ...
sem_post(&sem);
sem_destroy(&sem);


6. Unix Domain Sockets:

Socket-basierte Kommunikation (lokal).

Eigenschaften:
- Wie Netzwerk-Sockets, aber lokal
- Stream (SOCK_STREAM) oder Datagram (SOCK_DGRAM)
- Bidirektional
- File descriptor passing möglich

Server-Beispiel:

int sock = socket(AF_UNIX, SOCK_STREAM, 0);

struct sockaddr_un addr;
addr.sun_family = AF_UNIX;
strcpy(addr.sun_path, "/tmp/mysocket");

bind(sock, (struct sockaddr*)&addr, sizeof(addr));
listen(sock, 5);

int client = accept(sock, NULL, NULL);
char buf[100];
read(client, buf, 100);
write(client, "Reply", 5);
close(client);


Client-Beispiel:

int sock = socket(AF_UNIX, SOCK_STREAM, 0);

struct sockaddr_un addr;
addr.sun_family = AF_UNIX;
strcpy(addr.sun_path, "/tmp/mysocket");

connect(sock, (struct sockaddr*)&addr, sizeof(addr));
write(sock, "Hello", 5);
char buf[100];
read(sock, buf, 100);
close(sock);


7. Signals (siehe nächstes Thema):

Asynchrone Benachrichtigung.

IPC-Vergleich:

Geschwindigkeit (schnell → langsam):
1. Shared Memory
2. Unix Domain Sockets
3. Pipes
4. Message Queues

Komplexität (einfach → komplex):
1. Pipes
2. Named Pipes
3. Signals
4. Unix Domain Sockets
5. Message Queues
6. Shared Memory + Synchronisation

Persistenz:
- Überleben Prozess: Message Queues, Shared Memory
- Sterben mit Prozess: Pipes, Anonymous Semaphore

D-Bus - High-Level IPC:

Modernes IPC-System für Desktop-Anwendungen:


# System-Bus (system-weite Services)
dbus-send --system --print-reply \\
  --dest=org.freedesktop.DBus /org/freedesktop/DBus \\
  org.freedesktop.DBus.ListNames

# Session-Bus (pro Benutzer)
dbus-monitor --session


Verwendung:
- GNOME, KDE Services
- systemd
- NetworkManager
- BlueZ (Bluetooth)

IPC in der Praxis:

Wann was verwenden:

Pipes:
- Einfache Parent-Child-Kommunikation
- Datenströme in Shell-Pipelines

Named Pipes:
- Unverwandte Prozesse
- Einfache Datenströme

Message Queues:
- Typisierte Nachrichten
- Priorisierung
- Mehrere Producer/Consumer

Shared Memory:
- Große Datenmengen
- Hohe Performance
- Mit Synchronisation kombinieren

Sockets:
- Flexibelste Lösung
- Auch Netzwerk-kompatibel
- Bi direktionale Kommunikation

D-Bus:
- Desktop-Anwendungen
- Service-Discovery
- Ereignis-Benachrichtigung\`,
 - Ereignis-Benachrichtigung`,
    keyPoints: [
      "Pipes: Einfach, unidirektional, zwischen verwandten Prozessen",
      "Named Pipes (FIFO): Wie Pipes, aber im Dateisystem",
      "Shared Memory: Schnellste IPC, benötigt Synchronisation",
      "Sockets, Message Queues, Semaphore für komplexere Szenarien"
    ]
  },
  {
    title: "Signals",
    summary: `Signals sind asynchrone Benachrichtigungen an Prozesse. Sie informieren über Ereignisse oder fordern Aktionen an (z.B. Beendigung).

Signal-Konzept:

Ein Signal ist eine Software-Unterbrechung (Software-Interrupt):
- Wird an Prozess gesendet
- Unterbricht normale Ausführung
- Prozess reagiert mit Standard- oder benutzerdefinierter Aktion
- Asynchron (jederzeit möglich)

Standardreaktionen:
- Term: Prozess beenden
- Ignore: Signal ignorieren
- Core: Prozess beenden + Core Dump
- Stop: Prozess anhalten
- Cont: Angehaltenen Prozess fortsetzen

Wichtige Signals:

SIGTERM (15):
- Terminate
- Höfliche Aufforderung zum Beenden
- Prozess kann aufräumen (Dateien schließen, etc.)
- Standard bei 'kill PID'

SIGKILL (9):
- Kill
- Erzwungenes Beenden, nicht abfangbar
- Keine Aufräum-Möglichkeit
- Nur wenn SIGTERM nicht wirkt
- 'kill -9 PID'

SIGINT (2):
- Interrupt
- Strg+C im Terminal
- Beenden durch Benutzer
- Abfangbar

SIGQUIT (3):
- Quit
- Strg+\\ im Terminal
- Beenden mit Core Dump

SIGHUP (1):
- Hangup
- Terminal-Verbindung getrennt
- Oft: Konfiguration neu laden (bei Dämonen)
- 'kill -HUP PID'

SIGSTOP (19):
- Stop
- Prozess anhalten, nicht abfangbar
- 'kill -STOP PID'

SIGCONT (18):
- Continue
- Angehaltenen Prozess fortsetzen
- 'kill -CONT PID'

SIGCHLD (17):
- Child beendet oder gestoppt
- An Parent gesendet

SIGALRM (14):
- Alarm
- Timer abgelaufen (nach 'alarm()' System-Call)

SIGUSR1 (10), SIGUSR2 (12):
- User-defined
- Für anwendungsspezifische Zwecke

SIGSEGV (11):
- Segmentation Violation
- Unerlaubter Speicherzugriff
- Meist Programmfehler

SIGPIPE (13):
- Broken Pipe
- Schreiben in Pipe ohne Leser

Vollständige Liste:

kill -l  # Alle Signals
# Oder: man 7 signal


Signals senden:

kill-Befehl (irreführender Name):


# SIGTERM (15) - Standard
kill 1234
kill -15 1234
kill -TERM 1234

# SIGKILL (9) - Erzwungen
kill -9 1234
kill -KILL 1234

# SIGHUP (1) - Reload
kill -1 1234
kill -HUP 1234

# An alle eigenen Prozesse
kill -TERM -1


killall - Nach Namen:

killall firefox
killall -9 firefox
killall -HUP nginx  # Reload


pkill - Nach Muster:

pkill -f "python.*server"
pkill -KILL -u john  # Alle Prozesse von john


Im Code (C):

#include <signal.h>

kill(pid, SIGTERM);  // An spezifischen Prozess
raise(SIGTERM);      // An sich selbst


Signal-Handler installieren:

Einfache Methode (signal()):


#include <signal.h>
#include <stdio.h>
#include <unistd.h>

void signal_handler(int signo) {
    if (signo == SIGINT) {
        printf("Strg+C empfangen, beende sauber...\\n");
        // Aufräumen
        exit(0);
    }
}

int main() {
    signal(SIGINT, signal_handler);

    while (1) {
        printf("Läuft... (Strg+C zum Beenden)\\n");
        sleep(1);
    }
}


Moderne Methode (sigaction()):


#include <signal.h>

void handler(int sig, siginfo_t *info, void *context) {
    printf("Signal %d von PID %d\\n", sig, info->si_pid);
}

struct sigaction sa;
sa.sa_sigaction = handler;
sa.sa_flags = SA_SIGINFO;  // Erweiterte Info
sigemptyset(&sa.sa_mask);
sigaction(SIGINT, &sa, NULL);


Signals blockieren/maskieren:

Temporär blockieren:


sigset_t set, oldset;

// Maske vorbereiten
sigemptyset(&set);
sigaddset(&set, SIGINT);
sigaddset(&set, SIGTERM);

// Blockieren
sigprocmask(SIG_BLOCK, &set, &oldset);

// Kritischer Bereich (keine Signals)
// ...

// Wiederherstellen
sigprocmask(SIG_SETMASK, &oldset, NULL);


Warten auf Signal:


sigset_t set;
sigemptyset(&set);
sigaddset(&set, SIGUSR1);

int sig;
sigwait(&set, &sig);  // Blockiert bis Signal
printf("SIGUSR1 empfangen\\n");


Nicht abfangbare Signals:

SIGKILL (9) und SIGSTOP (19):
- Können NICHT abgefangen oder ignoriert werden
- Garantierte Kontrolle durch System/Admin
- SIGKILL: Garantierte Beendigung
- SIGSTOP: Garantiertes Anhalten

Signal-Sicherheit:

Signal-Handler sind problematisch:
- Unterbrechen Code an beliebiger Stelle
- Normale Funktionen oft nicht signal-safe
- Reentranz-Probleme

Signal-safe Funktionen (Auswahl):
- write(), read()
- _exit()
- signal(), sigaction()
- kill(), raise()

NICHT signal-safe:
- printf(), malloc(), free()
- Meiste Standard-Library-Funktionen

Best Practice:

volatile sig_atomic_t flag = 0;

void handler(int sig) {
    flag = 1;  // Nur Flag setzen
}

int main() {
    signal(SIGINT, handler);

    while (!flag) {
        // Normale Arbeit
    }

    // Flag-basiertes Aufräumen
    cleanup();
}


Signals in Shell-Skripten:

trap-Befehl:


#!/bin/bash

cleanup() {
    echo "Aufräumen..."
    rm -f /tmp/mylock
    exit 0
}

# Signal-Handler registrieren
trap cleanup SIGINT SIGTERM

# Hauptarbeit
while true; do
    echo "Arbeite..."
    sleep 1
done


Spezielle Handler:

trap "echo Bitte nicht unterbrechen!" SIGINT
trap "" SIGTERM  # Ignorieren
trap - SIGINT    # Zurücksetzen auf Standard


Signal-Sequenzen für Daemon-Management:

Typischer Ablauf zum sauberen Beenden:

1. SIGTERM senden
2. 5-10 Sekunden warten
3. Falls noch aktiv: SIGKILL


#!/bin/bash
PID=1234

kill -TERM $PID
sleep 5

if ps -p $PID > /dev/null; then
    echo "Prozess reagiert nicht, erzwinge Beendigung"
    kill -9 $PID
fi


systemd macht dies automatisch (KillMode, TimeoutStopSec).

Core Dumps:

Bei bestimmten Signals (SIGSEGV, SIGQUIT):
- Speichert Prozess-Zustand in Datei
- Für Debugging mit gdb

Aktivieren:

ulimit -c unlimited  # Core Dumps erlauben
# Oder in /etc/security/limits.conf

# Core Dump location
sysctl kernel.core_pattern
# /var/lib/systemd/coredump/core (systemd)


Debugging:

gdb ./programm core
(gdb) bt  # Backtrace
`,
    keyPoints: [
      "Signals: Asynchrone Benachrichtigungen (SIGTERM=15, SIGKILL=9, SIGINT=2)",
      "Senden: kill PID, kill -SIGNAL PID, killall, pkill",
      "Handler: signal() oder sigaction() für eigene Reaktion",
      "SIGKILL und SIGSTOP nicht abfangbar (garantierte Kontrolle)"
    ]
  },
  {
    title: "Speicherverwaltung",
    summary: `Die Speicherverwaltung ist eine zentrale Aufgabe des Betriebssystems. Sie teilt den Hauptspeicher effizient zwischen Prozessen auf und schützt Prozesse voreinander.

Speicher-Hierarchie:

Register: CPU-intern, schnellst (< 1 ns)
Cache (L1, L2, L3): CPU-nah, sehr schnell (1-20 ns)
Hauptspeicher (RAM): Schnell (50-100 ns)
SSD: Mittel (0.1-1 ms)
Festplatte: Langsam (5-20 ms)

Ziel: Häufig genutzte Daten in schnelleren Ebenen.

Speicherverwaltung-Aufgaben:

Allocation: Speicher an Prozesse zuweisen
Protection: Prozesse voneinander isolieren
Sharing: Gemeinsamen Speicher ermöglichen (Bibliotheken)
Virtual Memory: Mehr Speicher vortäuschen als physisch vorhanden
Paging/Swapping: Auslagern auf Festplatte

Physischer vs. Virtueller Speicher:

Physischer Speicher (RAM):
- Tatsächlich vorhandener Speicher
- Begrenzt (z.B. 8 GB, 16 GB)
- Byte-adressierbar
- Geteilt zwischen allen Prozessen

Virtueller Speicher:
- Abstraktion des physischen Speichers
- Jeder Prozess sieht eigenen, zusammenhängenden Adressraum
- Größer als physischer Speicher (z.B. 64-Bit: 256 TB theoretisch)
- Prozess kennt nur virtuelle Adressen

Virtuelle Adressierung:

Jeder Prozess hat eigenen virtuellen Adressraum:

32-Bit-System: 0x00000000 - 0xFFFFFFFF (4 GB)
64-Bit-System: 0x0000000000000000 - 0xFFFFFFFFFFFFFFFF (16 EB)

Typisches Layout (Linux, 64-Bit vereinfacht):

0xFFFFFFFFFFFFFFFF  ┌─────────────────┐
                    │ Kernel Space    │ (nur Kernel-Zugriff)
0xFFFF800000000000  ├─────────────────┤
                    │ (ungenutzt)     │
                    ├─────────────────┤
                    │ Stack           │ (wächst nach unten)
                    │       ⬇         │
                    ├─────────────────┤
                    │                 │
                    ├─────────────────┤
                    │       ⬆         │
                    │ Heap            │ (wächst nach oben)
                    ├─────────────────┤
                    │ BSS (uninitialized)
                    │ Data (initialized)
                    │ Text (Code)     │
0x0000000000000000  └─────────────────┘


Segmente:
- Text: Programm-Code (read-only, ausführbar)
- Data: Initialisierte globale/statische Variablen
- BSS: Uninitialisierte Variablen (Block Started by Symbol)
- Heap: Dynamisch allokierter Speicher (malloc/free)
- Stack: Funktionsaufrufe, lokale Variablen

Memory Management Unit (MMU):

Hardware-Komponente übersetzt virtuelle → physische Adressen.

Ablauf:
1. Programm greift auf virtuelle Adresse zu
2. MMU schlägt in Page Table nach
3. Findet physische Adresse (wenn Page im RAM)
4. Oder: Page Fault (wenn nicht im RAM)

Für Programm transparent, geschieht automatisch.

Page Fault-Behandlung:

Page Fault: Zugriff auf Page, die nicht im RAM ist.

Ablauf:
1. MMU erkennt: Page nicht present
2. CPU wirft Exception (Page Fault)
3. Kernel übernimmt:
   a) Falls Page auf Disk: Von Swap laden (Major Page Fault)
   b) Falls Page noch nicht allokiert: Allokieren (Minor Page Fault)
   c) Falls ungültige Adresse: SIGSEGV an Prozess
4. Page Table aktualisieren
5. Prozess fortsetzen

Arten:
- Minor: Page allokieren, kein Disk-I/O
- Major: Von Disk laden, langsam

Statistiken:

ps -o min_flt,maj_flt,cmd -p PID
# min_flt: Minor Page Faults
# maj_flt: Major Page Faults


Demand Paging:

Pages werden erst geladen, wenn benötigt (on-demand).

Vorteile:
- Schnellerer Programmstart
- Weniger Speicher-Nutzung
- Mehr Prozesse gleichzeitig

Copy-on-Write (COW):

Bei fork():
- Pages werden zwischen Parent und Child geteilt
- Erst bei Schreibzugriff kopiert
- Spart Speicher und Zeit

Beispiel:

Parent: Liest Page → Shared
Child:  Liest Page → Shared (same physical page)
Child:  Schreibt Page → Kopie erstellt, dann Schreiben


Swapping:

Auslagern von Pages auf Festplatte (Swap Space):

Swap Space:
- Partition (mkswap, swapon)
- Datei (fallocate, mkswap, swapon)

Wann geswapt wird:
- RAM voll oder knapp
- Selten genutzte Pages auslagern
- Swappiness-Parameter steuert Aggressivität

Swappiness (0-100):

cat /proc/sys/vm/swappiness  # Default: 60
sudo sysctl vm.swappiness=10  # Konservativer


- 0: Nur swappen, wenn absolut notwendig
- 100: Aggressiv swappen

Swap-Nutzung anzeigen:

free -h
swapon --show
cat /proc/swaps


Swap verwalten:

# Swap-Partition
sudo mkswap /dev/sdb1
sudo swapon /dev/sdb1

# Swap-Datei
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile

# Permanent (/etc/fstab)
/swapfile none swap sw 0 0

# Deaktivieren
sudo swapoff /swapfile


OOM Killer (Out-Of-Memory):

Wenn RAM + Swap voll:
- Kernel muss Prozess beenden
- OOM Killer wählt Opfer (heuristische Scores)
- Prozess erhält SIGKILL

OOM-Score anzeigen:

cat /proc/PID/oom_score
cat /proc/PID/oom_adj  # Adjustment (-17 bis +15)


Score beeinflussen:

echo -1000 > /proc/PID/oom_score_adj  # Schützen
echo 1000 > /proc/PID/oom_score_adj   # Bevorzugt beenden


Memory Limits:

Per Prozess (ulimit):

ulimit -v 1000000  # Virtueller Speicher (KB)
ulimit -m 500000   # Resident (KB)
ulimit -s 8192     # Stack (KB)


Per cgroup:

echo 500M > /sys/fs/cgroup/memory/mygroup/memory.limit_in_bytes
echo PID > /sys/fs/cgroup/memory/mygroup/cgroup.procs


Memory-Statistiken:

System-weit:

free -h              # Überblick
cat /proc/meminfo    # Detailliert
vmstat 1             # Dynamisch


Pro Prozess:

ps aux               # RSS, VSZ
pmap PID             # Memory Map
cat /proc/PID/status # VmSize, VmRSS, etc.
cat /proc/PID/smaps  # Sehr detailliert


Begriffe:
- VSZ (Virtual Size): Gesamter virtueller Speicher
- RSS (Resident Set Size): Tatsächlich im RAM
- Shared: Mit anderen Prozessen geteilt

Huge Pages:

Normale Page: 4 KB
Huge Page: 2 MB oder 1 GB

Vorteile:
- Weniger Page Table Einträge
- Weniger TLB Misses
- Besser für große Speichermengen (Datenbanken)

Konfiguration:

# Anzahl reservieren
echo 512 > /proc/sys/vm/nr_hugepages

# Anzeigen
cat /proc/meminfo | grep Huge

# Transparent Huge Pages
cat /sys/kernel/mm/transparent_hugepage/enabled
echo always > /sys/kernel/mm/transparent_hugepage/enabled


Speicher-Debugging:

valgrind: Findet Memory Leaks, ungültige Zugriffe

valgrind --leak-check=full ./programm


Address Sanitizer (ASan):

gcc -fsanitize=address -g programm.c
./a.out
`,
    keyPoints: [
      "Virtueller Speicher: Jeder Prozess eigener Adressraum, MMU übersetzt",
      "Page Fault: Zugriff auf nicht-präsente Page, Minor/Major",
      "Swapping: Auslagern auf Disk bei RAM-Knappheit, Swappiness steuert",
      "OOM Killer: Beendet Prozess bei vollem RAM+Swap"
    ]
  },
  {
    title: "Virtuelle Adressierung",
    summary: `Virtuelle Adressierung ist ein Mechanismus, der jedem Prozess einen eigenen, scheinbar exklusiven Adressraum bietet. Dies ermöglicht Isolation, Schutz und effiziente Speichernutzung.

Konzept virtueller Adressen:

Problem ohne virtuelle Adressierung:
- Prozesse greifen direkt auf physischen Speicher zu
- Kollisionen zwischen Prozessen
- Sicherheitsrisiken (Prozess kann anderen lesen/ändern)
- Schwierige Speicherverwaltung

Lösung:
- Jeder Prozess arbeitet mit virtuellen Adressen
- Prozess sieht zusammenhängenden, privaten Adressraum
- Betriebssystem mappt virtuell → physisch
- Isolation und Schutz garantiert

Adressraum-Layout:

64-Bit Linux (vereinfacht):

User Space (0x0000000000000000 - 0x00007FFFFFFFFFFF):

0x7FFFFFFFFFFF ┌─────────────────┐
                │ Stack           │
                │       ⬇         │
                ├─────────────────┤
                │ Shared Libraries│
                ├─────────────────┤
                │ mmap Region     │
                ├─────────────────┤
                │       ⬆         │
                │ Heap            │
                ├─────────────────┤
                │ BSS             │
                │ Data            │
                │ Text            │
0x000000000000 └─────────────────┘


Kernel Space (0xFFFF800000000000 - 0xFFFFFFFFFFFFFFFF):
- Nur für Kernel zugänglich
- Shared zwischen allen Prozessen
- Zugriff durch User Space: System Calls

32-Bit Linux:
- User: 0x00000000 - 0xBFFFFFFF (3 GB)
- Kernel: 0xC0000000 - 0xFFFFFFFF (1 GB)

Prozess-Speicher-Segmente:

Text Segment:
- Programm-Code (Maschineninstruktionen)
- Read-Only, Executable
- Shared zwischen Prozess-Instanzen
- Adresse: Niedrig (z.B. 0x400000)

Data Segment:
- Initialisierte globale/statische Variablen
- Read-Write
- Beispiel: 'int global = 42;'

BSS Segment:
- Uninitialisierte globale/statische Variablen
- Automatisch auf 0 initialisiert
- Spart Platz in Executable (nur Größe gespeichert)
- Beispiel: 'int buffer[1000];'

Heap:
- Dynamisch allokierter Speicher
- malloc(), calloc(), realloc(), free()
- Wächst nach oben (höhere Adressen)
- Verwaltet von libc (ptmalloc bei glibc)

Stack:
- Funktionsaufrufe, lokale Variablen, Return-Adressen
- Wächst nach unten (niedrigere Adressen)
- Automatisches Management (LIFO)
- Stack Overflow bei Überlauf (SIGSEGV)

mmap Region:
- Memory-mapped Files
- Shared Libraries (.so)
- Anonyme Mappings (alternative zu malloc für große Blöcke)

Memory Mapping (mmap):

mmap() mapped Dateien oder Speicher in Adressraum:

Datei-Mapping:

int fd = open("file.txt", O_RDONLY);
void *ptr = mmap(NULL, size, PROT_READ, MAP_PRIVATE, fd, 0);
// Datei-Zugriff wie Speicher-Zugriff
char c = ((char*)ptr)[100];
munmap(ptr, size);


Vorteile:
- Effizienter als read()/write()
- Demand-Paging (nur genutzte Teile geladen)
- Shared zwischen Prozessen möglich

Anonymous Mapping (kein File):

void *ptr = mmap(NULL, size, PROT_READ | PROT_WRITE\,
                 MAP_PRIVATE | MAP_ANONYMOUS, -1, 0);
// Wie malloc, aber direkt vom Kernel
munmap(ptr, size);


Shared Libraries:
- libc.so, libpthread.so etc.
- Einmal in RAM, von allen Prozessen shared
- Spart Speicher

Anzeigen:

cat /proc/PID/maps
# Zeigt alle Memory Regions:
# Adresse Rechte Offset Device Inode Pfad
# 00400000-00401000 r-xp 00000000 08:01 123456 /bin/programm


Address Translation (Adressübersetzung):

MMU (Memory Management Unit) übersetzt virtuell → physisch:

Virtuell Adresse aufgeteilt:
- Page Number: Identifiziert Page
- Offset: Position in Page

Beispiel 32-Bit mit 4-KB-Pages:

Virtuelle Adresse: 32 Bit
├─ Page Number: 20 Bit (1M Pages)
└─ Offset: 12 Bit (4096 Bytes)


Übersetzung:
1. Page Number → Index in Page Table
2. Page Table Entry → Physical Frame Number
3. Physical Address = Frame Number + Offset

Page Table:

Datenstruktur für Adress-Mapping:

Page Table Entry (PTE) enthält:
- Physical Frame Number
- Present Bit (in RAM?)
- Dirty Bit (modifiziert?)
- Accessed Bit (kürzlich zugegriffen?)
- Read/Write/Execute Permissions
- User/Kernel Mode

Problem: Page Table kann groß werden:
- 32-Bit, 4 KB Pages: 2^20 Einträge × 4 Byte = 4 MB
- 64-Bit: Noch größer!

Lösung: Multi-Level Page Tables:

2-Level (32-Bit):
- Page Directory → Page Table → Physical Frame
- Nur benötigte Tables allokieren

4-Level (64-Bit x86_64):
- PML4 → PDP → PD → PT → Physical Frame
- Spart enorm Speicher (sparse address space)

TLB (Translation Lookaside Buffer):

Cache für Page Table Einträge:

Problem: Page Table Lookups sind langsam (mehrere Speicherzugriffe)

Lösung: TLB
- Hardware-Cache in CPU
- Speichert kürzlich verwendete Übersetzungen
- Sehr schnell (< 1 Zyklus)
- Klein (z.B. 64-512 Einträge)

Ablauf:
1. Virtuell Adresse → TLB lookup
2. TLB Hit: Physische Adresse direkt
3. TLB Miss: Page Table Walk, TLB update

TLB Flush:
- Bei Context Switch
- Bei Page Table Änderungen
- Teuer (alle Lookups wieder langsam)

Modern: Tagged TLB (PCID)
- TLB-Einträge mit Prozess-ID markiert
- Kein Flush bei Context Switch

Memory Protection:

Schutz durch Page Table Flags:

Read/Write/Execute Bits:
- Read: Lesen erlaubt
- Write: Schreiben erlaubt
- Execute: Code-Ausführung erlaubt
- Kombinationen: r--, rw-, r-x, rwx

Beispiele:
- Text: r-x (Code lesen und ausführen, nicht schreiben)
- Data: rw- (lesen und schreiben, nicht ausführen)
- Stack: rw- (traditionell, modern oft NX)

NX/XD (No-Execute/Execute-Disable):
- Verhindert Code-Ausführung in Daten-Bereichen
- Schutz vor Buffer-Overflow-Exploits
- W^X: Write XOR Execute (nie beides gleichzeitig)

Violation: SIGSEGV (Segmentation Fault)

User/Kernel Mode:
- User-Bit: 1 = nur User-Mode-Zugriff
- Kernel-Pages haben User-Bit=0
- User-Zugriff auf Kernel: Page Fault

ASLR (Address Space Layout Randomization):

Randomisiert Adressen bei Programmstart:

Ziel: Exploits erschweren (Buffer Overflow, ROP)

Was randomisiert wird:
- Stack Position
- Heap Position
- Shared Libraries
- mmap Regions
- (Text bei PIE)

Anzeigen (unterschiedlich bei jedem Start):

cat /proc/PID/maps | grep stack
cat /proc/PID/maps | grep heap


Kontrollieren:

cat /proc/sys/kernel/randomize_va_space
# 0: Aus
# 1: Stack, Libs, mmap
# 2: + Heap (empfohlen)

echo 2 | sudo tee /proc/sys/kernel/randomize_va_space


PIE (Position Independent Executable):
- Kompiliert: gcc -fPIE -pie
- Erlaubt Text-Segment-Randomisierung

Memory Overcommit:

Linux erlaubt Overcommit: Mehr virtuellen Speicher zuweisen als physisch verfügbar.

Modes:

cat /proc/sys/vm/overcommit_memory
# 0: Heuristic (default)
# 1: Always (keine Prüfung)
# 2: Never (strict)

echo 2 | sudo tee /proc/sys/vm/overcommit_memory


Ratio (bei Mode 2):

cat /proc/sys/vm/overcommit_ratio  # % vom RAM


Vorteil: Prozesse allokieren oft mehr als sie nutzen (fork+exec)
Nachteil: OOM Killer bei tatsächlichem Bedarf

Praktische Tools:

Adressraum anzeigen:

cat /proc/PID/maps
pmap -x PID


Statistiken:

cat /proc/PID/status | grep Vm
# VmSize: Gesamter virtueller Speicher
# VmRSS: Resident (im RAM)
# VmData: Heap
# VmStk: Stack
# VmExe: Code
# VmLib: Shared Libraries


Programm analysieren:

size /bin/ls
# text    data     bss     dec     hex filename
`,
    keyPoints: [
      "Jeder Prozess: Eigener virtueller Adressraum (User + Kernel Space)",
      "MMU übersetzt virtuell → physisch via Page Tables",
      "TLB cached Übersetzungen für Performance",
      "Protection: Read/Write/Execute Bits, NX, ASLR für Sicherheit"
    ]
  },
  {
    title: "Paging und Segmentierung",
    summary: `Paging und Segmentierung sind zwei grundlegende Techniken der Speicherverwaltung. Moderne Systeme wie Linux nutzen hauptsächlich Paging.

Segmentierung:

Segmentierung teilt Speicher in logische Einheiten (Segmente):

Segmente:
- Logische Einheiten mit Bedeutung
- Variable Größe
- Beispiele: Code, Data, Stack, Heap

Jedes Segment:
- Base Address (Startadresse)
- Limit (Größe)
- Protection Bits (Rechte)

Segment Descriptor Table:
- Speichert Segment-Informationen
- Index = Segment Selector

Virtuelle Adresse besteht aus:
- Segment Selector (z.B. CS, DS, SS Register bei x86)
- Offset innerhalb Segment

Übersetzung:
1. Segment Selector → Segment Descriptor Table
2. Descriptor enthält Base + Limit
3. Prüfe: Offset < Limit?
4. Physisch = Base + Offset

Protection:
- Read/Write/Execute pro Segment
- Automatische Größenprüfung (Offset < Limit)

Vorteile:
- Logische Organisation (Code, Data getrennt)
- Unterschiedliche Schutzrechte pro Segment
- Dynamische Größe

Nachteile:
- Externe Fragmentierung (Lücken zwischen Segmenten)
- Komplexes Management bei vielen Segmenten
- Variable Größe erschwert Speichervergabe

Paging:

Paging teilt Speicher in gleich große Blöcke (Pages/Frames):

Begriffe:
- Page: Virtueller Speicherblock (z.B. 4 KB)
- Frame: Physischer Speicherblock (gleiche Größe)
- Page Table: Mapping von Pages zu Frames

Virtuelle Adresse:
- Page Number + Offset
- Beispiel 32-Bit, 4 KB Pages:
  - Page Number: 20 Bit
  - Offset: 12 Bit (0-4095)

Übersetzung:
1. Page Number → Index in Page Table
2. Page Table Entry → Frame Number
3. Physisch = Frame Number || Offset

Page Table Entry (PTE):
- Present Bit: In RAM? (sonst Page Fault)
- Frame Number: Physischer Frame
- Dirty Bit: Modifiziert seit Laden?
- Accessed Bit: Kürzlich zugegriffen?
- Read/Write: Schreibschutz?
- User/Supervisor: User-Mode-Zugriff?
- Execute Disable: Ausführung verboten?

Vorteile:
- Keine externe Fragmentierung
- Einfache Speichervergabe (jeder freie Frame nutzbar)
- Ermöglicht Virtual Memory (größer als RAM)

Nachteile:
- Interne Fragmentierung (letzter Page nicht voll genutzt)
- Page Table kann groß werden

Page Table Strukturen:

Single-Level Page Table:
- Eine Tabelle für gesamten Adressraum
- Problem: Zu groß (z.B. 4 MB bei 32-Bit)

Multi-Level Page Table:
- Hierarchische Struktur
- Nur benötigte Tabellen allokieren

2-Level (32-Bit):

Virtuell: | PD Index | PT Index | Offset |
           10 Bit      10 Bit     12 Bit

Page Directory → Page Table → Frame

- Nur genutzte Page Tables allokieren
- Spart Speicher bei sparse address space

4-Level (x86_64):

Virtuell: | PML4 | PDP | PD | PT | Offset |
           9 Bit   9 Bit 9 Bit 9 Bit 12 Bit

PML4 → PDPT → PD → PT → Frame

- Unterstützt große Adressräume (256 TB)
- Noch mehr Speicherersparnis

Inverted Page Table:
- Eine Tabelle für gesamten physischen Speicher
- Entry pro Frame (nicht pro Page)
- Skaliert mit RAM-Größe, nicht Adressraum-Größe

Page Replacement Algorithmen:

Wenn RAM voll: Welche Page auslagern?

FIFO (First-In, First-Out):
- Älteste Page wird verdrängt
- Einfach, aber ineffizient
- Ignoriertnutzung

LRU (Least Recently Used):
- Am längsten nicht genutzte Page verdrängt
- Gute Performance
- Schwer exakt zu implementieren

Approximated LRU:
- Accessed Bit in PTE
- Periodisch Bits löschen
- Pages ohne Accessed Bit sind Kandidaten

Clock Algorithm:
- Zirkuläre Liste von Pages
- "Hand" zeigt auf aktuelle Page
- Accessed? → Clear Bit, nächste Page
- Not Accessed? → Verdrängen

LFU (Least Frequently Used):
- Zählt Zugriffe
- Selten genutzte Pages verdrängt

Working Set:
- Menge der kürzlich genutzten Pages
- Versucht Working Set im RAM zu halten

Linux Page Replacement:

2-Queue-System:
- Active List: Kürzlich genutzte Pages
- Inactive List: Kandidaten für Auslagerung

Ablauf:
1. Neue Page → Inactive List
2. Nochmaliger Zugriff → Active List
3. Kein Zugriff lange → Inactive List
4. Aus Inactive auslagern

Berücksichtigt:
- Accessed Bit
- Dirty Bit (Dirty Pages teurer auszulagern)
- Page Type (File-backed vs. Anonymous)

Page Fault Handling:

Page Fault Arten:

Minor Page Fault:
- Page in RAM, aber nicht in Page Table
- Beispiel: Erste Nutzung nach fork() (COW)
- Kein Disk-I/O, schnell

Major Page Fault:
- Page muss von Disk geladen werden
- Swap-In von Swap Space
- Demand-Loading von Executable/Library
- Langsam (Disk-I/O)

Invalid Page Fault:
- Zugriff auf ungültigen Adressbereich
- Prozess erhält SIGSEGV

Ablauf (Major Fault):
1. CPU: MMU erkennt Present Bit = 0
2. CPU: Page Fault Exception → Kernel
3. Kernel: Prüft Validität (in VMA?)
4. Kernel: Findet freien Frame (evtl. Page Replacement)
5. Kernel: Lädt Page von Disk
6. Kernel: Aktualisiert Page Table
7. Kernel: Zurück zum Prozess
8. Prozess: Instruktion wiederholen

VMA (Virtual Memory Area):
- Prozess-Speicherbereiche
- /proc/PID/maps zeigt VMAs
- Kernel prüft: Adresse in VMA?

Demand Paging:

Pages werden erst bei Bedarf geladen:

Lazy Loading:
- Programm-Start lädt nicht alles
- Nur initial benötigte Pages
- Andere bei Zugriff (Page Fault)

Vorteile:
- Schnellerer Start
- Weniger RAM-Nutzung
- Programme größer als RAM möglich

Copy-on-Write (COW):

Optimierung für fork():

Ohne COW:
- fork() kopiert gesamten Speicher
- Teuer und langsam

Mit COW:
1. fork(): Pages werden geteilt (Read-Only)
2. Parent/Child lesen → Shared Page
3. Schreiben → Page Fault
4. Kernel kopiert Page
5. Beide haben eigene Kopie

Markierung in PTE:
- Write Bit = 0 (temporär)
- COW Bit (spezielle Kennzeichnung)

Spart:
- Zeit (kein sofortiges Kopieren)
- Speicher (nur bei Änderung kopiert)

Thrashing:

Problem: Mehr Page Faults als Arbeit:

Ursache:
- Zu wenig RAM für Working Sets
- Ständiges Swapping In/Out
- System wird langsam

Symptome:
- Hohe CPU Wait I/O
- Disk permanent aktiv
- Wenig echte Arbeit

Gegenmitteln:
- RAM hinzufügen
- Weniger Prozesse
- Prozesse optimieren (kleineres Working Set)

Page Size:

Standard: 4 KB (x86, x86_64)

Alternativen:
- 2 MB Huge Pages
- 1 GB Huge Pages

Huge Pages Vorteile:
- Weniger TLB Misses
- Kleinere Page Tables
- Besser für große Anwendungen (Datenbanken)

Huge Pages Nachteile:
- Mehr interne Fragmentierung
- Weniger flexibel

Transparent Huge Pages (THP):
- Automatisches Management
- Kernel entscheidet

cat /sys/kernel/mm/transparent_hugepage/enabled


Paging vs. Segmentierung:

Kombination in x86:

x86 hat beide Mechanismen:
1. Segmentierung (logisch)
2. Paging (physisch)

Aber: Moderne OS (Linux, Windows) nutzen Flat Memory Model
- Alle Segmente auf vollen Adressraum
- Segmentierung effektiv deaktiviert
- Nur Paging genutzt

Warum?
- Paging flexibler
- Keine Fragmentierung
- Einfacher zu verwalten

64-Bit (x86_64):
- Segmentierung noch rudimentärer
- Fast nur Paging

Praktische Aspekte:

Konfiguration:

# Huge Pages reservieren
echo 512 > /proc/sys/vm/nr_hugepages

# Page Size anzeigen
getconf PAGE_SIZE  # 4096

# THP Status
cat /sys/kernel/mm/transparent_hugepage/enabled


Monitoring:

# Page Faults
ps -o min_flt,maj_flt,cmd -p PID

# System-weit
vmstat 1
# Spalten: si (swap in), so (swap out)

# Detailliert
cat /proc/vmstat


Per-Process:

cat /proc/PID/stat
# Felder 10-13: Page Faults
`,
    keyPoints: [
      "Paging: Speicher in gleich große Pages (4 KB), flexible Verwaltung",
      "Multi-Level Page Tables: Hierarchisch, spart Speicher",
      "Page Fault: Minor (in RAM), Major (von Disk), Invalid (SIGSEGV)",
      "COW: Pages bei fork() shared, erst bei Schreiben kopiert"
    ]
  }
];
