import React from 'react';
import './ProgressTracker.css';

const ProgressTracker = ({ chapters, progress }) => {
  const totalChapters = chapters.length;
  const completedChapters = Object.keys(progress).filter(
    (key) => progress[key].completed
  ).length;
  const progressPercentage = Math.round((completedChapters / totalChapters) * 100);

  const averageScore =
    completedChapters > 0
      ? Math.round(
          Object.values(progress).reduce((sum, p) => sum + (p.score || 0), 0) /
            completedChapters
        )
      : 0;

  return (
    <div className="progress-tracker">
      <h2>🎓 Dein Lernfortschritt</h2>
      <div className="progress-stats">
        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div className="stat-content">
            <div className="stat-value">{progressPercentage}%</div>
            <div className="stat-label">Fortschritt</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-content">
            <div className="stat-value">
              {completedChapters}/{totalChapters}
            </div>
            <div className="stat-label">Kapitel</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⭐</div>
          <div className="stat-content">
            <div className="stat-value">{averageScore}%</div>
            <div className="stat-label">Ø Score</div>
          </div>
        </div>
      </div>
      <div className="overall-progress-bar">
        <div
          className="overall-progress-fill"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressTracker;
