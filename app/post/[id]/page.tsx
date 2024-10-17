'use client';

import { useContext, useEffect, useState } from 'react';
import { AppContext } from '@/components/AppContext';
import Comment from '@/components/Comment';
import Post from '@/components/Post';
import { queryCommentsByPostId } from '@/supabase/client';
import { PageParams, QueryComment, QueryPost } from '@/types/types';
import styles from '../../../app/styles.module.css';

export default function Page(params: PageParams) {
  const postId = params.params.id;

  const [post, setPost] = useState<QueryPost | null>(null);
  const [comments, setComments] = useState<QueryComment[] | null>(null);
  const { getPostById } = useContext(AppContext);

  useEffect(() => {
    const result = getPostById(postId);
    if (result) {
      setPost(getPostById(postId));
      queryCommentsByPostId(postId).then(response => {
        setComments(response.comments);
      });
    }
  }, [postId, getPostById]);

  if (!comments || !post) {
    return;
  }

  return (
    <main className={styles.main}>
      <Post
        key={post?.uuid}
        name={post?.username}
        date={post?.created_at}
        content={post?.description}
        imageUrl={post?.image_url}
        numLikes={post?.like_count}
      />
      {comments.map(comments => (
        <Comment
          key={comments.uuid}
          name={comments.username}
          date={comments.created_at}
          comment={comments.comment}
        />
      ))}
    </main>
  );
}
