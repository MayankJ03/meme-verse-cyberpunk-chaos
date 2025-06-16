
import TerminalHeader from "@/components/TerminalHeader";
import MemeCard from "@/components/MemeCard";
import MemeCreator from "@/components/MemeCreator";
import Leaderboard from "@/components/Leaderboard";
import { useMemes } from "@/hooks/useMemes";

const Index = () => {
  const { memes, isLoading, createMeme, voteMeme, bidMeme } = useMemes();

  return (
    <div className="min-h-screen bg-cyber-dark">
      <div className="container mx-auto px-4 py-8">
        <TerminalHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <MemeCreator onCreateMeme={createMeme} />
            
            {isLoading && (
              <div className="text-center text-cyber-green mb-6">
                <div className="animate-pulse">
                  {'>'} DEPLOYING MEME TO THE MATRIX...
                </div>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {memes.map((meme) => (
                <MemeCard
                  key={meme.id}
                  meme={meme}
                  onVote={voteMeme}
                  onBid={bidMeme}
                />
              ))}
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Leaderboard memes={memes} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
