import styles from './styles.module.scss';
import BackgroundImg from '../../assets/background.jpg';
import { PencilLine } from '@phosphor-icons/react';

export const SideBar = () => {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={BackgroundImg} alt="background-img" />
      <div className={styles.profile}>
        <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/72817154?v=4" alt="avatar" />
        <strong>Marcos André</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};
