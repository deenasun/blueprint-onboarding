import { LuUserCircle as ProfileIcon } from 'react-icons/lu';
import styles from '../app/styles.module.css';

export default function Comment({
  name,
  date,
  comment,
}: CommentProps) {
  return (
    <div className={styles.commentContainer}>
      <div className={styles.icon}>
        <ProfileIcon size={24} />
      </div>
      <div className={styles.comment}>
        <div className={styles.profile}>
          <p className={styles.text}>{name}</p>
          <p className={styles.date}>{date}</p>
        </div>
        <p className={styles.commentText}>{comment}</p>
      </div>
    </div>
  );
}
