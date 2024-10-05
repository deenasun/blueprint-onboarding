'use client';

import Comment from '../components/Comment';
import styles from './styles.module.css';
import '../assets/global.css';
import Post from '@/components/Post';
import {queryPosts, queryComments} from '@/supabase/client'
import { useEffect, useState } from 'react';

export default function Home() {

  const [posts, setPosts] = useState<QueryPost[]>(null)
  const [comments, setComments] = useState<any[]>(null)

  useEffect(() => {
    queryPosts().then((response) => {
      setPosts(response.posts)
    })
    queryComments().then((response) => {
      setComments(response.comments)
    })
  }, [])

  if (!posts || !comments) {return}

  return (
    <main className={styles.main}>
      {posts.map((posts) => (
        <Post key={posts.uuid} name={posts.username} date={posts.created_at} imageUrl={posts.image_url} />
      ))}
      <div>
        {comments.map((comment) => (
          <Comment key={comment.uuid}name={comment.username} date={comment.created_at} comment={comment.comment} />
        ))}
      </div>
    </main>
  );
}
