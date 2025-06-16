
import { useState } from 'react';
import TerminalHeader from '@/components/TerminalHeader';
import MemeCreator from '@/components/MemeCreator';
import MemeCard from '@/components/MemeCard';
import Leaderboard from '@/components/Leaderboard';
import { useMemes } from '@/hooks/useMemes';
import { Activity, Cpu, Zap } from 'lucide-react';

const Index = () => {
  const { memes, isLoading, createMeme, voteMeme, bidMeme } = useMemes();
  const [filter, setFilter] = useState<'all' | 'trending' | 'recent'>('all');

  const filteredMemes = memes.filter(meme => {
    if (filter === 'trending') {
      return (meme.upvotes - meme.downvotes) > 100;
    }
    if (filter === 'recent') {
      const oneHourAgo = Date.now() - 3600000;
      return new Date(meme.created_at).getTime() > oneHourAgo;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-cyber-darker">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <TerminalHeader />
        
        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="cyber-card border-cyber-blue/50 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Activity className="text-cyber-blue animate-neon-pulse" size={20} />
              <span className="text-cyber-blue font-bold">TOTAL MEMES</span>
            </div>
            <div className="text-2xl font-bold text-white neon-text">{memes.length}</div>
          </div>
          
          <div className="cyber-card border-cyber-green/50 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Zap className="text-cyber-green animate-neon-pulse" size={20} />
              <span className="text-cyber-green font-bold">TOTAL VOTES</span>
            </div>
            <div className="text-2xl font-bold text-white neon-text">
              {memes.reduce((acc, meme) => acc + meme.upvotes + meme.downvotes, 0)}
            </div>
          </div>
          
          <div className="cyber-card border-cyber-pink/50 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Cpu className="text-cyber-pink animate-neon-pulse" size={20} />
              <span className="text-cyber-pink font-bold">ACTIVE BIDS</span>
            </div>
            <div className="text-2xl font-bold text-white neon-text">
              {memes.filter(meme => meme.current_bid && meme.current_bid > 0).length}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <MemeCreator onCreateMeme={createMeme} />
            
            {/* Filter Tabs */}
            <div className="flex gap-2 mb-6">
              {[
                { key: 'all', label: 'ALL MEMES' },
                { key: 'trending', label: 'TRENDING' },
                { key: 'recent', label: 'RECENT' }
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setFilter(key as any)}
                  className={`px-4 py-2 rounded font-bold text-sm transition-all ${
                    filter === key
                      ? 'cyber-button'
                      : 'bg-cyber-dark/50 text-gray-400 border border-gray-600 hover:border-cyber-blue/50'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Loading State */}
            {isLoading && (
              <div className="text-center py-8">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-cyber-pink"></div>
                <div className="text-cyber-green mt-2 font-mono text-sm">
                  [ GENERATING MEME WITH AI CHAOS... ]
                </div>
              </div>
            )}

            {/* Memes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredMemes.map((meme) => (
                <MemeCard
                  key={meme.id}
                  meme={meme}
                  onVote={voteMeme}
                  onBid={bidMeme}
                />
              ))}
            </div>

            {filteredMemes.length === 0 && !isLoading && (
              <div className="text-center py-12 cyber-card border-gray-600">
                <div className="text-gray-400 text-lg mb-2">No memes found</div>
                <div className="text-cyber-blue text-sm">
                  Create the first meme to start the chaos!
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Leaderboard memes={memes} />
            
            {/* System Status */}
            <div className="cyber-card mt-6 border-cyber-purple/50">
              <div className="text-cyber-purple font-bold text-sm mb-3 neon-text">
                SYSTEM STATUS
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">BLOCKCHAIN</span>
                  <span className="text-cyber-green">ONLINE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">AI CAPTIONS</span>
                  <span className="text-cyber-green">ACTIVE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">REAL-TIME</span>
                  <span className="text-cyber-green">SYNCED</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">CHAOS LEVEL</span>
                  <span className="text-cyber-pink">MAXIMUM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
