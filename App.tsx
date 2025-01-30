import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { GraduationCap, Users, PlayCircle, CheckCircle2, ArrowRight, Youtube, Linkedin, Instagram, Twitter } from 'lucide-react';
import Auth from './components/Auth';
import JobSimulation from './components/JobSimulation';
import BrowseCompanies from './components/BrowseCompanies';
import SimulationTask from './components/SimulationTask';
import CourseEnrollment from './components/CourseEnrollment';
import CourseContent from './components/CourseContent';

function Navigation() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/auth';
  const isCourseContent = location.pathname.includes('/course/');

  if (isAuthPage || isCourseContent) return null;

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <GraduationCap className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold text-blue-600">EduTech</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
          <a href="#courses" className="text-gray-600 hover:text-blue-600">Courses</a>
          <Link to="/job-simulation" className="text-gray-600 hover:text-blue-600">Job Simulation</Link>
          <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
        </div>
        <Link to="/auth" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
          Login
        </Link>
      </div>
    </nav>
  );
}

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Start Your Learning Journey Today
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Learn from India's most experienced teachers and join a community of over 1 million students.
            </p>
            <Link to="/auth" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 flex items-center inline-flex">
              Start Learning <ArrowRight className="ml-2" />
            </Link>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
              alt="Students learning"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-gray-900 mb-2">1M+</h3>
            <p className="text-gray-600">Students Enrolled</p>
          </div>
          <div className="text-center">
            <PlayCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-gray-900 mb-2">1000+</h3>
            <p className="text-gray-600">Video Lectures</p>
          </div>
          <div className="text-center">
            <CheckCircle2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-gray-900 mb-2">100%</h3>
            <p className="text-gray-600">Success Rate</p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Popular Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`}
                  alt="Course"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Complete Web Development</h3>
                  <p className="text-gray-600 mb-4">Learn web development from scratch with hands-on projects</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-bold">₹499</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <GraduationCap className="h-8 w-8" />
                <span className="text-2xl font-bold">EduTech</span>
              </div>
              <p className="text-gray-400">Empowering students with quality education and practical skills.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Courses</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Success Stories</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contact@edutech.com</li>
                <li>+91 1234567890</li>
                <li>Delhi, India</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Youtube className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
                <Linkedin className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EduTech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/job-simulation" element={<JobSimulation />} />
        <Route path="/browse-companies" element={<BrowseCompanies />} />
        <Route path="/simulation/:id" element={<SimulationTask />} />
        <Route path="/course/:courseId/enroll" element={<CourseEnrollment />} />
        <Route path="/course/:courseId/content" element={<CourseContent />} />
      </Routes>
    </div>
  );
}

export default App;