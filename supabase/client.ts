import { createClient } from '@supabase/supabase-js'
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function queryPosts() {
  const { data: posts, error } = await supabase
    .from('posts')
    .select('*');

  return { posts, error };
}

export async function queryComments() {
  const { data: comments, error } = await supabase
    .from('comments')
    .select('*');

  return { comments, error };
}