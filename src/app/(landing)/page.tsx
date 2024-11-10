import HeroSection from "@/components/modules/hero";
import AcademicStreams from "@/features/AcademicStreams";
import ComparisonSection from "@/features/ComparisonSection";
import CourseSection from "@/features/courses/components/course-section";
import EducationPathways from "@/features/EducationPathways";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CourseSection />
      <ComparisonSection />
      <EducationPathways />
      <AcademicStreams />
    </>
  );
}
