import { GraduationCap } from "lucide-react";
import React from "react";
import CourseCard from "./course-card";
import { courses } from "../data/courses";

export default function CourseSection() {
  return (
    <>
      <main className="min-h-screen bg-background p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <GraduationCap className="h-12 w-12 text-primary" />
            <div>
              {/* <h1 className="text-4xl font-bold text-primary">Wisdom School</h1> */}
              <p className="text-muted-foreground">
                Essential life skills for everyone
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
