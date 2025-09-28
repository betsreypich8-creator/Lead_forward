
export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://static.readdy.ai/image/c5ebb277b8dd5890a572fd01682e656c/ebd41308a25bb27f39cede8bd1010eb1.jfif')`
        }}
      >
        <div className="absolute inset-0 bg-slate-900/40"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-400/5 to-blue-400/5 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-orange-400 to-orange-500 text-slate-900 px-6 py-3 rounded-full font-semibold text-sm mb-8 shadow-lg">
            <i className="ri-star-line mr-2"></i>
            Company Profile 2026
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-none">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">Lead</span>
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">Forward</span>
            <br />
            <span className="text-4xl lg:text-5xl font-light text-blue-200">Academy</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Cambodia's premier destination for leadership excellence, business transformation, and sustainable growth solutions
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-slate-900 font-bold px-8 py-4 text-lg rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 whitespace-nowrap cursor-pointer">
              <i className="ri-rocket-line mr-2"></i>
              Discover Our Services
            </button>
            <button className="border-2 border-blue-300 text-blue-100 hover:bg-blue-300 hover:text-slate-900 px-8 py-4 text-lg rounded-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer">
              <i className="ri-play-circle-line mr-2"></i>
              Watch Our Story
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent mb-2">500+</div>
              <div className="text-blue-200 text-sm font-medium">Leaders Developed</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent mb-2">150+</div>
              <div className="text-blue-200 text-sm font-medium">Organizations Served</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent mb-2">10+</div>
              <div className="text-blue-200 text-sm font-medium">Years Excellence</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent mb-2">95%</div>
              <div className="text-blue-200 text-sm font-medium">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-orange-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-orange-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
