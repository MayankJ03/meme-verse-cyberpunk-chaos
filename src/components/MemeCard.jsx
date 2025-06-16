
import { useState } from 'react';
import { ChevronUp, ChevronDown, DollarSign, Zap, User } from 'lucide-react';

const MemeCard = ({ meme, onVote, onBid }) => {
  const [bidAmount, setBidAmount] = useState('');
  const [isGlitching, setIsGlitching] = useState(false);

  const handleVote = (type) => {
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 300);
    onVote(meme.id, type);
  };

  const handleBid = () => {
    const credits = parseInt(bidAmount);
    if (credits > 0) {
      onBid(meme.id, credits);
      setBidAmount('');
    }
  };

  return (
    <div className={`cyber-card hover:scale-105 transition-all duration-300 ${isGlitching ? 'animate-glitch' : ''}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-cyber-pink font-bold text-lg neon-text truncate">
          {meme.title}
        </h3>
        <div className="flex items-center gap-1 text-cyber-blue text-sm">
          <User size={12} />
          <span>{meme.owner_id}</span>
        </div>
      </div>

      {/* Image */}
      <div className="relative mb-4 rounded-lg overflow-hidden border border-cyber-blue/20">
        <img 
          src={meme.image_url} 
          alt={meme.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      {/* AI Caption & Vibe */}
      {meme.caption && (
        <div className="mb-3 p-2 bg-cyber-dark/50 rounded border-l-2 border-cyber-green">
          <div className="text-cyber-green text-xs font-bold">AI CAPTION:</div>
          <div className="text-white text-sm">{meme.caption}</div>
        </div>
      )}

      {meme.vibe && (
        <div className="mb-3 text-center">
          <span className="text-cyber-purple text-xs font-bold bg-cyber-purple/20 px-2 py-1 rounded">
            <Zap size={12} className="inline mr-1" />
            {meme.vibe}
          </span>
        </div>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-1 mb-4">
        {meme.tags.map((tag, index) => (
          <span 
            key={index}
            className="text-xs bg-cyber-blue/20 text-cyber-blue px-2 py-1 rounded"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Voting */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleVote('up')}
            className="flex items-center gap-1 cyber-button text-xs px-2 py-1"
          >
            <ChevronUp size={14} />
            {meme.upvotes}
          </button>
          <button
            onClick={() => handleVote('down')}
            className="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded text-xs"
          >
            <ChevronDown size={14} />
            {meme.downvotes}
          </button>
        </div>
        
        <div className="text-cyber-green text-sm font-bold">
          Score: {meme.upvotes - meme.downvotes}
        </div>
      </div>

      {/* Current Bid */}
      {meme.current_bid && (
        <div className="mb-3 p-2 bg-cyber-pink/10 border border-cyber-pink/30 rounded">
          <div className="text-cyber-pink text-xs font-bold">HIGHEST BID:</div>
          <div className="text-white">
            {meme.current_bid} credits by {meme.highest_bidder}
          </div>
        </div>
      )}

      {/* Bidding */}
      <div className="flex gap-2">
        <input
          type="number"
          value={bidAmount}
          onChange={(e) => setBidAmount(e.target.value)}
          placeholder="Credits"
          className="cyber-input flex-1 text-sm"
          min="1"
        />
        <button
          onClick={handleBid}
          disabled={!bidAmount || parseInt(bidAmount) <= 0}
          className="flex items-center gap-1 cyber-button text-xs px-3 py-2 disabled:opacity-50"
        >
          <DollarSign size={12} />
          BID
        </button>
      </div>
    </div>
  );
};

export default MemeCard;
