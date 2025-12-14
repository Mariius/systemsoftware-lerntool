import { chapter1Topics } from './chapter1-summaries';
import { chapter2Topics } from './chapter2-summaries';
import { chapter3Topics } from './chapter3-summaries';
import { chapter4Topics } from './chapter4-summaries';
import { chapter5Topics } from './chapter5-summaries';
import { chapter6Topics } from './chapter6-summaries';
import { chapter7Topics } from './chapter7-summaries';
import { chapter1Quiz } from './chapter1-quiz';
import { chapter2Quiz } from './chapter2-quiz';
import { chapter3Quiz } from './chapter3-quiz';
import { chapter4Quiz } from './chapter4-quiz';
import { chapter5Quiz } from './chapter5-quiz';
import { chapter6Quiz } from './chapter6-quiz';
import { chapter7Quiz } from './chapter7-quiz';

export const chapters = [
  {
    id: 1,
    title: "Grundlagen Rechneraufbau, Betriebssysteme",
    description: "Computer-Typen, Komponenten, Universalrechner, CPU-Architekturen, Aufgaben von Betriebssystemen",
    topics: chapter1Topics,
    quizQuestions: chapter1Quiz
  },
  {
    id: 2,
    title: "Linux-Installation und erste Schritte",
    description: "Linux-Kernel und Distributionen, Installation, Shell-Grundlagen, elementare Befehle",
    topics: chapter2Topics,
    quizQuestions: chapter2Quiz
  },
  {
    id: 3,
    title: "Ausgewählte Standard-Anwendungen",
    description: "Editoren, SSH, Software-Entwicklung, reguläre Ausdrücke, Unix-Baukasten",
    topics: chapter3Topics,
    quizQuestions: chapter3Quiz
  },
  {
    id: 4,
    title: "Linux-Administration",
    description: "Benutzer und Gruppen, Zugriffsrechte, Software-Verwaltung, Netzwerk-Basics",
    topics: chapter4Topics,
    quizQuestions: chapter4Quiz
  },
  {
    id: 5,
    title: "Prozesse",
    description: "Prozessverwaltung, Multitasking, Scheduling, Speicherverwaltung, virtuelle Adressierung",
    topics: chapter5Topics,
    quizQuestions: chapter5Quiz
  },
  {
    id: 6,
    title: "Dateisystem",
    description: "Dateisystem-Konzepte, Inodes, Links, Partitionierung, verschiedene Dateisysteme",
    topics: chapter6Topics,
    quizQuestions: chapter6Quiz
  },
  {
    id: 7,
    title: "Zusatzthemen",
    description: "Shells und Skripting, Systemd, Virtualisierung, Kernel-Module, Sicherheit",
    topics: chapter7Topics,
    quizQuestions: chapter7Quiz
  },
];
