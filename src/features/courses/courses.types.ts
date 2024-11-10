export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  videoId: string;
  color: string;
  quiz: Question[];
  certificateTemplate: string;
}

export interface CourseProgress {
  courseId: string;
  completed: boolean;
  quizTaken: boolean;
  quizScore?: number;
  certificateIssued: boolean;
  completedAt?: string;
}
