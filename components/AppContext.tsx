'use client';

import React, { createContext, useEffect, useMemo, useState } from 'react';
import { queryPosts } from '@/supabase/client';
import { QueryPost } from '@/types/types';

interface AppContextState {
  getAllPosts: () => QueryPost[] | null;
  getPostById: (id: string) => QueryPost | null;
}

export const AppContext = createContext<AppContextState>({} as AppContextState);

export function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [posts, setPosts] = useState<QueryPost[] | null>(null);

  useEffect(() => {
    queryPosts().then(response => {
      setPosts(response?.posts);
    });
  }, []);

  function getAllPosts() {
    return posts;
  }

  function getPostById(id: string) {
    const post = posts?.find(post => post.uuid === id);
    return post ?? null;
  }

  const AppContextValue = useMemo(
    () => ({ getAllPosts, getPostById }),
    [posts],
  );

  return (
    <AppContext.Provider value={AppContextValue}>
      {children}
    </AppContext.Provider>
  );
}
