import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Trophy, RefreshCw } from "lucide-react";

interface QuizQuestion {
  id: number;
  question: string;
  image: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "Where is the cat?",
    image: "Cat on chair",
    options: ["The cat is in the chair", "The cat is on the chair", "The cat is under the chair"],
    correct: 1,
    explanation: "The cat is ON the chair means the cat is sitting on top of the chair."
  },
  {
    id: 2,
    question: "Where is the ball?",
    image: "Ball in box",
    options: ["The ball is on the box", "The ball is under the box", "The ball is in the box"],
    correct: 2,
    explanation: "The ball is IN the box means the ball is inside the box."
  },
  {
    id: 3,
    question: "Where is the dog?",
    image: "Dog under table",
    options: ["The dog is on the table", "The dog is under the table", "The dog is in the table"],
    correct: 1,
    explanation: "The dog is UNDER the table means the dog is below or beneath the table."
  },
  {
    id: 4,
    question: "Where is the book?",
    image: "Book between bookends",
    options: ["The book is on the shelf", "The book is between the bookends", "The book is under the shelf"],
    correct: 1,
    explanation: "The book is BETWEEN the bookends means the book is in the middle of two bookends."
  },
  {
    id: 5,
    question: "Where is the lamp?",
    image: "Lamp next to bed",
    options: ["The lamp is on the bed", "The lamp is in the bed", "The lamp is next to the bed"],
    correct: 2,
    explanation: "The lamp is NEXT TO the bed means the lamp is beside or close to the bed."
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const [quizComplete, setQuizComplete] = useState(false);

  const question = questions[currentQuestion];

  const handleOptionSelect = (optionIndex: number) => {
    if (showResult || answeredQuestions.includes(currentQuestion)) return;
    
    setSelectedOption(optionIndex);
    setShowResult(true);
    
    if (optionIndex === question.correct) {
      setScore(prev => prev + 1);
    }
    
    setAnsweredQuestions(prev => [...prev, currentQuestion]);

    // Auto advance after 3 seconds
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        nextQuestion();
      } else {
        setQuizComplete(true);
      }
    }, 3000);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedOption(null);
      setShowResult(false);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setSelectedOption(null);
      setShowResult(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions([]);
    setQuizComplete(false);
  };

  const getScoreColor = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return "text-success";
    if (percentage >= 60) return "text-warning";
    return "text-destructive";
  };

  if (quizComplete) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-gradient-card rounded-3xl p-8 shadow-large">
            <Trophy className="w-20 h-20 mx-auto mb-6 text-accent animate-bounce-gentle" />
            <h1 className="text-4xl font-comic-neue font-bold text-primary mb-4">
              Quiz Complete!
            </h1>
            <div className="mb-6">
              <div className={`text-6xl font-bold ${getScoreColor()} mb-2`}>
                {score}/{questions.length}
              </div>
              <p className="text-xl text-muted-foreground">
                {score === questions.length 
                  ? "Perfect! You're a preposition master!" 
                  : score >= questions.length * 0.8
                  ? "Great job! You understand prepositions well!"
                  : score >= questions.length * 0.6
                  ? "Good work! Keep practicing to improve!"
                  : "Keep learning! Practice makes perfect!"
                }
              </p>
            </div>
            <div className="space-x-4">
              <Button onClick={resetQuiz} className="btn-hero">
                <RefreshCw className="w-5 h-5 mr-2" />
                Try Again
              </Button>
              <Button 
                onClick={() => window.location.href = '/learn'}
                variant="outline"
              >
                Back to Learning
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-comic-neue font-bold text-primary mb-4">
            Preposition Quiz
          </h1>
          <div className="flex justify-center items-center space-x-6 text-lg">
            <span className="text-muted-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-muted-foreground">
              Score: <span className="font-bold text-primary">{score}/{questions.length}</span>
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="bg-muted rounded-full h-3">
            <div 
              className="bg-gradient-primary h-3 rounded-full transition-all duration-500"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Area */}
        <div className="max-w-4xl mx-auto">
          <div className="learning-card mb-8">
            <h2 className="text-2xl font-comic-neue font-bold text-center text-foreground mb-6">
              {question.question}
            </h2>

            {/* Image Placeholder */}
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-xl h-64 mb-6 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">🖼️</span>
                </div>
                <p className="text-lg font-semibold">{question.image}</p>
              </div>
            </div>

            {/* Options */}
            <div className="space-y-4">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(index)}
                  disabled={showResult || answeredQuestions.includes(currentQuestion)}
                  className={`quiz-option w-full p-6 text-left text-lg font-fredoka ${
                    showResult
                      ? index === question.correct
                        ? 'correct'
                        : selectedOption === index
                        ? 'incorrect'
                        : ''
                      : selectedOption === index
                      ? 'selected'
                      : ''
                  }`}
                >
                  <div className="flex items-center">
                    <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-4 font-bold">
                      {String.fromCharCode(65 + index)}
                    </span>
                    {option}
                    {showResult && (
                      <div className="ml-auto">
                        {index === question.correct ? (
                          <CheckCircle className="w-6 h-6 text-success" />
                        ) : selectedOption === index ? (
                          <XCircle className="w-6 h-6 text-destructive" />
                        ) : null}
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Explanation */}
            {showResult && (
              <div className="mt-6 p-4 bg-primary/10 rounded-xl">
                <h3 className="font-bold text-primary mb-2">Explanation:</h3>
                <p className="text-foreground">{question.explanation}</p>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              variant="outline"
            >
              Previous
            </Button>

            <div className="text-center">
              <Button onClick={resetQuiz} variant="outline" size="sm">
                <RefreshCw className="w-4 h-4 mr-2" />
                Restart Quiz
              </Button>
            </div>

            <Button
              onClick={nextQuestion}
              disabled={currentQuestion === questions.length - 1 || !showResult}
              className="btn-learn"
            >
              Next Question
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;