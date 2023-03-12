/* eslint-disable quotes */
import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import { FormPostProps, PostsProps } from './PostsProps';
import { format, formatDistanceToNow } from 'date-fns';
import styles from './styles.module.scss';
import { ptBR } from 'date-fns/locale';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormDefaultValues } from './DefaultValues';
import { FormPostSchema } from './Schemas';

export const Post = ({ author, publishedAt, contents }: PostsProps) => {
  const [comments, setComments] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormPostProps>({
    defaultValues: FormDefaultValues,
    resolver: yupResolver(FormPostSchema),
  });

  const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'às' hh:mm'h' ", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleCommentSubmit = ({ comment }: FormPostProps) => {
    setComments([...comments, comment]);
    reset(FormDefaultValues);
  };

  const handleDeleteComment = (comment: string) => {
    setComments((comments) => comments.filter((item) => item !== comment));
  };

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} hashBorder alt={author.name} />
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

      <form onSubmit={handleSubmit(handleCommentSubmit)} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        {errors.comment && <span className={styles.formMessageError}>{errors.comment.message}</span>}
        <textarea placeholder="Escreva um comentário..." {...register('comment')} />

        <footer>
          <button type="submit" disabled={!isValid}>
            Publicar
          </button>
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
