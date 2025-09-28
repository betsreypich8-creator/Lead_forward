
export default function MissionSection() {
  const pillars = [
    {
      icon: 'ri-team-line',
      title: 'Empowering Leaders and Teams',
      description: 'High-impact training and coaching to build skills, confidence, and leadership capacity across all organizational levels.'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Driving Business Growth',
      description: 'Strategic consulting and outsourcing solutions to strengthen organizational performance and competitive advantage.'
    },
    {
      icon: 'ri-lightbulb-line',
      title: 'Promoting Innovation & Sustainability',
      description: 'Practical, evidence-based approaches for long-term impact and sustainable business transformation.'
    },
    {
      icon: 'ri-handshake-line',
      title: 'Building Trusted Partnerships',
      description: 'Collaborative work with clients and stakeholders to create measurable results and lasting relationships.'
    }
  ];

  return (
    <section id="mission" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-orange-400/10 text-orange-400 px-6 py-3 rounded-full font-semibold text-sm mb-8 border border-orange-400/20">
            <i className="ri-compass-line mr-2"></i>
            Our Mission & Vision
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">Four Pillars</span>
            <br />
            <span className="text-3xl lg:text-4xl font-light text-blue-200">of Excellence</span>
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-orange-500 mx-auto mb-8"></div>
          
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Our mission is built on four foundational pillars that guide every initiative, 
            ensuring we deliver transformative results for Cambodia's business landscape.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:border-orange-400/30 transition-all duration-500 hover:transform hover:-translate-y-2"
            >
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:shadow-orange-400/25 transition-all duration-300">
                  <i className={`${pillar.icon} text-2xl text-slate-900`}></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-blue-100 leading-relaxed text-lg">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="bg-gradient-to-r from-orange-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-12 border border-orange-400/20 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
            <i className="ri-eye-line text-3xl text-slate-900"></i>
          </div>
          <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
          <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-light">
            To become <span className="text-orange-400 font-semibold">Cambodia's trusted partner</span> in developing leaders 
            and driving sustainable business growth across all sectors.
          </p>
          
          <div className="mt-12">
            <button className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-slate-900 font-bold px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 whitespace-nowrap cursor-pointer">
              <i className="ri-rocket-line mr-2"></i>
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
