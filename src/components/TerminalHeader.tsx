
import { useState, useEffect } from 'react';

const TerminalHeader = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = '> WELCOME TO MEMEHUSTLE.EXE - CYBERPUNK MEME MARKETPLACE INITIALIZED...';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="cyber-card mb-8 bg-black/80 border-cyber-green/50">
      <div className="terminal-text font-mono text-sm">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-3 h-3 rounded-full bg-cyber-pink animate-neon-pulse"></div>
          <div className="w-3 h-3 rounded-full bg-cyber-blue animate-neon-pulse"></div>
          <div className="w-3 h-3 rounded-full bg-cyber-green animate-neon-pulse"></div>
        </div>
        <div className="text-cyber-green">
          {displayText}
          <span className="animate-terminal-cursor">_</span>
        </div>
        <div className="text-cyber-blue/70 text-xs mt-2">
          [SYSTEM] Meme trading protocols active | Credits: 10,000 | Status: HACKERMAN
        </div>
      </div>
    </div>
  );
};

export default TerminalHeader;
