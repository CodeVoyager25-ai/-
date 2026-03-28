import { motion, useScroll, useTransform } from 'motion/react';
import { MapPin, Star, Wind, Coffee, Tent, ChevronRight, Compass } from 'lucide-react';
import { useRef } from 'react';

const CampfireSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Logs */}
    <path d="M20 80 L80 60 L85 65 L25 85 Z" fill="#2a1a0f" />
    <path d="M80 80 L20 60 L15 65 L75 85 Z" fill="#3d2616" />
    
    {/* Flames */}
    <motion.path
      d="M50 20 Q65 50 50 70 Q35 50 50 20 Z"
      fill="#ff4d00"
      animate={{
        d: [
          "M50 20 Q65 50 50 70 Q35 50 50 20 Z",
          "M50 10 Q75 45 50 70 Q25 45 50 10 Z",
          "M50 25 Q60 55 50 70 Q40 55 50 25 Z",
          "M50 20 Q65 50 50 70 Q35 50 50 20 Z"
        ]
      }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      style={{ filter: "drop-shadow(0 0 15px rgba(255, 77, 0, 0.6))" }}
    />
    <motion.path
      d="M50 35 Q58 55 50 70 Q42 55 50 35 Z"
      fill="#ff9100"
      animate={{
        d: [
          "M50 35 Q58 55 50 70 Q42 55 50 35 Z",
          "M50 25 Q65 50 50 70 Q35 50 50 25 Z",
          "M50 40 Q55 60 50 70 Q45 60 50 40 Z",
          "M50 35 Q58 55 50 70 Q42 55 50 35 Z"
        ]
      }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      style={{ filter: "drop-shadow(0 0 10px rgba(255, 145, 0, 0.8))" }}
    />
    <motion.path
      d="M50 50 Q54 60 50 70 Q46 60 50 50 Z"
      fill="#ffea00"
      animate={{
        d: [
          "M50 50 Q54 60 50 70 Q46 60 50 50 Z",
          "M50 40 Q58 55 50 70 Q42 55 50 40 Z",
          "M50 55 Q52 65 50 70 Q48 65 50 55 Z",
          "M50 50 Q54 60 50 70 Q46 60 50 50 Z"
        ]
      }}
      transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
    />
    
    {/* Sparks */}
    {[...Array(8)].map((_, i) => (
      <motion.circle
        key={i}
        cx={40 + Math.random() * 20}
        cy={60}
        r={1 + Math.random()}
        fill="#ffea00"
        animate={{
          cy: [60, 5 + Math.random() * 20],
          cx: [40 + Math.random() * 20, 20 + Math.random() * 60],
          opacity: [1, 0]
        }}
        transition={{
          duration: 1.5 + Math.random() * 1.5,
          repeat: Infinity,
          delay: Math.random() * 2,
          ease: "easeOut"
        }}
        style={{ filter: "drop-shadow(0 0 2px #ffea00)" }}
      />
    ))}
  </svg>
);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="bg-[#0a0a0a] text-[#f5f5f0] font-sans selection:bg-[#ff4d00] selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 mix-blend-difference">
        <div className="text-xl font-serif tracking-widest uppercase">山野星空</div>
        <div className="hidden md:flex gap-8 text-sm tracking-widest uppercase">
          <a href="#experience" className="hover:text-[#ff4d00] transition-colors">体验</a>
          <a href="#tents" className="hover:text-[#ff4d00] transition-colors">营帐</a>
          <a href="#gallery" className="hover:text-[#ff4d00] transition-colors">画廊</a>
        </div>
        <button className="border border-white/30 rounded-full px-6 py-2 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all">
          预定
        </button>
      </nav>

      {/* Hero Section */}
      <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#0a0a0a] z-10" />
          <img 
            src="https://images.unsplash.com/photo-1504280390224-3857f6296b9e?q=80&w=2940&auto=format&fit=crop" 
            alt="Starry night camping" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="relative z-10 flex flex-col items-center text-center px-4 mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mb-8"
          >
            <CampfireSVG className="w-24 h-24 md:w-32 md:h-32 mx-auto" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-serif text-5xl md:text-8xl lg:text-9xl font-light tracking-tighter mb-6"
          >
            逃离喧嚣<br />
            <span className="italic text-white/80">拥抱星空</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-lg md:text-xl font-light tracking-widest text-white/70 max-w-xl mb-12"
          >
            在海拔2000米的原始森林中，体验极致奢华与纯粹自然的完美融合。
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="group relative flex items-center gap-4 bg-[#ff4d00] text-white px-8 py-4 rounded-full overflow-hidden"
          >
            <span className="relative z-10 tracking-widest uppercase text-sm font-medium">开启旅程</span>
            <span className="relative z-10 bg-white/20 p-2 rounded-full group-hover:translate-x-1 transition-transform">
              <ChevronRight size={16} />
            </span>
            <div className="absolute inset-0 bg-[#e64500] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
          </motion.button>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <span className="text-xs tracking-widest uppercase text-white/50">向下滑动</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-serif text-4xl md:text-6xl font-light mb-8">
              重新定义<br />荒野体验
            </h2>
            <p className="text-white/60 leading-relaxed mb-8 font-light text-lg">
              我们相信，亲近自然不意味着放弃舒适。山野星空为您提供顶级酒店标准的床品、独立卫浴以及米其林级别的营地晚餐。在这里，您只需负责感受风的呼吸和星星的闪烁。
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <Tent className="text-[#ff4d00]" size={28} />
                <h3 className="text-xl font-serif">奢华营帐</h3>
                <p className="text-sm text-white/50">地暖与空调配备，四季皆宜</p>
              </div>
              <div className="flex flex-col gap-2">
                <Coffee className="text-[#ff4d00]" size={28} />
                <h3 className="text-xl font-serif">野奢餐饮</h3>
                <p className="text-sm text-white/50">本地当季食材，篝火晚宴</p>
              </div>
              <div className="flex flex-col gap-2">
                <Star className="text-[#ff4d00]" size={28} />
                <h3 className="text-xl font-serif">星空观测</h3>
                <p className="text-sm text-white/50">专业天文望远镜，暗夜保护区</p>
              </div>
              <div className="flex flex-col gap-2">
                <Compass className="text-[#ff4d00]" size={28} />
                <h3 className="text-xl font-serif">向导探索</h3>
                <p className="text-sm text-white/50">原始森林徒步，动植物寻踪</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=2000&auto=format&fit=crop" 
                alt="Luxury tent interior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full overflow-hidden border-4 border-[#0a0a0a] hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=1000&auto=format&fit=crop" 
                alt="Campfire detail" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full Width Image Break */}
      <section className="h-[60vh] relative flex items-center justify-center">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2940&auto=format&fit=crop" 
          alt="Mountain landscape" 
          className="w-full h-full object-cover fixed-attachment"
          style={{ backgroundAttachment: 'fixed' }}
          referrerPolicy="no-referrer"
        />
        <div className="relative z-20 text-center">
          <h2 className="font-serif text-4xl md:text-6xl italic text-white drop-shadow-lg">
            "在星空下入眠，在鸟鸣中苏醒"
          </h2>
        </div>
      </section>

      {/* Tents Section */}
      <section id="tents" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">栖息之所</h2>
          <p className="text-white/50 tracking-widest uppercase text-sm">Our Accommodations</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: "星空穹顶帐篷",
              desc: "270度全景透明穹顶，躺在床上即可仰望银河。配备独立卫浴与私人露台。",
              price: "¥2,880",
              img: "https://images.unsplash.com/photo-1534880606858-29b0e8a24e8d?q=80&w=2000&auto=format&fit=crop"
            },
            {
              name: "森林木屋别墅",
              desc: "隐匿于百年古树之间，全木质结构，带有私人恒温泡池与壁炉。",
              price: "¥3,680",
              img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2000&auto=format&fit=crop"
            }
          ].map((tent, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-xl mb-6 relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={tent.img} 
                  alt={tent.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex justify-between items-end mb-2">
                <h3 className="text-2xl font-serif">{tent.name}</h3>
                <span className="text-[#ff4d00] font-mono">{tent.price}<span className="text-sm text-white/40"> /晚起</span></span>
              </div>
              <p className="text-white/60 font-light text-sm leading-relaxed">{tent.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#141414]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-[#ff4d00]/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <CampfireSVG className="w-16 h-16 mx-auto mb-8 opacity-80" />
          <h2 className="font-serif text-5xl md:text-7xl font-light mb-8">
            准备好回归自然了吗？
          </h2>
          <p className="text-xl text-white/60 font-light mb-12">
            每日仅接待12组客人，确保极致私密与宁静。
          </p>
          <button className="bg-white text-black px-12 py-5 rounded-full text-sm tracking-widest uppercase font-medium hover:bg-[#ff4d00] hover:text-white transition-colors duration-300">
            立即预定您的星空之夜
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-serif tracking-widest uppercase">山野星空</div>
          <div className="flex gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-white transition-colors">关于我们</a>
            <a href="#" className="hover:text-white transition-colors">预定须知</a>
            <a href="#" className="hover:text-white transition-colors">联系方式</a>
            <a href="#" className="hover:text-white transition-colors">隐私政策</a>
          </div>
          <div className="text-sm text-white/30 font-mono">
            © 2026 MOUNTAIN & STARS CAMP.
          </div>
        </div>
      </footer>
    </div>
  );
}

