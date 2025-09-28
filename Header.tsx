
import { useState } from 'react';
import Button from '../base/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-slate-900/95 backdrop-blur-md fixed w-full top-0 z-50 border-b border-slate-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
              <i className="ri-graduation-cap-line text-xl text-slate-900"></i>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">LeadForward Academy</h1>
              <p className="text-xs text-orange-400 font-medium">Driving Leadership & Business Growth</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-300 hover:text-orange-400 transition-colors cursor-pointer font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('mission')}
              className="text-slate-300 hover:text-orange-400 transition-colors cursor-pointer font-medium"
            >
              Mission
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-slate-300 hover:text-orange-400 transition-colors cursor-pointer font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('solutions')}
              className="text-slate-300 hover:text-orange-400 transition-colors cursor-pointer font-medium"
            >
              Solutions
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-slate-300 hover:text-orange-400 transition-colors cursor-pointer font-medium"
            >
              Contact
            </button>
            <Button 
              variant="primary" 
              size="sm"
              className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-slate-900 font-semibold shadow-lg"
            >
              Get Started
            </Button>
          </nav>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white text-2xl cursor-pointer hover:text-orange-400 transition-colors"
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-slate-800">
            <nav className="flex flex-col space-y-4 mt-6">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-slate-300 hover:text-orange-400 transition-colors text-left cursor-pointer font-medium py-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('mission')}
                className="text-slate-300 hover:text-orange-400 transition-colors text-left cursor-pointer font-medium py-2"
              >
                Mission
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-slate-300 hover:text-orange-400 transition-colors text-left cursor-pointer font-medium py-2"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('solutions')}
                className="text-slate-300 hover:text-orange-400 transition-colors text-left cursor-pointer font-medium py-2"
              >
                Solutions
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-slate-300 hover:text-orange-400 transition-colors text-left cursor-pointer font-medium py-2"
              >
                Contact
              </button>
              <div className="pt-4">
                <Button 
                  variant="primary" 
                  size="sm"
                  className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-slate-900 font-semibold w-full"
                >
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
