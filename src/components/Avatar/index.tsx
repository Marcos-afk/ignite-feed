import { AvatarProps } from './AvatarProps';
import styles from './styles.module.scss';

export const Avatar = ({ hashBorder = false, ...rest }: AvatarProps) => {
  return <img className={hashBorder ? styles.avatarWithBorder : styles.avatar} {...rest} />;
};
