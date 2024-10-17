'use client';

import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
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

  const getAllPosts = useCallback(() => {
    return posts;
  }, [posts]);

  const getPostById = useCallback(
    (id: string): QueryPost | null => {
      const post = posts?.find(post => post.uuid === id);
      return post ?? null;
    },
    [posts],
  );

  const AppContextValue = useMemo(
    () => ({ getAllPosts, getPostById }),
    [getAllPosts, getPostById],
  );

  return (
    <AppContext.Provider value={AppContextValue}>
      {children}
    </AppContext.Provider>
  );
}
