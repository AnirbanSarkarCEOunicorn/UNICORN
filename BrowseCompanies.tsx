import React from 'react';
import { Building2, MapPin, Users2, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

function BrowseCompanies() {
  const companies = [
    {
      name: "Tech Giants Corp",
      location: "San Francisco, CA",
      industry: "Technology",
      programCount: 3,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      description: "Leading technology company specializing in software development and cloud solutions."
    },
    {
      name: "FinTech Solutions",
      location: "New York, NY",
      industry: "Finance",
      programCount: 2,
      image: "https://images.unsplash.com/photo-1554768804-50c1e2b50a6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      description: "Innovative financial technology company revolutionizing digital banking."
    },
    {
      name: "Digital Marketing Pro",
      location: "Chicago, IL",
      industry: "Marketing",
      programCount: 4,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      description: "Award-winning digital marketing agency with global reach."
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Partner Companies
          </h1>
          <p className="text-xl text-gray-600">
            Explore opportunities with leading companies across various industries
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {companies.map((company, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src={company.image}
                    alt={company.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-2/3">
                  <div className="flex justify-between items-start">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{company.name}</h2>
                    <Link to={`/simulation/${company.name.toLowerCase().replace(/\s+/g, '-')}`} 
                          className="text-blue-600 hover:text-blue-700 flex items-center">
                      <span className="mr-1">View Programs</span>
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </div>
                  <p className="text-gray-600 mb-4">{company.description}</p>
                  <div className="flex flex-wrap gap-4 text-gray-500">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-1" />
                      <span>{company.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Building2 className="h-5 w-5 mr-1" />
                      <span>{company.industry}</span>
                    </div>
                    <div className="flex items-center">
                      <Users2 className="h-5 w-5 mr-1" />
                      <span>{company.programCount} Programs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrowseCompanies