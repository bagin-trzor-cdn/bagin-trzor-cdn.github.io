import React from 'react';
import { Menu, X, Shield, Lock, Cpu, Settings, HelpCircle, ChevronRight } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const features = [
    { title: "Advanced Security", icon: Shield, description: "Military-grade encryption for your digital assets" },
    { title: "User-Friendly Interface", icon: Settings, description: "Intuitive design for seamless navigation" },
    { title: "24/7 Support", icon: HelpCircle, description: "Round-the-clock assistance for your needs" },
    { title: "Hardware Integration", icon: Cpu, description: "Seamless connection with hardware wallets" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-violet-900 text-white">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Lock className="w-8 h-8 text-indigo-400" />
              <span className="text-2xl font-bold gradient-text">Trēzor.io/start</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="hover:text-indigo-400 transition-colors">Features</a>
              <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
              <a href="#faq" className="hover:text-indigo-400 transition-colors">FAQ</a>
              <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <a href="#features" className="block py-2 hover:text-indigo-400">Features</a>
              <a href="#about" className="block py-2 hover:text-indigo-400">About</a>
              <a href="#faq" className="block py-2 hover:text-indigo-400">FAQ</a>
              <a href="#contact" className="block py-2 hover:text-indigo-400">Contact</a>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text animate-float">
            Introducing the New Trēzor.io/start App
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your secure gateway to hassle-free crypto management. Experience the future of digital asset security.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="neo-box px-8 py-4 button-hover bg-indigo-600 hover:bg-indigo-700">
              Get Started
            </button>
            <button className="neo-box px-8 py-4 button-hover border-2 border-indigo-600 hover:bg-indigo-600/20">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="neo-box p-6 animate-float" style={{animationDelay: `${index * 0.2}s`}}>
                <feature.icon className="w-12 h-12 text-indigo-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="neo-box p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">About Trēzor.io/start</h2>
            <p className="text-gray-300 mb-6">
              Trēzor.io/start represents the pinnacle of cryptocurrency management solutions, designed to provide users with a seamless and secure experience in managing their digital assets. Our platform combines cutting-edge security measures with an intuitive interface, making it accessible to both newcomers and experienced crypto enthusiasts.
            </p>
            <p className="text-gray-300 mb-6">
              With a focus on user privacy and asset protection, Trēzor.io/start implements multiple layers of security, including advanced encryption protocols and multi-factor authentication. Our platform is regularly audited by leading security firms to ensure your assets remain protected against emerging threats.
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-center">
                <ChevronRight className="text-indigo-400 mr-2" />
                <span>Industry-leading security protocols</span>
              </li>
              <li className="flex items-center">
                <ChevronRight className="text-indigo-400 mr-2" />
                <span>Regular security audits and updates</span>
              </li>
              <li className="flex items-center">
                <ChevronRight className="text-indigo-400 mr-2" />
                <span>Multi-currency support</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "What makes Trēzor.io/start unique?",
                a: "Our platform combines military-grade security with an intuitive user interface, making it the perfect solution for both beginners and experienced users."
              },
              {
                q: "How secure is Trēzor.io/start?",
                a: "We implement multiple layers of security, including advanced encryption, multi-factor authentication, and regular security audits."
              },
              {
                q: "Can I use Trēzor.io/start on multiple devices?",
                a: "Yes, our platform is fully responsive and works seamlessly across desktop, tablet, and mobile devices."
              }
            ].map((faq, index) => (
              <div key={index} className="neo-box p-6">
                <h3 className="text-xl font-bold mb-2">{faq.q}</h3>
                <p className="text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Lock className="w-6 h-6 text-indigo-400" />
              <span className="text-xl font-bold gradient-text">Trēzor.io/start</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-indigo-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-indigo-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-indigo-400 transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; 2025 Trēzor.io/start. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;