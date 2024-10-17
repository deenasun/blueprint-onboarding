'use client';

import styles from '../app/styles.module.css';
import '../assets/global.css';
import Feed from '@/components/Feed';

export default function Home() {
  return (
    <main className={styles.main}>
      <Feed />
    </main>
  );
}
