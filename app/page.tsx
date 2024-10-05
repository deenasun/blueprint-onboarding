import Comment from '../components/Comment';
import styles from './styles.module.css';
import '../assets/global.css';
import Post from '@/components/Post';

export default function Home() {
  return (
    <main className={styles.main}>
      <Post name='rbeggs' date='September 19' imageUrl='https://cdn.britannica.com/51/178051-050-3B786A55/San-Francisco.jpg'/>
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
