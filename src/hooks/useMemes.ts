
import { useState, useEffect } from 'react';
import { mockMemes, mockCaptions, mockVibes } from '@/lib/mockData';
import { Meme } from '@/types/meme';

export const useMemes = () => {
  const [memes, setMemes] = useState<Meme[]>(mockMemes);
  const [isLoading, setIsLoading] = useState(false);

  const createMeme = async (memeData: { title: string; image_url: string; tags: string[] }) => {
    setIsLoading(true);
    
    // Simulate AI caption generation
    const randomCaption = mockCaptions[Math.floor(Math.random() * mockCaptions.length)];
    const randomVibe = mockVibes[Math.floor(Math.random() * mockVibes.length)];
    
    const newMeme: Meme = {
      id: Date.now().toString(),
      title: memeData.title,
      image_url: memeData.image_url,
      tags: memeData.tags,
      upvotes: Math.floor(Math.random() * 10),
      downvotes: Math.floor(Math.random() * 3),
      owner_id: 'hackerman2077',
      created_at: new Date().toISOString(),
      caption: randomCaption,
      vibe: randomVibe,
      current_bid: 0,
      highest_bidder: undefined
    };

    // Simulate async operation
    setTimeout(() => {
      setMemes(prev => [newMeme, ...prev]);
      setIsLoading(false);
    }, 1000);
  };

  const voteMeme = (memeId: string, type: 'up' | 'down') => {
    setMemes(prev => prev.map(meme => {
      if (meme.id === memeId) {
        return {
          ...meme,
          upvotes: type === 'up' ? meme.upvotes + 1 : meme.upvotes,
          downvotes: type === 'down' ? meme.downvotes + 1 : meme.downvotes
        };
      }
      return meme;
    }));
  };

  const bidMeme = (memeId: string, credits: number) => {
    setMemes(prev => prev.map(meme => {
      if (meme.id === memeId && credits > (meme.current_bid || 0)) {
        return {
          ...meme,
          current_bid: credits,
          highest_bidder: 'you'
        };
      }
      return meme;
    }));
  };

  return {
    memes,
    isLoading,
    createMeme,
    voteMeme,
    bidMeme
  };
};
