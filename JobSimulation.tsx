import React from 'react';
import { ArrowRight, Building2, Clock, Users2, Trophy } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

function JobSimulation() {
  const navigate = useNavigate();
  const simulations = [
    {
      company: "Tech Giants Corp",
      role: "Software Development",
      duration: "5-6 hours",
      participants: "10K+",
      image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      company: "FinTech Solutions",
      role: "Data Analysis",
      duration: "4-5 hours",
      participants: "8K+",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      company: "Digital Marketing Pro",
      role: "Marketing Strategy",
      duration: "3-4 hours",
      participants: "12K+",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Experience Real-World Job Simulations
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Get hands-on experience with industry-leading companies and build your professional portfolio
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => navigate('/simulation/tech-giants-corp')}
                className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 flex items-center"
              >
                Start a Simulation <ArrowRight className="ml-2" />
              </button>
              <button 
                onClick={() => navigate('/browse-companies')}
                className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg hover:bg-gray-50 border-2 border-blue-600"
              >
                Browse Companies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <Building2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Partner Companies</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <Users2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">100K+</h3>
              <p className="text-gray-600">Students Enrolled</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <Trophy className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">90%</h3>
              <p className="text-gray-600">Completion Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simulations Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Available Simulations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {simulations.map((simulation, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={simulation.image}
                  alt={simulation.company}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{simulation.company}</h3>
                  <p className="text-gray-600 mb-4">{simulation.role}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{simulation.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Users2 className="h-4 w-4 mr-1" />
                      <span className="text-sm">{simulation.participants}</span>
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
                    Start Simulation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Professional Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of students who have kickstarted their careers through our job simulations
            </p>
            <Link to="/auth" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full text-lg hover:bg-gray-100">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default JobSimulation;