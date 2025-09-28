
export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <i className="ri-user-star-line mr-2"></i>
              About Our Leadership
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Meet Our 
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Founder</span>
            </h2>
            
            <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
              <p>
                <strong className="text-slate-900">Savath Kuch</strong>, Founder and Managing Director of LeadForward Academy, 
                brings years of transformative experience in leadership development and organizational excellence across Cambodia and beyond.
              </p>
              
              <p>
                "LeadForward Academy was born from a fundamental belief: that leadership excellence and sustainable 
                business growth are inseparable. Every program we deliver is designed to create lasting impact."
              </p>
              
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-2xl">
                <p className="italic text-lg">
                  "Through our four pillars of mission, we don't just train leaders—we transform organizations 
                  and drive Cambodia's economic growth forward."
                </p>
                <div className="mt-4 flex items-center">
                  <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-user-line text-xl text-slate-900"></i>
                  </div>
                  <div>
                    <div className="font-semibold">Savath Kuch</div>
                    <div className="text-blue-200 text-sm">Founder & Managing Director</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image and Stats */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://static.readdy.ai/image/c5ebb277b8dd5890a572fd01682e656c/7d5dc82e7b159d3165e588011256cc03.jfif"
                alt="Savath Kuch - Founder"
                className="w-full rounded-3xl shadow-2xl object-cover object-top"
              />
              
              {/* Floating stats cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-200">
                <div className="text-2xl font-bold text-blue-600 mb-1">18+</div>
                <div className="text-xs text-slate-600">Years Leading</div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-400 to-orange-500 text-slate-900 rounded-2xl p-4 shadow-xl">
                <div className="text-2xl font-bold mb-1">500+</div>
                <div className="text-xs font-semibold">Leaders Mentored</div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-3xl transform rotate-3 -z-10"></div>
          </div>
        </div>

        {/* Company Values */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h3>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              The principles that guide every decision and shape our approach to leadership development
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-lightbulb-line text-2xl text-white"></i>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Innovation</h4>
              <p className="text-slate-600 leading-relaxed">
                Embracing cutting-edge methodologies and digital transformation to stay ahead of industry trends.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-heart-line text-2xl text-slate-900"></i>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Integrity</h4>
              <p className="text-slate-600 leading-relaxed">
                Building trust through transparent practices and ethical leadership in every engagement.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-trophy-line text-2xl text-white"></i>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Excellence</h4>
              <p className="text-slate-600 leading-relaxed">
                Delivering exceptional results that exceed expectations and create lasting organizational impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
