export interface AuthorProps {
  name: string;
  photo: string;
  url: string;
}

export interface WebmentionProps {
  author: AuthorProps;
  "wm-received": string;
  "wm-property": string;
}

export interface Props {
  webmentions: WebmentionProps[];
}
