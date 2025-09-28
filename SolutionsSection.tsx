
export default function SolutionsSection() {
  const problems = [
    {
      icon: 'ri-user-unfollow-line',
      title: 'Leadership Gaps',
      description: 'Many organizations lack leaders who can inspire teams and drive innovation effectively.'
    },
    {
      icon: 'ri-tools-line',
      title: 'Skills Mismatch',
      description: 'Employee skills often do not match organizational needs, reducing overall productivity.'
    },
    {
      icon: 'ri-question-line',
      title: 'Limited Strategic Access',
      description: 'SMEs struggle to access affordable, practical consulting and outsourcing services.'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Unsustainable Growth',
      description: 'Rapid growth without proper systems and strategies leads to organizational instability.'
    }
  ];

  const solutions = [
    {
      icon: 'ri-graduation-cap-line',
      title: 'Leadership & Team Development',
      description: 'Customized training and coaching to build capable, confident, and future-ready leaders.',
      impact: '95% improvement in leadership effectiveness'
    },
    {
      icon: 'ri-target-line',
      title: 'Skills Alignment',
      description: 'Competency-based learning and practical workshops to match workforce skills with organizational goals.',
      impact: '80% increase in productivity metrics'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Strategic Consulting',
      description: 'Applied research, HR and financial outsourcing, and digital marketing management solutions.',
      impact: '150+ organizations transformed'
    },
    {
      icon: 'ri-plant-line',
      title: 'Sustainable Growth',
      description: 'Design business strategies, performance frameworks, and innovation pathways for measurable growth.',
      impact: '3x average revenue growth'
    }
  ];

  const strengths = [
    {
      icon: 'ri-award-line',
      title: 'Strong Brand Identity',
      description: 'Clear mission focused on driving leadership and business growth across Cambodia.'
    },
    {
      icon: 'ri-stack-line',
      title: 'Diverse Service Portfolio',
      description: 'Comprehensive offerings including training, coaching, consulting, research, and outsourcing.'
    },
    {
      icon: 'ri-user-star-line',
      title: 'Experienced Team',
      description: 'Skilled trainers and consultants with both local expertise and international exposure.'
    },
    {
      icon: 'ri-heart-line',
      title: 'Trusted Partner',
      description: 'Growing reputation as Cambodia\'s go-to partner for organizational transformation.'
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-6">
        {/* Problems Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-red-500/10 text-red-400 px-6 py-3 rounded-full font-semibold text-sm mb-8 border border-red-500/20">
              <i className="ri-alert-line mr-2"></i>
              Problems We Address
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              <span className="text-red-400">Challenges</span> Organizations Face
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We understand the critical challenges that prevent organizations from reaching their full potential.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, index) => (
              <div key={index} className="bg-red-500/10 backdrop-blur-sm rounded-2xl p-6 border border-red-500/20">
                <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
                  <i className={`${problem.icon} text-xl text-red-400`}></i>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{problem.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-500/10 text-orange-400 px-6 py-3 rounded-full font-semibold text-sm mb-8 border border-orange-500/20">
              <i className="ri-lightbulb-line mr-2"></i>
              Our Solutions
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">Transformative</span> Solutions
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive approaches that address root causes and deliver measurable results.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-orange-500/10 backdrop-blur-sm rounded-3xl p-8 border border-orange-500/20 hover:bg-orange-500/15 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <i className={`${solution.icon} text-2xl text-slate-900`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                    <p className="text-blue-100 mb-4 leading-relaxed">{solution.description}</p>
                    <div className="bg-orange-400/20 rounded-lg px-4 py-2 inline-block">
                      <span className="text-orange-300 font-semibold text-sm">{solution.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strengths Section */}
        <div>
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-500/10 text-green-400 px-6 py-3 rounded-full font-semibold text-sm mb-8 border border-green-500/20">
              <i className="ri-trophy-line mr-2"></i>
              Our Strengths
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Why Choose <span className="text-green-400">LeadForward</span> Academy
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our unique combination of expertise, experience, and commitment sets us apart.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((strength, index) => (
              <div key={index} className="bg-green-500/10 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20 hover:bg-green-500/15 transition-all duration-300 group">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors">
                  <i className={`${strength.icon} text-xl text-green-400`}></i>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{strength.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-orange-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-12 border border-orange-400/20">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Solve Your Business Challenges?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's work together to transform your challenges into opportunities for growth and success.
            </p>
            <button className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-slate-900 font-bold px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 whitespace-nowrap cursor-pointer">
              <i className="ri-message-line mr-2"></i>
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
