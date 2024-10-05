import { LuUserCircle as ProfileIcon } from 'react-icons/lu';
import styles from '../app/styles.module.css';
import Image from 'next/image';
import InteractionBar from './InteractionBar';

export default function Post({
  name,
  date,
  imageUrl
} : PostProps) {

  return (
  <div className={styles.post}>
    <div className={styles.container}>
      <ProfileIcon size={24} className={styles.icon} />
      <div className={styles.profile}>
        <p className={styles.text}>{name}</p>
        <p className={styles.date}>{date}</p>
      </div>
    </div>
    <div className={styles.content}>
      <p>
        In response to the growing homelessness crisis in San Francisco, a
        local nonprofit organization, Code Tenderloin, has launched a
        comprehensive initiative aimed at providing long-term solutions for
        individuals experiencing homelessness. The organization, founded in
        2015, is dedicated to addressing both immediate needs and underlying
        causes of homelessness through a combination of shelter services,
        job training programs, and mental health support. Read more online:{' '}
        <a href="https://www.codetenderloin.org" className={styles.link}>
          https://www.codetenderloin.org/
        </a>
      </p>
    </div>

    <Image
      alt='image of San Francisco'
      className={styles.image}
      width={300}
      height={300}
      src={imageUrl}
    />
    <InteractionBar />
  </div>)

}