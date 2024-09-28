import { LuUserCircle as ProfileIcon } from 'react-icons/lu';
import styles from './styles.module.css';

export default function Comment({
  name,
  date,
  comment,
}: {
  name: string;
  date: string;
  comment: string;
}) {
  return (
    <div style={{}} className={styles.container}>
      <div className={styles.header}>
        <div className={styles.profile}>
          <ProfileIcon size={24} />
          <p style={{ fontWeight: 600 }}>{name}</p>
        </div>
        <p className={styles.date}>{date}</p>
      </div>
      <p className={styles.comment}>{comment}</p>
    </div>
  );
}
