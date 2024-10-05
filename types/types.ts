interface CommentProps {
  name: string;
  date: string;
  comment: string;
}

interface PostProps {
  name: string;
  date: string;
  imageUrl: string;
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
