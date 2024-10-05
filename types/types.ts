interface CommentProps {
  name: string;
  date: string;
  comment: string;
}

interface PostProps {
  name: string;
  date: string;
  content: string;
  imageUrl: string;
  numLikes?: number;
}

interface InteractionBarProps {
  numLikes: number;
}

interface QueryPost {
  created_at: string;
  description: string;
  image_url: string;
  like_count: number;
  username: string;
  uuid: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface QueryComment {
  created_at: string;
  username: string;
  comment: string;
  uuid: string;
}
