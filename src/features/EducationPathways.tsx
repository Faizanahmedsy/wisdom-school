import React from "react";
import {
  BookOpen,
  Rocket,
  Globe,
  Search,
  Building2,
  Code,
  School,
  GraduationCap,
} from "lucide-react";

const variants = {
  default: "bg-white border-gray-200",
  primary: "bg-blue-100 border-blue-200",
  secondary: "bg-green-100 border-green-200",
  tertiary: "bg-yellow-100 border-yellow-200",
  quaternary: "bg-red-100 border-red-200",
};

const PathwayCard = ({
  icon: Icon,
  title,
  description,
  variant = "default",
}: {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  variant?: "default" | "primary" | "secondary" | "tertiary" | "quaternary";
}) => {
  return (
    <div
      className={`p-4 rounded-lg shadow-lg border-2 ${variants[variant]} transform transition-all duration-300 hover:scale-105`}
    >
      <div className="flex items-center gap-3">
        <div className="p-2 bg-white rounded-full shadow-sm">
          <Icon className="w-6 h-6 text-gray-600" />
        </div>
        <div>
          <h3 className="font-bold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Arrow = () => (
  <div className="flex justify-center my-4">
    <div className="w-0.5 h-8 bg-gray-300"></div>
  </div>
);

const EducationPathways = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Your Educational Journey
          </h2>
          <p className="text-gray-600">
            Explore the flexible pathways at Wisdom School
          </p>
        </div>

        {/* Foundation Years */}
        <div className="mb-8">
          <PathwayCard
            icon={BookOpen}
            title="Grades 1-5: Foundation Years"
            description="Building strong fundamentals through interactive learning"
            variant="primary"
          />
        </div>
        <Arrow />

        {/* Middle School */}
        <div className="mb-8">
          <PathwayCard
            icon={School}
            title="Grades 6-10: Core Development"
            description="Developing essential skills and knowledge"
            variant="secondary"
          />
        </div>
        <Arrow />

        {/* Three Paths */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <PathwayCard
            icon={Code}
            title="Bootcamps"
            description="3-6 months intensive technical training"
            variant="tertiary"
          />
          <PathwayCard
            icon={GraduationCap}
            title="Junior College"
            description="2 years comprehensive foundation"
            variant="quaternary"
          />
          <PathwayCard
            icon={BookOpen}
            title="Diploma"
            description="Specialized technical education"
            variant="tertiary"
          />
        </div>

        {/* Junior College Paths */}
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gray-300 -top-8"></div>
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-2 bg-amber-100 rounded-full text-sm font-medium text-amber-800">
              After Junior College
            </span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PathwayCard
              icon={Globe}
              title="Study Abroad"
              description="International education opportunities"
              variant="quaternary"
            />
            <PathwayCard
              icon={Search}
              title="Research"
              description="Academic research and innovation"
              variant="quaternary"
            />
            <PathwayCard
              icon={Building2}
              title="Placement Prep"
              description="Career-focused preparation"
              variant="quaternary"
            />
            <PathwayCard
              icon={Rocket}
              title="Specialization"
              description="Advanced domain expertise"
              variant="quaternary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationPathways;
