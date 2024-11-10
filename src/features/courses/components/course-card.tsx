"use client";

import { useState } from "react";
import { Course } from "@/features/courses/courses.types";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  BanknoteIcon,
  Brain,
  Clock,
  Scale,
  Shield,
  Heart,
  CheckCircle,
  Trophy,
  Award,
} from "lucide-react";
import { QuizModal } from "./quiz-modal";
import { CertificateModal } from "./certificate-modal";
import { useCourseProgress } from "../hooks/use-course-progress";
import { cn } from "@/lib/utils";

const iconMap = {
  BanknoteIcon,
  Brain,
  Clock,
  Scale,
  Shield,
  Heart,
};

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const Icon = iconMap[course.icon as keyof typeof iconMap];
  const { getCourseProgress, updateProgress } = useCourseProgress();
  const progress = getCourseProgress(course.id);

  const handleComplete = () => {
    updateProgress({
      ...progress,
      courseId: course.id,
      completed: true,
      completedAt: new Date().toISOString(),
    });
  };

  const handleQuizComplete = (score: number) => {
    updateProgress({
      ...progress,
      courseId: course.id,
      quizTaken: true,
      quizScore: score,
      certificateIssued: score >= 70,
    });
    setShowQuiz(false);
    if (score >= 70) {
      setShowCertificate(true);
    }
  };

  return (
    <>
      <Card
        className={cn(
          "cursor-pointer transition-all hover:scale-105 hover:shadow-lg rounded-[2rem]",
          progress.completed && "border-green-500"
        )}
        onClick={() => setIsOpen(true)}
      >
        <CardHeader>
          <div
            className={`w-12 h-12 rounded-lg ${course.color} flex items-center justify-center mb-4`}
          >
            <Icon className="h-6 w-6 text-white" />
          </div>
          <CardTitle className="text-xl mb-2 flex items-center gap-2">
            {course.title}
            {progress.completed && (
              <CheckCircle className="h-5 w-5 text-green-500" />
            )}
          </CardTitle>
          <CardDescription>{course.description}</CardDescription>
        </CardHeader>
        {progress.completed && (
          <CardFooter className="flex gap-2">
            {progress.quizTaken ? (
              <div className="flex items-center gap-1 text-sm">
                <Trophy className="h-4 w-4" />
                Score: {progress.quizScore}%
              </div>
            ) : null}
            {progress.certificateIssued && (
              <div className="flex items-center gap-1 text-sm">
                <Award className="h-4 w-4" />
                Certified
              </div>
            )}
          </CardFooter>
        )}
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-2">
              <Icon className={`h-6 w-6`} />
              {course.title}
            </DialogTitle>
          </DialogHeader>
          <div className="aspect-video mt-4">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube-nocookie.com/embed/${course.videoId}`}
              title={course.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
            {/* <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/GSudn0qB6u0?si=uZdO5MNm2qcqMURo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe> */}
          </div>
          <div className="flex justify-end gap-2 mt-4">
            {!progress.completed ? (
              <Button onClick={handleComplete}>Mark as Completed</Button>
            ) : !progress.quizTaken ? (
              <Button onClick={() => setShowQuiz(true)}>Take Quiz</Button>
            ) : progress.certificateIssued ? (
              <Button onClick={() => setShowCertificate(true)}>
                View Certificate
              </Button>
            ) : null}
          </div>
        </DialogContent>
      </Dialog>

      {showQuiz && (
        <QuizModal
          isOpen={showQuiz}
          onClose={() => setShowQuiz(false)}
          questions={course.quiz}
          onComplete={handleQuizComplete}
        />
      )}

      {showCertificate && progress.completedAt && (
        <CertificateModal
          isOpen={showCertificate}
          onClose={() => setShowCertificate(false)}
          courseTitle={course.title}
          completedAt={progress.completedAt}
        />
      )}
    </>
  );
}
