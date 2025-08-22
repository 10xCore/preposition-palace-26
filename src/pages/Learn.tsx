import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Volume2, ChevronLeft, ChevronRight, FileText, MapPin } from "lucide-react";

// Import generated images - Original 6
import catOnChair from "@/assets/cat-on-chair.jpg";
import ballInBox from "@/assets/ball-in-box.jpg";
import dogUnderTable from "@/assets/dog-under-table.jpg";
import treeBehindHouse from "@/assets/tree-behind-house.jpg";
import flowerBetweenRocks from "@/assets/flower-between-rocks.jpg";
import lampNextToBed from "@/assets/lamp-next-to-bed.jpg";

// Import new preposition images
import birdAboveTree from "@/assets/bird-above-tree.jpg";
import fishBelowBoat from "@/assets/fish-below-boat.jpg";
import airplaneOverMountain from "@/assets/airplane-over-mountain.jpg";
import childAcrossBridge from "@/assets/child-across-bridge.jpg";
import trainThroughTunnel from "@/assets/train-through-tunnel.jpg";
import dogAroundFountain from "@/assets/dog-around-fountain.jpg";
import childrenBesideBench from "@/assets/children-beside-bench.jpg";
import butterflyNearFlower from "@/assets/butterfly-near-flower.jpg";
import castleFarVillage from "@/assets/castle-far-village.jpg";
import catInsideHouse from "@/assets/cat-inside-house.jpg";
import childrenOutsideSchool from "@/assets/children-outside-school.jpg";
import rocketUpClouds from "@/assets/rocket-up-clouds.jpg";
import childDownStairs from "@/assets/child-down-stairs.jpg";
import rabbitIntoHole from "@/assets/rabbit-into-hole.jpg";
import frogOntoLilypad from "@/assets/frog-onto-lilypad.jpg";
import birdOffBranch from "@/assets/bird-off-branch.jpg";
import toysAmongBlocks from "@/assets/toys-among-blocks.jpg";
import ballAgainstFence from "@/assets/ball-against-fence.jpg";
import childrenAlongPath from "@/assets/children-along-path.jpg";

interface PrepositionCard {
  preposition: string;
  sentence: string;
  imageAlt: string;
  imageSrc: string;
  category: string;
}

const prepositions: PrepositionCard[] = [
  // Basic Position Prepositions
  {
    preposition: "on",
    sentence: "The cat is on the chair.",
    imageAlt: "Cat sitting on a chair",
    imageSrc: catOnChair,
    category: "Position"
  },
  {
    preposition: "in",
    sentence: "The ball is in the box.",
    imageAlt: "Ball inside a box",
    imageSrc: ballInBox,
    category: "Position"
  },
  {
    preposition: "under",
    sentence: "The dog is under the table.",
    imageAlt: "Dog sitting under a table",
    imageSrc: dogUnderTable,
    category: "Position"
  },
  {
    preposition: "above",
    sentence: "The bird is above the tree.",
    imageAlt: "Bird flying above a tree",
    imageSrc: birdAboveTree,
    category: "Position"
  },
  {
    preposition: "below",
    sentence: "The fish is below the boat.",
    imageAlt: "Fish swimming below a boat",
    imageSrc: fishBelowBoat,
    category: "Position"
  },
  {
    preposition: "over",
    sentence: "The airplane is over the mountain.",
    imageAlt: "Airplane flying over a mountain",
    imageSrc: airplaneOverMountain,
    category: "Position"
  },

  // Relationship Prepositions
  {
    preposition: "behind",
    sentence: "The tree is behind the house.",
    imageAlt: "Tree standing behind a house",
    imageSrc: treeBehindHouse,
    category: "Relationship"
  },
  {
    preposition: "between",
    sentence: "The flower is between two rocks.",
    imageAlt: "Flower growing between two rocks",
    imageSrc: flowerBetweenRocks,
    category: "Relationship"
  },
  {
    preposition: "next to",
    sentence: "The lamp is next to the bed.",
    imageAlt: "Lamp standing next to a bed",
    imageSrc: lampNextToBed,
    category: "Relationship"
  },
  {
    preposition: "beside",
    sentence: "The children sit beside each other.",
    imageAlt: "Two children sitting beside each other on a bench",
    imageSrc: childrenBesideBench,
    category: "Relationship"
  },
  {
    preposition: "near",
    sentence: "The butterfly is near the flower.",
    imageAlt: "Butterfly flying near a blooming flower",
    imageSrc: butterflyNearFlower,
    category: "Relationship"
  },
  {
    preposition: "far from",
    sentence: "The castle is far from the village.",
    imageAlt: "Castle in the distance, far from a small village",
    imageSrc: castleFarVillage,
    category: "Relationship"
  },
  {
    preposition: "among",
    sentence: "The toys are among the blocks.",
    imageAlt: "Various toys scattered among building blocks",
    imageSrc: toysAmongBlocks,
    category: "Relationship"
  },

  // Movement Prepositions
  {
    preposition: "across",
    sentence: "The child runs across the bridge.",
    imageAlt: "Happy child running across a colorful bridge",
    imageSrc: childAcrossBridge,
    category: "Movement"
  },
  {
    preposition: "through",
    sentence: "The train goes through the tunnel.",
    imageAlt: "Colorful train going through a tunnel",
    imageSrc: trainThroughTunnel,
    category: "Movement"
  },
  {
    preposition: "around",
    sentence: "The dog walks around the fountain.",
    imageAlt: "Friendly dog walking around a park fountain",
    imageSrc: dogAroundFountain,
    category: "Movement"
  },
  {
    preposition: "up",
    sentence: "The rocket goes up to the clouds.",
    imageAlt: "Colorful rocket flying up toward the clouds",
    imageSrc: rocketUpClouds,
    category: "Movement"
  },
  {
    preposition: "down",
    sentence: "The child walks down the stairs.",
    imageAlt: "Happy child walking down stairs",
    imageSrc: childDownStairs,
    category: "Movement"
  },
  {
    preposition: "into",
    sentence: "The rabbit jumps into the hole.",
    imageAlt: "Happy rabbit jumping into a garden hole",
    imageSrc: rabbitIntoHole,
    category: "Movement"
  },
  {
    preposition: "onto",
    sentence: "The frog jumps onto the lily pad.",
    imageAlt: "Colorful frog jumping onto a lily pad",
    imageSrc: frogOntoLilypad,
    category: "Movement"
  },
  {
    preposition: "off",
    sentence: "The bird flies off the branch.",
    imageAlt: "Happy bird flying off a tree branch",
    imageSrc: birdOffBranch,
    category: "Movement"
  },
  {
    preposition: "along",
    sentence: "The children walk along the path.",
    imageAlt: "Happy children walking along a colorful path",
    imageSrc: childrenAlongPath,
    category: "Movement"
  },

  // Location Prepositions
  {
    preposition: "inside",
    sentence: "The cat is inside the house.",
    imageAlt: "Happy cat inside a cozy pet house",
    imageSrc: catInsideHouse,
    category: "Location"
  },
  {
    preposition: "outside",
    sentence: "The children play outside the school.",
    imageAlt: "Children playing outside a colorful school building",
    imageSrc: childrenOutsideSchool,
    category: "Location"
  },
  {
    preposition: "against",
    sentence: "The ball leans against the fence.",
    imageAlt: "Colorful ball leaning against a fence",
    imageSrc: ballAgainstFence,
    category: "Location"
  }
];

const categories = ["All", "Position", "Relationship", "Movement", "Location"];

// Articles data
const articles = [
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

const Learn = () => {
  const [searchParams] = useSearchParams();
  const subject = searchParams.get('subject') || 'prepositions';
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  // Reset page when subject changes
  useEffect(() => {
    setCurrentPage(1);
    setSelectedCategory("All");
  }, [subject]);

  const filteredPrepositions = selectedCategory === "All" 
    ? prepositions 
    : prepositions.filter(p => p.category === selectedCategory);

  const totalPages = Math.ceil(filteredPrepositions.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentPrepositions = filteredPrepositions.slice(startIndex, startIndex + cardsPerPage);

  const speakSentence = (sentence: string, index: number) => {
    if ('speechSynthesis' in window) {
      setPlayingIndex(index);
      const utterance = new SpeechSynthesisUtterance(sentence);
      utterance.rate = 0.8;
      utterance.pitch = 1.1;
      utterance.onend = () => setPlayingIndex(null);
      speechSynthesis.speak(utterance);
    }
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      utterance.pitch = 1.1;
      speechSynthesis.speak(utterance);
    }
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Subject Navigation */}
        <div className="text-center mb-8">
          <div className="flex justify-center gap-4 mb-6">
            <Button
              onClick={() => window.location.href = '/learn?subject=prepositions'}
              variant={subject === 'prepositions' ? 'default' : 'outline'}
              className="flex items-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              Prepositions
            </Button>
            <Button
              onClick={() => window.location.href = '/learn?subject=articles'}
              variant={subject === 'articles' ? 'default' : 'outline'}
              className="flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Articles
            </Button>
          </div>
        </div>

        {/* Render Prepositions Content */}
        {subject === 'prepositions' && (
          <>
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-comic-neue font-bold text-primary mb-4">
                Learn All Prepositions!
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
                Master {prepositions.length} essential prepositions with fun illustrations, examples, and audio pronunciation.
              </p>
              
              {/* Statistics */}
              <div className="flex justify-center space-x-6 text-sm text-muted-foreground mb-6">
                <span>{filteredPrepositions.length} prepositions</span>
                <span>•</span>
                <span>Page {currentPage} of {totalPages}</span>
                <span>•</span>
                <span>Category: {selectedCategory}</span>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={selectedCategory === category ? "btn-learn" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Preposition Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
              {currentPrepositions.map((item, index) => (
                <div key={`${item.preposition}-${startIndex + index}`} className="preposition-card group">
                  {/* Category Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-semibold">
                      {item.category}
                    </span>
                  </div>

                  {/* Preposition Title */}
                  <div className="text-center mb-4">
                    <h3 className="text-3xl font-comic-neue font-bold text-primary mb-2">
                      {item.preposition}
                    </h3>
                  </div>

                  {/* Illustration */}
                  <div className="rounded-xl h-48 mb-4 overflow-hidden bg-gradient-to-br from-blue-100 to-green-100">
                    <img 
                      src={item.imageSrc} 
                      alt={item.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Sentence */}
                  <div className="bg-white/80 rounded-lg p-4 mb-4">
                    <p className="text-lg font-fredoka text-center text-foreground">
                      {item.sentence}
                    </p>
                  </div>

                  {/* Audio Button */}
                  <div className="text-center">
                    <Button
                      onClick={() => speakSentence(item.sentence, startIndex + index)}
                      variant="secondary"
                      className="btn-learn"
                      disabled={playingIndex === startIndex + index}
                    >
                      <Volume2 className={`w-5 h-5 mr-2 ${playingIndex === startIndex + index ? 'animate-bounce' : ''}`} />
                      {playingIndex === startIndex + index ? 'Playing...' : 'Play Audio'}
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-4 mb-8">
                <Button
                  onClick={goToPrevPage}
                  disabled={currentPage === 1}
                  variant="outline"
                  className="flex items-center"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>

                <div className="flex space-x-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      variant={currentPage === page ? "default" : "outline"}
                      className={`w-10 h-10 ${currentPage === page ? 'btn-learn' : ''}`}
                    >
                      {page}
                    </Button>
                  ))}
                </div>

                <Button
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                  variant="outline"
                  className="flex items-center"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}

            {/* Call to Action */}
            <div className="text-center mt-12">
              <div className="bg-gradient-primary rounded-2xl p-8 text-white max-w-3xl mx-auto">
                <h2 className="text-2xl font-comic-neue font-bold mb-4">
                  🎉 Amazing! You've learned {prepositions.length} prepositions!
                </h2>
                <p className="text-lg mb-6 text-white/90">
                  Now let's practice what you've learned with fun activities and games.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => window.location.href = '/practice?subject=prepositions'}
                    className="bg-white text-primary hover:bg-white/90 font-bold py-3 px-8 rounded-xl"
                  >
                    Start Practice Activities
                  </Button>
                  <Button 
                    onClick={() => window.location.href = '/quiz?subject=prepositions'}
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-xl"
                  >
                    Take a Quiz
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Render Articles Content */}
        {subject === 'articles' && (
          <>
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-comic-neue font-bold text-primary mb-4">
                Articles: A, An, The
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Master the three most important little words in English! Learn when to use A, AN, and THE with fun examples and practice.
              </p>
            </div>

            {/* Articles Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
              {articles.map((article, index) => (
                <div key={article.word} className="learning-card group">
                  <div className="text-center">
                    <div className={`w-20 h-20 mx-auto rounded-full ${article.color} flex items-center justify-center mb-4 group-hover:animate-bounce-gentle shadow-medium`}>
                      <span className="text-3xl font-bold text-white">{article.word}</span>
                    </div>
                    <h3 className="text-2xl font-comic-neue font-bold mb-4">{article.word}</h3>
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
                  </div>
                </div>
              ))}
            </div>

            {/* Memory Tips */}
            <div className="bg-gradient-card rounded-2xl p-8 mb-12 max-w-4xl mx-auto">
              <h2 className="text-2xl font-comic-neue text-center text-primary mb-6">
                🧠 Memory Tips
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="bg-gradient-secondary rounded-2xl p-8 text-white max-w-3xl mx-auto">
                <h2 className="text-2xl font-comic-neue font-bold mb-4">
                  ✨ Great! You've learned about articles!
                </h2>
                <p className="text-lg mb-6 text-white/90">
                  Ready to practice using A, AN, and THE in sentences?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => window.location.href = '/practice?subject=articles'}
                    className="bg-white text-secondary hover:bg-white/90 font-bold py-3 px-8 rounded-xl"
                  >
                    Practice Articles
                  </Button>
                  <Button 
                    onClick={() => window.location.href = '/quiz?subject=articles'}
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-xl"
                  >
                    Take Articles Quiz
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default Learn;