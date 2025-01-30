import React, { useState } from 'react';
import { CheckCircle2, Clock, ArrowRight, BookOpen, Award } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

function SimulationTask() {
  const { id } = useParams();
  const [currentTask, setCurrentTask] = useState(0);

  const simulation = {
    title: "Software Development Virtual Experience",
    company: "Tech Giants Corp",
    duration: "5-6 hours",
    description: "Experience real-world software development challenges and build production-ready features.",
    image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    tasks: [
      {
        title: "Welcome and Introduction",
        duration: "30 mins",
        status: "completed"
      },
      {
        title: "Code Review and Bug Fixing",
        duration: "1.5 hours",
        status: "completed"
      },
      {
        title: "Feature Implementation",
        duration: "2 hours",
        status: "in-progress"
      },
      {
        title: "Testing and Documentation",
        duration: "1.5 hours",
        status: "locked"
      },
      {
        title: "Final Submission",
        duration: "30 mins",
        status: "locked"
      }
    ]
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{simulation.title}</h1>
              <p className="text-gray-600 mb-4">{simulation.description}</p>
              <div className="flex items-center gap-4 text-gray-500">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-1" />
                  <span>{simulation.duration}</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-1" />
                  <span>{simulation.tasks.length} Tasks</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/3">
              <img 
                src={simulation.image}
                alt={simulation.title}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Task Progress */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Your Progress</h2>
          <div className="space-y-6">
            {simulation.tasks.map((task, index) => (
              <div key={index} className={`border-l-4 ${
                task.status === 'completed' ? 'border-green-500' :
                task.status === 'in-progress' ? 'border-blue-500' :
                'border-gray-300'
              } pl-4`}>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      {task.status === 'completed' && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                      <h3 className="text-lg font-semibold">{task.title}</h3>
                    </div>
                    <p className="text-gray-500 mt-1">
                      <Clock className="h-4 w-4 inline mr-1" />
                      {task.duration}
                    </p>
                  </div>
                  {task.status !== 'locked' && (
                    <button 
                      className={`px-4 py-2 rounded-full text-sm ${
                        task.status === 'completed' ? 'bg-green-100 text-green-700' :
                        'bg-blue-600 text-white'
                      }`}
                    >
                      {task.status === 'completed' ? 'Completed' : 'Continue'}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificate Preview */}
        <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Earn Your Certificate</h2>
              <p className="text-gray-600">Complete all tasks to earn your verified certificate</p>
            </div>
            <Award className="h-16 w-16 text-blue-600" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimulationTask