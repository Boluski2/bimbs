
import { Play } from 'lucide-react';
import { useState } from 'react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className="py-20 bg-blue-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
            Watch & Learn
          </span>
          <h2 className="heading-md text-blue-900 mt-4">
            Financial Wisdom in Action
          </h2>
          <p className="text-body text-blue-700/80 max-w-2xl mx-auto mt-4">
            Get a taste of my coaching style and learn valuable financial concepts through these videos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            {!isPlaying ? (
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                  alt="Financial planning workshop" 
                  className="w-full h-72 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/40 flex items-center justify-center">
                  <button 
                    onClick={handlePlayClick}
                    className="bg-white/90 hover:bg-white text-blue-600 rounded-full p-5 transition-all hover:scale-110"
                    aria-label="Play video"
                  >
                    <Play className="h-8 w-8 fill-current" />
                  </button>
                </div>
              </div>
            ) : (
              <iframe 
                className="w-full h-72 md:h-96"
                src="https://www.youtube.com/embed/pWOv9xcoMeY?autoplay=1" 
                title="Financial Planning Basics"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
            <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Financial Planning Basics</h3>
              <p className="text-blue-700/80">Learn the fundamental principles of financial planning that can help you build wealth over time.</p>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <iframe 
              className="w-full h-72 md:h-96"
              src="https://www.youtube.com/embed/PHe0bXAIuk0" 
              title="Investment Strategies for Beginners"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Investment Strategies for Beginners</h3>
              <p className="text-blue-700/80">Discover smart, low-risk investment approaches that can help you grow your wealth steadily.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
