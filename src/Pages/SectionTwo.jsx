import React, { useEffect, useState } from "react";
import { Zap, Target, Code2, Brain, Layers, Lock, Clock, TrendingUp, Globe, Sparkles } from "lucide-react";

const SectionTwo = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePos({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Analysis",
      description: "Get instant Big O complexity insights as you code. Real-time analysis with zero latency.",
      gradient: "from-yellow-500 to-orange-500",
      delay: 0
    },
    {
      icon: Brain,
      title: "AI-Powered Detection",
      description: "Advanced algorithms understand your code patterns and provide accurate complexity metrics.",
      gradient: "from-purple-500 to-pink-500",
      delay: 0.1
    },
    {
      icon: Code2,
      title: "Multi-Language Support",
      description: "Works seamlessly with JavaScript, Python, Java, C++, Go, Rust, and 15+ languages.",
      gradient: "from-blue-500 to-cyan-500",
      delay: 0.2
    },
    {
      icon: Layers,
      title: "Deep Code Insights",
      description: "Beyond Big O - get memory usage, recursion depth, and optimization suggestions.",
      gradient: "from-green-500 to-emerald-500",
      delay: 0.3
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "All analysis happens locally in your browser. Your code never leaves your machine.",
      gradient: "from-red-500 to-rose-500",
      delay: 0.4
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking",
      description: "Track complexity trends over time and identify performance regressions early.",
      gradient: "from-indigo-500 to-purple-500",
      delay: 0.5
    }
  ];

  return (
    <div className="relative min-h-screen bg-black py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-[800px] h-[800px] rounded-full blur-[150px] opacity-20 transition-all duration-500"
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
            right: '15%',
            bottom: '20%'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-4">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-medium">Powerful Capabilities</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Everything You Need to
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Master Complexity
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Professional-grade tools for analyzing, optimizing, and understanding your code's performance characteristics.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            const isActive = activeCard === idx;
            
            return (
              <div
                key={idx}
                className="group relative"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${feature.delay}s both`
                }}
                onMouseEnter={() => setActiveCard(idx)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Glow Effect */}
                <div 
                  className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                />
                
                {/* Card */}
                <div className="relative h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-white/10 p-8 hover:border-white/20 transition-all duration-300 overflow-hidden">
                  {/* Background Pattern */}
                  <div 
                    className="absolute inset-0 opacity-[0.02] transition-opacity duration-300 group-hover:opacity-[0.05]"
                    style={{
                      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }}
                  />
                  
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.gradient} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Orbiting Dot */}
                    <div className="absolute -top-1 -right-1">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${feature.gradient} animate-pulse`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative space-y-3">
                    <h3 className="text-2xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover Indicator */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-24 text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-20 animate-pulse" />
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-white/10 p-12 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-left space-y-4">
                  <h3 className="text-3xl font-bold text-white">
                    Ready to Optimize Your Code?
                  </h3>
                  <p className="text-gray-400 text-lg">
                    Join thousands of developers using intelligent complexity analysis.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-transform group-hover:scale-105" />
                    <span className="relative block px-8 py-4 text-white font-semibold rounded-xl">
                      Get Started Free
                    </span>
                  </button>
                  <button className="px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors">
                    View Documentation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Active Users", value: "0" },
            { label: "Code Analyzed", value: "1" },
            { label: "Languages", value: "20+" },
            { label: "Accuracy", value: "99.9%" }
          ].map((stat, idx) => (
            <div key={idx} className="text-center space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-500 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
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

export default SectionTwo;