"use client";

import { useState } from "react";
import { Question } from "../courses.types";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Trophy } from "lucide-react";

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  questions: Question[];
  onComplete: (score: number) => void;
}

export function QuizModal({
  isOpen,
  onClose,
  questions,
  onComplete,
}: QuizModalProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const calculateScore = () => {
    let correct = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) correct++;
    });
    return Math.round((correct / questions.length) * 100);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResults(true);
      const score = calculateScore();
      onComplete(score);
    }
  };

  const handleClose = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            {showResults
              ? "Quiz Results"
              : `Question ${currentQuestion + 1} of ${questions.length}`}
          </DialogTitle>
        </DialogHeader>

        {!showResults ? (
          <div className="py-4">
            <p className="mb-4 text-lg">{questions[currentQuestion].text}</p>
            <RadioGroup
              onValueChange={(value) => handleAnswer(parseInt(value))}
            >
              {questions[currentQuestion].options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem
                    value={index.toString()}
                    id={`option-${index}`}
                  />
                  <Label htmlFor={`option-${index}`}>{option}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        ) : (
          <div className="py-8 text-center">
            <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
            <h3 className="text-2xl font-bold mb-2">
              Your Score: {calculateScore()}%
            </h3>
            <p className="text-muted-foreground">
              {calculateScore() >= 70
                ? "Congratulations! You've passed the quiz!"
                : "Keep learning and try again!"}
            </p>
          </div>
        )}

        <DialogFooter>
          {!showResults ? (
            <Button
              onClick={handleNext}
              disabled={answers[currentQuestion] === undefined}
            >
              {currentQuestion < questions.length - 1
                ? "Next Question"
                : "Finish Quiz"}
            </Button>
          ) : (
            <Button onClick={handleClose}>Close</Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
