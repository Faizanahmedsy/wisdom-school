import React from "react";
import {
  CheckCircle2,
  XCircle,
  Sparkles,
  Trophy,
  Target,
  Brain,
  Book,
  Layout,
} from "lucide-react";

const ComparisonSection = () => {
  const comparisons = [
    {
      title: "Assessment System",
      icon: <Trophy className="w-8 h-8" />,
      wisdomSchool: {
        title: "Smart Continuous Evaluation",
        points: [
          "Weekly quizzes for immediate feedback",
          "Monthly assessments for progress tracking",
          "Quarterly reviews for comprehensive growth",
          "No exam pressure or stress",
        ],
      },
      traditional: {
        title: "Outdated Testing Method",
        points: [
          "Stressful annual board exams",
          "Limited feedback opportunities",
          "High-pressure environment",
          "Anxiety-inducing evaluation",
        ],
      },
    },
    {
      title: "Learning Approach",
      icon: <Brain className="w-8 h-8" />,
      wisdomSchool: {
        title: "Project-Based Learning",
        points: [
          "Hands-on practical activities",
          "Real-world project experience",
          "Digital-first approach",
          "Zero paper waste",
        ],
      },
      traditional: {
        title: "Paper-Heavy System",
        points: [
          "Excessive paper assignments",
          "Contributing to deforestation",
          "Theoretical knowledge only",
          "Outdated learning methods",
        ],
      },
    },
    {
      title: "Curriculum Freedom",
      icon: <Layout className="w-8 h-8" />,
      wisdomSchool: {
        title: "Personalized Learning Path",
        points: [
          "Choose subjects you love",
          "Customize your education",
          "Focus on your strengths",
          "Build your dream career",
        ],
      },
      traditional: {
        title: "One-Size-Fits-All",
        points: [
          "Fixed mandatory subjects",
          "No room for preferences",
          "Limited career preparation",
          "Standardized approach",
        ],
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            The Future of Education is Here
          </h2>
          <div className="flex items-center justify-center gap-2 text-emerald-600">
            <Sparkles className="w-6 h-6" />
            <p className="text-xl">Compare and see the difference</p>
            <Sparkles className="w-6 h-6" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Wisdom School Column */}
          <div className="space-y-8">
            <div className="text-center p-6 bg-emerald-50 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="inline-block p-4 bg-emerald-100 rounded-full mb-4">
                <Book className="w-12 h-12 text-emerald-600" />
              </div>
              <h3 className="text-3xl font-bold text-emerald-700 mb-2">
                Wisdom School
              </h3>
              <div className="text-6xl mb-2">😊</div>
              <p className="text-emerald-600">
                Innovating Education for Tomorrow
              </p>
            </div>

            {comparisons.map((item, index) => (
              <div
                key={`wisdom-${index}`}
                className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-2xl p-8 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-l-4 border-emerald-500"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-white p-3 rounded-full shadow-md">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-emerald-700 mb-4">
                      {item.wisdomSchool.title}
                    </h4>
                    <ul className="space-y-3">
                      {item.wisdomSchool.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                          <span className="text-emerald-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Traditional School Column */}
          <div className="space-y-8">
            <div className="text-center p-6 bg-red-50 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="inline-block p-4 bg-red-100 rounded-full mb-4">
                <Book className="w-12 h-12 text-red-600" />
              </div>
              <h3 className="text-3xl font-bold text-red-700 mb-2">
                Traditional School
              </h3>
              <div className="text-6xl mb-2">😟</div>
              <p className="text-red-600">Stuck in the Past</p>
            </div>

            {comparisons.map((item, index) => (
              <div
                key={`traditional-${index}`}
                className="bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-8 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-l-4 border-red-500"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-white p-3 rounded-full shadow-md">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-red-700 mb-4">
                      {item.traditional.title}
                    </h4>
                    <ul className="space-y-3">
                      {item.traditional.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                          <span className="text-red-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-emerald-500 to-emerald-600 p-1 rounded-full hover:scale-105 transform transition-all duration-300">
            <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-12 py-5 rounded-full text-xl font-bold shadow-xl hover:shadow-2xl flex items-center gap-3">
              <Target className="w-6 h-6" />
              Join Wisdom School Today
              <Sparkles className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSection;
