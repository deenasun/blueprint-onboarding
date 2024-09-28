import { FiHeart as HeartIcon } from 'react-icons/fi';
import { GoPaperAirplane as ShareIcon } from 'react-icons/go';
import { LuUserCircle as ProfileIcon } from 'react-icons/lu';
import Comment from './Comment';
import styles from './styles.module.css';
import '../assets/global.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div
        className={styles.container}
        style={{ borderBottom: '1px solid #C4C4C4', paddingBottom: '15px' }}
      >
        <div className={styles.header}>
          <div className={styles.profile}>
            <ProfileIcon size={24} />
            <p style={{ fontWeight: 600 }}>rbeggs</p>
          </div>
          <p className={styles.date}>September 19</p>
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

        <img
          className={styles.image}
          src="https://cdn.britannica.com/51/178051-050-3B786A55/San-Francisco.jpg"
        />

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', columnGap: '12px' }}>
            <HeartIcon size={24} />
            <p style={{ fontWeight: 600 }}>256 Likes</p>
          </div>
          <ShareIcon size={24} />
        </div>
      </div>
      <div>
        <Comment
          name={'daviddd'}
          date={'September 20'}
          comment={
            'This organization is doing amazing work tackling the complex root causes of the issue.'
          }
        />
        <Comment
          name={'vppraggie'}
          date={'September 21'}
          comment={'Thanks for sharing!'}
        />
      </div>
    </main>
  );
}
