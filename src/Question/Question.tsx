import styles from './Question.module.css';

interface QuestionProps {
  index: number;
  name: string;
  shortDescription: string;
  link?: string;
  code?: string;
}

function Question({
  index,
  name,
  shortDescription,
  link,
  code,
}: QuestionProps) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <div className={styles.index}>{index}</div>
          <h2>{name}</h2>
        </div>
        <div className={styles.links}>
          {link && <a href={link}>link</a>}
          {code && <a href={code}>code</a>}
        </div>
      </div>
      <p>{shortDescription}</p>
    </div>
  );
}

export default Question;
