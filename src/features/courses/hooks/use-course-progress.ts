"use client";

import { useState, useEffect } from 'react';
import { CourseProgress } from '@/types/course';

export function useCourseProgress() {
  const [progress, setProgress] = useState<CourseProgress[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('courseProgress');
    if (stored) {
      setProgress(JSON.parse(stored));
    }
  }, []);

  const updateProgress = (newProgress: CourseProgress) => {
    setProgress((prev) => {
      const updated = prev.filter(p => p.courseId !== newProgress.courseId);
      const newState = [...updated, newProgress];
      localStorage.setItem('courseProgress', JSON.stringify(newState));
      return newState;
    });
  };

  const getCourseProgress = (courseId: string) => {
    return progress.find(p => p.courseId === courseId) || {
      courseId,
      completed: false,
      quizTaken: false,
      certificateIssued: false
    };
  };

  return { progress, updateProgress, getCourseProgress };
}