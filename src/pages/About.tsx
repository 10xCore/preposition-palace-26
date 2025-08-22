import { Button } from "@/components/ui/button";
import { BookOpen, Target, Users, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-comic-neue font-bold text-primary mb-6">
            About Visual Prepositions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Making English prepositions fun and easy to learn through interactive visual experiences designed especially for young learners.
          </p>
        </div>

        {/* Mission Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="learning-card text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-comic-neue font-bold text-primary mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe learning should be joyful and engaging. Our platform transforms the often challenging task of understanding English prepositions into an exciting visual adventure that kids actually enjoy.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="learning-card text-center">
            <div className="w-12 h-12 bg-gradient-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-comic-neue font-bold text-foreground mb-3">
              Visual Learning
            </h3>
            <p className="text-muted-foreground">
              Clear illustrations help children understand spatial relationships and preposition meanings intuitively.
            </p>
          </div>

          <div className="learning-card text-center">
            <div className="w-12 h-12 bg-gradient-accent rounded-full mx-auto mb-4 flex items-center justify-center">
              <Zap className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-comic-neue font-bold text-foreground mb-3">
              Interactive Practice
            </h3>
            <p className="text-muted-foreground">
              Drag-and-drop activities and quizzes make learning engaging and help reinforce understanding through practice.
            </p>
          </div>

          <div className="learning-card text-center">
            <div className="w-12 h-12 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-comic-neue font-bold text-foreground mb-3">
              Kid-Friendly Design
            </h3>
            <p className="text-muted-foreground">
              Bright colors, playful animations, and intuitive navigation create a welcoming learning environment.
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-comic-neue font-bold text-center text-primary mb-8">
            How It Works
          </h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Learn</h3>
                <p className="text-muted-foreground">
                  Start by exploring preposition cards with visual examples and audio pronunciation to understand each concept.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Practice</h3>
                <p className="text-muted-foreground">
                  Reinforce learning through interactive drag-and-drop exercises that provide immediate feedback.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center text-accent-foreground font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Quiz</h3>
                <p className="text-muted-foreground">
                  Test understanding with fun multiple-choice quizzes that track progress and celebrate achievements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-hero rounded-3xl p-8 text-white shadow-large max-w-2xl mx-auto">
            <h2 className="text-3xl font-comic-neue font-bold mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-xl mb-6 text-white/90">
              Join thousands of kids who are mastering prepositions through visual learning!
            </p>
            <Button 
              onClick={() => window.location.href = '/learn'}
              className="bg-white text-primary hover:bg-white/90 font-bold py-3 px-8 rounded-xl shadow-medium"
            >
              Start Your Journey
            </Button>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © 2025 Visual Prepositions – Learn with Fun!
          </p>
        </footer>
      </div>
    </div>
  );
};

export default About;