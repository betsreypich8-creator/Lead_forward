
export default function ServicesSection() {
  const services = [
    {
      icon: 'ri-user-star-line',
      title: 'Leadership Training',
      description: 'Comprehensive programs to develop effective leaders who can inspire teams and drive organizational success.',
      features: ['Executive Coaching', 'Leadership Workshops', 'Mentoring Programs', 'Performance Enhancement'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: 'ri-team-line',
      title: 'Team Coaching',
      description: 'Build high-performing teams through collaborative coaching sessions and team development strategies.',
      features: ['Team Building', 'Communication Skills', 'Conflict Resolution', 'Collaboration Enhancement'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: 'ri-bar-chart-line',
      title: 'Strategic Consulting',
      description: 'Expert guidance to optimize business strategies, improve processes, and achieve sustainable growth.',
      features: ['Business Strategy', 'Process Optimization', 'Change Management', 'Performance Analysis'],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: 'ri-search-line',
      title: 'Applied Research',
      description: 'Data-driven insights and research solutions to inform strategic decisions and industry best practices.',
      features: ['Market Research', 'Industry Analysis', 'Custom Studies', 'Trend Forecasting'],
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: 'ri-user-settings-line',
      title: 'HR Outsourcing',
      description: 'Complete human resources management solutions to streamline operations and reduce administrative burden.',
      features: ['Recruitment', 'Payroll Management', 'HR Compliance', 'Employee Relations'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: 'ri-megaphone-line',
      title: 'Digital Marketing',
      description: 'Modern marketing strategies to enhance brand visibility, engagement, and business growth in digital channels.',
      features: ['Social Media Marketing', 'Content Strategy', 'SEO Optimization', 'Brand Development'],
      color: 'from-rose-500 to-rose-600'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-orange-100 text-orange-800 px-6 py-3 rounded-full font-semibold text-sm mb-8">
            <i className="ri-service-line mr-2"></i>
            Our Professional Services
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Comprehensive</span>
            <br />
            <span className="text-3xl lg:text-4xl font-light text-slate-700">Business Solutions</span>
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-orange-500 mx-auto mb-8"></div>
          
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            From leadership development to digital transformation, we offer integrated solutions 
            that address every aspect of organizational growth and excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-orange-200 hover:-translate-y-2"
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300`}>
                <i className={`${service.icon} text-3xl text-white`}></i>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                {service.description}
              </p>
              
              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-slate-700">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <button className="w-full bg-gradient-to-r from-slate-800 to-slate-900 hover:from-orange-500 hover:to-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 group-hover:shadow-lg whitespace-nowrap cursor-pointer">
                  Learn More
                  <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Organization?</h3>
            <p className="text-xl mb-8 text-orange-100">
              Let's discuss how our comprehensive solutions can drive your business forward 
              and develop the leaders of tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 font-bold px-8 py-4 rounded-xl hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer">
                <i className="ri-calendar-line mr-2"></i>
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-orange-600 transition-all duration-300 whitespace-nowrap cursor-pointer">
                <i className="ri-download-line mr-2"></i>
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
