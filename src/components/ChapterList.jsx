import React from 'react';
import './ChapterList.css';

const ChapterList = ({ chapters, onSelectChapter, progress }) => {
  return (
    <div className="chapter-list">
      <h2>Kapitel</h2>
      <div className="chapters-grid">
        {chapters.map((chapter) => {
          const chapterProgress = progress[chapter.id];
          const isCompleted = chapterProgress?.completed;
          const score = chapterProgress?.score;

          return (
            <div
              key={chapter.id}
              className={`chapter-card ${isCompleted ? 'completed' : ''}`}
              onClick={() => onSelectChapter(chapter)}
            >
              <div className="chapter-number">Kapitel {chapter.id}</div>
              <h3>{chapter.title}</h3>
              <p className="chapter-description">{chapter.description}</p>

              {isCompleted && (
                <div className="completion-badge">
                  ✓ Abgeschlossen
                  <br />
                  <span className="score">Score: {score}%</span>
                </div>
              )}

              <div className="chapter-footer">
                <span className="topic-count">
                  {chapter.topics?.length || 0} Themen
                </span>
                <span className="quiz-count">
                  {chapter.quizQuestions?.length || 0} Fragen
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChapterList;
