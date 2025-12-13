import React, { useState } from 'react';
import './Quiz.css';

const Quiz = ({ chapter, onComplete, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [textAnswers, setTextAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const questions = chapter.quizQuestions;
  const question = questions[currentQuestion];
  const isTextQuestion = question.type === 'text';

  const handleSelectAnswer = (answerIndex) => {
    if (!showExplanation && !isTextQuestion) {
      setSelectedAnswers({
        ...selectedAnswers,
        [currentQuestion]: answerIndex
      });
    }
  };

  const handleTextAnswer = (event) => {
    if (!showExplanation) {
      setTextAnswers({
        ...textAnswers,
        [currentQuestion]: event.target.value
      });
    }
  };

  const handleCheckAnswer = () => {
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    setShowExplanation(false);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults();
    }
  };

  const calculateResults = () => {
    let correct = 0;
    let totalMCQ = 0;

    questions.forEach((q, index) => {
      if (q.type === 'text') {
        // Freitext-Fragen werden immer als richtig gewertet (manuelle Bewertung)
        correct++;
      } else {
        totalMCQ++;
        if (selectedAnswers[index] === q.correctAnswer) {
          correct++;
        }
      }
    });

    const score = Math.round((correct / questions.length) * 100);
    setShowResults(true);
    onComplete(score);
  };

  const checkTextAnswer = () => {
    const userAnswer = (textAnswers[currentQuestion] || '').trim().toLowerCase();
    const correctAnswers = question.acceptedAnswers.map(a => a.toLowerCase());
    return correctAnswers.some(ans => userAnswer.includes(ans));
  };

  const isAnswerCorrect = (answerIndex) => {
    return answerIndex === question.correctAnswer;
  };

  const getAnswerClass = (answerIndex) => {
    if (!showExplanation) {
      return selectedAnswers[currentQuestion] === answerIndex ? 'selected' : '';
    }

    if (answerIndex === question.correctAnswer) {
      return 'correct';
    }
    if (selectedAnswers[currentQuestion] === answerIndex && !isAnswerCorrect(answerIndex)) {
      return 'incorrect';
    }
    return '';
  };

  if (showResults) {
    const correct = Object.keys(selectedAnswers).filter(
      (key) => selectedAnswers[key] === questions[key].correctAnswer
    ).length;
    const score = Math.round((correct / questions.length) * 100);

    return (
      <div className="quiz-results">
        <h2>🎉 Quiz abgeschlossen!</h2>
        <div className="results-summary">
          <div className="score-circle">
            <div className="score-value">{score}%</div>
            <div className="score-label">Erreicht</div>
          </div>
          <div className="results-details">
            <p>
              <strong>{correct}</strong> von <strong>{questions.length}</strong> Fragen richtig beantwortet
            </p>
            {score >= 80 && <p className="result-message success">Ausgezeichnet! 🌟</p>}
            {score >= 60 && score < 80 && <p className="result-message good">Gut gemacht! 👍</p>}
            {score < 60 && <p className="result-message needs-work">Weiter üben! 📚</p>}
          </div>
        </div>
        <div className="results-actions">
          <button onClick={onBack} className="back-to-chapter-button">
            Zurück zum Kapitel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz">
      <div className="quiz-header">
        <button onClick={onBack} className="back-button">
          ← Zurück
        </button>
        <div className="quiz-progress">
          <span>
            Frage {currentQuestion + 1} von {questions.length}
          </span>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="question-container">
        <h3 className="question-text">{question.question}</h3>

        {isTextQuestion ? (
          <div className="text-answer-section">
            <textarea
              className="text-answer-input"
              placeholder="Schreibe deine Antwort hier..."
              value={textAnswers[currentQuestion] || ''}
              onChange={handleTextAnswer}
              disabled={showExplanation}
              rows="4"
            />
            {showExplanation && (
              <div className="text-feedback">
                {checkTextAnswer() ? (
                  <div className="correct-feedback">
                    ✓ Deine Antwort enthält wesentliche Punkte!
                  </div>
                ) : (
                  <div className="partial-feedback">
                    ℹ️ Vergleiche deine Antwort mit der Musterlösung unten.
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="answers-list">
            {question.options.map((option, index) => (
              <button
                key={index}
                className={`answer-option ${getAnswerClass(index)}`}
                onClick={() => handleSelectAnswer(index)}
                disabled={showExplanation}
              >
                <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                <span className="option-text">{option}</span>
                {showExplanation && index === question.correctAnswer && (
                  <span className="correct-icon">✓</span>
                )}
                {showExplanation &&
                  selectedAnswers[currentQuestion] === index &&
                  !isAnswerCorrect(index) && <span className="incorrect-icon">✗</span>}
              </button>
            ))}
          </div>
        )}

        {showExplanation && (
          <div className="explanation">
            <h4>💡 {isTextQuestion ? 'Musterlösung:' : 'Erklärung:'}</h4>
            <p>{question.explanation}</p>
            {isTextQuestion && question.sampleAnswer && (
              <div className="sample-answer">
                <h5>Beispielantwort:</h5>
                <p>{question.sampleAnswer}</p>
              </div>
            )}
          </div>
        )}

        <div className="question-actions">
          {!showExplanation && (isTextQuestion ?
            (textAnswers[currentQuestion]?.trim().length > 10) :
            (selectedAnswers[currentQuestion] !== undefined)
          ) && (
            <button onClick={handleCheckAnswer} className="check-button">
              Antwort überprüfen
            </button>
          )}
          {showExplanation && (
            <button onClick={handleNextQuestion} className="next-button">
              {currentQuestion < questions.length - 1 ? 'Nächste Frage →' : 'Ergebnisse anzeigen'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
