interface AuthorPros {
  avatarUrl: string;
  name: string;
  role: string;
}

interface ContentProps {
  type: string;
  content: string | string[];
}

export interface PostsProps {
  author: AuthorPros;
  publishedAt: Date;
  contents: ContentProps[];
}

export interface FormPostProps {
  comment: string;
}
