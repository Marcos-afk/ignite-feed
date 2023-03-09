import styles from './styles.module.scss';

export const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://avatars.githubusercontent.com/u/72817154?v=4" alt="avatar" />
          <div className={styles.authorInfo}>
            <strong>Marcos André</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="09 de Março às 02:37 " dateTime="2023-03-09 02:37:00">
          Publicado a 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu GitHub. É Projeto desenvolvido com o conteúdo estudado nas aulas do
          Chapter I da trilha de ReactJS do Bootcamp Ignite da Rocketseat. O nome do projeto é Ignite Feed 🚀
        </p>

        <p>
          👉{' '}
          <a href="https://github.com/Marcos-afk/ignite-feed" target="_blank" rel="noreferrer">
            Repositório
          </a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#ignite</a> <a href="#">#rocketseat</a>{' '}
        </p>
      </div>
    </article>
  );
};
