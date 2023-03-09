import { AvatarProps } from './AvatarProps';
import styles from './styles.module.scss';

export const Avatar = ({ src, hashBorder = false }: AvatarProps) => {
  return <img className={hashBorder ? styles.avatarWithBorder : styles.avatar} src={src} alt="avatar" />;
};
