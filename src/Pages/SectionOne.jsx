import React, { useEffect, useState } from "react";
import { Play, Zap, DollarSign, Globe, Code2, Sparkles, ArrowRight, Check } from "lucide-react";

const ExampleCode = () => {
  return (
    <div className="font-mono text-sm">
      <div className="flex items-start gap-2 mb-2">
        <span className="text-gray-500 select-none">1</span>
        <span className="text-purple-400">function</span>
        <span className="text-blue-400">findPairs</span>
        <span className="text-gray-300">(arr) {'{'}</span>
      </div>
      <div className="flex items-start gap-2 mb-2 pl-6">
        <span className="text-gray-500 select-none">2</span>
        <span className="text-purple-400">for</span>
        <span className="text-gray-300">(</span>
        <span className="text-purple-400">let</span>
        <span className="text-blue-300"> i</span>
        <span className="text-gray-300"> = 0; i {'<'} arr.length; i++) {'{'}</span>
      </div>
      <div className="flex items-start gap-2 mb-2 pl-12">
        <span className="text-gray-500 select-none">3</span>
        <span className="text-purple-400">for</span>
        <span className="text-gray-300">(</span>
        <span className="text-purple-400">let</span>
        <span className="text-blue-300"> j</span>
        <span className="text-gray-300"> = i+1; j {'<'} arr.length; j++) {'{'}</span>
      </div>
      <div className="flex items-start gap-2 mb-2 pl-16">
        <span className="text-gray-500 select-none">4</span>
        <span className="text-yellow-400">console</span>
        <span className="text-gray-300">.log(arr[i], arr[j]);</span>
      </div>
      <div className="flex items-start gap-2 mb-2 pl-12">
        <span className="text-gray-500 select-none">5</span>
        <span className="text-gray-300">{'}'}</span>
      </div>
      <div className="flex items-start gap-2 mb-2 pl-6">
        <span className="text-gray-500 select-none">6</span>
        <span className="text-gray-300">{'}'}</span>
      </div>
      <div className="flex items-start gap-2">
        <span className="text-gray-500 select-none">7</span>
        <span className="text-gray-300">{'}'}</span>
      </div>
    </div>
  );
};

const VideoModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="group relative bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
        <Play className="w-4 h-4" />
        Watch Demo
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
          <div className="relative max-w-4xl w-full aspect-video bg-gray-900 rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            >
              ×
            </button>
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Video Player Placeholder
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const SectionOne = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [glowPosition, setGlowPosition] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePos({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlowPosition((prev) => (prev + 0.5) % 100);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: Code2, text: "LeetCode Only", color: "from-orange-500 to-red-500" },
    { icon: Zap, text: "Real-Time Analysis", color: "from-yellow-500 to-orange-500" },
    { icon: DollarSign, text: "Free to Use", color: "from-green-500 to-emerald-500" }
  ];

  const benefits = [
    "Works on leetcode.com",
    "Instant complexity detection",
    "Multi-language support",
    "Zero configuration"
  ];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 transition-all duration-300"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4), transparent 70%)',
            left: `${mousePos.x}%`,
            top: `${mousePos.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4), transparent 70%)',
            right: '10%',
            top: '20%',
            animation: 'float 8s ease-in-out infinite'
          }}
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Animated Line */}
        <div 
          className="absolute top-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-30"
          style={{
            left: `${glowPosition}%`,
            filter: 'blur(2px)'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300 font-medium">LeetCode-Powered Analysis</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                  LeetScope
                </span>
                Master LeetCode
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
                Your intelligent companion for LeetCode problem-solving. Get instant Big O complexity analysis directly on LeetCode platform.
              </p>
              
              {/* Platform Notice */}
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20">
                <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Globe className="w-4 h-4 text-orange-400" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-orange-300">Works exclusively on LeetCode</p>
                  <p className="text-xs text-gray-400">Visit leetcode.com and solve problems with instant complexity insights</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://chromewebstore.google.com/detail/code-analyzer-instantly-a/cmjjfbkkdpabkialbmfdkcmblaabpnin" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity" />
                <button className="relative bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 w-full sm:w-auto justify-center">
                  Install Extension
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
              <VideoModal />
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2 text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-green-400" />
                  </div>
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 pt-4">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={idx}
                    className="group relative overflow-hidden rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all px-5 py-2.5"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                    <div className="relative flex items-center gap-2">
                      <Icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                        {feature.text}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Code Example */}
          <div className="relative">
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 z-20 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-xl font-mono text-sm font-bold shadow-lg shadow-green-500/50 animate-pulse">
              Detected: O(n²)
            </div>

            {/* Code Container */}
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
              
              {/* Code Window */}
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                {/* Window Controls */}
                <div className="flex items-center gap-2 px-4 py-3 bg-black/30 border-b border-white/5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 flex items-center justify-center gap-2">
                    <Code2 className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-500 font-mono">algorithm.js</span>
                  </div>
                </div>

                {/* Code Content */}
                <div className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm">
                  <ExampleCode />
                </div>

                {/* Analysis Footer */}
                <div className="px-6 py-4 bg-black/30 border-t border-white/5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Time Complexity:</span>
                    <span className="font-mono text-orange-400 font-semibold">O(n²) - Quadratic</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(5deg); }
          66% { transform: translate(-20px, 20px) rotate(-5deg); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default SectionOne;