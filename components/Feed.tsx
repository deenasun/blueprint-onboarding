'use client';

import styles from '../app/styles.module.css';
import '../assets/global.css';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Post from '@/components/Post';
import { QueryPost } from '@/types/types';
import { AppContext } from './AppContext';

export default function Feed() {
  const [posts, setPosts] = useState<QueryPost[] | null>(null);

  const { getAllPosts } = useContext(AppContext);

  const router = useRouter();

  useEffect(() => {
    const result = getAllPosts();
    setPosts(result);
  }, [getAllPosts]);

  if (!posts) {
    return;
  }

  return (
    <main className={styles.main}>
      {posts.map(posts => (
        <div
          key={posts.uuid}
          onClick={() => router.push('/post/' + posts.uuid + '/')}
        >
          <Post
            key={posts.uuid}
            name={posts.username}
            date={posts.created_at}
            content={posts.description}
            imageUrl={posts.image_url}
            numLikes={posts.like_count}
          />
        </div>
      ))}
    </main>
  );
}
