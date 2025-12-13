import React from 'react';
import './ChapterView.css';
import TopicSummary from './TopicSummary';

const ChapterView = ({ chapter, onStartQuiz, onBack, progress }) => {
  // Check if topics have summaries (new format) or are just strings (old format)
  const hasSummaries = chapter.topics.length > 0 && typeof chapter.topics[0] === 'object';

  return (
    <div className="chapter-view">
      <div className="chapter-header">
        <button onClick={onBack} className="back-button">
          ← Zurück zur Übersicht
        </button>
        <div className="chapter-title-section">
          <span className="chapter-number-badge">Kapitel {chapter.id}</span>
          <h2>{chapter.title}</h2>
          <p className="chapter-desc">{chapter.description}</p>
        </div>
      </div>

      <div className="chapter-content">
        {hasSummaries ? (
          <TopicSummary topics={chapter.topics} />
        ) : (
          <section className="topics-section">
            <h3>📋 Lernthemen</h3>
            <ul className="topics-list">
              {chapter.topics.map((topic, index) => (
                <li key={index} className="topic-item">
                  <span className="topic-bullet">•</span>
                  {topic}
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="quiz-section">
          <h3>🎯 Quiz & Test</h3>
          <div className="quiz-info">
            <p>
              Teste dein Wissen mit <strong>{chapter.quizQuestions?.length || 0} Fragen</strong> zu diesem Kapitel.
            </p>
            {progress?.completed && (
              <div className="previous-score">
                <p>
                  Dein letztes Ergebnis: <strong>{progress.score}%</strong>
                </p>
                <p className="score-date">
                  vom {new Date(progress.date).toLocaleDateString('de-DE')}
                </p>
              </div>
            )}
            <button onClick={onStartQuiz} className="start-quiz-button">
              {progress?.completed ? '🔄 Quiz wiederholen' : '▶️ Quiz starten'}
            </button>
          </div>
        </section>

        <section className="learning-tips">
          <h3>💡 Lerntipps</h3>
          <ul>
            <li>Lies das entsprechende Kapitel im Lehrbrief gründlich durch</li>
            <li>Nutze das Linux Terminal, um praktische Übungen durchzuführen</li>
            <li>Beantworte die Lernkontrollfragen am Ende des Kapitels</li>
            <li>Teste dein Wissen mit dem Quiz</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ChapterView;
