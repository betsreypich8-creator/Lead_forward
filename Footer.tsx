
export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-indigo-900/20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                <i className="ri-graduation-cap-line text-xl text-slate-900"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold">LeadForward Academy</h3>
                <p className="text-sm text-orange-400 font-medium">Driving Leadership & Business Growth</p>
              </div>
            </div>
            <p className="text-slate-300 mb-8 max-w-md leading-relaxed text-lg">
              Professional solutions provider specializing in training, coaching, consulting, and research. 
              Developing leaders and driving sustainable business growth across Cambodia.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/LeadForwardAcademy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-orange-400 hover:to-orange-500 hover:text-slate-900 transition-all duration-300 cursor-pointer group"
              >
                <i className="ri-facebook-fill text-lg group-hover:scale-110 transition-transform"></i>
              </a>
              <a 
                href="https://www.linkedin.com/company/leadforwardacademy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-orange-400 hover:to-orange-500 hover:text-slate-900 transition-all duration-300 cursor-pointer group"
              >
                <i className="ri-linkedin-fill text-lg group-hover:scale-110 transition-transform"></i>
              </a>
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-orange-400 hover:to-orange-500 hover:text-slate-900 transition-all duration-300 cursor-pointer group">
                <i className="ri-twitter-fill text-lg group-hover:scale-110 transition-transform"></i>
              </div>
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-orange-400 hover:to-orange-500 hover:text-slate-900 transition-all duration-300 cursor-pointer group">
                <i className="ri-instagram-line text-lg group-hover:scale-110 transition-transform"></i>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-orange-400 text-lg">Our Services</h4>
            <ul className="space-y-3 text-slate-300">
              <li className="hover:text-orange-400 transition-colors cursor-pointer flex items-center">
                <i className="ri-arrow-right-s-line mr-2 text-orange-400"></i>
                Leadership Training
              </li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer flex items-center">
                <i className="ri-arrow-right-s-line mr-2 text-orange-400"></i>
                Team Coaching
              </li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer flex items-center">
                <i className="ri-arrow-right-s-line mr-2 text-orange-400"></i>
                Strategic Consulting
              </li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer flex items-center">
                <i className="ri-arrow-right-s-line mr-2 text-orange-400"></i>
                HR Outsourcing
              </li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer flex items-center">
                <i className="ri-arrow-right-s-line mr-2 text-orange-400"></i>
                Digital Marketing
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-orange-400 text-lg">Get In Touch</h4>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-400/20 rounded-lg flex items-center justify-center mt-1">
                  <i className="ri-map-pin-line text-orange-400 text-sm"></i>
                </div>
                <span>Phnom Penh, Cambodia</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-400/20 rounded-lg flex items-center justify-center mt-1">
                  <i className="ri-phone-line text-orange-400 text-sm"></i>
                </div>
                <span>+855 12 345 678</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-400/20 rounded-lg flex items-center justify-center mt-1">
                  <i className="ri-mail-line text-orange-400 text-sm"></i>
                </div>
                <span>info@leadforward.academy</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-400/20 rounded-lg flex items-center justify-center mt-1">
                  <i className="ri-time-line text-orange-400 text-sm"></i>
                </div>
                <span>Mon - Fri: 8:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2026 LeadForward Academy. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center space-x-6">
            <a 
              href="#" 
              className="text-slate-400 hover:text-orange-400 transition-colors text-sm cursor-pointer"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-slate-400 hover:text-orange-400 transition-colors text-sm cursor-pointer"
            >
              Terms of Service
            </a>
            <a 
              href="https://readdy.ai/?origin=logo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-orange-400 transition-colors text-sm cursor-pointer"
            >
              Website Builder
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
