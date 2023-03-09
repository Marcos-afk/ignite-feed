import styles from './styles.module.scss';
import IgniteSvg from '../../assets/ignite.svg';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={IgniteSvg} alt="ignite-logo" />
      <strong>Ignite Feed</strong>
    </header>
  );
};
