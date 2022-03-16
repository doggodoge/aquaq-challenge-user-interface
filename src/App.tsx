import styles from './App.module.css';
import Question from './Question';
import Answer from './Answer';
import questions from './questions';

function App() {
  return (
    <div className={styles.app}>
      <header>
        <h1>AquaQ Challenge Solutions</h1>
      </header>
      <div className={styles.questionsContainer}>
        {questions.map((question, index) => (
          <div
            className={styles.solutionContainer}
            key={question.shortDescription}
          >
            <Question
              index={question.index}
              name={question.name}
              shortDescription={question.shortDescription}
              link={question.link}
              code={question.code}
            />
            <Answer calculateAnswer={question.calculateAnswer} />
          </div>
        ))}
      </div>
      <footer>
        <p>Gary Moore</p>
      </footer>
    </div>
  );
}

export default App;
