import React, { useState } from 'react';
import { CreditCard, Lock, CheckCircle2, Calendar, Clock, BookOpen, PlayCircle } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';

function CourseEnrollment() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [paymentStep, setPaymentStep] = useState(1);

  const course = {
    title: "Complete Web Development Bootcamp",
    price: 499,
    duration: "4 months",
    lectures: 120,
    features: [
      "Lifetime access to course content",
      "Certificate of completion",
      "Live doubt clearing sessions",
      "Real-world projects",
      "Job assistance program"
    ]
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentStep(2);
    // In a real app, integrate with a payment gateway
    setTimeout(() => {
      navigate(`/course/${courseId}/content`);
    }, 2000);
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              {/* Course Details */}
              <div className="md:w-1/2 p-8 bg-blue-600 text-white">
                <h2 className="text-2xl font-bold mb-6">{course.title}</h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-3" />
                    <span>{course.duration} duration</span>
                  </div>
                  <div className="flex items-center">
                    <PlayCircle className="h-5 w-5 mr-3" />
                    <span>{course.lectures} lectures</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold mb-2">What you'll get:</h3>
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 mr-3" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Form */}
              <div className="md:w-1/2 p-8">
                {paymentStep === 1 ? (
                  <>
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900">Secure Checkout</h3>
                      <p className="text-gray-600 mt-2">Complete your enrollment</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 mb-6 flex items-center justify-between">
                      <span className="text-gray-700">Course Price</span>
                      <span className="text-2xl font-bold text-blue-600">₹{course.price}</span>
                    </div>
                    <form onSubmit={handlePayment} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Card Number
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="1234 5678 9012 3456"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          />
                          <CreditCard className="h-5 w-5 text-gray-400 absolute right-3 top-3" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            CVV
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              placeholder="123"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            />
                            <Lock className="h-5 w-5 text-gray-400 absolute right-3 top-3" />
                          </div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Pay ₹{course.price}
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h3>
                    <p className="text-gray-600">Redirecting to course content...</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseEnrollment;