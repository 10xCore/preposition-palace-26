import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Target, Zap, Volume2, MessageSquare, Clock, FileText, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-prepositions.jpg";

const Index = () => {
  const learningSubjects = [
    {
      id: 'prepositions',
      title: 'Prepositions',
      description: 'Learn where things are with fun visual examples!',
      icon: MapPin,
      color: 'bg-gradient-primary',
      route: '/learn',
      available: true
    },
    {
      id: 'voice',
      title: 'Voice & Pronunciation',
      description: 'Practice speaking and perfect your pronunciation',
      icon: Volume2,
      color: 'bg-gradient-secondary',
      route: '#',
      available: false
    },
    {
      id: 'narration',
      title: 'Story Narration',
      description: 'Listen to exciting stories and improve comprehension',
      icon: MessageSquare,
      color: 'bg-gradient-accent',
      route: '#',
      available: false
    },
    {
      id: 'tense',
      title: 'Verb Tenses',
      description: 'Master past, present, and future with interactive games',
      icon: Clock,
      color: 'bg-gradient-primary',
      route: '#',
      available: false
    },
    {
      id: 'articles',
      title: 'Articles (A, An, The)',
      description: 'Learn when to use articles correctly in sentences',
      icon: FileText,
      color: 'bg-gradient-secondary',
      route: '/learn?subject=articles',
      available: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            {/* Main Hero Content */}
            <div className="mb-16">
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-comic-neue font-bold mb-8 leading-tight">
                <span className="text-primary">Learn</span>
                <span className="block bg-gradient-hero bg-clip-text text-transparent">
                  English Fun!
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
                Choose your learning adventure! Master English grammar with interactive activities, games, and visual learning designed just for kids.
              </p>
            </div>

            {/* Learning Subjects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {learningSubjects.map((subject, index) => {
                const IconComponent = subject.icon;
                return (
                  <div
                    key={subject.id}
                    className={`learning-card group cursor-pointer relative overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                      !subject.available ? 'opacity-75' : ''
                    }`}
                    onClick={() => {
                      if (subject.available) {
                        window.location.href = subject.route;
                      }
                    }}
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 ${subject.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10 text-center p-6">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${subject.color} flex items-center justify-center group-hover:animate-bounce-gentle shadow-medium`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-comic-neue font-bold text-foreground mb-3">
                        {subject.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {subject.description}
                      </p>
                      
                      {subject.available ? (
                        <div className="flex items-center justify-center text-primary font-semibold">
                          <span>Start Learning</span>
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      ) : (
                        <div className="text-muted-foreground font-medium">
                          Coming Soon!
                        </div>
                      )}
                    </div>
                    
                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-2xl transition-colors duration-300"></div>
                  </div>
                );
              })}
            </div>

            {/* Featured Preview - Prepositions */}
            <div className="bg-gradient-card rounded-3xl p-8 shadow-large">
              <h2 className="text-3xl font-comic-neue font-bold text-primary mb-6">
                ✨ Featured: Visual Preposition Learning
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    See exactly what each preposition means with colorful illustrations and real-world examples. Perfect for visual learners!
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      onClick={() => window.location.href = '/learn'}
                      className="btn-hero"
                    >
                      Try Prepositions Now
                      <MapPin className="ml-2 w-5 h-5" />
                    </Button>
                    
                    <Button 
                      onClick={() => {
                        if ('speechSynthesis' in window) {
                          const utterance = new SpeechSynthesisUtterance("The ball is on the chair");
                          utterance.rate = 0.8;
                          utterance.pitch = 1.1;
                          speechSynthesis.speak(utterance);
                        }
                      }}
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      🔊 Audio Demo
                    </Button>
                  </div>
                </div>
                
                <div className="relative">
                  <img 
                    src={heroImage} 
                    alt="Visual preposition learning examples with cat, ball, and various objects"
                    className="w-full h-auto rounded-2xl shadow-medium"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Floating Elements */}
        <div className="absolute top-20 left-10 w-6 h-6 bg-accent rounded-full animate-bounce-gentle opacity-60"></div>
        <div className="absolute top-40 right-20 w-8 h-8 bg-secondary rounded-full animate-float opacity-60"></div>
        <div className="absolute bottom-32 left-1/4 w-5 h-5 bg-primary rounded-full animate-bounce-gentle opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-accent rounded-full animate-float opacity-40"></div>
        <div className="absolute bottom-1/4 right-10 w-7 h-7 bg-secondary rounded-full animate-bounce-gentle opacity-50"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-comic-neue font-bold text-primary mb-6">
              Why Kids Love Learning Here
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our visual approach makes understanding prepositions natural and fun
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="learning-card text-center group">
              <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center group-hover:animate-bounce-gentle">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-comic-neue font-bold text-foreground mb-4">
                Visual Learning
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                See exactly what each preposition means with colorful illustrations and real-world examples that make sense.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="learning-card text-center group">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full mx-auto mb-6 flex items-center justify-center group-hover:animate-bounce-gentle">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-comic-neue font-bold text-foreground mb-4">
                Interactive Practice
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Drag, drop, and play with objects to practice prepositions in a hands-on way that sticks.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="learning-card text-center group">
              <div className="w-16 h-16 bg-gradient-accent rounded-full mx-auto mb-6 flex items-center justify-center group-hover:animate-bounce-gentle">
                <Zap className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-comic-neue font-bold text-foreground mb-4">
                Instant Feedback
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Get immediate encouragement and gentle corrections to build confidence and understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-comic-neue font-bold text-primary mb-6">
              Your Learning Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Follow these simple steps to master prepositions
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto flex items-center justify-center shadow-medium">
                    <span className="text-3xl font-bold text-white">1</span>
                  </div>
                </div>
                <h3 className="text-2xl font-comic-neue font-bold text-foreground mb-4">Learn</h3>
                <p className="text-muted-foreground mb-6">
                  Discover prepositions through fun visual cards with pictures and audio pronunciation.
                </p>
                <Button 
                  onClick={() => window.location.href = '/learn'}
                  className="btn-learn"
                >
                  Start Learning
                </Button>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-secondary rounded-full mx-auto flex items-center justify-center shadow-medium">
                    <span className="text-3xl font-bold text-white">2</span>
                  </div>
                </div>
                <h3 className="text-2xl font-comic-neue font-bold text-foreground mb-4">Practice</h3>
                <p className="text-muted-foreground mb-6">
                  Reinforce your learning with interactive drag-and-drop activities and games.
                </p>
                <Button 
                  onClick={() => window.location.href = '/practice'}
                  className="btn-practice"
                >
                  Try Practice
                </Button>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-accent rounded-full mx-auto flex items-center justify-center shadow-medium">
                    <span className="text-3xl font-bold text-accent-foreground">3</span>
                  </div>
                </div>
                <h3 className="text-2xl font-comic-neue font-bold text-foreground mb-4">Quiz</h3>
                <p className="text-muted-foreground mb-6">
                  Test your knowledge with fun quizzes and track your amazing progress!
                </p>
                <Button 
                  onClick={() => window.location.href = '/quiz'}
                  variant="outline" 
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  Take Quiz
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-comic-neue font-bold mb-6">
              Ready to Make Learning Fun?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Join thousands of kids who are already mastering prepositions through visual learning!
            </p>
            <Button 
              onClick={() => window.location.href = '/learn'}
              className="bg-white text-primary hover:bg-white/90 font-bold text-xl py-6 px-12 rounded-2xl shadow-large transform hover:scale-105 transition-all duration-300"
            >
              Start Your Journey Now
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-20 w-16 h-16 bg-white rounded-full animate-bounce-gentle"></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-white rounded-full animate-float"></div>
          <div className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-white rounded-full animate-bounce-gentle"></div>
        </div>
      </section>
    </div>
  );
};

export default Index;
