import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Volume2, ArrowRight, BookOpen, Target, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Article {
  word: string;
  rule: string;
  examples: string[];
  color: string;
}

interface Exercise {
  id: number;
  sentence: string;
  options: string[];
  correct: string;
  explanation: string;
}

const Articles = () => {
  const { toast } = useToast();
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: string}>({});
  const [showResults, setShowResults] = useState(false);
  const [currentLesson, setCurrentLesson] = useState<'learn' | 'practice' | 'quiz'>('learn');

  const articles: Article[] = [
    {
      word: "A",
      rule: "Use 'A' before words that start with consonant sounds",
      examples: ["a cat", "a dog", "a house", "a book", "a university"],
      color: "bg-gradient-primary"
    },
    {
      word: "AN",
      rule: "Use 'AN' before words that start with vowel sounds",
      examples: ["an apple", "an elephant", "an umbrella", "an hour", "an honest person"],
      color: "bg-gradient-secondary"
    },
    {
      word: "THE",
      rule: "Use 'THE' for specific things that both speaker and listener know about",
      examples: ["the sun", "the moon", "the book on the table", "the cat we saw yesterday"],
      color: "bg-gradient-accent"
    }
  ];

  const exercises: Exercise[] = [
    {
      id: 1,
      sentence: "I saw ___ elephant at the zoo.",
      options: ["a", "an", "the"],
      correct: "an",
      explanation: "Use 'an' because 'elephant' starts with a vowel sound."
    },
    {
      id: 2,
      sentence: "Can you pass me ___ book on the table?",
      options: ["a", "an", "the"],
      correct: "the",
      explanation: "Use 'the' because we're talking about a specific book that both people can see."
    },
    {
      id: 3,
      sentence: "She wants to be ___ teacher when she grows up.",
      options: ["a", "an", "the"],
      correct: "a",
      explanation: "Use 'a' because 'teacher' starts with a consonant sound and it's not specific."
    },
    {
      id: 4,
      sentence: "Look at ___ beautiful rainbow in the sky!",
      options: ["a", "an", "the"],
      correct: "the",
      explanation: "Use 'the' because we're talking about a specific rainbow that everyone can see."
    },
    {
      id: 5,
      sentence: "I need ___ umbrella because it's raining.",
      options: ["a", "an", "the"],
      correct: "an",
      explanation: "Use 'an' because 'umbrella' starts with a vowel sound."
    }
  ];

  const handleAnswerSelect = (exerciseId: number, answer: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [exerciseId]: answer
    }));
  };

  const checkAnswers = () => {
    setShowResults(true);
    const correct = exercises.filter(ex => selectedAnswers[ex.id] === ex.correct).length;
    const total = exercises.length;
    
    toast({
      title: "Quiz Complete!",
      description: `You got ${correct} out of ${total} questions correct! ${correct === total ? "Perfect score! 🎉" : "Keep practicing to improve! 💪"}`,
    });
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      utterance.pitch = 1.1;
      speechSynthesis.speak(utterance);
    }
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-comic-neue font-bold text-primary mb-6">
              Articles: A, An, The
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Master the three most important little words in English! Learn when to use A, AN, and THE with fun examples and practice.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-muted rounded-2xl p-2 flex gap-2">
              <Button
                onClick={() => setCurrentLesson('learn')}
                variant={currentLesson === 'learn' ? 'default' : 'ghost'}
                className="rounded-xl"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Learn
              </Button>
              <Button
                onClick={() => setCurrentLesson('practice')}
                variant={currentLesson === 'practice' ? 'default' : 'ghost'}
                className="rounded-xl"
              >
                <Target className="w-4 h-4 mr-2" />
                Practice
              </Button>
              <Button
                onClick={() => setCurrentLesson('quiz')}
                variant={currentLesson === 'quiz' ? 'default' : 'ghost'}
                className="rounded-xl"
              >
                <Star className="w-4 h-4 mr-2" />
                Quiz
              </Button>
            </div>
          </div>

          {/* Learn Section */}
          {currentLesson === 'learn' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {articles.map((article, index) => (
                  <Card key={article.word} className="learning-card group">
                    <CardHeader className="text-center">
                      <div className={`w-20 h-20 mx-auto rounded-full ${article.color} flex items-center justify-center mb-4 group-hover:animate-bounce-gentle shadow-medium`}>
                        <span className="text-3xl font-bold text-white">{article.word}</span>
                      </div>
                      <CardTitle className="text-2xl font-comic-neue">{article.word}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {article.rule}
                      </p>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">Examples:</h4>
                        {article.examples.map((example, i) => (
                          <div key={i} className="flex items-center justify-between bg-muted/50 rounded-lg p-3">
                            <span className="font-medium">{example}</span>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => speakText(example)}
                              className="hover:bg-primary/10"
                            >
                              <Volume2 className="w-4 h-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Memory Tips */}
              <Card className="bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-comic-neue text-center text-primary">
                    🧠 Memory Tips
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-primary/10 rounded-xl">
                    <h3 className="font-bold text-lg mb-2">A vs AN Trick</h3>
                    <p className="text-muted-foreground">
                      Say the word out loud! If it sounds like it starts with a vowel (a, e, i, o, u), use AN. Otherwise, use A.
                    </p>
                  </div>
                  <div className="text-center p-4 bg-secondary/10 rounded-xl">
                    <h3 className="font-bold text-lg mb-2">THE Rule</h3>
                    <p className="text-muted-foreground">
                      Use THE when you're talking about something specific that everyone knows about!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Practice Section */}
          {currentLesson === 'practice' && (
            <div className="space-y-6">
              <Card className="text-center bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-comic-neue text-primary">
                    🎯 Interactive Practice
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Choose the correct article for each sentence. Take your time and think about the rules!
                  </p>
                </CardHeader>
              </Card>

              {exercises.slice(0, 3).map((exercise) => (
                <Card key={exercise.id} className="learning-card">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <p className="text-lg font-medium mb-4">
                        {exercise.sentence.split('___')[0]}
                        <span className="inline-block w-16 h-8 bg-muted rounded border-2 border-dashed border-primary mx-2 align-middle"></span>
                        {exercise.sentence.split('___')[1]}
                      </p>
                      
                      <div className="flex justify-center gap-4 mb-4">
                        {exercise.options.map((option) => (
                          <Button
                            key={option}
                            onClick={() => handleAnswerSelect(exercise.id, option)}
                            variant={selectedAnswers[exercise.id] === option ? "default" : "outline"}
                            className="min-w-[80px]"
                          >
                            {option}
                          </Button>
                        ))}
                      </div>

                      {selectedAnswers[exercise.id] && (
                        <div className={`p-4 rounded-lg ${
                          selectedAnswers[exercise.id] === exercise.correct 
                            ? 'bg-success/10 border border-success' 
                            : 'bg-destructive/10 border border-destructive'
                        }`}>
                          {selectedAnswers[exercise.id] === exercise.correct ? (
                            <div className="flex items-center justify-center text-success mb-2">
                              <CheckCircle className="w-5 h-5 mr-2" />
                              Correct!
                            </div>
                          ) : (
                            <div className="flex items-center justify-center text-destructive mb-2">
                              <XCircle className="w-5 h-5 mr-2" />
                              Try again!
                            </div>
                          )}
                          <p className="text-sm text-muted-foreground">{exercise.explanation}</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Quiz Section */}
          {currentLesson === 'quiz' && (
            <div className="space-y-6">
              <Card className="text-center bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-comic-neue text-primary">
                    ⭐ Final Quiz Challenge
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Test your knowledge with all {exercises.length} questions! 
                    {!showResults && " Complete all questions then check your answers."}
                  </p>
                </CardHeader>
              </Card>

              {exercises.map((exercise) => (
                <Card key={exercise.id} className="learning-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Badge variant="outline" className="text-lg px-3 py-1">
                        {exercise.id}
                      </Badge>
                      <div className="flex-1">
                        <p className="text-lg font-medium mb-4">{exercise.sentence}</p>
                        
                        <div className="flex gap-3 mb-4">
                          {exercise.options.map((option) => (
                            <Button
                              key={option}
                              onClick={() => handleAnswerSelect(exercise.id, option)}
                              variant={
                                showResults 
                                  ? (option === exercise.correct ? "default" : selectedAnswers[exercise.id] === option ? "destructive" : "outline")
                                  : (selectedAnswers[exercise.id] === option ? "default" : "outline")
                              }
                              disabled={showResults}
                              className="min-w-[80px]"
                            >
                              {option}
                            </Button>
                          ))}
                        </div>

                        {showResults && (
                          <div className="p-4 rounded-lg bg-muted/50">
                            <p className="text-sm text-muted-foreground">
                              <strong>Correct answer:</strong> {exercise.correct} - {exercise.explanation}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <div className="text-center space-y-4">
                {!showResults ? (
                  <Button 
                    onClick={checkAnswers}
                    className="btn-hero text-xl py-6 px-12"
                    disabled={Object.keys(selectedAnswers).length !== exercises.length}
                  >
                    Check My Answers
                    <ArrowRight className="ml-2 w-6 h-6" />
                  </Button>
                ) : (
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-lg text-muted-foreground mb-4">
                        You scored {exercises.filter(ex => selectedAnswers[ex.id] === ex.correct).length} out of {exercises.length}!
                      </p>
                    </div>
                    <Button 
                      onClick={resetQuiz}
                      className="btn-practice"
                    >
                      Try Again
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Articles;