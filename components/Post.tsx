import { LuUserCircle as ProfileIcon } from 'react-icons/lu';
import Image from 'next/image';
import { PostProps } from '@/types/types';
import styles from '../app/styles.module.css';
import InteractionBar from './InteractionBar';

export default function Post({
  name,
  date,
  content,
  imageUrl,
  numLikes,
}: PostProps) {
  const postDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
  });

  const urlIndex = content.indexOf('http');
  let description = content;
  let link = null;
  if (urlIndex !== -1) {
    description = content.substring(0, urlIndex);
    link = content.substring(urlIndex, content.length);
  }

  return (
    <div className={styles.post}>
      <div className={styles.container}>
        <ProfileIcon size={24} className={styles.icon} />
        <div className={styles.profile}>
          <p className={styles.text}>{name}</p>
          <p className={styles.date}>{postDate}</p>
        </div>
      </div>
      <div className={styles.content}>
        <p>
          {description}
          {link && (
            <a href={link} className={styles.link}>
              {link}
            </a>
          )}
        </p>
      </div>

      {imageUrl && (
        <Image
          alt="image of San Francisco"
          className={styles.image}
          width={300}
          height={300}
          src={imageUrl}
        />
      )}
      <InteractionBar numLikes={numLikes} />
    </div>
  );
}
