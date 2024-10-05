import { FiHeart as HeartIcon } from 'react-icons/fi';
import { GoPaperAirplane as ShareIcon } from 'react-icons/go';
import styles from '../app/styles.module.css';

export default function InteractionBar({ numLikes }: { numLikes: number }) {
  return (
    <div className={styles.container}>
      <HeartIcon size={24} className={styles.icon} />
      <div className={styles.interactionBar}>
        <p className={styles.text}>{`${numLikes} Likes`}</p>
        <ShareIcon size={24} />
      </div>
    </div>
  );
}
