'use client';

import Comment from '../components/Comment';
import styles from './styles.module.css';
import '../assets/global.css';
import { useEffect, useState } from 'react';
import Post from '@/components/Post';
import { queryComments, queryPosts } from '@/supabase/client';
import { QueryComment, QueryPost } from '@/types/types';

export default function Home() {
  const [posts, setPosts] = useState<QueryPost[] | null>(null);
  const [comments, setComments] = useState<QueryComment[] | null>(null);

  useEffect(() => {
    queryPosts().then(response => {
      setPosts(response?.posts);
    });
    queryComments().then(response => {
      setComments(response.comments);
    });
  }, []);

  if (!posts || !comments) {
    return;
  }

  return (
    <main className={styles.main}>
      {posts.map(posts => (
        <Post
          key={posts.uuid}
          name={posts.username}
          date={posts.created_at}
          content={posts.description}
          imageUrl={posts.image_url}
          numLikes={posts.like_count}
        />
      ))}
      <div>
        {comments.map(comment => (
          <Comment
            key={comment.uuid}
            name={comment.username}
            date={comment.created_at}
            comment={comment.comment}
          />
        ))}
      </div>
    </main>
  );
}
