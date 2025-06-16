
export interface Meme {
  id: string;
  title: string;
  image_url: string;
  tags: string[];
  upvotes: number;
  downvotes: number;
  owner_id: string;
  created_at: string;
  caption?: string;
  vibe?: string;
  current_bid?: number;
  highest_bidder?: string;
}

export interface Bid {
  id: string;
  meme_id: string;
  user_id: string;
  credits: number;
  created_at: string;
}

export interface Vote {
  id: string;
  meme_id: string;
  user_id: string;
  type: 'up' | 'down';
  created_at: string;
}
