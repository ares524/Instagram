export type Story = {
  name: string;
  avatar: string;
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
  image: string;
  caption: string;
};

export type ProfileProps = {
  avatar: string,
  username: string,
  name: string,
  suggestions?: suggestion[]
}

export type suggestion = {
  name: string,
  avatar: string
  followedBy: string
}