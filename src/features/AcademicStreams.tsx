"use client";
import {
  Asterisk,
  BookMarked,
  Building2,
  Calculator,
  ChevronDown,
  ChevronUp,
  Globe,
} from "lucide-react";
import React, { useState } from "react";

interface Subject {
  name: string;
  description: string;
  prerequisites?: string[];
}

interface Stream {
  id: number;
  name: string;
  icon: React.ReactNode;
  description: string;
  color: string;
  majorSubjects: Subject[];
  minRequired: number;
  maxAllowed: number;
}

const StreamCard: React.FC<{ stream: Stream }> = ({ stream }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`rounded-xl shadow-lg border-2 ${stream.color} overflow-hidden transition-all duration-300 hover:shadow-xl`}
    >
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-white rounded-lg shadow-md">{stream.icon}</div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {stream.name}
            </h3>
            <p className="text-gray-600 text-sm">{stream.description}</p>
          </div>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-4 h-4" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              Show Major Subjects
            </>
          )}
        </button>

        {isExpanded && (
          <div className="mt-4 space-y-4">
            <div className="p-4 bg-white rounded-lg">
              <h4 className="font-semibold text-gray-700 mb-2">
                Major Subjects ({stream.minRequired}-{stream.maxAllowed}{" "}
                required)
              </h4>
              <div className="space-y-3">
                {stream.majorSubjects.map((subject, idx) => (
                  <div key={idx} className="p-3 bg-gray-50 rounded-lg">
                    <h5 className="font-medium text-gray-800">
                      {subject.name}
                    </h5>
                    <p className="text-sm text-gray-600 mt-1">
                      {subject.description}
                    </p>
                    {subject.prerequisites && (
                      <div className="mt-2 text-xs text-gray-500">
                        Prerequisites: {subject.prerequisites.join(", ")}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const AcademicStreams: React.FC = () => {
  const streams: Stream[] = [
    {
      id: 1,
      name: "Business & Entrepreneurship",
      icon: <Building2 className="w-6 h-6 text-blue-600" />,
      description:
        "Focus on business fundamentals, entrepreneurship, and economic principles",
      color: "border-blue-200 bg-blue-50",
      minRequired: 2,
      maxAllowed: 2,
      majorSubjects: [
        {
          name: "Economics",
          description:
            "Study of markets, resource allocation, and economic behavior",
        },
        {
          name: "Business Administration",
          description: "Fundamentals of business management and operations",
        },
      ],
    },
    {
      id: 2,
      name: "STEM",
      icon: <Calculator className="w-6 h-6 text-emerald-600" />,
      description: "Explore science, technology, engineering, and mathematics",
      color: "border-emerald-200 bg-emerald-50",
      minRequired: 2,
      maxAllowed: 4,
      majorSubjects: [
        {
          name: "Chemistry",
          description: "Study of matter, its properties, and transformations",
        },
        {
          name: "Physics",
          description: "Understanding fundamental laws of nature and universe",
        },
        {
          name: "Biology",
          description: "Study of living organisms and life processes",
        },
        {
          name: "Mathematics",
          description: "Advanced mathematical concepts and problem-solving",
        },
      ],
    },
    {
      id: 3,
      name: "Humanities & Social Sciences",
      icon: <Globe className="w-6 h-6 text-purple-600" />,
      description: "Study human society, culture, and individual behavior",
      color: "border-purple-200 bg-purple-50",
      minRequired: 2,
      maxAllowed: 4,
      majorSubjects: [
        {
          name: "Linguistics",
          description: "Study of language structure and development",
        },
        {
          name: "History",
          description: "Analysis of past events and their impact",
        },
        {
          name: "Civics",
          description: "Study of citizenship and government systems",
        },
        {
          name: "Sociology",
          description: "Understanding human society and social behavior",
        },
        {
          name: "Psychology",
          description: "Study of human mind and behavior",
        },
        {
          name: "Journalism",
          description: "Media studies and communication",
        },
        {
          name: "Cultural Studies",
          description: "Analysis of cultural practices and perspectives",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Academic Streams
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose your academic focus from our diverse streams. Major subjects
            define your primary area of study, while you&apos;re free to select
            additional subjects from any stream.
          </p>
        </div>

        <div className="grid gap-8">
          {streams.map((stream) => (
            <StreamCard key={stream.id} stream={stream} />
          ))}
        </div>

        <div className="mt-12 p-6 bg-white rounded-xl shadow-lg border-2 border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <BookMarked className="w-6 h-6 text-gray-600" />
            <h3 className="text-xl font-bold text-gray-800">Important Notes</h3>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <Asterisk className="w-4 h-4 text-blue-500" />
              Students can choose subjects across streams for a personalized
              curriculum
            </li>
            <li className="flex items-center gap-2">
              <Asterisk className="w-4 h-4 text-blue-500" />
              Each stream has minimum and maximum subject requirements for major
              subjects
            </li>
            <li className="flex items-center gap-2">
              <Asterisk className="w-4 h-4 text-blue-500" />
              Additional optional subjects can be selected from any stream
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AcademicStreams;
