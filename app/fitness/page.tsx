'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Check, 
  Dumbbell, 
  Users, 
  Video, 
  MessageCircle, 
  Calendar,
  Target,
  Zap,
  Star,
  ChevronDown,
  Play,
  Pause,
  Volume2,
  VolumeX
} from 'lucide-react';
import { LandingFooter } from '@/components/LandingFooter';
import { useSponsor } from '@/app/providers/SponsorProvider';

// Fitness video testimonials with actual video sources
const fitnessTestimonials = [
  { id: 1, name: 'AJ', title: 'Fitness Coach', videoUrl: '/videos/AJ-testimonial.mov' },
  { id: 2, name: 'Aldrin', title: 'Personal Trainer', videoUrl: '/videos/Aldrin-Testimonial.mov' },
  { id: 3, name: 'Andrew', title: 'Fitness Creator', videoUrl: '/videos/Andrew-testimonial.mov' },
  { id: 4, name: 'Anthony Mack', title: 'Coach', videoUrl: '/videos/Anthony-Mack-Testimonial.mov' },
  { id: 5, name: 'Casey Compass', title: 'Trainer', videoUrl: '/videos/Casey-Compass.mov' },
  { id: 6, name: 'Crystal', title: 'Fitness Influencer', videoUrl: '/videos/Crystal-testimonial.mov' },
  { id: 7, name: 'Dylan', title: 'Online Coach', videoUrl: '/videos/Dylan-Testimonial.mov' },
  { id: 8, name: 'Jacob Rurik', title: 'Trainer', videoUrl: '/videos/Jacob-Rurik-Testimonial.mov' },
  { id: 9, name: 'Kay', title: 'Fitness Creator', videoUrl: '/videos/Kay-Testimonial.mov' },
  { id: 10, name: 'TEAL', title: 'Coach', videoUrl: '/videos/TEAL-testimonial.mov' },
  { id: 11, name: 'Trelbs', title: 'Fitness Entrepreneur', videoUrl: '/videos/Trelbs-Testimonial.mov' },
  { id: 12, name: 'Video', title: 'Member', videoUrl: '/videos/Video.mov' },
  { id: 13, name: 'Video 1', title: 'Member', videoUrl: '/videos/Video_1.mov' },
];

// Individual video card component - receives playing state from parent
const FitnessVideoCard = ({ 
  video, 
  index,
  isCurrentlyPlaying,
  onPlay
}: { 
  video: typeof fitnessTestimonials[0]; 
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

export default function FitnessPage() {
  const [vipPaymentType, setVipPaymentType] = useState<'onetime' | 'monthly'>('onetime');
  const [currentlyPlayingId, setCurrentlyPlayingId] = useState<number>(-1);
  const sponsor = useSponsor() || 'EDST';

  const scrollToPlans = () => {
    document.getElementById('fitness-plans')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleVideoPlay = (id: number) => {
    setCurrentlyPlayingId(id);
  };

  return (
    <main className="bg-edst-black min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-edst-black via-edst-charcoal/20 to-edst-black" />
          <motion.div
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(250,204,83,0.08) 0%, transparent 70%)' }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(250,204,83,0.05) 0%, transparent 70%)' }}
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-edst-gold/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        <div className="section-container relative z-10 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-edst-gold/10 border border-edst-gold/20 mb-8"
          >
            <Dumbbell className="w-4 h-4 text-edst-gold" />
            <span className="text-sm text-edst-gold font-medium">EDST Fit Biz</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-edst-white mb-6"
          >
            Blow Up Your{' '}
            <span className="text-gradient-gold">Fitness Brand</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-edst-silver max-w-2xl mx-auto mb-8"
          >
            Coaching, community, and content systems to help fitness creators grow online and earn $5K-$10K/month.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center"
          >
            <motion.button
              onClick={scrollToPlans}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-edst-gold text-edst-black font-bold rounded-xl hover:bg-edst-gold-light transition-all inline-flex items-center gap-3 shadow-lg shadow-edst-gold/20"
            >
              <span className="text-base uppercase tracking-wider">See Fit Biz Plans</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6 text-edst-gold/50" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-edst-black via-edst-charcoal/10 to-edst-black" />
        
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-edst-white mb-4">
              How We Help Fitness Creators <span className="text-edst-gold">Win</span>
            </h2>
            <p className="text-edst-silver max-w-xl mx-auto">
              Everything you need to grow your fitness brand and build a real online income.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Video,
                title: 'Content Templates',
                description: '20+ short-form templates every month. Just fill in and post.',
              },
              {
                icon: Users,
                title: 'Coaching & Strategy',
                description: 'Weekly group calls with coaches who have done it themselves.',
              },
              {
                icon: MessageCircle,
                title: 'Community',
                description: '9,000+ member engagement group. Real accountability.',
              },
              {
                icon: Zap,
                title: 'Growth Systems',
                description: 'Proven systems to get more followers, leads, and clients.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-edst-charcoal/30 border border-edst-slate/20 hover:border-edst-gold/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-edst-gold/10 border border-edst-gold/20 flex items-center justify-center mb-4 group-hover:bg-edst-gold/20 transition-all">
                  <item.icon className="w-6 h-6 text-edst-gold" />
                </div>
                <h3 className="text-lg font-bold text-edst-white mb-2">{item.title}</h3>
                <p className="text-sm text-edst-silver">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="fitness-plans" className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-edst-black via-edst-charcoal/20 to-edst-black" />
        
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-edst-white mb-4">
              Choose Your Path
            </h2>
            <p className="text-edst-silver max-w-xl mx-auto">
              Start with Community to get consistent, or go VIP for faster growth with personal coaching.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Community Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-edst-charcoal/40 border border-edst-slate/30 hover:border-edst-gold/30 transition-all"
            >
              <h3 className="text-2xl font-bold text-edst-white mb-2">Fit Biz Community</h3>
              <p className="text-sm text-edst-silver mb-4">Perfect for getting started and building consistency</p>
              
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold text-edst-white">$129</span>
                <span className="text-edst-silver">/month</span>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  'Full Online Biz Portal Access',
                  'EDST Fit Biz Coaching',
                  'Exclusive Fit Biz Community',
                  '9,000+ Member Engagement Group',
                  '20+ Short-Form Templates/Month',
                  'Weekly Group Coaching Calls',
                  '24/7 Text Support',
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-edst-gold mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-edst-light">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href={`https://marketplace.edst.com/auth/signup?ref=${sponsor}&campaignId=304`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider bg-edst-slate/30 text-edst-white hover:bg-edst-gold hover:text-edst-black transition-all"
              >
                Join Fit Biz Community
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>

            {/* VIP Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative p-8 rounded-2xl bg-edst-gold/5 border-2 border-edst-gold/50 shadow-xl shadow-edst-gold/10"
            >
              {/* Best Value Badge */}
              <div className="absolute -top-3 right-6">
                <span className="px-4 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-edst-gold text-edst-black">
                  Best Value
                </span>
              </div>

              <h3 className="text-2xl font-bold text-edst-white mb-2">Fit Biz VIP</h3>
              <p className="text-sm text-edst-gold mb-4">For serious growth with personal 1:1 coaching</p>
              
              {/* Price Display */}
              <div className="mb-2">
                {vipPaymentType === 'onetime' ? (
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-edst-white">$1,950</span>
                    <span className="text-edst-silver">one-time</span>
                  </div>
                ) : (
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-edst-white">$379</span>
                    <span className="text-edst-silver">/mo × 6</span>
                  </div>
                )}
              </div>
              <p className="text-xs text-edst-silver mb-4">6-month program</p>

              {/* Payment Toggle - subtle */}
              <div className="flex items-center gap-2 mb-6">
                <button
                  onClick={() => setVipPaymentType('onetime')}
                  className={`text-xs px-3 py-1.5 rounded transition-all ${
                    vipPaymentType === 'onetime'
                      ? 'bg-edst-gold/20 text-edst-gold'
                      : 'text-edst-silver/60 hover:text-edst-silver'
                  }`}
                >
                  One time
                </button>
                <button
                  onClick={() => setVipPaymentType('monthly')}
                  className={`text-xs px-3 py-1.5 rounded transition-all ${
                    vipPaymentType === 'monthly'
                      ? 'bg-edst-charcoal text-edst-silver'
                      : 'text-edst-silver/40 hover:text-edst-silver/60'
                  }`}
                >
                  Monthly
                </button>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  'Everything in Community, plus:',
                  '2x 1:1 Calls Per Month (Bi-Weekly)',
                  'Personal Coaching & Accountability',
                  'Priority Support',
                  'Accelerated Growth Path',
                  'Custom Strategy Sessions',
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-edst-gold mt-0.5 flex-shrink-0" />
                    <span className={`text-sm ${i === 0 ? 'text-edst-gold font-medium' : 'text-edst-light'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href={vipPaymentType === 'onetime' 
                  ? `https://marketplace.edst.com/auth/signup?ref=${sponsor}&campaignId=305`
                  : `https://marketplace.edst.com/auth/signup?ref=${sponsor}&campaignId=308`
                }
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider bg-edst-gold text-edst-black hover:bg-edst-gold-light transition-all"
              >
                Join Fit Biz VIP
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-edst-black via-edst-charcoal/10 to-edst-black" />
        
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-edst-white mb-4">
              Who This Is <span className="text-edst-gold">For</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Fitness trainers who want more online clients',
                'Coaches looking to add to their in-person income',
                'Creators who want their fitness page to actually grow',
                'People willing to show up, learn, and take action',
                'Trainers ready to build a real online brand',
                'Anyone serious about making $5K-$10K/month',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-edst-charcoal/20 border border-edst-slate/10"
                >
                  <Target className="w-5 h-5 text-edst-gold mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-edst-light">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-edst-black" />
        <div className="absolute inset-0 bg-gradient-to-b from-edst-charcoal/5 via-transparent to-edst-charcoal/5" />

        <div className="section-container relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-edst-white mb-3">
              Real Results from <span className="text-edst-gold">Fit Biz Members</span>
            </h2>
            <p className="text-edst-silver text-sm max-w-md mx-auto">
              Hear from fitness creators who are growing their brands and income with Fit Biz.
            </p>
          </motion.div>

          {/* Video Slider - Horizontal Scroll with Inline Playback */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
          >
            {fitnessTestimonials.map((video, index) => (
              <FitnessVideoCard 
                key={video.id} 
                video={video} 
                index={index}
                isCurrentlyPlaying={currentlyPlayingId === video.id}
                onPlay={handleVideoPlay}
              />
            ))}
          </motion.div>

          {/* Note + CTA */}
          <div className="text-center mt-6">
            <p className="text-xs text-edst-silver/50 mb-4">
              Real testimonials from real Fit Biz members
            </p>
            <a
              href="#fitness-plans"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-edst-gold border border-edst-gold/40 rounded-full hover:bg-edst-gold/10 hover:border-edst-gold/60 transition-all"
            >
              Join Them →
            </a>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-edst-black via-edst-charcoal/20 to-edst-black" />
        
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-edst-white mb-4">
              What You Get <span className="text-edst-gold">Inside</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Calendar,
                title: 'Weekly Group Coaching',
                description: 'Live calls every week with coaches who have built successful fitness brands.',
              },
              {
                icon: Video,
                title: '20+ Templates/Month',
                description: 'Ready-to-use short-form content templates. Just customize and post.',
              },
              {
                icon: Users,
                title: '9,000+ Engagement Group',
                description: 'Active community for likes, comments, and real engagement on your posts.',
              },
              {
                icon: MessageCircle,
                title: '24/7 Text Support',
                description: 'Questions? Need help? Text us anytime and get real answers.',
              },
              {
                icon: Star,
                title: 'Dedicated Coach',
                description: 'A real person in your corner helping you grow and stay accountable.',
              },
              {
                icon: Zap,
                title: 'Proven Growth Systems',
                description: 'The exact strategies that have helped hundreds of fitness creators grow.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-edst-charcoal/30 border border-edst-slate/20 hover:border-edst-gold/30 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-edst-gold/10 border border-edst-gold/20 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-edst-gold" />
                </div>
                <h3 className="text-lg font-bold text-edst-white mb-2">{item.title}</h3>
                <p className="text-sm text-edst-silver">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-edst-black to-edst-charcoal/20" />
        
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-edst-white mb-6">
              Ready to grow your fitness brand<br />
              <span className="text-edst-gold">and your income?</span>
            </h2>
            <p className="text-edst-silver max-w-xl mx-auto mb-10">
              Join hundreds of fitness creators who are building real online businesses.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href={`https://marketplace.edst.com/auth/signup?ref=${sponsor}&campaignId=304`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-edst-charcoal border border-edst-gold/30 text-edst-gold font-bold rounded-lg hover:bg-edst-gold/10 transition-all flex items-center gap-2"
              >
                Join Fit Biz Community
                <span className="text-sm font-normal">$129/mo</span>
              </motion.a>
              <motion.a
                href={`https://marketplace.edst.com/auth/signup?ref=${sponsor}&campaignId=305`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-edst-gold text-edst-black font-bold rounded-lg hover:bg-edst-gold-light transition-all flex items-center gap-2"
              >
                Join Fit Biz VIP
                <span className="text-sm font-normal">$1,950</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <LandingFooter variant="dark" />
    </main>
  );
}

