import React, { useState } from 'react';
import './TopicSummary.css';

const TopicSummary = ({ topics }) => {
  const [expandedTopic, setExpandedTopic] = useState(null);

  const toggleTopic = (index) => {
    setExpandedTopic(expandedTopic === index ? null : index);
  };

  return (
    <div className="topic-summary-container">
      <h3>📚 Themen-Zusammenfassungen</h3>
      <p className="summary-intro">
        Klicke auf ein Thema, um eine detaillierte Zusammenfassung zu lesen.
      </p>

      <div className="topics-accordion">
        {topics.map((topic, index) => (
          <div key={index} className={`topic-item ${expandedTopic === index ? 'expanded' : ''}`}>
            <button
              className="topic-header"
              onClick={() => toggleTopic(index)}
            >
              <span className="topic-number">{index + 1}</span>
              <span className="topic-title">{topic.title}</span>
              <span className="expand-icon">{expandedTopic === index ? '▼' : '▶'}</span>
            </button>

            {expandedTopic === index && (
              <div className="topic-content">
                <div className="topic-summary">
                  {topic.summary.split('\n\n').map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>

                {topic.keyPoints && topic.keyPoints.length > 0 && (
                  <div className="key-points">
                    <h4>🔑 Wichtige Punkte:</h4>
                    <ul>
                      {topic.keyPoints.map((point, kIndex) => (
                        <li key={kIndex}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicSummary;
