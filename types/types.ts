export interface CommentProps {
  name: string;
  date: string;
  comment: string;
}

export interface PostProps {
  name: string;
  date: string;
  content: string;
  imageUrl: string;
  numLikes: number;
}

export interface InteractionBarProps {
  numLikes: number;
}

export interface QueryPost {
  created_at: string;
  description: string;
  image_url: string;
  like_count: number;
  username: string;
  uuid: string;
}

export interface QueryComment {
  created_at: string;
  username: string;
  comment: string;
  uuid: string;
}
