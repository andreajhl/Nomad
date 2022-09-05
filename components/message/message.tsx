import styles from './styles.module.scss';

const Message = ({ text = '' }: {text?: string}) => {
  const WORD_HIGHLIGHT = 'aventuras locales';

  const [line1, line2] = text?.split(WORD_HIGHLIGHT);

  return (
    <div className={styles.message}>
      <h2>{line1} <span>{WORD_HIGHLIGHT}</span> {line2}</h2>
    </div>
  );
};

export default Message;
