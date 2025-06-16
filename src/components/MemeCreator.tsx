
import { useState } from 'react';
import { Plus, Sparkles } from 'lucide-react';

interface MemeCreatorProps {
  onCreateMeme: (meme: { title: string; image_url: string; tags: string[] }) => void;
}

const MemeCreator = ({ onCreateMeme }: MemeCreatorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [tagsInput, setTagsInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) return;
    
    const tags = tagsInput.split(',').map(tag => tag.trim()).filter(Boolean);
    const finalImageUrl = imageUrl.trim() || `https://picsum.photos/400/400?random=${Date.now()}`;
    
    onCreateMeme({
      title: title.trim(),
      image_url: finalImageUrl,
      tags
    });
    
    // Reset form
    setTitle('');
    setImageUrl('');
    setTagsInput('');
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="cyber-button w-full flex items-center justify-center gap-2 mb-6"
      >
        <Plus size={20} />
        <span className="font-bold">CREATE MEME</span>
        <Sparkles size={16} className="animate-neon-pulse" />
      </button>
    );
  }

  return (
    <div className="cyber-card mb-6 border-cyber-green/50">
      <div className="terminal-text text-cyber-green mb-4 font-bold">
        {'>'} INITIALIZING MEME CREATION PROTOCOL...
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-cyber-blue text-sm font-bold mb-2">
            MEME TITLE:
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="cyber-input w-full"
            placeholder="e.g., Doge HODL Forever"
            required
          />
        </div>

        <div>
          <label className="block text-cyber-blue text-sm font-bold mb-2">
            IMAGE URL (optional):
          </label>
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="cyber-input w-full"
            placeholder="Leave empty for random image"
          />
          <div className="text-cyber-green text-xs mt-1">
            * Default: Random placeholder image
          </div>
        </div>

        <div>
          <label className="block text-cyber-blue text-sm font-bold mb-2">
            TAGS:
          </label>
          <input
            type="text"
            value={tagsInput}
            onChange={(e) => setTagsInput(e.target.value)}
            className="cyber-input w-full"
            placeholder="crypto, funny, doge (comma separated)"
          />
        </div>

        <div className="flex gap-2">
          <button
            type="submit"
            className="cyber-button flex-1 flex items-center justify-center gap-2"
          >
            <Sparkles size={16} />
            DEPLOY MEME
          </button>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
          >
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
};

export default MemeCreator;
