export const chapter6Quiz = [
  // Thema 1: Dateisystem-Grundlagen
  {
    question: "Was ist ein Inode?",
    options: [
      "Der Dateiinhalt",
      "Eine Datenstruktur mit Metadaten über eine Datei",
      "Ein Verzeichnis",
      "Ein Dateisystem-Typ"
    ],
    correctAnswer: 1,
    explanation: "Ein Inode enthält Metadaten über eine Datei (Rechte, Owner, Größe, Zeitstempel, Zeiger auf Datenblöcke), aber nicht den Dateinamen oder Inhalt."
  },
  {
    type: "text",
    question: "Welche Informationen werden in einem Inode gespeichert?",
    acceptedAnswers: ["rechte", "besitzer", "größe", "zeitstempel", "metadaten", "owner"],
    sampleAnswer: "Im Inode werden Metadaten gespeichert: Dateityp, Zugriffsrechte, Besitzer (UID), Gruppe (GID), Dateigröße, Zeitstempel (Erstellung, Änderung, Zugriff) und Zeiger auf Datenblöcke.",
    explanation: "Der Inode speichert alle Metadaten einer Datei außer dem Dateinamen (der im Verzeichnis gespeichert wird)."
  },

  // Thema 2: Hard Links und Soft Links
  {
    question: "Was ist der Unterschied zwischen Hard Link und Symbolic Link?",
    options: [
      "Hard Links verweisen auf Inodes, Symbolic Links auf Pfade",
      "Hard Links verweisen auf Pfade, Symbolic Links auf Inodes",
      "Es gibt keinen Unterschied",
      "Symbolic Links funktionieren nur bei Verzeichnissen"
    ],
    correctAnswer: 0,
    explanation: "Hard Links verweisen direkt auf den Inode, Symbolic Links speichern einen Pfad zur Zieldatei."
  },
  {
    type: "text",
    question: "Was passiert, wenn man die Originaldatei eines Hard Links löscht?",
    acceptedAnswers: ["bleibt", "weiterhin", "zugriff", "erhalten", "verfügbar"],
    sampleAnswer: "Der Hard Link bleibt funktionsfähig, da er auf denselben Inode verweist. Die Daten werden erst gelöscht, wenn der letzte Hard Link entfernt wird.",
    explanation: "Hard Links sind gleichwertige Verweise auf denselben Inode. Die Datei existiert solange mindestens ein Link existiert."
  },
  {
    question: "Was geschieht mit einem Symbolic Link, wenn die Zieldatei gelöscht wird?",
    options: [
      "Der Link funktioniert weiterhin",
      "Der Link wird zu einem 'broken link' (kaputt)",
      "Der Link wird automatisch gelöscht",
      "Der Link verweist auf eine Kopie"
    ],
    correctAnswer: 1,
    explanation: "Symbolic Links speichern nur den Pfad. Wenn die Zieldatei gelöscht wird, zeigt der Link ins Leere (broken/dangling link)."
  },

  // Thema 3: Partitionstabellen
  {
    question: "Wie viele primäre Partitionen erlaubt MBR maximal?",
    options: [
      "2",
      "4",
      "8",
      "Unbegrenzt"
    ],
    correctAnswer: 1,
    explanation: "MBR (Master Boot Record) erlaubt maximal 4 primäre Partitionen. Eine davon kann als erweiterte Partition genutzt werden."
  },
  {
    type: "text",
    question: "Nenne zwei Vorteile von GPT gegenüber MBR.",
    acceptedAnswers: ["partition", "größe", "backup", "redundanz", "128"],
    sampleAnswer: "1) GPT unterstützt mehr als 4 Partitionen (bis zu 128), 2) GPT speichert Backup-Kopien der Partitionstabelle für bessere Fehlertoleranz, 3) GPT unterstützt größere Festplatten (über 2 TB).",
    explanation: "GPT (GUID Partition Table) ist der moderne Nachfolger von MBR mit mehr Partitionen, größeren Festplatten und besserer Fehlertoleranz."
  },
  {
    question: "Welche maximale Festplattengröße unterstützt MBR?",
    options: [
      "500 GB",
      "1 TB",
      "2 TB",
      "Unbegrenzt"
    ],
    correctAnswer: 2,
    explanation: "MBR ist auf 2 TB (Terabyte) begrenzt. Für größere Festplatten muss GPT verwendet werden."
  },

  // Thema 4: Dateisystem-Typen
  {
    question: "Welches Dateisystem ist Standard bei modernen Linux-Distributionen?",
    options: [
      "FAT32",
      "NTFS",
      "ext4",
      "HFS+"
    ],
    correctAnswer: 2,
    explanation: "ext4 (Fourth Extended Filesystem) ist das Standard-Dateisystem bei den meisten Linux-Distributionen."
  },
  {
    type: "text",
    question: "Nenne zwei Eigenschaften des Btrfs-Dateisystems.",
    acceptedAnswers: ["snapshot", "copy-on-write", "cow", "compression", "raid"],
    sampleAnswer: "Btrfs unterstützt: 1) Snapshots für Backups, 2) Copy-on-Write (CoW) Mechanismus, 3) integrierte Kompression, 4) Software-RAID ohne mdadm.",
    explanation: "Btrfs (B-tree File System) ist ein modernes Dateisystem mit erweiterten Features für Datenintegrität und Flexibilität."
  },
  {
    question: "Welches Dateisystem wird häufig für sehr große Dateien und hohe Performance verwendet?",
    options: [
      "ext2",
      "FAT32",
      "XFS",
      "ext3"
    ],
    correctAnswer: 2,
    explanation: "XFS ist optimiert für große Dateien und hohe I/O-Performance, besonders bei parallelen Zugriffen."
  },

  // Thema 5: Mount-Konzept
  {
    question: "Was macht der Befehl 'mount'?",
    options: [
      "Erstellt ein neues Dateisystem",
      "Bindet ein Dateisystem in den Verzeichnisbaum ein",
      "Formatiert eine Partition",
      "Löscht eine Partition"
    ],
    correctAnswer: 1,
    explanation: "'mount' bindet ein Dateisystem (z.B. von einer Partition oder einem USB-Stick) in den bestehenden Verzeichnisbaum ein."
  },
  {
    type: "text",
    question: "Was ist ein Mount-Point?",
    acceptedAnswers: ["verzeichnis", "einhängepunkt", "ordner", "mount"],
    sampleAnswer: "Ein Mount-Point ist ein Verzeichnis, an dem ein Dateisystem in den Verzeichnisbaum eingehängt wird, z.B. /mnt/usb.",
    explanation: "Der Mount-Point ist das Verzeichnis, das als Zugriffspunkt für das eingebundene Dateisystem dient."
  },
  {
    question: "In welcher Datei werden permanente Mount-Einträge gespeichert?",
    options: [
      "/etc/mount",
      "/etc/fstab",
      "/etc/filesystems",
      "/etc/mounts"
    ],
    correctAnswer: 1,
    explanation: "Die Datei /etc/fstab (file systems table) enthält alle Dateisysteme, die beim Systemstart automatisch gemountet werden sollen."
  },

  // Thema 6: Journaling
  {
    question: "Was ist Journaling in einem Dateisystem?",
    options: [
      "Eine Backup-Funktion",
      "Ein Protokoll von Änderungen für bessere Crash-Recovery",
      "Eine Komprimierungstechnik",
      "Eine Verschlüsselungsmethode"
    ],
    correctAnswer: 1,
    explanation: "Journaling protokolliert geplante Änderungen bevor sie durchgeführt werden, um nach Systemabstürzen den Dateisystem-Status wiederherstellen zu können."
  },
  {
    type: "text",
    question: "Warum ist Journaling wichtig für die Datenintegrität?",
    acceptedAnswers: ["crash", "wiederherstellung", "konsistenz", "absturz", "recovery"],
    sampleAnswer: "Bei einem Systemabsturz kann das Journal verwendet werden, um unvollständige Operationen zu vervollständigen oder rückgängig zu machen, wodurch Dateisystem-Inkonsistenzen vermieden werden.",
    explanation: "Ohne Journal müsste nach einem Crash das gesamte Dateisystem überprüft werden (fsck), was lange dauert. Mit Journal geht die Recovery schneller."
  },
  {
    question: "Welche ext-Dateisysteme unterstützen Journaling?",
    options: [
      "Nur ext4",
      "ext3 und ext4",
      "Nur ext2",
      "Alle ext-Dateisysteme"
    ],
    correctAnswer: 1,
    explanation: "Journaling wurde mit ext3 eingeführt und ist auch in ext4 vorhanden. ext2 hat kein Journaling."
  },

  // Zusätzliche Fragen
  {
    type: "text",
    question: "Mit welchem Befehl kann man ein Dateisystem erstellen?",
    acceptedAnswers: ["mkfs", "make filesystem", "format"],
    sampleAnswer: "Mit mkfs (make filesystem) und seinen Varianten wie mkfs.ext4, mkfs.xfs, etc.",
    explanation: "mkfs.ext4 /dev/sdb1 erstellt ein ext4-Dateisystem auf der Partition /dev/sdb1."
  },
  {
    question: "Welcher Befehl zeigt die aktuell gemounteten Dateisysteme an?",
    options: [
      "ls",
      "df",
      "mount (ohne Parameter)",
      "ps"
    ],
    correctAnswer: 2,
    explanation: "Der Befehl 'mount' ohne Parameter zeigt alle aktuell gemounteten Dateisysteme an. 'df' zeigt den Speicherplatz an."
  },
  {
    type: "text",
    question: "Was bedeutet Copy-on-Write (CoW) bei Dateisystemen?",
    acceptedAnswers: ["cow", "kopie", "änderung", "original", "snapshot"],
    sampleAnswer: "Bei Copy-on-Write werden Datenblöcke nicht direkt überschrieben. Stattdessen wird bei Änderungen eine neue Kopie geschrieben, während das Original erhalten bleibt. Dies ermöglicht effiziente Snapshots.",
    explanation: "CoW ist ein wichtiges Feature moderner Dateisysteme wie Btrfs und ZFS für Snapshots und Datenintegrität."
  }
];
