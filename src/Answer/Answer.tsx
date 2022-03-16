import React, { useState } from 'react';
import styles from './Answer.module.css';

interface AnswerProps {
  calculateAnswer: () => string;
}

function Answer({ calculateAnswer }: AnswerProps) {
  const [answer, setAnswer] = useState('');

  const handleCalculateAnswer = () => {
    setAnswer(calculateAnswer());
  };

  const handleClearText = () => {
    setAnswer('');
  };

  return (
    <>
      <button className={styles.answerButton} onClick={handleCalculateAnswer}>
        Calculate Answer
      </button>
      {answer && (
        <div className={styles.answerContainer}>
          <p className={styles.answerText}>{answer}</p>
          <button onClick={handleClearText}>x</button>
        </div>
      )}
    </>
  );
}

export default Answer;
