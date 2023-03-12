import { ThumbsUp, Trash } from '@phosphor-icons/react';
import { useState } from 'react';
import { Avatar } from '../Avatar';
import { CommentProps } from './CommentProps';
import styles from './styles.module.scss';

export const Comment = ({ content, onRemove }: CommentProps) => {
  const [likeCount, setLikeCount] = useState(0);

  return (
    <div className={styles.comment}>
      <Avatar src="https://avatars.githubusercontent.com/u/72817154?v=4" alt="avatar" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Marcos André</strong>
              <time title="09 de Março às 02:37 " dateTime="2023-03-09 02:37:00">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário" onClick={onRemove}>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={() => setLikeCount((like) => like + 1)}>
            <ThumbsUp size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
