import styles from './styles.module.scss';

const Message = ({ text = '' }: {text?: string}) => {
  const wordHighlight = 'aventuras locales';

  const [line1, line2] = text?.split(wordHighlight);

  return (
    <div className={styles.message}>
      <h2>{line1} <span>{wordHighlight}</span> {line2}</h2>
    </div>
  );
};

export default Message;
