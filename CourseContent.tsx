import React, { useState } from 'react';
import { PlayCircle, CheckCircle2, Lock, BookOpen, Clock, Download, MessageCircle } from 'lucide-react';
import { useParams } from 'react-router-dom';

function CourseContent() {
  const { courseId } = useParams();
  const [selectedModule, setSelectedModule] = useState(0);
  const [selectedLecture, setSelectedLecture] = useState(0);

  const course = {
    title: "Complete Web Development Bootcamp",
    progress: 35,
    modules: [
      {
        title: "Introduction to Web Development",
        duration: "2 hours",
        lectures: [
          {
            title: "Welcome to the Course",
            duration: "10 min",
            type: "video",
            completed: true
          },
          {
            title: "Course Overview",
            duration: "15 min",
            type: "video",
            completed: true
          },
          {
            title: "Setting Up Your Development Environment",
            duration: "25 min",
            type: "video",
            completed: false
          }
        ]
      },
      {
        title: "HTML Fundamentals",
        duration: "3 hours",
        lectures: [
          {
            title: "HTML Document Structure",
            duration: "20 min",
            type: "video",
            completed: false
          },
          {
            title: "HTML Tags and Elements",
            duration: "30 min",
            type: "video",
            completed: false
          },
          {
            title: "Practice Assignment",
            duration: "1 hour",
            type: "assignment",
            completed: false
          }
        ]
      },
      {
        title: "CSS Styling",
        duration: "4 hours",
        locked: true,
        lectures: [
          {
            title: "CSS Selectors",
            duration: "25 min",
            type: "video",
            locked: true
          },
          {
            title: "Box Model",
            duration: "30 min",
            type: "video",
            locked: true
          }
        ]
      }
    ]
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">{course.title}</h1>
          <div className="mt-2 flex items-center">
            <div className="w-48 h-2 bg-gray-200 rounded-full mr-3">
              <div 
                className="h-full bg-blue-600 rounded-full"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <span className="text-sm text-gray-600">{course.progress}% complete</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Course Modules Sidebar */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <div className="bg-white rounded-lg shadow">
              <div className="p-4 border-b">
                <h2 className="font-semibold text-gray-900">Course Content</h2>
              </div>
              <div className="divide-y">
                {course.modules.map((module, moduleIndex) => (
                  <div key={moduleIndex} className="p-4">
                    <button
                      onClick={() => !module.locked && setSelectedModule(moduleIndex)}
                      className={`w-full text-left ${module.locked ? 'opacity-50' : ''}`}
                      disabled={module.locked}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium text-gray-900">{module.title}</h3>
                        {module.locked ? (
                          <Lock className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Clock className="h-4 w-4 text-gray-400" />
                        )}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <BookOpen className="h-4 w-4 mr-1" />
                        <span>{module.lectures.length} lectures</span>
                        <span className="mx-2">•</span>
                        <span>{module.duration}</span>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="col-span-12 md:col-span-8 lg:col-span-9">
            <div className="bg-white rounded-lg shadow mb-8">
              {/* Video Player */}
              <div className="aspect-w-16 aspect-h-9 bg-gray-900 rounded-t-lg">
                <div className="flex items-center justify-center">
                  <PlayCircle className="h-20 w-20 text-white opacity-80" />
                </div>
              </div>
              
              {/* Lecture Controls */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {course.modules[selectedModule].lectures[selectedLecture].title}
                  </h2>
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center text-gray-600 hover:text-gray-900">
                      <Download className="h-5 w-5 mr-2" />
                      Resources
                    </button>
                    <button className="flex items-center text-gray-600 hover:text-gray-900">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Discussion
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none">
                  <p className="text-gray-600">
                    In this lecture, we'll cover the fundamentals of web development and set up our development environment.
                    Follow along as we install the necessary tools and configure our workspace for optimal productivity.
                  </p>
                </div>
              </div>
            </div>

            {/* Lecture List */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-4 border-b">
                <h3 className="font-semibold text-gray-900">
                  {course.modules[selectedModule].title}
                </h3>
              </div>
              <div className="divide-y">
                {course.modules[selectedModule].lectures.map((lecture, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedLecture(index)}
                    className={`w-full p-4 flex items-center hover:bg-gray-50 ${
                      selectedLecture === index ? 'bg-blue-50' : ''
                    }`}
                  >
                    {lecture.completed ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                    ) : lecture.locked ? (
                      <Lock className="h-5 w-5 text-gray-400 mr-3" />
                    ) : (
                      <PlayCircle className="h-5 w-5 text-gray-400 mr-3" />
                    )}
                    <div className="flex-1 text-left">
                      <h4 className="font-medium text-gray-900">{lecture.title}</h4>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{lecture.duration}</span>
                        <span className="mx-2">•</span>
                        <span className="capitalize">{lecture.type}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseContent;