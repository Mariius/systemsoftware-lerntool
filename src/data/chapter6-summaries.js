export const chapter6Topics = [
  {
    title: "Dateisystem-Grundlagen",
    summary: `Ein Dateisystem organisiert und verwaltet Daten auf Speichermedien. Es stellt eine Abstraktion bereit, die Dateien und Verzeichnisse als logische Einheiten darstellt.

Aufgaben eines Dateisystems:
- Speicherung von Dateien und Verzeichnissen
- Verwaltung von Metadaten (Größe, Zeitstempel, Rechte)
- Effiziente Speicherplatznutzung
- Zugriffsrechte und Sicherheit
- Konsistenz und Fehlertoleranz

Hierarchische Struktur:
Linux verwendet eine Baumstruktur mit einer einzigen Wurzel (/). Alles ist eine Datei: Normale Dateien, Verzeichnisse, Geräte, Pipes, Sockets. Absolute Pfade beginnen mit /, relative ohne.

Grundkonzepte:
Block: Kleinste Speichereinheit (meist 4 KB). Superblock: Metadaten über Dateisystem (Größe, Block-Anzahl, freie Blocks). Block Bitmap: Verzeichnis freier/belegter Blocks. Inode Bitmap: Freie/belegte Inodes.

Dateitypen unter Linux:
- Regular File (-): Normale Datei
- Directory (d): Verzeichnis
- Symbolic Link (l): Link auf andere Datei
- Block Device (b): Block-orientiertes Gerät (Festplatte)
- Character Device (c): Zeichen-orientiert (Terminal)
- Named Pipe (p): FIFO für IPC
- Socket (s): Netzwerk-/IPC-Socket

FHS (Filesystem Hierarchy Standard):
/: Root-Verzeichnis
/bin: Essentielle Befehle
/sbin: System-Befehle (root)
/etc: Konfigurationsdateien
/home: Benutzer-Verzeichnisse
/root: Home des root-Benutzers
/tmp: Temporäre Dateien
/var: Variable Daten (Logs, Caches)
/usr: Benutzerprogramme und Daten
/opt: Optionale Software
/dev: Gerätedateien
/proc: Prozess-Informationen (virtuell)
/sys: System-Informationen (virtuell)
 /mnt, /media: Mount-Punkte`,
    keyPoints: [
      "Dateisystem: Organisation von Dateien, Verzeichnissen, Metadaten",
      "Hierarchie: Baumstruktur mit Wurzel /, alles ist eine Datei",
      "Block, Superblock, Inode: Grundbausteine des Dateisystems",
      "FHS: Standardisierte Verzeichnisstruktur (/bin, /etc, /home, /var)"
    ]
  },
  {
    title: "Inodes und Datenblöcke",
    summary: `Unix-Dateisysteme trennen Metadaten (Inodes) von Dateiinhalten (Datenblöcke). Diese Architektur ermöglicht effiziente Verwaltung und flexible Verlinkung.

Inode (Index Node):
Datenstruktur mit Datei-Metadaten:
- Dateityp und Zugriffsrechte
- UID/GID (Besitzer)
- Dateigröße
- Zeitstempel (atime, mtime, ctime)
- Link-Count (Anzahl Hardlinks)
- Zeiger auf Datenblöcke
- NICHT: Dateiname (steht im Verzeichnis)

Jede Datei hat genau eine Inode, identifiziert durch Inode-Nummer.

Inode-Struktur:
Direkte Zeiger (meist 12): Zeigen direkt auf Datenblöcke, für kleine Dateien (< 48 KB bei 4-KB-Blocks).

Einfach indirekt: Zeigt auf Block mit Zeigern auf Datenblöcke, erweitert Kapazität um ~1 MB.

Doppelt indirekt: Block → Blocks → Datenblöcke, für größere Dateien (~1 GB).

Dreifach indirekt: Noch eine Ebene, für sehr große Dateien.

Datenblöcke:
Enthalten tatsächlichen Dateiinhalt. Größe meist 4 KB (konfigurierbar: 1-64 KB). Kontinuierliche Allokation: Aufeinanderfolgende Blocks bevorzugt (Performance). Fragmentierung: Bei Verstreuung über Platte.

Verzeichnisse:
Spezielle Dateien, die Einträge enthalten:
- Dateiname
- Inode-Nummer

Verzeichnis-Inode zeigt auf Datenblöcke mit dieser Tabelle.

Beispiel-Verzeichnisinhalt:

Inode | Name
12345 | .
54321 | ..
67890 | datei.txt
11111 | unterverzeichnis


Inode-Informationen anzeigen:

ls -i datei.txt          # Zeigt Inode-Nummer
stat datei.txt           # Detaillierte Inode-Info
df -i                    # Inode-Nutzung pro Dateisystem


Vorteile des Inode-Systems:
- Metadaten getrennt von Daten
- Mehrere Namen für eine Datei (Hardlinks)
- Effiziente Verzeichnis-Operationen
  - Schneller Zugriff auf Metadaten`,
    keyPoints: [
      "Inode: Metadaten (Rechte, Größe, Zeitstempel, Block-Zeiger), nicht Dateiname",
      "Datenblöcke: Tatsächlicher Dateiinhalt, meist 4 KB",
      "Zeiger: Direkt, einfach/doppelt/dreifach indirekt für große Dateien",
      "Verzeichnis: Spezielle Datei mit Inode-Nummer zu Dateiname-Mapping"
    ]
  },
  {
    title: "Hard Links und Soft Links",
    summary: `Linux unterstützt zwei Arten von Links: Hardlinks (Mehrfachnamen für dieselbe Datei) und Symbolic Links (Verweise auf Pfade).

Hard Links:
Zusätzlicher Name für existierende Datei. Teilt dieselbe Inode mit Original. Referenzzähler (Link Count) verfolgt Anzahl der Namen. Datei wird erst gelöscht, wenn Link Count = 0.

Erstellen:
ln datei.txt hardlink.txt

Eigenschaften:
- Beide Namen gleichwertig (kein "Original")
- Änderungen an einem betreffen den anderen
- Gleiche Inode-Nummer
- Nur innerhalb eines Dateisystems
- Nicht für Verzeichnisse (verhindert Schleifen)
- Keine Kennung im ls (sieht aus wie normale Datei)

Anzeigen:

ls -li datei.txt hardlink.txt
# Gleiche Inode-Nummer, Link Count > 1


Symbolic Links (Symlinks, Softlinks):
Spezielle Datei, die Pfad zu Zieldatei enthält. Eigene Inode, verweist auf Pfad (nicht Inode).

Erstellen:
ln -s /pfad/zu/datei.txt symlink.txt

Eigenschaften:
- Erkennbar: lrwxrwxrwx (l = link)
- Zeigt auf Pfad (kann relativ oder absolut sein)
- Funktioniert über Dateisystemgrenzen
- Kann auf Verzeichnisse zeigen
- Kann auf nicht-existierende Ziele zeigen (broken link)
- Folgt Ziel bei Zugriff

Broken Links:
Wenn Ziel gelöscht/verschoben wird:

ls -l                    # Zeigt in rot (broken)
file symlink.txt         # "broken symbolic link"
readlink symlink.txt     # Zeigt Ziel-Pfad


Unterschiede Hard vs. Soft:

Hard Link:
- Gleiche Inode
- Nur innerhalb Dateisystem
- Nicht für Verzeichnisse
- Kein Original/Kopie
- Funktioniert immer (solange eine Referenz existiert)

Soft Link:
- Eigene Inode
- Über Dateisystemgrenzen
- Für Dateien und Verzeichnisse
- Klare Unterscheidung Original/Link
- Kann brechen (broken link)

Praktische Anwendungen:

Versionierung:

ln -s /usr/bin/python3.11 /usr/bin/python3
# Einfaches Wechseln der Version


Mehrere Namen:

ln /etc/nginx/sites-available/mysite /etc/nginx/sites-enabled/mysite
# Aktivieren von Konfigurationen


Shortcuts:

ln -s /very/long/path/to/project ~/projekt
# Schnellzugriff
`,
    keyPoints: [
      "Hard Link: Zusätzlicher Name, gleiche Inode, Link Count",
      "Soft Link: Eigene Inode, verweist auf Pfad, kann brechen",
      "Hard: Nur innerhalb Dateisystem, keine Verzeichnisse",
      "Soft: Über Grenzen, Verzeichnisse OK, erkennbar (lrwx)"
    ]
  },
  {
    title: "Partitionstabellen (MBR, GPT)",
    summary: `Partitionstabellen organisieren die Aufteilung von Festplatten in separate Bereiche. MBR ist das klassische, GPT das moderne Schema.

MBR (Master Boot Record):
Klassisches Schema seit 1983, liegt im ersten Sektor (512 Bytes).

Aufbau:
- Bootloader-Code: 446 Bytes
- Partitionstabelle: 64 Bytes (4 Einträge à 16 Bytes)
- Boot-Signatur: 2 Bytes (0x55AA)

Partitionstypen:
Primäre Partition: Maximal 4, direkt bootbar
Erweiterte Partition: Container für logische Partitionen (zählt als primäre)
Logische Partition: Innerhalb erweiterter Partition, beliebig viele

Limitierungen:
- Maximal 4 primäre Partitionen
- Maximale Plattengröße: 2 TB (32-Bit-Sektornummer)
- Keine Redundanz (eine beschädigte Tabelle = Datenverlust)
- Keine Partition-Namen

GPT (GUID Partition Table):
Modernes Schema, Teil von UEFI (Nachfolger von BIOS).

Aufbau:
- Protective MBR: Im ersten Sektor (Kompatibilität)
- Primary GPT Header: Sektor 1
- Partition Entries: Sektoren 2-33 (128 Einträge)
- Partitionen: Nutzbereich
- Backup Partition Entries: Am Ende
- Secondary GPT Header: Letzter Sektor

Vorteile:
- Bis zu 128 Partitionen (Standard, erweiterbar)
- Plattengröße bis 9.4 ZB (Zettabyte)
- Redundanz: Backup am Ende der Platte
- CRC32-Prüfsummen für Integrität
- GUIDs statt Partitionstyp-Bytes
- Partition-Namen (36 Zeichen Unicode)

GUID (Globally Unique Identifier):
128-Bit-Wert, praktisch eindeutig weltweit. Beispiel: EFI System Partition: C12A7328-F81F-11D2-BA4B-00A0C93EC93B

Partitionswerkzeuge:

fdisk (MBR und GPT):

sudo fdisk /dev/sda
# Befehle: m (help), p (print), n (new), d (delete), w (write)


gdisk (GPT-spezialisiert):

sudo gdisk /dev/sda


parted (Universell):

sudo parted /dev/sda
(parted) print
(parted) mkpart primary ext4 0% 50%
(parted) quit


Partitionen anzeigen:

lsblk              # Block-Geräte-Baum
fdisk -l           # Alle Platten
parted -l          # Mit parted
cat /proc/partitions  # Kernel-Sicht


EFI System Partition (ESP):
Bei GPT/UEFI-Systemen erforderlich:
- Typ: EFI System
- Dateisystem: FAT32
- Enthält Bootloader
- Meist 100-500 MB
- Mount: /boot/efi

Konvertierung MBR ↔ GPT:

MBR zu GPT (gdisk):

sudo gdisk /dev/sda
# Liest automatisch MBR, konvertiert beim Schreiben


Mit Datenverlust (parted):

sudo parted /dev/sda mklabel gpt
`,
    keyPoints: [
      "MBR: Klassisch, 4 primäre, max 2 TB, keine Redundanz",
      "GPT: Modern, 128 Partitionen, > 2 TB, redundant, GUID",
      "Tools: fdisk (MBR/GPT), gdisk (GPT), parted (universal)",
      "ESP: EFI System Partition bei UEFI, FAT32, Bootloader"
    ]
  },
  {
    title: "Dateisystem-Typen (ext4, XFS, Btrfs)",
    summary: `Linux unterstützt viele Dateisystem-Typen mit unterschiedlichen Eigenschaften und Einsatzgebieten.

ext4 (Fourth Extended Filesystem):
Standard unter Linux, Nachfolger von ext2/ext3.

Eigenschaften:
- Maximale Dateigröße: 16 TB
- Maximale Dateisystemgröße: 1 EB (Exabyte)
- Journaling für Konsistenz
- Extent-basiert (statt Block-Listen)
- Delayed Allocation
- Online-Defragmentierung
- Abwärtskompatibel zu ext2/ext3

Erstellen:

sudo mkfs.ext4 /dev/sda1
sudo mkfs.ext4 -L MyLabel /dev/sda1  # Mit Label


XFS:
Hochperformantes 64-Bit-Journaling-Dateisystem.

Eigenschaften:
- Maximale Dateigröße: 8 EB
- Optimiert für große Dateien und Parallelbetrieb
- Allocation Groups für Skalierbarkeit
- Delayed Allocation
- Online-Defragmentierung und -Vergrößerung
- KEINE Verkleinerung möglich
- Standard bei RHEL/CentOS

Erstellen:

sudo mkfs.xfs /dev/sda1


Btrfs (B-Tree Filesystem):
Modernes Copy-on-Write-Dateisystem.

Eigenschaften:
- Snapshots (instant, Copy-on-Write)
- Integrierte RAID-Funktionalität
- Kompression (transparent)
- Subvolumes
- Online-Größenänderung
- Integrierte Prüfsummen
- Self-healing bei RAID

Snapshots:

btrfs subvolume snapshot /home /home-snapshot
btrfs subvolume list /


Erstellen:

sudo mkfs.btrfs /dev/sda1


Weitere Dateisysteme:

FAT32:
- Windows-kompatibel
- Keine Rechte, keine großen Dateien (max 4 GB)
- USB-Sticks, SD-Karten

exFAT:
- Erweiterte FAT
- Große Dateien > 4 GB
- Windows/Linux/macOS

NTFS:
- Windows-Standard
- Linux: ntfs-3g für Lese-/Schreibzugriff

ZFS:
- Ähnlich Btrfs
- Ursprünglich Solaris
 - Lizenzprobleme (nicht im Kernel)`,
    keyPoints: [
      "ext4: Linux-Standard, robust, bewährt, 16 TB Dateien",
      "XFS: Performance, große Dateien, RHEL-Standard, keine Verkleinerung",
      "Btrfs: Modern, Snapshots, Kompression, Copy-on-Write",
      "FAT32/exFAT: Kompatibilität, NTFS: Windows, ZFS: Features"
    ]
  },
  {
    title: "Mount-Konzept",
    summary: `Unter Linux werden Dateisysteme in den Verzeichnisbaum eingehängt (gemountet). Dies ermöglicht einen einheitlichen Zugriff auf verschiedene Speichermedien.

Mount-Konzept:
Dateisysteme werden an Mount-Points (Verzeichnissen) eingehängt. Der Inhalt des Mount-Points wird durch das gemountete Dateisystem überlagert. Ein Dateisystem (Root /) muss immer gemountet sein. Weitere Dateisysteme werden in Unterverzeichnisse gemountet.

Beispiel:

/ (Root)
├─ /boot (separate Partition)
├─ /home (separate Partition)
└─ /mnt/usb (USB-Stick)


mount-Befehl:

# Anzeigen aller Mounts
mount

# Dateisystem mounten
sudo mount /dev/sda1 /mnt/data
sudo mount -t ext4 /dev/sda1 /mnt/data  # Typ explizit

# Mit Optionen
sudo mount -o ro,noexec /dev/sda1 /mnt/data

# ISO-Image
sudo mount -o loop datei.iso /mnt/iso

# Netzwerk (NFS)
sudo mount -t nfs server:/export /mnt/nfs

# CIFS/SMB (Windows-Share)
sudo mount -t cifs //server/share /mnt/smb -o username=user


umount (unmount):

sudo umount /mnt/data
sudo umount /dev/sda1
sudo umount -l /mnt/data  # Lazy unmount


Fehler:

device is busy

Ursachen:
- Prozess nutzt Dateien
- Arbeitsverzeichnis in Mount
- Offene Dateien

Lösung:

lsof /mnt/data  # Zeigt Prozesse
fuser -m /mnt/data  # Alternative


/etc/fstab:
Konfigurationsdatei für automatisches Mounten beim Boot.

Format:

<device> <mount-point> <type> <options> <dump> <pass>


Beispiel:

UUID=xxx-yyy  /home  ext4  defaults  0  2
/dev/sdb1     /data  ext4  noatime   0  0
//server/share /mnt/smb cifs credentials=/root/.smbcreds 0 0


Felder:
- Device: /dev/sda1, UUID=..., LABEL=...
- Mount-Point: Wo einhängen
- Type: ext4, xfs, vfat, nfs, etc.
- Options: Komma-getrennt
- Dump: Backup mit dump (0=nein, 1=ja)
- Pass: fsck-Reihenfolge (0=nicht, 1=root, 2=andere)

UUID verwenden:

# UUID anzeigen
blkid /dev/sda1
lsblk -f

# In fstab
UUID=12345678-1234-1234-1234-123456789012 /data ext4 defaults 0 2


Vorteil: Unabhängig von Gerätenamen (/dev/sdX kann wechseln)

Mount-Optionen:

Zugriffsrechte:
- ro: Read-only
- rw: Read-write (Standard)
- noexec: Keine Programme ausführbar
- nosuid: SUID-Bit ignorieren
- nodev: Keine Gerätedateien

Performance:
- noatime: Keine Access-Time-Updates (schneller)
- nodiratime: Nur für Verzeichnisse
- relatime: Updates nur bei Änderung (Kompromiss)

Sicherheit:
- user: Normale Benutzer können mounten
- users: Alle können mounten/unmounten
- owner: Nur Device-Besitzer kann mounten

Netzwerk:
- _netdev: Erst nach Netzwerk mounten

Auto-Mount:

sudo mount -a  # Mounted alle aus /etc/fstab


systemd-mount:
Alternative zu mount:

systemd-mount /dev/sda1 /mnt/data
systemd-umount /mnt/data
`,
    keyPoints: [
      "Mount: Dateisystem in Verzeichnisbaum einhängen",
      "mount /dev/sdXY /mnt/point, umount /mnt/point",
      "/etc/fstab: Automatisches Mounten beim Boot",
      "UUID bevorzugen, Optionen: ro, noexec, noatime"
    ]
  },
  {
    title: "Journaling",
    summary: `Journaling ist eine Technik, die Dateisystem-Konsistenz nach Systemabstürzen oder Stromausfällen gewährleistet.

Problem ohne Journaling:
Dateisystem-Operationen sind mehrstufig:
1. Inode allokieren
2. Datenblöcke schreiben
3. Verzeichnis-Eintrag erstellen
4. Inode/Bitmaps aktualisieren

Bei Absturz zwischen Schritten: Inkonsistenter Zustand (Lost Blocks, Corrupted Data)

Traditionelle Lösung: fsck (File System Check):
- Scannt gesamtes Dateisystem
- Sucht Inkonsistenzen
- Sehr langsam bei großen Platten (Stunden!)

Journaling-Lösung:
Schreibt geplante Änderungen erst in Journal (Log), dann in Dateisystem. Bei Absturz: Nur Journal prüfen und Operationen wiederholen/rückgängig. Sehr schnell (Sekunden).

Journal-Modi:

data=writeback (schnellst, unsicherer):
- Nur Metadaten im Journal
- Daten direkt geschrieben
- Konsistenz der Metadaten, nicht der Daten

data=ordered (Standard bei ext4):
- Metadaten im Journal
- Daten vor Metadaten-Commit geschrieben
- Guter Kompromiss

data=journal (langsamst, sicherstest):
- Metadaten UND Daten im Journal
- Alles doppelt geschrieben
- Maximale Sicherheit, Performance-Einbuße

Journal-Ablauf:

1. Write-Intent:
   - Änderung ins Journal schreiben
   - Noch nicht im Dateisystem

2. Checkpoint:
   - Journal-Eintrag markieren
   - Tatsächliche Änderung durchführen

3. Commit:
   - Nach erfolgreicher Änderung
   - Journal-Eintrag als erledigt markieren

4. Cleanup:
   - Alte Journal-Einträge löschen

Bei Absturz:
- Boot-Zeit: Journal prüfen
- Unvollständige Operationen wiederholen
- Oder rückgängig machen

Journal-Konfiguration:

ext4:

# Journal-Status
sudo tune2fs -l /dev/sda1 | grep -i journal

# Journal-Modus ändern
sudo tune2fs -o journal_data /dev/sda1  # data=journal
sudo tune2fs -o journal_data_writeback /dev/sda1  # data=writeback

# In /etc/fstab
UUID=xxx /data ext4 data=ordered 0 2


XFS:
- Immer Journaling (Metadaten)
- Nicht konfigurierbar

Btrfs:
- Copy-on-Write statt klassisches Journal
- Ähnliche Garantien

Vorteile:
- Schnelle Wiederherstellung nach Absturz
- Keine langen fsck-Läufe
- Höhere Datensicherheit

Nachteile:
- Leichter Performance-Overhead (besonders data=journal)
- Zusätzlicher Speicherverbrauch für Journal

Alternativen:

Copy-on-Write (CoW):
- Btrfs, ZFS
- Ändert nie bestehende Daten
- Schreibt neue Version, dann Pointer-Update
- Atomare Operationen

Checksumming:
- Btrfs, ZFS
- Erkennt Datenkorruption
- Kann mit RAID selbst reparieren

Praktisch:

Journal wiederherstellen (ext4):

sudo dumpe2fs /dev/sda1 | grep -i journal

# Bei Verlust neu anlegen
sudo tune2fs -J size=128 /dev/sda1


Fsck erzwingen:

sudo touch /forcefsck  # Beim nächsten Boot
# Oder
sudo tune2fs -C 1 -c 1 /dev/sda1  # Nach 1 Mount
`,
    keyPoints: [
      "Journaling: Protokolliert Änderungen vor Ausführung",
      "Schnelle Recovery nach Absturz (Sekunden statt Stunden)",
      "Modi: writeback (schnell), ordered (Standard), journal (sicher)",
      "Alternative: Copy-on-Write (Btrfs, ZFS)"
    ]
  }
];
