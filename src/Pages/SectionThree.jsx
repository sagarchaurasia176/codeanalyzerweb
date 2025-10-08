import React, { useEffect, useState } from "react";
import { Download, Code2, Sparkles, ArrowRight, Github, Chrome, Activity, CheckCircle2 } from "lucide-react";

const SectionThree = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [activeStep, setActiveStep] = useState(0);

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
      setActiveStep((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      icon: Download,
      title: "Install Extension",
      description: "One-click installation from Chrome Web Store. No configuration needed, works instantly.",
      color: "from-blue-500 to-cyan-500",
      number: "01"
    },
    {
      icon: Code2,
      title: "Write Your Code",
      description: "Code naturally in any online editor. Our extension runs silently in the background.",
      color: "from-green-500 to-emerald-500",
      number: "02"
    },
    {
      icon: Activity,
      title: "Get Instant Insights",
      description: "See real-time complexity analysis appear automatically. No manual triggers required.",
      color: "from-purple-500 to-pink-500",
      number: "03"
    }
  ];

  return (
    <div className="relative min-h-screen bg-black py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-[700px] h-[700px] rounded-full blur-[140px] opacity-20 transition-all duration-700"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4), transparent 70%)',
            left: `${mousePos.x}%`,
            top: `${mousePos.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent 70%)',
            left: '20%',
            top: '30%'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm mb-4">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">Simple Process</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Get Started in
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Three Easy Steps
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            No complicated setup or learning curve. Start analyzing your code complexity in under 60 seconds.
          </p>
        </div>

        {/* Steps with Connecting Line */}
        <div className="relative mb-32">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-1000"
              style={{ width: `${((activeStep + 1) / 3) * 100}%` }}
            />
          </div>

          {/* Steps Grid */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              
              return (
                <div
                  key={idx}
                  className="group relative"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${idx * 0.2}s both`
                  }}
                >
                  {/* Card */}
                  <div className="relative h-full">
                    {/* Glow Effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${step.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                    
                    {/* Content */}
                    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-white/10 p-8 hover:border-white/20 transition-all duration-300">
                      {/* Number Badge */}
                      <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-white/20 flex items-center justify-center shadow-xl">
                        <span className={`text-2xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                          {step.number}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className="mb-6 relative">
                        <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${step.color} transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        
                        {/* Active Indicator */}
                        {isActive && (
                          <div className="absolute -top-2 -right-2">
                            <div className="relative">
                              <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-full blur-md animate-pulse`} />
                              <div className={`relative w-4 h-4 rounded-full bg-gradient-to-r ${step.color}`} />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Text Content */}
                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {step.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Progress Bar */}
                      <div className={`mt-6 h-1 bg-gray-700 rounded-full overflow-hidden transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                        <div 
                          className={`h-full bg-gradient-to-r ${step.color} transition-all duration-3000`}
                          style={{ width: isActive ? '100%' : '0%' }}
                        />
                      </div>

                      {/* Arrow (not on last item) */}
                      {idx < steps.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                          <ArrowRight className={`w-6 h-6 transition-all duration-300 ${isActive ? 'text-purple-400' : 'text-gray-700'}`} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative">
          {/* Glow Background */}
          <div className="absolute -inset-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-3xl opacity-20" />
          
          {/* CTA Card */}
          <div className="relative bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 rounded-3xl border border-white/10 overflow-hidden">
            {/* Animated Grid Pattern */}
            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.5) 1px, transparent 1px)`,
                backgroundSize: '30px 30px',
                animation: 'gridMove 20s linear infinite'
              }}
            />

            <div className="relative p-12 md:p-16">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Left Content */}
                <div className="flex-1 text-center lg:text-left space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-sm mb-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-green-300 font-medium">Free Forever</span>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    Ready to Optimize Your Code?
                  </h3>
                  <p className="text-xl text-gray-400">
                    Join 0 developers using intelligent complexity analysis to write better code.
                  </p>
                </div>

                {/* Right Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 lg:flex-shrink-0">
                  <a 
                    href="https://chromewebstore.google.com/detail/code-analyzer-instantly-a/cmjjfbkkdpabkialbmfdkcmblaabpnin" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity" />
                    <button className="relative bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3 w-full sm:w-auto justify-center">
                      <Chrome className="w-5 h-5" />
                      Install Now
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </a>
                  
                  <a 
                    href="https://github.com/sagarchaurasia176/Code-Analyzer-chrome-extension.git" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <button className="relative bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3 w-full sm:w-auto justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                      <Github className="w-5 h-5 relative z-10" />
                      <span className="relative z-10">View on GitHub</span>
                    </button>
                  </a>
                </div>
              </div>

              {/* Features List */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { label: "No Sign-up Required", icon: CheckCircle2 },
                    { label: "Works Offline", icon: CheckCircle2 },
                    { label: "Open Source", icon: CheckCircle2 },
                    { label: "Regular Updates", icon: CheckCircle2 }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-300">
                      <item.icon className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span className="text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(30px, 30px);
          }
        }
      `}</style>
    </div>
  );
};

export default SectionThree;s