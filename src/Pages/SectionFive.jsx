import React from "react";
import { Github, Twitter, Linkedin, Mail, Heart, ExternalLink, Code2, Chrome, Star } from "lucide-react";

const SectionFive = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/sagarchaurasia176/Analyzer-chrome-extension.git", label: "GitHub", color: "hover:text-purple-400" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-blue-400" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-500" }
  ];

  const quickLinks = [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Examples", href: "#" },
    { label: "Changelog", href: "#" }
  ];

  const resources = [
    { label: "Chrome Extension", href: "https://chromewebstore.google.com/detail/code-analyzer-instantly-a/cmjjfbkkdpabkialbmfdkcmblaabpnin", icon: Chrome },
    { label: "Report Bug", href: "#", icon: ExternalLink },
    { label: "Request Feature", href: "#", icon: Star },
    { label: "Contact", href: "#", icon: Mail }
  ];

  return (
    <footer className="relative bg-black border-t border-white/5 overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 to-transparent pointer-events-none" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Code Analyzer
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Intelligent code complexity analysis for modern developers. Write better, faster code with real-time insights.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 ${social.color} hover:bg-white/10 hover:border-white/20 transition-all group`}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <div className="w-1 h-4 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <div className="w-1 h-4 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full" />
              Resources
            </h3>
            <ul className="space-y-3">
              {resources.map((resource, idx) => {
                const Icon = resource.icon;
                return (
                  <li key={idx}>
                    <a 
                      href={resource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                    >
                      <Icon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                      {resource.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Newsletter/CTA */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <div className="w-1 h-4 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
              Stay Updated
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Get notified about new features and updates.
            </p>
            <div className="space-y-3">
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                />
              </div>
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-all hover:scale-[1.02]">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>© {new Date().getFullYear()} Code Analyzer</span>
            <span className="text-gray-600">•</span>
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span>for developers</span>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              License
            </a>
          </div>
        </div>

        {/* Stats Bar */}

      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent blur-sm" />
    </footer>
  );
};

export default SectionFive;