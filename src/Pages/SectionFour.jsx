import React, { useEffect, useState } from "react";
import { Zap, CheckCircle2, BookOpen, Layers, TrendingUp, Award, Shield, Users } from "lucide-react";

const AnalyzeCode = () => {
  return (
    <div className="font-mono text-sm">
      <div className="flex items-start gap-2 mb-2">
        <span className="text-gray-500 select-none">1</span>
        <span className="text-purple-400">function</span>
        <span className="text-blue-400"> mergeSort</span>
        <span className="text-gray-300">(arr) {'{'}</span>
      </div>
      <div className="flex items-start gap-2 mb-2 pl-6">
        <span className="text-gray-500 select-none">2</span>
        <span className="text-purple-400">if</span>
        <span className="text-gray-300"> (arr.length {'<='} 1) </span>
        <span className="text-purple-400">return</span>
        <span className="text-gray-300"> arr;</span>
      </div>
      <div className="flex items-start gap-2 mb-2 pl-6">
        <span className="text-gray-500 select-none">3</span>
        <span className="text-purple-400">const</span>
        <span className="text-blue-300"> mid</span>
        <span className="text-gray-300"> = Math.floor(arr.length / 2);</span>
      </div>
      <div className="flex items-start gap-2 mb-2 pl-6">
        <span className="text-gray-500 select-none">4</span>
        <span className="text-purple-400">const</span>
        <span className="text-blue-300"> left</span>
        <span className="text-gray-300"> = mergeSort(arr.slice(0, mid));</span>
      </div>
      <div className="flex items-start gap-2 mb-2 pl-6">
        <span className="text-gray-500 select-none">5</span>
        <span className="text-purple-400">const</span>
        <span className="text-blue-300"> right</span>
        <span className="text-gray-300"> = mergeSort(arr.slice(mid));</span>
      </div>
      <div className="flex items-start gap-2 mb-2 pl-6">
        <span className="text-gray-500 select-none">6</span>
        <span className="text-purple-400">return</span>
        <span className="text-gray-300"> merge(left, right);</span>
      </div>
      <div className="flex items-start gap-2">
        <span className="text-gray-500 select-none">7</span>
        <span className="text-gray-300">{'}'}</span>
      </div>
    </div>
  );
};

const SectionFour = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePos({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const benefits = [
    {
      icon: Zap,
      title: "Boost Productivity",
      description: "Save hours of manual analysis with instant complexity detection and automated insights.",
      gradient: "from-yellow-500 to-orange-500",
      stats: "10x Faster"
    },
    {
      icon: CheckCircle2,
      title: "Write Better Code",
      description: "Identify performance bottlenecks early and optimize effectively with actionable suggestions.",
      gradient: "from-green-500 to-emerald-500",
      stats: "99% Accurate"
    },
    {
      icon: BookOpen,
      title: "Educational Insights",
      description: "Learn as you code with detailed explanations, best practices, and algorithm tutorials.",
      gradient: "from-blue-500 to-cyan-500",
      stats: "200+ Lessons"
    },
    {
      icon: Layers,
      title: "Seamless Integration",
      description: "Works directly in your browser with LeetCode, HackerRank, and all major platforms.",
      gradient: "from-purple-500 to-pink-500",
      stats: "20+ Platforms"
    }
  ];

  const additionalFeatures = [
    { icon: TrendingUp, text: "Performance Tracking", color: "text-blue-400" },
    { icon: Award, text: "Optimization Tips", color: "text-purple-400" },
    { icon: Shield, text: "100% Private", color: "text-green-400" },
    { icon: Users, text: "50K+ Users", color: "text-pink-400" }
  ];

  return (
    <div className="relative min-h-screen bg-black py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-[800px] h-[800px] rounded-full blur-[150px] opacity-20 transition-all duration-700"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent 70%)',
            left: `${mousePos.x}%`,
            top: `${mousePos.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div 
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3), transparent 70%)',
            right: '10%',
            bottom: '10%'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Why Choose
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Code Analyzer?
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Transform your coding experience with powerful insights, real-time analysis, and intelligent optimization.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              const isHovered = hoveredCard === idx;
              
              return (
                <div
                  key={idx}
                  className="group relative"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`
                  }}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Glow Effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${benefit.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                  
                  {/* Card */}
                  <div className="relative h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-all duration-300">
                    {/* Stats Badge */}
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-lg bg-gradient-to-r ${benefit.gradient} bg-opacity-10 border border-white/10`}>
                      <span className={`text-xs font-bold bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent`}>
                        {benefit.stats}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="mb-4">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${benefit.gradient} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-white">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>

                    {/* Hover Indicator */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Code Example */}
          <div 
            className="relative lg:sticky lg:top-24"
            style={{
              animation: 'fadeInUp 0.6s ease-out 0.4s both'
            }}
          >
            {/* Floating Complexity Badge */}
            <div className="absolute -top-4 -right-4 z-20">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl blur-lg animate-pulse" />
                <div className="relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-xl font-mono text-sm font-bold shadow-2xl">
                  Detected: O(n log n)
                </div>
              </div>
            </div>

            {/* Code Container */}
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
              
              {/* Code Window */}
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                {/* Window Controls */}
                <div className="flex items-center gap-2 px-4 py-3 bg-black/30 border-b border-white/5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <span className="text-sm text-gray-500 font-mono">mergeSort.js</span>
                  </div>
                </div>

                {/* Code Content */}
                <div className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50">
                  <AnalyzeCode />
                </div>

                {/* Analysis Footer */}
                <div className="px-6 py-4 bg-black/30 border-t border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Time Complexity:</span>
                    <span className="font-mono text-orange-400 font-semibold">O(n log n) - Linearithmic</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Space Complexity:</span>
                    <span className="font-mono text-blue-400 font-semibold">O(n) - Linear</span>
                  </div>
                  <div className="flex items-center gap-2 pt-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-green-400 font-medium">Optimal Algorithm Detected</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Features Pills */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              {additionalFeatures.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={idx}
                    className="flex items-center gap-2 bg-gray-900/50 border border-white/10 rounded-xl px-4 py-3 hover:border-white/20 transition-all group"
                  >
                    <Icon className={`w-4 h-4 ${feature.color} group-hover:scale-110 transition-transform`} />
                    <span className="text-sm text-gray-300">{feature.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default SectionFour;