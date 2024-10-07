import { LuUserCircle as ProfileIcon } from 'react-icons/lu';
import styles from '../app/styles.module.css';

interface CommentProps {
  name: string;
  date: string;
  comment: string;
}

export default function Comment({ name, date, comment }: CommentProps) {
  const commentDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className={styles.commentContainer}>
      <div className={styles.icon}>
        <ProfileIcon size={24} />
      </div>
      <div className={styles.comment}>
        <div className={styles.profile}>
          <p className={styles.text}>{name}</p>
          <p className={styles.date}>{commentDate}</p>
        </div>
        <p className={styles.commentText}>{comment}</p>
      </div>
    </div>
  );
}
