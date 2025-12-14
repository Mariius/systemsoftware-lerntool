export const chapter4Topics = [
  {
    title: "Benutzer und Gruppen",
    summary: `Linux ist ein Mehrbenutzersystem mit strikter Trennung zwischen Benutzern. Jeder Benutzer und jede Gruppe hat eindeutige IDs und spezifische Rechte.

Benutzerkonzept:

Jeder Benutzer hat:
- Benutzername (Login-Name)
- User ID (UID) - numerische Kennung
- Primäre Gruppe (GID)
- Home-Verzeichnis
- Login-Shell
- Passwort-Hash

Der Root-Benutzer (UID 0) hat uneingeschränkte Systemrechte. System-Benutzer (UID < 1000) sind für Dienste und Dämonen reserviert. Normale Benutzer (UID ≥ 1000) sind menschliche Anwender.

Wichtige Dateien:

/etc/passwd - Benutzerdatenbank:

username:x:UID:GID:Kommentar:Home:Shell

Beispiel: 'john:x:1000:1000:John Doe:/home/john:/bin/bash'

/etc/shadow - Passwort-Hashes (nur von root lesbar):

username:hash:lastchange:min:max:warn:inactive:expire

Enthält verschlüsselte Passwörter und Ablaufinformationen.

/etc/group - Gruppendatenbank:

groupname:x:GID:members

Beispiel: 'developers:x:1001:john,alice,bob'

Gruppenverwaltung:

Primäre Gruppe - Wird bei Benutzererstellung zugewiesen, verwendet für neue Dateien.
Sekundäre Gruppen - Zusätzliche Gruppenmitgliedschaften für erweiterte Zugriffsrechte.

Ein Benutzer kann Mitglied in mehreren Gruppen sein. Die aktuelle Gruppenidentität bestimmt Zugriffsrechte.

Benutzerverwaltung:

Benutzer anlegen:
- useradd benutzername: Legt Benutzer an
- useradd -m -s /bin/bash username: Mit Home und Shell
- adduser username: Interaktive Variante (Debian/Ubuntu)

Passwort setzen:
- passwd username: Setzt/ändert Passwort

Benutzer ändern:
- usermod -l neuername altername: Umbenennen
- usermod -aG gruppe username: Zu Gruppe hinzufügen
- usermod -s /bin/zsh username: Shell ändern
- usermod -d /neues/home username: Home ändern

Benutzer löschen:
- userdel username: Löscht Benutzer
- userdel -r username: Mit Home-Verzeichnis

Gruppen verwalten:

- groupadd gruppenname: Gruppe erstellen
- groupmod -n neuername altername: Umbenennen
- groupdel gruppenname: Gruppe löschen
- gpasswd -a username gruppe: Benutzer hinzufügen
- gpasswd -d username gruppe: Benutzer entfernen

Informationen abfragen:

- id: Zeigt eigene UID, GID und Gruppen
- id username: Für bestimmten Benutzer
- groups: Zeigt eigene Gruppen
- groups username: Für bestimmten Benutzer
- who: Zeigt angemeldete Benutzer
- whoami: Zeigt aktuellen Benutzernamen
- finger username: Detaillierte Benutzerinfo (wenn installiert)

Benutzer wechseln:

- su username: Wechselt zu anderem Benutzer (benötigt dessen Passwort)
- su -: Wechselt zu root mit dessen Umgebung
 - su - username: Wechselt mit Login-Umgebung`,
    keyPoints: [
      "Jeder Benutzer hat UID, primäre Gruppe (GID), Home, Shell",
      "Wichtige Dateien: /etc/passwd, /etc/shadow, /etc/group",
      "Verwaltung: useradd/userdel, usermod, groupadd/groupdel",
      "Root (UID 0) hat volle Rechte, normale Benutzer ≥ UID 1000"
    ]
  },
  {
    title: "Zugriffsrechte (chmod, chown)",
    summary: `Linux verwendet ein Rechtesystem mit drei Ebenen: Besitzer (Owner), Gruppe (Group) und Andere (Others). Jede Ebene kann Lese-, Schreib- und Ausführungsrechte haben.

Rechtesystem-Grundlagen:

Jede Datei/Verzeichnis hat:
- Einen Besitzer (User)
- Eine Besitzergruppe (Group)
- Zugriffsrechte für Owner, Group, Others

Drei Arten von Rechten:
- r (read): Lesen - Dateiinhalt anzeigen, Verzeichnisinhalt listen
- w (write): Schreiben - Datei ändern, in Verzeichnis Dateien erstellen/löschen
- x (execute): Ausführen - Programm starten, Verzeichnis betreten

Darstellung in ls -l:


-rwxr-xr-- 1 john developers 1024 Jan 1 12:00 script.sh
│││││││││
│└┴┴┴┴┴┴┴┴─ Rechte (9 Zeichen)
└────────── Dateityp (- = Datei, d = Verzeichnis, l = Link)

Rechte aufgeteilt:
rwx r-x r--
│   │   └── Others: read
│   └────── Group: read, execute
└────────── Owner: read, write, execute


Dateitypkennzeichen:
- -: Normale Datei
- d: Verzeichnis (directory)
- l: Symbolischer Link
- b: Block-Device
- c: Character-Device
- p: Named Pipe (FIFO)
- s: Socket

chmod - Rechte ändern:

Symbolische Notation:
- chmod u+x datei: User Ausführungsrecht hinzufügen
- chmod g-w datei: Group Schreibrecht entfernen
- chmod o=r datei: Others nur Leserecht
- chmod a+x datei: Alle (all) Ausführungsrecht
- chmod u+x,g-w,o=r datei: Mehrere Änderungen

Wer: u (user/owner), g (group), o (others), a (all)
Operator: + (hinzufügen), - (entfernen), = (setzen)
Rechte: r, w, x

Numerische (oktale) Notation:
Jedes Recht hat einen Wert:
- r = 4
- w = 2
- x = 1

Kombiniert durch Addition:
- 7 = rwx (4+2+1)
- 6 = rw- (4+2)
- 5 = r-x (4+1)
- 4 = r-- (4)
- 0 = --- (keine Rechte)

Drei Ziffern für Owner, Group, Others:
- chmod 755 datei: rwxr-xr-x (Owner: 7, Group: 5, Others: 5)
- chmod 644 datei: rw-r--r-- (Standard für Dateien)
- chmod 600 datei: rw------- (Nur Owner kann lesen/schreiben)
- chmod 700 verzeichnis: rwx------ (Nur Owner Zugriff)

Rekursiv anwenden:
- chmod -R 755 verzeichnis: Für alle Dateien/Unterverzeichnisse

chown - Besitzer ändern:

Besitzer ändern:
- chown benutzer datei: Neuer Besitzer
- chown benutzer:gruppe datei: Besitzer und Gruppe
- chown :gruppe datei: Nur Gruppe (alternativ: chgrp)

Rekursiv:
- chown -R benutzer:gruppe verzeichnis: Für alle Inhalte

Nur mit Root-Rechten:
- sudo chown john:developers datei

chgrp - Gruppe ändern:

- chgrp gruppe datei: Ändert Gruppe
- chgrp -R gruppe verzeichnis: Rekursiv

Spezielle Rechte:

SUID (Set User ID) - 4000:
- chmod 4755 datei oder chmod u+s datei
- Programm läuft mit Rechten des Besitzers (nicht des Ausführenden)
- Beispiel: /usr/bin/passwd (muss Root-Rechte haben)
- Anzeige: rwsr-xr-x (s statt x bei User)

SGID (Set Group ID) - 2000:
- chmod 2755 verzeichnis oder chmod g+s verzeichnis
- Neue Dateien erben Gruppe des Verzeichnisses
- Anzeige: rwxr-sr-x (s statt x bei Group)

Sticky Bit - 1000:
- chmod 1777 verzeichnis oder chmod +t verzeichnis
- Nur Besitzer kann eigene Dateien löschen
- Beispiel: /tmp
- Anzeige: rwxrwxrwt (t statt x bei Others)

Kombiniert: 6755 = SUID + SGID + 755

Praktische Beispiele:


# Skript ausführbar machen
chmod +x script.sh

# Konfigurationsdatei schützen
chmod 600 config.ini

# Webserver-Dateien
chmod 644 *.html
chmod 755 cgi-bin/

# Shared-Verzeichnis mit Sticky-Bit
chmod 1777 /shared

# Rekursiv Besitzer ändern
sudo chown -R www-data:www-data /var/www
`,
    keyPoints: [
      "Rechte: r (read), w (write), x (execute) für Owner, Group, Others",
      "chmod: Symbolisch (u+x) oder oktal (755)",
      "chown: Besitzer ändern, chgrp: Gruppe ändern",
      "Spezialrechte: SUID (4), SGID (2), Sticky-Bit (1)"
    ]
  },
  {
    title: "Software-/Paket-Verwaltung (apt, dpkg)",
    summary: `Linux-Distributionen verwenden Paketverwaltungssysteme zur Installation, Aktualisierung und Entfernung von Software. Debian/Ubuntu nutzen apt und dpkg.

Paketkonzept:

Ein Paket ist eine Archivdatei (.deb bei Debian/Ubuntu) mit:
- Programmdateien und Bibliotheken
- Konfigurationsdateien
- Dokumentation
- Metadaten (Abhängigkeiten, Konflikte, Beschreibung)
- Installations-/Deinstallations-Skripte

Vorteile der Paketverwaltung:
- Automatische Abhängigkeitsauflösung
- Zentrale Updates aller installierter Software
- Saubere Deinstallation ohne Rückstände
- Verifizierung durch Signaturen

dpkg - Low-Level Paketverwaltung:

dpkg arbeitet direkt mit .deb-Dateien, löst aber keine Abhängigkeiten auf.

Installation:
- dpkg -i paket.deb: Installiert Paket
- dpkg -i --force-depends paket.deb: Ignoriert Abhängigkeiten (riskant)

Entfernung:
- dpkg -r paketname: Entfernt Paket (behält Konfiguration)
- dpkg -P paketname: Purge - vollständige Entfernung

Informationen:
- dpkg -l: Liste aller installierten Pakete
- dpkg -l | grep firefox: Bestimmtes Paket suchen
- dpkg -L paketname: Zeigt installierte Dateien
- dpkg -S /pfad/datei: Findet Paket zu Datei
- dpkg -s paketname: Status und Info zu Paket

apt - Advanced Package Tool:

apt ist das moderne High-Level-Tool (Nachfolger von apt-get und apt-cache).

Paketlisten aktualisieren:
- sudo apt update: Lädt aktuelle Paketlisten von Repositories
- Sollte vor jeder Installation/Aktualisierung ausgeführt werden

Pakete suchen:
- apt search suchbegriff: Sucht in Namen und Beschreibungen
- apt show paketname: Detaillierte Paketinformationen

Pakete installieren:
- sudo apt install paketname: Installiert Paket mit Abhängigkeiten
- sudo apt install paket1 paket2: Mehrere Pakete
- sudo apt install paket=version: Spezifische Version
- sudo apt install --reinstall paket: Neuinstallation

Pakete entfernen:
- sudo apt remove paketname: Entfernt Paket (behält Konfiguration)
- sudo apt purge paketname: Vollständige Entfernung mit Konfiguration
- sudo apt autoremove: Entfernt nicht mehr benötigte Abhängigkeiten

Pakete aktualisieren:
- sudo apt upgrade: Aktualisiert alle Pakete
- sudo apt full-upgrade: Upgrade mit Paketentfernung (bei Konflikten)
- sudo apt list --upgradable: Zeigt verfügbare Updates

Informationen:
- apt list --installed: Alle installierten Pakete
- apt list --installed | grep firefox: Bestimmtes Paket
- apt-cache policy paketname: Verfügbare Versionen

Aufräumen:
- sudo apt clean: Löscht Paket-Cache komplett
- sudo apt autoclean: Löscht veraltete Pakete aus Cache
- sudo apt autoremove: Entfernt verwaiste Abhängigkeiten

Repository-Verwaltung:

Repositories sind Software-Quellen, definiert in:
- /etc/apt/sources.list: Hauptdatei
- /etc/apt/sources.list.d/: Zusätzliche Listen

Repository hinzufügen:
- sudo add-apt-repository ppa:user/ppa-name: PPA hinzufügen (Ubuntu)
- sudo apt update: Paketlisten aktualisieren

Repository entfernen:
- sudo add-apt-repository --remove ppa:user/ppa-name

PPA (Personal Package Archive):

Ubuntu-spezifisch, ermöglicht Drittanbieter-Software:

sudo add-apt-repository ppa:graphics-drivers/ppa
sudo apt update
sudo apt install nvidia-driver-525


Praktische Workflows:

Neue Software installieren:

sudo apt update
sudo apt search nginx
sudo apt show nginx
sudo apt install nginx


System aktualisieren:

sudo apt update
sudo apt list --upgradable
sudo apt upgrade
sudo apt autoremove


Defekte Installation reparieren:

sudo dpkg --configure -a
sudo apt --fix-broken install


Paketabhängigkeiten prüfen:

apt-cache depends paketname  # Abhängigkeiten
apt-cache rdepends paketname  # Reverse dependencies
`,
    keyPoints: [
      "dpkg: Low-Level, arbeitet mit .deb-Dateien, keine Abhängigkeiten",
      "apt: High-Level, automatische Abhängigkeitsauflösung",
      "Workflow: update → search/show → install/upgrade/remove",
      "Repositories in /etc/apt/sources.list, PPAs für Ubuntu"
    ]
  },
  {
    title: "System-Aktualisierung",
    summary: `Regelmäßige System-Updates sind essentiell für Sicherheit, Stabilität und neue Features. Linux-Distributionen bieten verschiedene Update-Strategien.

Wichtigkeit von Updates:

Sicherheits-Updates schließen Schwachstellen und schützen vor Angriffen.
Bug-Fixes beheben Fehler und verbessern Stabilität.
Feature-Updates bringen neue Funktionen.
Kernel-Updates verbessern Hardware-Support und Performance.

Update-Prozess unter Debian/Ubuntu:

Standard-Update-Workflow:

# 1. Paketlisten aktualisieren
sudo apt update

# 2. Verfügbare Updates anzeigen
apt list --upgradable

# 3. Updates installieren
sudo apt upgrade

# 4. Ungenutzte Pakete entfernen
sudo apt autoremove

# 5. Paket-Cache aufräumen
sudo apt autoclean


Unterschied upgrade vs. full-upgrade:

apt upgrade:
- Aktualisiert Pakete ohne Entfernung
- Hält Pakete zurück, wenn Abhängigkeiten Probleme machen
- Sicher, keine überraschenden Änderungen

apt full-upgrade (früher dist-upgrade):
- Darf Pakete entfernen oder hinzufügen
- Löst komplexe Abhängigkeitskonflikte
- Für große Aktualisierungen (z.B. Distribution-Upgrade)

Automatische Updates:

unattended-upgrades (Debian/Ubuntu):

# Installation
sudo apt install unattended-upgrades

# Konfiguration
sudo dpkg-reconfigure unattended-upgrades


Konfiguration in /etc/apt/apt.conf.d/50unattended-upgrades:
- Nur Sicherheitsupdates oder alle Updates
- E-Mail-Benachrichtigung
- Automatischer Neustart

Kernel-Updates:

Nach Kernel-Update ist Neustart erforderlich.

Prüfen, ob Neustart nötig:
- Datei /var/run/reboot-required existiert
- Befehl: '[ -f /var/run/reboot-required ] && echo "Neustart erforderlich"'

Mehrere Kernel parallel:
- Ubuntu behält alte Kernel-Versionen
- Auswahl im GRUB-Bootmenü
- Alte Kernel entfernen: 'sudo apt autoremove'

Aktuell laufender Kernel:
- uname -r: Zeigt Kernel-Version

Distribution-Upgrade:

Upgrade auf neue Ubuntu-Version:

# Vorbereitung
sudo apt update
sudo apt upgrade
sudo apt dist-upgrade
sudo apt autoremove

# Upgrade durchführen
sudo do-release-upgrade


Release-Upgrade nur bei LTS (Long Term Support):
- do-release-upgrade -d: Auch auf Entwicklerversion

Update-Probleme lösen:

Gehaltene Pakete (held):
- apt-mark showhold: Zeigt gehaltene Pakete
- sudo apt-mark unhold paket: Freigeben

Defekte Pakete:

sudo dpkg --configure -a
sudo apt --fix-broken install
sudo apt clean
sudo apt update


Rollback bei Problemen:

# Paket downgraden
sudo apt install paket=ältere-version

# Kernel wechseln
# Im GRUB-Menü "Advanced options" → älteren Kernel wählen


Best Practices:

Regelmäßigkeit:
- Server: Wöchentlich oder automatisch (nur Sicherheitsupdates)
- Desktop: Bei Verfügbarkeit, mindestens monatlich

Vor wichtigen Updates:
- Daten sichern
- Bei Servern: Wartungsfenster planen
- Release Notes lesen

Nach Updates:
- System auf Funktionalität prüfen
- Bei Servern: Dienste überprüfen (systemctl status)
- Logs kontrollieren (/var/log/apt/)

Versionskontrolle:

apt-cache policy zeigt verfügbare Versionen:

apt-cache policy nginx


Pinning (Versionsfixierung):
- In /etc/apt/preferences oder preferences.d/
- Ermöglicht Vorzug bestimmter Versionen/Repositories

Update-Logs:

Updates werden protokolliert:
- /var/log/apt/history.log: Installationen, Updates
- /var/log/apt/term.log: Detaillierte Terminal-Ausgabe
 - /var/log/dpkg.log: dpkg-Aktivitäten`,
    keyPoints: [
      "Update-Workflow: apt update → upgrade → autoremove",
      "upgrade: Sicher, full-upgrade: Darf Pakete entfernen",
      "Kernel-Updates erfordern Neustart (/var/run/reboot-required)",
      "unattended-upgrades für automatische Sicherheitsupdates"
    ]
  },
  {
    title: "Snap-Pakete",
    summary: `Snap ist ein alternatives Paketsystem von Canonical (Ubuntu), das universelle, containerisierte Anwendungen bereitstellt.

Snap-Konzept:

Snaps sind selbstständige Pakete mit:
- Anwendung und allen Abhängigkeiten
- Laufzeitumgebung (Runtime)
- Isolierte Ausführung (Sandboxing)

Vorteile:
- Funktionieren auf allen Linux-Distributionen
- Automatische Updates
- Mehrere Versionen parallel installierbar
- Isolation erhöht Sicherheit
- Entwickler kontrollieren Updates direkt

Nachteile:
- Größere Paketgröße (Abhängigkeiten dupliziert)
- Langsamerer Start
- Begrenzte System-Integration
- Zentralisierung über Snap Store

Snap vs. traditionelle Pakete:

Traditionell (apt/dpkg):
- System-weite Installation
- Gemeinsame Bibliotheken
- Distribution kuratiert Pakete
- Engere System-Integration

Snap:
- Container-basiert
- Jedes Snap bringt Abhängigkeiten mit
- Entwickler veröffentlichen direkt
- Isolation vom System

Snap-Verwaltung:

Installation (auf Ubuntu meist vorinstalliert):

sudo apt install snapd


Snaps suchen:
- snap find suchbegriff: Sucht im Snap Store
- snap info paketname: Detaillierte Informationen

Snaps installieren:
- sudo snap install paketname: Installiert aus stable-Channel
- sudo snap install --classic paket: Classic confinement (weniger isoliert)
- sudo snap install --edge paket: Edge-Version (experimentell)

Channels (Veröffentlichungskanäle):
- stable: Stabile Version (Standard)
- candidate: Release-Kandidat
- beta: Beta-Version
- edge: Entwicklerversion

Snaps verwalten:
- snap list: Zeigt installierte Snaps
- snap refresh: Aktualisiert alle Snaps
- snap refresh paketname: Aktualisiert bestimmtes Snap
- sudo snap remove paketname: Deinstalliert Snap
- sudo snap revert paketname: Zurück zur vorherigen Version

Snap-Versionen:

Mehrere Versionen parallel:

sudo snap install --channel=3.8 firefox
sudo snap install --channel=4.0 firefox
snap switch --channel=4.0 firefox


Automatische Updates:

Snaps aktualisieren sich automatisch:
- Standardmäßig 4x täglich geprüft
- Konfigurierbar mit: snap refresh --time

Updates verzögern:
- sudo snap refresh --hold firefox: Update zurückhalten
- sudo snap refresh --unhold firefox: Freigeben

Confinement-Modi:

strict: Vollständige Isolation (Standard)
- App läuft in Sandbox
- Zugriff nur über definierte Schnittstellen (Interfaces)

classic: Weniger Isolation
- Zugriff wie traditionelle Anwendungen
- Für Entwicklerwerkzeuge (VSCode, IDEs)

devmode: Entwicklungsmodus
- Keine Isolation
- Für Snap-Entwicklung

Interfaces (Schnittstellen):

Interfaces definieren Zugriff auf Systemressourcen:
- snap interfaces: Zeigt verfügbare Interfaces
- snap connections paketname: Zeigt Verbindungen eines Snaps
- sudo snap connect snap:plug slot: Interface verbinden
- sudo snap disconnect snap:plug: Trennen

Beispiele:

# Kamera-Zugriff erlauben
sudo snap connect firefox:camera

# Home-Zugriff entfernen
sudo snap disconnect snap:home


Snap-Verzeichnisse:

Snap-Installation: /snap/
Snap-Daten: ~/snap/paketname/
Snap-Konfiguration: /var/snap/

Praktische Beispiele:


# Firefox als Snap (Ubuntu 22.04+)
sudo snap install firefox

# VS Code als Classic Snap
sudo snap install --classic code

# Docker als Snap
sudo snap install docker

# LXD für Container
sudo snap install lxd

# Bestimmte Version halten
sudo snap refresh --channel=3.8/stable firefox


Snap vs. Flatpak vs. AppImage:

Snap (Canonical):
- Snap Store, snapd-Daemon
- Ubuntu-fokussiert, funktioniert aber überall

Flatpak (Freedesktop):
- Flathub, flatpak-Daemon
- Desktop-Anwendungen, Fedora-/GNOME-nah

AppImage:
- Einzelne ausführbare Datei
- Kein Daemon, kein Root
- Portable, aber keine automatischen Updates

Hybrid-Systeme:

Moderne Systeme verwenden oft mehrere Paketsysteme:
- apt für System-Pakete
- Snap für Anwendungen (Ubuntu)
- Flatpak für zusätzliche Desktop-Apps
  - AppImage für portable Tools`,
    keyPoints: [
      "Snap: Containerisierte, universelle Pakete mit Abhängigkeiten",
      "Automatische Updates, mehrere Versionen parallel",
      "Channels: stable, candidate, beta, edge",
      "Confinement: strict (isoliert), classic (System-Zugriff), devmode"
    ]
  },
  {
    title: "Netzwerk-Konfiguration",
    summary: `Linux bietet umfangreiche Werkzeuge zur Netzwerkverwaltung und -diagnose. Die Konfiguration kann über Kommandozeile oder Network Manager erfolgen.

Netzwerk-Grundlagen:

Wichtige Konzepte:
- IP-Adresse: Eindeutige Adresse im Netzwerk (IPv4: 192.168.1.10, IPv6: 2001:db8::1)
- Subnetzmaske: Definiert Netzwerkgröße (255.255.255.0 oder /24)
- Gateway: Router für externe Netzwerke
- DNS: Namensauflösung (Domain → IP)
- MAC-Adresse: Hardware-Adresse der Netzwerkkarte

Netzwerk-Schnittstellen:

Namenskonventionen:
- Klassisch: eth0, eth1, wlan0 (Ethernet, WLAN)
- Modern (Predictable Names): enp0s3, wlp3s0
  - en: Ethernet, wl: WLAN
  - p0s3: Bus/Slot-Position

Schnittstellen anzeigen:
- ip link show: Alle Netzwerkschnittstellen
- ip addr show: Mit IP-Adressen
- ip -s link: Mit Statistiken

Alte Befehle (veraltet, aber noch vorhanden):
- ifconfig: Zeigt Netzwerk-Konfiguration
- ifconfig eth0 up/down: Interface aktivieren/deaktivieren

IP-Konfiguration:

Temporäre Konfiguration (bis Neustart):

# IP-Adresse setzen
sudo ip addr add 192.168.1.100/24 dev enp0s3

# IP-Adresse entfernen
sudo ip addr del 192.168.1.100/24 dev enp0s3

# Interface aktivieren
sudo ip link set enp0s3 up

# Interface deaktivieren
sudo ip link set enp0s3 down

# Default Gateway setzen
sudo ip route add default via 192.168.1.1


Permanente Konfiguration (Netplan bei Ubuntu):

/etc/netplan/01-netcfg.yaml:

network:
  version: 2
  renderer: networkd
  ethernets:
    enp0s3:
      addresses:
        - 192.168.1.100/24
      gateway4: 192.168.1.1
      nameservers:
        addresses:
          - 8.8.8.8
          - 8.8.4.4


Anwenden:

sudo netplan apply


DHCP-Konfiguration:

network:
  version: 2
  ethernets:
    enp0s3:
      dhcp4: true


DNS-Konfiguration:

/etc/resolv.conf (wird oft automatisch generiert):

nameserver 8.8.8.8
nameserver 8.8.4.4
search local.domain


Systemd-resolved (moderner Ansatz):

# DNS-Server konfigurieren
sudo systemd-resolve --set-dns=8.8.8.8 --interface=enp0s3

# Status anzeigen
systemd-resolve --status


Routing:

Routing-Tabelle anzeigen:
- ip route show: Aktuelle Routen
- ip route get 8.8.8.8: Route zu bestimmtem Ziel

Route hinzufügen:

# Statische Route
sudo ip route add 10.0.0.0/24 via 192.168.1.254

# Default-Route
sudo ip route add default via 192.168.1.1


NetworkManager:

Grafisches und CLI-Tool für Netzwerkverwaltung:

nmcli (Kommandozeile):

# Verbindungen anzeigen
nmcli connection show

# Geräte anzeigen
nmcli device status

# Verbinden
nmcli connection up "Wired connection 1"

# Neue Verbindung erstellen
nmcli connection add type ethernet con-name "My Connection" ifname enp0s3

# WLAN
nmcli device wifi list
nmcli device wifi connect SSID password PASSWORD


nmtui (Text-UI):
- nmtui: Interaktive Textkonsole für Netzwerkkonfiguration

Netzwerk-Diagnose:

Verbindung testen:
- ping host: ICMP-Echo (Erreichbarkeit)
- ping -c 4 8.8.8.8: 4 Pakete senden
- ping6 ipv6.google.com: IPv6-Ping

Traceroute:
- traceroute host: Zeigt Weg zum Ziel
- mtr host: Kombiniert ping und traceroute

DNS-Abfragen:
- nslookup domain: DNS-Lookup (veraltet)
- dig domain: Detaillierte DNS-Abfrage
- dig @8.8.8.8 domain: Bestimmten DNS-Server nutzen
- host domain: Einfache DNS-Abfrage

Ports und Verbindungen:
- ss -tuln: Offene Ports (TCP/UDP, listening, numerisch)
- ss -tulpn: Mit Prozessinformationen
- netstat -tuln: Alte Alternative zu ss
- lsof -i :80: Prozesse auf Port 80

Netzwerk-Durchsatz:
- iftop: Echtzeit-Bandbreiten-Monitor
- nethogs: Nach Prozessen
- iperf3: Netzwerk-Performance-Test

Firewall (ufw - Uncomplicated Firewall):


# Firewall aktivieren
sudo ufw enable

# Status
sudo ufw status verbose

# Regeln
sudo ufw allow 22/tcp  # SSH
sudo ufw allow 80/tcp  # HTTP
sudo ufw allow from 192.168.1.0/24  # Subnetz

# Regel löschen
sudo ufw delete allow 80/tcp

# Standard-Policy
sudo ufw default deny incoming
sudo ufw default allow outgoing


Hostname:

Anzeigen/Setzen:
- hostname: Zeigt Hostname
- hostnamectl: Detaillierte Info
- sudo hostnamectl set-hostname neuer-name: Ändern

/etc/hosts für lokale Namen:

127.0.0.1    localhost
192.168.1.10 server.local server


Netzwerk-Services:

systemd-networkd: System-Daemon für Netzwerke
NetworkManager: Desktop-fokussiert, automatisch
systemd-resolved: DNS-Resolver`,
    keyPoints: [
      "IP-Konfiguration: ip addr, Netplan (/etc/netplan/*.yaml)",
      "DNS: /etc/resolv.conf, systemd-resolved",
      "Diagnose: ping, traceroute, dig, ss",
      "NetworkManager: nmcli, nmtui für einfache Verwaltung"
    ]
  }
];
