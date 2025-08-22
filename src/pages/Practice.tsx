import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, RefreshCw } from "lucide-react";

interface Exercise {
  id: number;
  instruction: string;
  targetPosition: string;
  feedback: {
    correct: string;
    incorrect: string;
  };
}

const exercises: Exercise[] = [
  {
    id: 1,
    instruction: "Put the ball ON the chair",
    targetPosition: "on",
    feedback: {
      correct: "Perfect! The ball is on the chair!",
      incorrect: "Try again! Remember, ON means on top of something."
    }
  },
  {
    id: 2,
    instruction: "Put the cat UNDER the table",
    targetPosition: "under",
    feedback: {
      correct: "Excellent! The cat is under the table!",
      incorrect: "Not quite! UNDER means below something."
    }
  },
  {
    id: 3,
    instruction: "Put the book IN the box",
    targetPosition: "in",
    feedback: {
      correct: "Great job! The book is in the box!",
      incorrect: "Try again! IN means inside something."
    }
  }
];

const Practice = () => {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [dropResult, setDropResult] = useState<'correct' | 'incorrect' | null>(null);
  const [attempts, setAttempts] = useState(0);

  const exercise = exercises[currentExercise];

  const handleDragStart = (e: React.DragEvent, item: string) => {
    setDraggedItem(item);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e: React.DragEvent, position: string) => {
    e.preventDefault();
    setAttempts(prev => prev + 1);

    if (position === exercise.targetPosition) {
      setDropResult('correct');
      setTimeout(() => {
        if (currentExercise < exercises.length - 1) {
          setCurrentExercise(prev => prev + 1);
          setDropResult(null);
          setAttempts(0);
        }
      }, 2000);
    } else {
      setDropResult('incorrect');
      setTimeout(() => {
        setDropResult(null);
      }, 2000);
    }
    setDraggedItem(null);
  };

  const resetExercise = () => {
    setDropResult(null);
    setAttempts(0);
    setDraggedItem(null);
  };

  const nextExercise = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(prev => prev + 1);
      resetExercise();
    }
  };

  const prevExercise = () => {
    if (currentExercise > 0) {
      setCurrentExercise(prev => prev - 1);
      resetExercise();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-comic-neue font-bold text-primary mb-4">
            Practice Time!
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Drag and drop items to practice prepositions
          </p>
          <div className="text-sm text-muted-foreground">
            Exercise {currentExercise + 1} of {exercises.length}
          </div>
        </div>

        {/* Exercise Area */}
        <div className="max-w-4xl mx-auto">
          {/* Instruction */}
          <div className="bg-gradient-primary rounded-2xl p-6 text-center mb-8">
            <h2 className="text-2xl font-comic-neue font-bold text-white mb-2">
              {exercise.instruction}
            </h2>
            <p className="text-white/80">
              Attempts: {attempts}
            </p>
          </div>

          {/* Practice Area */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Draggable Items */}
            <div className="space-y-6">
              <h3 className="text-xl font-comic-neue font-bold text-foreground text-center">
                Drag These Items
              </h3>
              
              <div className="flex flex-wrap gap-4 justify-center">
                {/* Ball */}
                <div
                  draggable
                  onDragStart={(e) => handleDragStart(e, "ball")}
                  className="draggable w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center shadow-medium"
                >
                  <span className="text-white font-bold">Ball</span>
                </div>

                {/* Cat */}
                <div
                  draggable
                  onDragStart={(e) => handleDragStart(e, "cat")}
                  className="draggable w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center shadow-medium"
                >
                  <span className="text-white font-bold text-sm">Cat</span>
                </div>

                {/* Book */}
                <div
                  draggable
                  onDragStart={(e) => handleDragStart(e, "book")}
                  className="draggable w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center shadow-medium"
                >
                  <span className="text-white font-bold text-sm">Book</span>
                </div>
              </div>
            </div>

            {/* Drop Zones */}
            <div className="space-y-6">
              <h3 className="text-xl font-comic-neue font-bold text-foreground text-center">
                Drop Zones
              </h3>

              <div className="space-y-4">
                {/* Chair/Table/Box representation with drop zones */}
                <div className="relative">
                  {/* ON zone */}
                  <div
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, "on")}
                    className={`drop-zone ${draggedItem ? 'active' : ''}`}
                  >
                    <span className="font-semibold text-muted-foreground">ON</span>
                  </div>

                  {/* Main object (chair/table/box) */}
                  <div className="bg-gradient-to-br from-brown-400 to-brown-600 h-16 rounded-lg flex items-center justify-center mt-2">
                    <span className="text-white font-bold">Furniture</span>
                  </div>

                  {/* UNDER zone */}
                  <div
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, "under")}
                    className={`drop-zone mt-2 ${draggedItem ? 'active' : ''}`}
                  >
                    <span className="font-semibold text-muted-foreground">UNDER</span>
                  </div>
                </div>

                {/* IN zone (box) */}
                <div
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, "in")}
                  className={`drop-zone border-4 ${draggedItem ? 'active' : ''}`}
                >
                  <span className="font-semibold text-muted-foreground">IN (Box)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feedback */}
          {dropResult && (
            <div className={`mt-8 p-6 rounded-2xl text-center ${
              dropResult === 'correct' 
                ? 'bg-success/10 border border-success text-success' 
                : 'bg-destructive/10 border border-destructive text-destructive'
            }`}>
              <div className="flex items-center justify-center mb-2">
                {dropResult === 'correct' ? (
                  <CheckCircle className="w-8 h-8 mr-2" />
                ) : (
                  <XCircle className="w-8 h-8 mr-2" />
                )}
                <span className="text-xl font-bold">
                  {dropResult === 'correct' ? 'Correct!' : 'Try Again!'}
                </span>
              </div>
              <p className="text-lg">
                {dropResult === 'correct' ? exercise.feedback.correct : exercise.feedback.incorrect}
              </p>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <Button
              onClick={prevExercise}
              disabled={currentExercise === 0}
              variant="outline"
            >
              Previous
            </Button>

            <Button
              onClick={resetExercise}
              variant="outline"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Reset
            </Button>

            <Button
              onClick={nextExercise}
              disabled={currentExercise === exercises.length - 1}
              className="btn-learn"
            >
              Next Exercise
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;