export const chapter3Topics = [
  {
    title: "Editoren (vim, nano, Kate)",
    summary: `Texteditoren sind essenzielle Werkzeuge unter Linux fur Konfigurationsdateien, Programmcode und Dokumentation. Es gibt verschiedene Kategorien von Editoren.

Grafische Editoren:

Kate - KDE Advanced Text Editor, Teil der KDE-Umgebung. Syntax-Highlighting fur viele Programmiersprachen. Mehrere Dokumente in Tabs. Projektverwaltung und Plugin-System.

Gnome Text Editor - Einfacher, moderner Editor fur GNOME. Minimalistisches Design, Fokus auf Benutzerfreundlichkeit.

Terminal-Editoren:

nano - Einsteigerfreundlicher Editor mit sichtbaren Hilfen. Steuerung uber Strg-Tasten (angezeigt am unteren Rand). Einfache Bedienung: Strg+O (speichern), Strg+X (beenden). Ideal fur schnelle Konfigurationsanderungen.

vim (Vi Improved) - Leistungsfahiger, modaler Editor. Nachfolger des klassischen vi-Editors. Steile Lernkurve, aber sehr effizient nach Einarbeitung.

vim-Modi:
- Normal-Modus: Navigation und Befehle (Standard nach Start)
- Insert-Modus: Texteingabe (i, a, o)
- Visual-Modus: Textauswahl (v, V, Strg+v)
- Command-Modus: Befehle (:w speichern, :q beenden, :wq speichern und beenden)

Wichtige vim-Befehle:
Navigation: h,j,k,l (links, runter, hoch, rechts), w (word), b (back), gg (Dateianfang), G (Dateiende)
Loschen: x (Zeichen), dd (Zeile), dw (Wort)
Kopieren: yy (Zeile), p (einfugen)
Suchen: /muster (vorwarts), ?muster (ruckwarts), n (nachstes)
Ruckgangig: u (undo), Strg+r (redo)

Vorteil vim: Vollstandig uber Tastatur steuerbar, auch uber SSH effizient nutzbar, auf praktisch jedem Unix-System verfugbar.`,
    keyPoints: [
      "Grafisch: Kate (KDE), Gnome Text Editor - fur Desktop-Nutzung",
      "Terminal: nano (einfach), vim (machtig, modal)",
      "vim-Modi: Normal (Navigation), Insert (Eingabe), Visual (Auswahl), Command (Befehle)",
      "nano ideal fur Einsteiger, vim fur Profis und Remote-Arbeit"
    ]
  },
  {
    title: "Secure Shell (SSH)",
    summary: `SSH (Secure Shell) ist ein Netzwerkprotokoll fur sichere, verschlusselte Verbindungen zu entfernten Rechnern. Es hat das unsichere Telnet-Protokoll abgelost.

Grundlegende Funktionen:

Remote-Login - Anmeldung auf entferntem System mit verschlusselter Verbindung. Sichere Kommandozeilen-Sitzung auf Server. Authentifizierung per Passwort oder SSH-Schlussel.

Grundlegende Befehle:
- ssh benutzer@host: Verbindung zu entferntem Rechner
- ssh -p port benutzer@host: Verbindung uber spezifischen Port (Standard: 22)
- ssh benutzer@host befehl: Fuhrt Befehl auf entferntem System aus

Dateitransfer mit SSH:

scp (Secure Copy):
- scp datei benutzer@host:/pfad: Datei zum Server kopieren
- scp benutzer@host:/pfad/datei .: Datei vom Server holen
- scp -r verzeichnis benutzer@host:/pfad: Rekursives Kopieren

sftp (SSH File Transfer Protocol):
- Interaktive Dateitransfer-Sitzung
- Ahnlich wie FTP, aber verschlusselt

rsync uber SSH:
- rsync -avz -e ssh quelle benutzer@host:ziel
- Effiziente Synchronisation, ubertragt nur Anderungen

SSH-Schlusselauthentifizierung:

Sicherer als Passwort-Login, ermoglicht passwortlose Anmeldung.

Schlussel generieren:
- ssh-keygen -t rsa -b 4096: RSA-Schlussel erstellen
- ssh-keygen -t ed25519: Ed25519-Schlussel (moderne Alternative)

Schlussel installieren:
- ssh-copy-id benutzer@host: Offentlichen Schlussel ubertragen
- Manuell: In ~/.ssh/authorized_keys auf Server eintragen

Vorteile:
- Keine Passworteingabe notig
- Automatisierung und Skripte moglich
- Sicherer gegen Brute-Force-Angriffe

SSH-Konfiguration:

Client-Konfiguration in ~/.ssh/config:
  Host servername
      HostName server.example.com
      User benutzername
      Port 2222
      IdentityFile ~/.ssh/id_rsa

Server-Konfiguration in /etc/ssh/sshd_config:
- Port 22: SSH-Port andern fur mehr Sicherheit
- PermitRootLogin no: Root-Login verbieten
- PasswordAuthentication no: Nur Schlusselauthentifizierung erlauben

Port-Forwarding:
- ssh -L 8080:localhost:80 benutzer@host: Lokalen Port weiterleiten
  - ssh -R 9000:localhost:3000 benutzer@host: Remote Port weiterleiten`,
    keyPoints: [
      "SSH: Verschlusselte Remote-Verbindung (ersetzt Telnet)",
      "Dateitransfer: scp, sftp, rsync uber SSH",
      "Authentifizierung: Passwort oder SSH-Schlussel (sicherer)",
      "Konfiguration: ~/.ssh/config (Client), /etc/ssh/sshd_config (Server)"
    ]
  },
  {
    title: "Software-Entwicklung (gcc, make)",
    summary: `Linux bietet umfassende Werkzeuge zur Software-Entwicklung, insbesondere fur C/C++-Programme. Der GNU Compiler Collection (gcc) und das Build-Tool make sind zentrale Komponenten.

Der GNU Compiler (gcc):

gcc ist der Standard-C-Compiler unter Linux, Teil der GNU Compiler Collection. Unterstutzt C, C++, Fortran, Ada und weitere Sprachen.

Grundlegende Verwendung:
- gcc programm.c: Kompiliert zu a.out
- gcc -o programm programm.c: Ausgabedatei benennen
- gcc -Wall programm.c: Alle Warnungen aktivieren (empfohlen)
- gcc -O2 programm.c: Optimierungsstufe 2
- gcc -g programm.c: Debug-Informationen einbauen

Kompilierungsphasen:
1. Praprozessor: Bearbeitet #include, #define etc.
   - gcc -E programm.c: Nur Praprozessor
2. Compiler: Ubersetzt C-Code zu Assembler
   - gcc -S programm.c: Erzeugt .s-Datei
3. Assembler: Erzeugt Objektdatei
   - gcc -c programm.c: Erzeugt .o-Datei
4. Linker: Verbindet Objektdateien zu ausfuhrbarem Programm

Mehrere Dateien kompilieren:
- gcc -c datei1.c datei2.c: Objektdateien erzeugen
- gcc -o programm datei1.o datei2.o: Zusammenlinken

Bibliotheken einbinden:
- gcc -o programm programm.c -lm: Math-Bibliothek
- gcc -o programm programm.c -I/pfad/include -L/pfad/lib -lbibliothek

Das Build-Tool make:

make automatisiert den Build-Prozess bei großeren Projekten. Verwaltet Abhangigkeiten zwischen Dateien. Kompiliert nur geanderte Dateien neu.

Makefile-Grundstruktur:
  ziel: abhangigkeiten
      befehle

Beispiel-Makefile:
  CC = gcc
  CFLAGS = -Wall -O2

  programm: main.o funktionen.o
      $(CC) -o programm main.o funktionen.o

  main.o: main.c header.h
      $(CC) $(CFLAGS) -c main.c

  funktionen.o: funktionen.c header.h
      $(CC) $(CFLAGS) -c funktionen.c

  clean:
      rm -f *.o programm

Make-Befehle:
- make: Baut Standard-Ziel (erstes im Makefile)
- make ziel: Baut spezifisches Ziel
- make clean: Fuhrt Aufraum-Ziel aus

Weitere Entwicklungswerkzeuge:

g++ - C++-Compiler (Teil von gcc)
gdb - GNU Debugger fur Fehlersuche
valgrind - Speicher-Debugging und Profiling
git - Versionsverwaltung`,
    keyPoints: [
      "gcc: GNU C-Compiler, kompiliert C/C++-Programme",
      "Phasen: Praprozessor → Compiler → Assembler → Linker",
      "make: Automatisiert Build-Prozess uber Makefile",
      "Weitere Tools: g++, gdb, valgrind, git"
    ]
  },
  {
    title: "Eingebaute Hilfe (man-Pages)",
    summary: `Linux-Systeme enthalten umfassende Dokumentation in Form von Manual Pages (man-Pages), die direkt im Terminal abrufbar sind.

Das man-Kommando:

man (manual) zeigt Dokumentation zu Befehlen, Systemaufrufen und Dateiformaten.

Grundlegende Verwendung:
- man befehl: Zeigt Manual Page zu einem Befehl
- man -k stichwort: Sucht in Beschreibungen (apropos)
- man -f befehl: Zeigt Kurzbeschreibung (whatis)

Navigation in man-Pages:
- Leertaste: Nachste Seite
- b: Vorige Seite
- /suchmuster: Vorwarts suchen
- n: Nachstes Suchergebnis
- q: Beenden

Sektionen der Manual Pages:

Man-Pages sind in 9 Sektionen unterteilt:
1. Benutzerbefehle (z.B. ls, cp, grep)
2. Systemaufrufe (z.B. open, read, fork)
3. Bibliotheksfunktionen (z.B. printf, malloc)
4. Spezialdateien (z.B. /dev/null, /dev/random)
5. Dateiformate (z.B. /etc/passwd, fstab)
6. Spiele und Bildschirmschoner
7. Verschiedenes (z.B. Makro-Pakete, Konventionen)
8. Systemverwaltungsbefehle (z.B. ifconfig, fdisk)
9. Kernel-Routinen

Sektion spezifizieren:
- man 1 intro: Intro zu Sektion 1
- man 2 open: Systemaufruf open (nicht Befehl)
- man 3 printf: Bibliotheksfunktion printf

Aufbau einer man-Page:

NAME - Kurzer Name und Beschreibung
SYNOPSIS - Syntax und Optionen
DESCRIPTION - Detaillierte Beschreibung
OPTIONS - Erlauterung der Optionen
EXAMPLES - Anwendungsbeispiele
SEE ALSO - Verwandte Befehle
BUGS - Bekannte Probleme
AUTHOR - Autor der Software

Weitere Hilfe-Quellen:

--help Option:
- Viele Befehle unterstutzen befehl --help
- Zeigt Kurzhilfe direkt im Terminal

info-System:
- info befehl: Alternative zu man (GNU-Projekt)
- Hypertextbasierte Dokumentation
- Navigation mit n (next), p (previous), u (up)

/usr/share/doc/:
- Zusatzliche Dokumentation zu installierten Paketen
- README-Dateien, Beispielkonfigurationen

Online-Ressourcen:
- https://man7.org - Online man-Pages
 - Distribution-spezifische Wikis (z.B. ArchWiki)`,
    keyPoints: [
      "man: Zeigt Manual Pages zu Befehlen und Funktionen",
      "9 Sektionen: 1=Befehle, 2=Systemaufrufe, 3=Bibliotheken, 8=Admin",
      "Navigation: Leertaste (vor), b (zuruck), / (suchen), q (beenden)",
      "Alternativen: --help, info, /usr/share/doc/"
    ]
  },
  {
    title: "Regulare Ausdrucke",

    summary: `Grundlegende Zeichen:

Grundlegende Zeichen:

Literale: Normale Zeichen passen auf sich selbst (a passt auf 'a')
. (Punkt): Passt auf ein beliebiges Zeichen
* (Stern): Vorheriges Element 0 oder mehr Male
+ (Plus): Vorheriges Element 1 oder mehr Male
? (Fragezeichen): Vorheriges Element 0 oder 1 Mal

Anker:
^ (Zirkumflex): Zeilenanfang
$ (Dollar): Zeilenende
\\b: Wortgrenze

Zeichenklassen:

[abc]: Eines der Zeichen a, b oder c
[a-z]: Kleinbuchstabe von a bis z
[A-Z]: Großbuchstabe von A bis Z
[0-9]: Ziffer von 0 bis 9
[^abc]: Beliebiges Zeichen außer a, b, c

Vordefinierte Klassen:
\\d: Ziffer [0-9]
\\w: Wort-Zeichen [a-zA-Z0-9_]
\\s: Whitespace (Leerzeichen, Tab, Newline)
\\D, \\W, \\S: Jeweils Negation

Quantifizierer:

{n}: Genau n Wiederholungen
{n,}: Mindestens n Wiederholungen
{n,m}: Zwischen n und m Wiederholungen

Beispiele:
- [0-9]{3}: Genau 3 Ziffern
- [a-z]{2,5}: 2 bis 5 Kleinbuchstaben
- \\d+: Eine oder mehr Ziffern

Gruppierung und Alternativen:

(muster): Gruppe fur Wiederverwendung
|: Oder-Operator (Alternative)

Beispiele:
- (ab)+: ab, abab, ababab, ...
- (Hund|Katze): Hund oder Katze
- ^(http|https|ftp)://: URL-Protokoll

Escaping:

Metazeichen mussen escaped werden:
- \\. : Literaler Punkt
- \\* : Literaler Stern
- \\[ : Literale eckige Klammer

Praktische Beispiele:

E-Mail (vereinfacht):
[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}

IP-Adresse (vereinfacht):
([0-9]{1,3}\\.){3}[0-9]{1,3}

Datum (TT.MM.JJJJ):
[0-3][0-9]\\.[0-1][0-9]\\.[0-9]{4}

Telefonnummer:
\\+?[0-9]{1,3}[\\s-]?\\(?[0-9]{2,4}\\)?[\\s-]?[0-9]{3,}

Verwendung in Linux-Tools:

grep: grep "muster" datei
sed: sed 's/alt/neu/g' datei
awk: awk '/muster/ {print}' datei
less: / gefolgt von Muster
vim: /muster oder :s/alt/neu/g

Varianten:

BRE (Basic Regular Expressions): grep, sed (Standard)
ERE (Extended Regular Expressions): grep -E, egrep
PCRE (Perl Compatible): grep -P (wenn verfugbar)`,
    keyPoints: [
      "Grundelemente: . (beliebig), * (0+), + (1+), ? (0-1)",
      "Anker: ^ (Anfang), $ (Ende), \\b (Wortgrenze)",
      "Klassen: [a-z] (Bereich), [^abc] (außer), \\d (Ziffer), \\w (Wort)",
      "Tools: grep, sed, awk, vim - BRE, ERE und PCRE-Varianten"
    ]
  },
  {
    title: "Ein-/Ausgabe-Umleitung und Pipes",
    summary: `Unix-Systeme basieren auf dem Konzept von Datenstro men (Streams). Die Umleitung und Verkettung dieser Strome ist ein zentrales Prinzip der Unix-Philosophie.

Standard-Datenstr ome:

Jedes Programm hat standardmaßig drei Datenstr ome:
- stdin (0): Standard-Eingabe (Tastatur)
- stdout (1): Standard-Ausgabe (Bildschirm)
- stderr (2): Standard-Fehlerausgabe (Bildschirm)

Ausgabe-Umleitung:

>: Uberschreibt Datei mit stdout
- befehl > datei: Normale Ausgabe in Datei
- befehl 2> datei: Fehlerausgabe in Datei
- befehl &> datei: Beide in Datei (bash)
- befehl > datei 2>&1: Beide in Datei (portabel)

>>: Hangt an Datei an
- befehl >> datei: An Datei anhangen
- befehl 2>> datei: Fehler anhangen

Eingabe-Umleitung:

<: Liest Eingabe aus Datei
- befehl < datei: Liest aus Datei statt Tastatur
- sort < unsortiert.txt > sortiert.txt

<<: Here-Document (mehrzeilige Eingabe)
  cat << EOF > datei.txt
  Zeile 1
  Zeile 2
  EOF

Pipes (|):

Die Pipe verbindet stdout eines Befehls mit stdin eines anderen.

Grundprinzip:
befehl1 | befehl2 | befehl3

Ausgabe von befehl1 wird Eingabe fur befehl2, dessen Ausgabe Eingabe fur befehl3 wird.

Praktische Beispiele:

Zeilenanzahl:
- cat datei.txt | wc -l
- ls | wc -l (Anzahl Dateien)

Filtern und Sortieren:
 - ps aux | grep firefox
- ls -l | sort -k5 -n (nach Dateigroße)
- cat /etc/passwd | cut -d: -f1 | sort

Paging:
- cat lange_datei.txt | less
- dmesg | less

Statistiken:
- cat datei.txt | sort | uniq -c | sort -n
- history | awk '{print $2}' | sort | uniq -c | sort -rn | head

Komplexe Pipelines:

Kombinierte Verarbeitung:
- Top 10 meist verwendete Befehle: history | awk | sort | uniq -c | sort -rn | head -10
- Großte Dateien finden: find mit -exec ls, sortiert nach Große
- Logfile-Analyse: cat access.log mit awk, sort, uniq fur IP-Statistiken

Tee-Kommando:

tee liest von stdin, schreibt nach stdout UND in Datei(en).

- befehl | tee datei: In Datei und auf Bildschirm
- befehl | tee -a datei: Anhangen statt uberschreiben
- befehl | tee datei1 datei2: In mehrere Dateien

Named Pipes (FIFOs):

mkfifo mypipe: Erstellt Named Pipe
- Programm1 > mypipe &
- Programm2 < mypipe

Prozesssubstitution (bash):

<(befehl): Befehlsausgabe als Datei behandeln
- diff <(ls dir1) <(ls dir2)
 - comm <(sort file1) <(sort file2)`,
    keyPoints: [
      "Streams: stdin (0), stdout (1), stderr (2)",
      "Umleitung: > (uberschreiben), >> (anhangen), < (Eingabe), 2> (Fehler)",
      "Pipes: | verbindet stdout mit stdin, ermoglicht Befehlsketten",
      "tee: Ausgabe gleichzeitig in Datei und stdout"
    ]
  },
  {
    title: "Unix-Baukasten (grep, sed, sort, cut)",
    summary: `Unix folgt der Philosophie "kleine, spezialisierte Werkzeuge, die sich kombinieren lassen". Der Unix-Baukasten bietet leistungsfahige Textverarbeitungswerkzeuge.

grep - Global Regular Expression Print:

Sucht Zeilen, die ein Muster enthalten.

Grundlegende Verwendung:
- grep "muster" datei: Sucht Muster in Datei
- grep -i "muster" datei: Groß-/Kleinschreibung ignorieren
- grep -v "muster" datei: Invertiert (Zeilen OHNE Muster)
- grep -r "muster" verzeichnis: Rekursiv in Verzeichnis
- grep -n "muster" datei: Mit Zeilennummern
- grep -c "muster" datei: Nur Anzahl der Treffer
- grep -l "muster" *.txt: Nur Dateinamen mit Treffern
- grep -A 3 "muster" datei: 3 Zeilen nach Treffer (After)
- grep -B 3 "muster" datei: 3 Zeilen vor Treffer (Before)
- grep -C 3 "muster" datei: 3 Zeilen vor und nach (Context)

Erweiterte RegEx:
- grep -E "muster" datei: Extended RegEx (oder egrep)
- grep -P "muster" datei: Perl-kompatible RegEx (wenn verfugbar)

Praktische Beispiele:
- ps aux | grep firefox: Laufende Firefox-Prozesse
- grep -r "TODO" *.c: Alle TODOs in C-Dateien
- grep "^[^#]" /etc/fstab: Zeilen ohne # am Anfang

sed - Stream Editor:

Transformiert Text wahrend des Durchlaufs.

Substitution (Ersetzen):
- sed 's/alt/neu/' datei: Erstes Vorkommen pro Zeile
- sed 's/alt/neu/g' datei: Alle Vorkommen (global)
- sed 's/alt/neu/2' datei: Zweites Vorkommen
- sed 's/alt/neu/gi' datei: Global, case-insensitive

Zeilen loschen:
- sed '/muster/d' datei: Zeilen mit Muster loschen
- sed '3d' datei: Zeile 3 loschen
- sed '2,5d' datei: Zeilen 2-5 loschen
- sed '/^$/d' datei: Leere Zeilen loschen
- sed '/^#/d' datei: Kommentarzeilen loschen

Zeilen extrahieren:
- sed -n '10,20p' datei: Nur Zeilen 10-20 ausgeben
- sed -n '/muster/p' datei: Nur passende Zeilen

In-Place-Bearbeitung:
- sed -i 's/alt/neu/g' datei: Datei direkt andern
- sed -i.bak 's/alt/neu/g' datei: Mit Backup (.bak)

Beispiele:
- sed 's/^/# /' datei: # an Zeilenanfang setzen
- sed 's/[[:space:]]*$//' datei: Trailing Whitespace entfernen
- sed 's/\\([0-9]\\{3\\}\\)-\\([0-9]\\{4\\}\\)/\\1.\\2/' datei: RegEx-Gruppen

sort - Sortieren:

Sortiert Zeilen alphabetisch oder numerisch.

Grundoptionen:
- sort datei: Alphabetisch aufsteigend
- sort -r datei: Absteigend (reverse)
- sort -n datei: Numerisch
- sort -h datei: Human-readable (1K, 2M, 3G)
- sort -u datei: Unique (Duplikate entfernen)
- sort -f datei: Case-insensitive

Spalten sortieren:
- sort -k2 datei: Nach 2. Spalte
- sort -k2,2 datei: Nur 2. Spalte
- sort -k2n datei: 2. Spalte numerisch
- sort -t: -k3 datei: Trennzeichen : , 3. Feld

Beispiele:
- ls -l | sort -k5 -n: Nach Dateigroße
- sort -t: -k3 -n /etc/passwd: Nach User-ID
- du -sh * | sort -h: Verzeichnisgroßen

cut - Spalten extrahieren:

Extrahiert Spalten oder Zeichenbereiche.

Zeichen-Position:
- cut -c1-10 datei: Zeichen 1-10
- cut -c5 datei: Nur Zeichen 5
- cut -c10- datei: Ab Zeichen 10

Felder (Spalten):
- cut -f1 datei: Erstes Feld (Tab-getrennt)
- cut -f1,3 datei: Felder 1 und 3
- cut -f2- datei: Ab Feld 2
- cut -d: -f1 /etc/passwd: Benutzernamen
- cut -d' ' -f1,3 datei: Leerzeichen als Trenner

Beispiele:
- cat /etc/passwd | cut -d: -f1,6: Benutzer und Home
- ls -l | cut -c30-: Ab Spalte 30
- echo $PATH | tr ':' '\\n': PATH-Komponenten

Kombinationen im Unix-Baukasten:

Beispiele fur Befehlsk ettungen:
- Top-Benutzer nach CPU-Nutzung: ps aux | sort -k3 -rn | head -5
- Eindeutige IPs in Logfile zahlen: cat access.log | awk | sort | uniq -c
- Kommentare und Leerzeilen entfernen: grep -v kombiniert
- Duplikate finden: sort datei | uniq -d
 - Haufigste Worter: cat text.txt | tr | sort | uniq -c | sort -rn | head -10`,
    keyPoints: [
      "grep: Zeilen suchen (mit RegEx, -i, -v, -r, -n)",
      "sed: Text transformieren (s/alt/neu/g, Zeilen loschen)",
      "sort: Zeilen sortieren (-n numerisch, -r reverse, -k Spalte)",
      "cut: Spalten extrahieren (-c Zeichen, -f Felder, -d Trenner)"
    ]
  }
];
