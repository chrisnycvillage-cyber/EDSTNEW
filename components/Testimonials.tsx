'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Play, Star, Pause, Volume2, VolumeX } from 'lucide-react';
import { LiveRevenueWidget } from './LiveRevenueWidget';
import { useState, useEffect, useRef, useCallback } from 'react';

// Extended testimonials pool - 16 reviews (same as marketing page)
const allTestimonials = [
  {
    quote: "The best marketing agency on the planet! Took my IG, TikTok, press and Spotify to a whole other level. Because of them I got signed to Def Jam, my dream label!",
    author: 'Dream Team',
    role: 'Recording Artist',
    source: 'Trustpilot',
  },
  {
    quote: "Everyday Success Team changed the way I saw my business. Not only did my following and my sales grow, but I was enveloped into such a supportive community.",
    author: 'Alexandra Castle',
    role: 'Founder, Castle Art',
    source: 'Google',
  },
  {
    quote: "The service has been absolutely fantastic – It has helped automate my business in ways I did not know was possible. Great guys, highly recommend.",
    author: 'Dr. Dan',
    role: 'Chiropractor & Wellness Expert',
    source: 'Google',
  },
  {
    quote: "Without this company it would have taken me years to get to the point I am in my business. So grateful for them!",
    author: 'Rebecca B.',
    role: 'Entrepreneur & Writer',
    source: 'Trustpilot',
  },
  {
    quote: "EDST has changed my way of life! They bring me value that I didn't know was out there and it's not just the services, it's the genuine care they have.",
    author: 'Isaiah Haynes',
    role: 'Musician',
    source: 'Google',
  },
  {
    quote: "This is the best agency on the planet by far! Their social media campaigns really helped me network like no other to improve my brand.",
    author: 'Marcus T.',
    role: 'Content Creator',
    source: 'Trustpilot',
  },
  {
    quote: "Look at your favorite celebrity's account, they likely work with them. The results speak for themselves. My engagement went through the roof.",
    author: 'Jordan K.',
    role: 'Influencer',
    source: 'Glassdoor',
  },
  {
    quote: "Great company, great vision. They really care about their clients' success and it shows in everything they do. 10/10 would recommend.",
    author: 'Sarah M.',
    role: 'E-commerce Owner',
    source: 'Google',
  },
  {
    quote: "The team at EDST helped me go from 5K to 500K followers in under a year. Their strategies actually work. Life changing.",
    author: 'Chris L.',
    role: 'Fitness Coach',
    source: 'Trustpilot',
  },
  {
    quote: "I was skeptical at first but the results were undeniable. My music is now reaching audiences I never thought possible. Thank you EDST!",
    author: 'Nina R.',
    role: 'Independent Artist',
    source: 'Google',
  },
  {
    quote: "Professional, responsive, and they actually deliver what they promise. Rare to find in this industry. My business doubled in 6 months.",
    author: 'David P.',
    role: 'Agency Owner',
    source: 'Glassdoor',
  },
  {
    quote: "The community alone is worth it. Being around other successful entrepreneurs pushing each other daily. The services are just a bonus.",
    author: 'Ashley W.',
    role: 'Life Coach',
    source: 'Trustpilot',
  },
  {
    quote: "They got me features in major publications I couldn't get on my own. The PR team knows what they're doing. Absolutely elite.",
    author: 'Mike J.',
    role: 'Tech Founder',
    source: 'Google',
  },
  {
    quote: "From zero to viral. That's the EDST difference. My content went from 1K views to millions. These guys are the real deal.",
    author: 'Taylor S.',
    role: 'TikTok Creator',
    source: 'Trustpilot',
  },
  {
    quote: "Best investment I've made in my career. The ROI is insane. If you're serious about growth, stop looking and just join.",
    author: 'Brandon H.',
    role: 'Real Estate Investor',
    source: 'Google',
  },
  {
    quote: "They understand the music industry in a way most agencies don't. Helped me chart on multiple platforms. Forever grateful.",
    author: 'Melody V.',
    role: 'Singer-Songwriter',
    source: 'Trustpilot',
  },
];

// Video testimonials with actual video sources
const videoTestimonials = [
  { 
    id: 1, 
    videoUrl: '/videos/brandonleethethird-testimonial.mov',
    name: 'Brandon Lee',
    title: 'Content Creator'
  },
  { 
    id: 2, 
    videoUrl: '/videos/ceo.linko-testimonial.mov',
    name: 'CEO Linko',
    title: 'Entrepreneur'
  },
  { 
    id: 3, 
    videoUrl: '/videos/disturbthenoize-testimonial.mov',
    name: 'Disturb The Noize',
    title: 'Artist'
  },
  { 
    id: 4, 
    videoUrl: '/videos/Dyynvmicmn-testimonial.mov',
    name: 'Dyynvmicmn',
    title: 'Creator'
  },
  { 
    id: 5, 
    videoUrl: '/videos/H3theartist-testimonial.mov',
    name: 'H3 The Artist',
    title: 'Musician'
  },
  { 
    id: 6, 
    videoUrl: '/videos/Joeydoyles-testimonial.mov',
    name: 'Joey Doyles',
    title: 'Artist'
  },
  { 
    id: 7, 
    videoUrl: '/videos/Modi3st_-testimonial.mov',
    name: 'Modi3st',
    title: 'Creator'
  },
  { 
    id: 8, 
    videoUrl: '/videos/Mysplitego-testimonial.mov',
    name: 'My Split Ego',
    title: 'Artist'
  },
  { 
    id: 9, 
    videoUrl: '/videos/Officialmosesbravo-testimonial.mov',
    name: 'Moses Bravo',
    title: 'Artist'
  },
  { 
    id: 10, 
    videoUrl: '/videos/papismilez-testimonal-1.mov',
    name: 'Papi Smilez',
    title: 'Creator'
  },
  { 
    id: 11, 
    videoUrl: '/videos/Rasheed_bailey1-testimonial.mov',
    name: 'Rasheed Bailey',
    title: 'Athlete'
  },
  { 
    id: 12, 
    videoUrl: '/videos/Romanftiw-testimonial.mov',
    name: 'Roman FTIW',
    title: 'Artist'
  },
  { 
    id: 13, 
    videoUrl: '/videos/s.t.f.u_official-testimonial.mov',
    name: 'S.T.F.U Official',
    title: 'Artist'
  },
  { 
    id: 14, 
    videoUrl: '/videos/Tb.bully-testimonial.mov',
    name: 'TB Bully',
    title: 'Creator'
  },
  { 
    id: 15, 
    videoUrl: '/videos/the_jb.Santiago-testimonials.mov',
    name: 'JB Santiago',
    title: 'Artist'
  },
];

// Fisher-Yates shuffle
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Individual video card component - receives playing state from parent
const InlineVideoCard = ({ 
  video, 
  index,
  isCurrentlyPlaying,
  onPlay
}: { 
  video: typeof videoTestimonials[0]; 
  index: number;
  isCurrentlyPlaying: boolean;
  onPlay: (id: number) => void;
}) => {
  const [isMuted, setIsMuted] = useState(false); // Start with sound ON
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle play/pause based on parent state
  useEffect(() => {
    if (videoRef.current) {
      if (isCurrentlyPlaying) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isCurrentlyPlaying]);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isCurrentlyPlaying) {
      onPlay(-1); // Stop playing
    } else {
      onPlay(video.id); // Start playing this video
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex-shrink-0 w-[120px] md:w-[140px] aspect-[9/16] rounded-xl overflow-hidden bg-edst-charcoal/60 border border-edst-slate/20 cursor-pointer group"
    >
      {/* Loading placeholder - shows while video loads */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-edst-charcoal via-edst-slate/30 to-edst-charcoal animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-edst-gold/30 border-t-edst-gold rounded-full animate-spin" />
        </div>
      )}

      {/* Video element - plays inline */}
      <video
        ref={videoRef}
        src={video.videoUrl}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        muted={isMuted}
        playsInline
        loop
        preload="auto"
        onLoadedData={() => setIsLoaded(true)}
        onClick={handleClick}
      />
      
      {/* Gradient overlay - fades when playing */}
      <div 
        className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${isCurrentlyPlaying && !isHovered ? 'opacity-30' : 'opacity-100'}`} 
      />
      
      {/* Play/Pause button overlay */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        animate={{ opacity: isCurrentlyPlaying && !isHovered ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        onClick={handleClick}
      >
        <motion.div
          className="w-10 h-10 rounded-full bg-edst-gold/90 flex items-center justify-center shadow-lg"
          animate={{ scale: isHovered ? 1.15 : 1 }}
          transition={{ duration: 0.2 }}
        >
          {isCurrentlyPlaying ? (
            <Pause className="w-5 h-5 text-edst-black" fill="currentColor" />
          ) : (
            <Play className="w-5 h-5 text-edst-black ml-0.5" fill="currentColor" />
          )}
        </motion.div>
      </motion.div>

      {/* Mute button - shows when playing or hovered */}
      <motion.button
        onClick={toggleMute}
        className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black/80 transition-colors z-10"
        animate={{ opacity: isCurrentlyPlaying || isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {isMuted ? (
          <VolumeX className="w-3 h-3" />
        ) : (
          <Volume2 className="w-3 h-3" />
        )}
      </motion.button>

      {/* Name overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-2 pointer-events-none">
        <p className="text-[10px] font-semibold text-white truncate">{video.name}</p>
        <p className="text-[8px] text-edst-silver truncate">{video.title}</p>
      </div>

      {/* Playing indicator */}
      {isCurrentlyPlaying && (
        <div className="absolute top-2 left-2 flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-black/60">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[8px] text-white font-medium">PLAYING</span>
        </div>
      )}

      {/* Hover border effect */}
      <motion.div 
        className="absolute inset-0 border-2 border-edst-gold/0 rounded-xl pointer-events-none"
        animate={{ borderColor: isHovered ? 'rgba(250,204,83,0.6)' : 'rgba(250,204,83,0)' }}
      />
    </motion.div>
  );
};

export const Testimonials = () => {
  const [positions, setPositions] = useState([0, 1, 2, 3]);
  const [isClient, setIsClient] = useState(false);
  const [currentlyPlayingId, setCurrentlyPlayingId] = useState<number>(-1);
  
  // Queue system to ensure all testimonials cycle through before repeating
  const queueRef = useRef<number[]>([]);
  const currentPositionRef = useRef(0);

  const handleVideoPlay = (id: number) => {
    setCurrentlyPlayingId(id);
  };

  // Initialize queue with shuffled indices (excluding first 4 that are showing)
  const initializeQueue = useCallback(() => {
    const remainingIndices = Array.from({ length: allTestimonials.length }, (_, i) => i)
      .filter(i => !positions.includes(i));
    queueRef.current = shuffleArray(remainingIndices);
    currentPositionRef.current = 0;
  }, []);

  // Get next testimonial from queue
  const getNextFromQueue = useCallback((currentlyShowing: number[]): number => {
    // If queue is empty, refill it with all indices not currently showing
    if (queueRef.current.length === 0) {
      const availableIndices = Array.from({ length: allTestimonials.length }, (_, i) => i)
        .filter(i => !currentlyShowing.includes(i));
      queueRef.current = shuffleArray(availableIndices);
    }
    
    // Get next from queue, ensuring it's not currently showing
    let nextIndex = queueRef.current.shift()!;
    
    // Safety check: if somehow it's showing, get another
    while (currentlyShowing.includes(nextIndex) && queueRef.current.length > 0) {
      queueRef.current.push(nextIndex); // Put it back at the end
      nextIndex = queueRef.current.shift()!;
    }
    
    return nextIndex;
  }, []);

  useEffect(() => {
    setIsClient(true);
    initializeQueue();
  }, [initializeQueue]);

  // Cycle testimonials through positions
  useEffect(() => {
    if (!isClient) return;

    const interval = setInterval(() => {
      setPositions(prev => {
        const newPositions = [...prev];
        
        // Cycle through positions in order: 0, 1, 2, 3, 0, 1, 2, 3...
        const posToUpdate = currentPositionRef.current % 4;
        currentPositionRef.current++;
        
        // Get next testimonial that's not currently showing
        const nextIndex = getNextFromQueue(newPositions);
        
        // Add the outgoing testimonial back to the queue
        queueRef.current.push(newPositions[posToUpdate]);
        
        newPositions[posToUpdate] = nextIndex;
        return newPositions;
      });
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [isClient, getNextFromQueue]);

  if (!isClient) {
    return (
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-edst-dark" />
        <div className="section-container relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-edst-white mb-5">
              Real Results. <span className="text-gradient-gold">Real People.</span>
            </h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-edst-dark" />
      <div className="absolute inset-0 gradient-radial opacity-30" />
      
      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-edst-white mb-5">
            Real Results. <span className="text-gradient-gold">Real People.</span>
          </h2>
          <p className="text-lg text-edst-silver max-w-lg mx-auto">
            Powering businesses, artists, and entrepreneurs worldwide.
          </p>
          
          {/* Live indicator */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <motion.span
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-edst-online"
            />
            <span className="text-xs text-edst-silver uppercase tracking-wider">Live Reviews</span>
          </div>
        </motion.div>

        {/* Testimonials + Live Revenue Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {/* Cycling Testimonials - 2 columns */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5">
            {positions.map((testimonialIndex, positionIndex) => {
              const testimonial = allTestimonials[testimonialIndex];
              return (
                <div key={positionIndex} className="relative h-[200px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={testimonialIndex}
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -20 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      className="absolute inset-0 p-5 rounded-xl bg-edst-charcoal/40 border border-edst-slate/20 hover:border-edst-gold/25 transition-colors"
                    >
                      {/* Stars + Source */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 text-edst-gold fill-edst-gold" />
                          ))}
                        </div>
                        <span className="text-[10px] text-edst-silver/60 uppercase tracking-wider">
                          {testimonial.source}
                        </span>
                      </div>

                      {/* Quote */}
                      <p className="text-sm text-edst-light leading-relaxed mb-4 line-clamp-3">
                        "{testimonial.quote}"
                      </p>

                      {/* Author + Verified */}
                      <div className="flex items-center justify-between mt-auto">
                        <div>
                          <p className="font-semibold text-edst-white text-sm">{testimonial.author}</p>
                          <p className="text-xs text-edst-silver">{testimonial.role}</p>
                        </div>
                        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-edst-online/10 border border-edst-online/20">
                          <CheckCircle className="w-3 h-3 text-edst-online" />
                          <span className="text-[10px] font-medium text-edst-online">Verified</span>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Live Revenue Widget - 1 column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:row-span-2"
          >
            <LiveRevenueWidget />
          </motion.div>
        </div>

        {/* Video Testimonials Section - Horizontal Slider with Inline Playback */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-edst-white">
              Video <span className="text-edst-gold">Testimonials</span>
            </h3>
          </div>

          {/* Video Slider - Horizontal Scroll with Inline Playback */}
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4">
            {videoTestimonials.map((video, index) => (
              <InlineVideoCard 
                key={video.id} 
                video={video} 
                index={index}
                isCurrentlyPlaying={currentlyPlayingId === video.id}
                onPlay={handleVideoPlay}
              />
            ))}
          </div>

          {/* Note + CTA */}
          <div className="text-center mt-4">
            <p className="text-xs text-edst-silver/60 mb-4">
              Real testimonials from real clients
            </p>
            <a
              href="/marketing"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-edst-gold border border-edst-gold/40 rounded-full hover:bg-edst-gold/10 hover:border-edst-gold/60 transition-all"
            >
              Join Them →
            </a>
          </div>
        </motion.div>

        {/* Review count indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-6 mt-10"
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i}
                  className="w-6 h-6 rounded-full bg-gradient-to-br from-edst-gold/40 to-edst-gold/20 border border-edst-gold/30 flex items-center justify-center"
                >
                  <span className="text-[8px] font-bold text-edst-gold">
                    {['A', 'M', 'J', 'S', 'T'][i]}
                  </span>
                </div>
              ))}
            </div>
            <span className="text-xs text-edst-silver">+500 verified reviews</span>
          </div>
          
          <div className="w-px h-4 bg-edst-slate/30" />
          
          <div className="flex items-center gap-1.5">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-edst-gold fill-edst-gold" />
              ))}
            </div>
            <span className="text-xs text-edst-silver">4.9 average</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
