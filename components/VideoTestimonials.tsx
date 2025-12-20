'use client';

import { motion } from 'framer-motion';
import { Play, ChevronLeft, ChevronRight, Pause, Volume2, VolumeX } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

// Video testimonials with actual video sources - ordered for diversity in first 3
const videoTestimonials = [
  { 
    id: 1, 
    videoUrl: '/videos/Rasheed_bailey1-testimonial.mov',
    name: 'Rasheed Bailey',
    title: 'Athlete'
  },
  { 
    id: 2, 
    videoUrl: '/videos/Joeydoyles-testimonial.mov',
    name: 'Joey Doyles',
    title: 'Artist'
  },
  { 
    id: 3, 
    videoUrl: '/videos/Mysplitego-testimonial.mov',
    name: 'My Split Ego',
    title: 'Artist'
  },
  { 
    id: 4, 
    videoUrl: '/videos/brandonleethethird-testimonial.mov',
    name: 'Brandon Lee',
    title: 'Content Creator'
  },
  { 
    id: 5, 
    videoUrl: '/videos/ceo.linko-testimonial.mov',
    name: 'CEO Linko',
    title: 'Entrepreneur'
  },
  { 
    id: 6, 
    videoUrl: '/videos/disturbthenoize-testimonial.mov',
    name: 'Disturb The Noize',
    title: 'Artist'
  },
  { 
    id: 7, 
    videoUrl: '/videos/Dyynvmicmn-testimonial.mov',
    name: 'Dyynvmicmn',
    title: 'Creator'
  },
  { 
    id: 8, 
    videoUrl: '/videos/H3theartist-testimonial.mov',
    name: 'H3 The Artist',
    title: 'Musician'
  },
  { 
    id: 9, 
    videoUrl: '/videos/Modi3st_-testimonial.mov',
    name: 'Modi3st',
    title: 'Creator'
  },
  { 
    id: 10, 
    videoUrl: '/videos/Officialmosesbravo-testimonial.mov',
    name: 'Moses Bravo',
    title: 'Artist'
  },
  { 
    id: 11, 
    videoUrl: '/videos/papismilez-testimonal-1.mov',
    name: 'Papi Smilez',
    title: 'Creator'
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

// Individual video card component - receives playing state from parent
const VideoCard = ({ 
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

  // Force load the video on mount for mobile
  useEffect(() => {
    if (videoRef.current) {
      // Force load the video
      videoRef.current.load();
      // On mobile, try to seek to show first frame
      const handleLoadedMetadata = () => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0.1; // Set to just after start to show a frame
        }
      };
      videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
      return () => {
        videoRef.current?.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }
  }, []);

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
      className="relative flex-shrink-0 w-[140px] md:w-[160px] aspect-[9/16] rounded-xl overflow-hidden bg-edst-charcoal/60 border border-edst-slate/20 cursor-pointer group"
      style={{ scrollSnapAlign: 'start' }}
    >
      {/* Loading placeholder - shows while video loads */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-edst-charcoal via-edst-slate/30 to-edst-charcoal flex items-center justify-center">
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
        preload="metadata"
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
          className="w-12 h-12 rounded-full bg-edst-gold/90 flex items-center justify-center shadow-lg"
          animate={{ scale: isHovered ? 1.15 : 1 }}
          transition={{ duration: 0.2 }}
        >
          {isCurrentlyPlaying ? (
            <Pause className="w-6 h-6 text-edst-black" fill="currentColor" />
          ) : (
            <Play className="w-6 h-6 text-edst-black ml-0.5" fill="currentColor" />
          )}
        </motion.div>
      </motion.div>

      {/* Mute button - shows when playing or hovered */}
      <motion.button
        onClick={toggleMute}
        className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black/80 transition-colors z-10"
        animate={{ opacity: isCurrentlyPlaying || isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {isMuted ? (
          <VolumeX className="w-3.5 h-3.5" />
        ) : (
          <Volume2 className="w-3.5 h-3.5" />
        )}
      </motion.button>

      {/* Name overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-3 pointer-events-none">
        <p className="text-xs font-semibold text-white truncate">{video.name}</p>
        <p className="text-[10px] text-edst-silver truncate">{video.title}</p>
      </div>

      {/* Playing indicator */}
      {isCurrentlyPlaying && (
        <div className="absolute top-2 left-2 flex items-center gap-1 px-2 py-1 rounded-full bg-black/60">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[9px] text-white font-medium">PLAYING</span>
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

export const VideoTestimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentlyPlayingId, setCurrentlyPlayingId] = useState<number>(-1);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleVideoPlay = (id: number) => {
    setCurrentlyPlayingId(id);
  };

  return (
    <section id="testimonials" className="relative py-12 md:py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-edst-dark" />
      <div className="absolute inset-0 gradient-radial opacity-20" />

      <div className="relative z-10">
        {/* Video Grid Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center mb-8 px-4"
        >
          <h3 className="text-2xl font-semibold text-edst-white">
            Video <span className="text-edst-gold">Testimonials</span>
          </h3>
        </motion.div>

        {/* Slider Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-edst-charcoal/80 border border-edst-slate/30 flex items-center justify-center text-edst-silver hover:text-edst-gold hover:border-edst-gold/50 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-edst-charcoal/80 border border-edst-slate/30 flex items-center justify-center text-edst-silver hover:text-edst-gold hover:border-edst-gold/50 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Scrollable Video Row */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide px-12 md:px-16 py-2"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {videoTestimonials.map((video, index) => (
              <VideoCard 
                key={video.id} 
                video={video} 
                index={index}
                isCurrentlyPlaying={currentlyPlayingId === video.id}
                onPlay={handleVideoPlay}
              />
            ))}
          </div>
        </div>

        {/* Note + CTA */}
        <div className="text-center mt-6 px-4">
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
      </div>
    </section>
  );
};
