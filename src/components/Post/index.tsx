/* eslint-disable quotes */
import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import { PostsProps } from './PostsProps';
import { format, formatDistanceToNow } from 'date-fns';
import styles from './styles.module.scss';
import { ptBR } from 'date-fns/locale';
import { useState } from 'react';

export const Post = ({ author, publishedAt, contents }: PostsProps) => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState('');

  const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'às' hh:mm'h' ", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setComments([...comments, newComment]);
    setNewComment('');
  };

  const handleDeleteComment = (comment: string) => {
    setComments(comments.filter((item) => item !== comment));
  };

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} hashBorder />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>
          Publicado {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {contents.map((line) => {
          if (line.type === 'paragraph') {
            return <p key={line.content as string}>{line.content}</p>;
          }

          if (line.type === 'link') {
            return (
              <p key={line.content as string}>
                <a href={line.content as string} target="_blank" rel="noreferrer">
                  👉 Visualizar
                </a>
              </p>
            );
          }

          if (line.type === 'hashtags') {
            return (
              <p key={line.content as string}>
                {(line.content as string[]).map((hashtag) => (
                  <a key={hashtag}>
                    {hashtag}
                    {'  '}
                  </a>
                ))}
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCommentSubmit} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Escreva um comentário..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((item) => {
          return <Comment key={item} content={item} onRemove={() => handleDeleteComment(item)} />;
        })}
      </div>
    </article>
  );
};
