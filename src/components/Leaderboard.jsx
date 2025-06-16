
import { Trophy, TrendingUp, Zap } from 'lucide-react';

const Leaderboard = ({ memes }) => {
  const topMemes = [...memes]
    .sort((a, b) => (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes))
    .slice(0, 5);

  return (
    <div className="cyber-card border-cyber-green/50">
      <div className="flex items-center gap-2 mb-4">
        <Trophy className="text-cyber-green animate-neon-pulse" size={20} />
        <h2 className="text-cyber-green font-bold text-lg neon-text">
          TRENDING LEADERBOARD
        </h2>
        <TrendingUp className="text-cyber-pink" size={16} />
      </div>

      <div className="space-y-3">
        {topMemes.map((meme, index) => (
          <div 
            key={meme.id}
            className="flex items-center justify-between p-3 bg-cyber-dark/30 rounded border border-cyber-blue/20"
          >
            <div className="flex items-center gap-3">
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm
                ${index === 0 ? 'bg-cyber-green text-black' : 
                  index === 1 ? 'bg-cyber-blue text-black' : 
                  index === 2 ? 'bg-cyber-pink text-black' : 
                  'bg-gray-600 text-white'}
              `}>
                {index + 1}
              </div>
              
              <div>
                <div className="text-white font-semibold truncate max-w-[200px]">
                  {meme.title}
                </div>
                <div className="text-cyber-blue text-xs">
                  by {meme.owner_id}
                </div>
              </div>
            </div>

            <div className="text-right">
              <div className="flex items-center gap-1 text-cyber-green font-bold">
                <Zap size={12} />
                {meme.upvotes - meme.downvotes}
              </div>
              {meme.current_bid && (
                <div className="text-cyber-pink text-xs">
                  {meme.current_bid} credits
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center text-cyber-blue text-xs">
        [ REAL-TIME CHAOS RANKINGS UPDATED ]
      </div>
    </div>
  );
};

export default Leaderboard;
