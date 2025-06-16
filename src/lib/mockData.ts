
import { Meme } from '@/types/meme';

export const mockMemes: Meme[] = [
  {
    id: '1',
    title: 'Doge HODL Forever',
    image_url: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop',
    tags: ['crypto', 'doge', 'hodl'],
    upvotes: 420,
    downvotes: 69,
    owner_id: 'cyberpunk420',
    created_at: '2025-01-20T10:00:00Z',
    caption: 'Much HODL, very diamond hands, wow!',
    vibe: 'Crypto Diamond Hands Energy',
    current_bid: 1337,
    highest_bidder: 'memeLord9000'
  },
  {
    id: '2',
    title: 'Stonks Only Go Up',
    image_url: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=400&fit=crop',
    tags: ['stonks', 'wsb', 'moon'],
    upvotes: 666,
    downvotes: 13,
    owner_id: 'wallstreetBets',
    created_at: '2025-01-20T09:30:00Z',
    caption: 'Number go up, brain go smooth 🚀',
    vibe: 'Ape Together Strong Chaos',
    current_bid: 2500,
    highest_bidder: 'diamondHands'
  },
  {
    id: '3',
    title: 'This Is Fine AI',
    image_url: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=400&fit=crop',
    tags: ['ai', 'fine', 'chaos'],
    upvotes: 1337,
    downvotes: 42,
    owner_id: 'aiOverlord',
    created_at: '2025-01-20T08:15:00Z',
    caption: 'AI training on memes? This is fine.',
    vibe: 'Digital Apocalypse Vibes',
    current_bid: 999,
    highest_bidder: 'techBro2077'
  },
  {
    id: '4',
    title: 'Hackerman Supreme',
    image_url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop',
    tags: ['hacker', 'code', 'matrix'],
    upvotes: 2048,
    downvotes: 256,
    owner_id: 'neo2077',
    created_at: '2025-01-20T07:00:00Z',
    caption: 'I know kung fu... and JavaScript',
    vibe: 'Matrix Hacker Aesthetic',
    current_bid: 3333,
    highest_bidder: 'morpheus'
  }
];

export const mockCaptions = [
  'To the MOON! 🚀',
  'Diamond hands forever! 💎',
  'This is the way',
  'HODL until Valhalla!',
  'Number go up!',
  'Ape together strong',
  'When Lambo?',
  'BRRR money printer',
  'Stonks only go up',
  'Much wow, very meme'
];

export const mockVibes = [
  'Neon Cyber Chaos',
  'Digital Punk Energy',
  'Retro Future Vibes',
  'Matrix Glitch Aesthetic',
  'Synthwave Dreams',
  'Cyberpunk Dystopia',
  'Neon-Soaked Madness',
  'Binary Rebellion',
  'Electric Chaos Energy',
  'Holographic Insanity'
];
