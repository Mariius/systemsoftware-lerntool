import { useState } from 'react';
import './App.css';
import { chapters } from './data/chapters';
import ChapterList from './components/ChapterList';
import ChapterView from './components/ChapterView';
import Quiz from './components/Quiz';
import Terminal from './components/Terminal';
import ProgressTracker from './components/ProgressTracker';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [currentView, setCurrentView] = useState('home'); // home, chapter, quiz, terminal
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('learningProgress');
    return saved ? JSON.parse(saved) : {};
  });

  const handleSelectChapter = (chapter) => {
    setSelectedChapter(chapter);
    setCurrentView('chapter');
  };

  const handleStartQuiz = () => {
    setCurrentView('quiz');
  };

  const handleCompleteQuiz = (score) => {
    const newProgress = {
      ...progress,
      [selectedChapter.id]: {
        completed: true,
        score: score,
        date: new Date().toISOString()
      }
    };
    setProgress(newProgress);
    localStorage.setItem('learningProgress', JSON.stringify(newProgress));
    setCurrentView('chapter');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedChapter(null);
  };

  const handleOpenTerminal = () => {
    setCurrentView('terminal');
  };

  return (
    <div className="app">
      <ThemeToggle />
      <header className="app-header">
        <h1>📚 Systemsoftware Lerntool</h1>
        <p className="subtitle">Interaktives Lernen für den Master "Angewandte Künstliche Intelligenz"</p>
        <nav className="main-nav">
          <button
            onClick={handleBackToHome}
            className={currentView === 'home' ? 'active' : ''}
          >
            🏠 Home
          </button>
          <button
            onClick={handleOpenTerminal}
            className={currentView === 'terminal' ? 'active' : ''}
          >
            💻 Linux Terminal
          </button>
        </nav>
      </header>

      <main className="app-main">
        {currentView === 'home' && (
          <>
            <ProgressTracker chapters={chapters} progress={progress} />
            <ChapterList
              chapters={chapters}
              onSelectChapter={handleSelectChapter}
              progress={progress}
            />
          </>
        )}

        {currentView === 'chapter' && selectedChapter && (
          <ChapterView
            chapter={selectedChapter}
            onStartQuiz={handleStartQuiz}
            onBack={handleBackToHome}
            progress={progress[selectedChapter.id]}
          />
        )}

        {currentView === 'quiz' && selectedChapter && (
          <Quiz
            chapter={selectedChapter}
            onComplete={handleCompleteQuiz}
            onBack={() => setCurrentView('chapter')}
          />
        )}

        {currentView === 'terminal' && (
          <Terminal onBack={handleBackToHome} />
        )}
      </main>

      <footer className="app-footer">
        <p>Lehrbrief: Hans-Georg Eßer, 21. Juni 2024</p>
        <p>Interaktives Lerntool - FH Südwestfalen</p>
      </footer>
    </div>
  );
}

export default App;
