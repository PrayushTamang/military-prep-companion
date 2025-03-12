
import { useState, useEffect } from 'react';
import UserLayout from '@/components/user/UserLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { BookOpen, Calculator, FileText, Medal, RefreshCw } from 'lucide-react';
import QuestionCard, { Question } from '@/components/education/QuestionCard';

// Sample questions for math test
const mathQuestions: Question[] = [
  {
    id: 'math-1',
    question: 'If x² + 6x + 9 = 0, what is the value of x?',
    options: ['-3', '3', '0', 'None of the above'],
    correctAnswer: 0,
    explanation: 'This equation is a perfect square: (x + 3)² = 0, which gives us x = -3.',
    subject: 'math'
  },
  {
    id: 'math-2',
    question: 'What is the area of a circle with radius 5 units?',
    options: ['25π square units', '10π square units', '5π square units', '100π square units'],
    correctAnswer: 0,
    explanation: 'Area of a circle = πr². With r = 5, we get 5² × π = 25π square units.',
    subject: 'math'
  },
  {
    id: 'math-3',
    question: 'Solve for x: 2x - 5 = 11',
    options: ['x = 8', 'x = 3', 'x = 16', 'x = -3'],
    correctAnswer: 0,
    explanation: '2x - 5 = 11\n2x = 16\nx = 8',
    subject: 'math'
  },
  {
    id: 'math-4',
    question: 'What is 40% of 80?',
    options: ['32', '48', '24', '36'],
    correctAnswer: 0,
    explanation: '40% of 80 = 0.4 × 80 = 32',
    subject: 'math'
  },
  {
    id: 'math-5',
    question: 'If a car travels at 60 mph, how far will it travel in 2.5 hours?',
    options: ['150 miles', '120 miles', '180 miles', '200 miles'],
    correctAnswer: 0,
    explanation: 'Distance = Speed × Time = 60 mph × 2.5 h = 150 miles',
    subject: 'math'
  }
];

// Sample questions for English test
const englishQuestions: Question[] = [
  {
    id: 'eng-1',
    question: 'Which sentence contains a grammatical error?',
    options: [
      'He and I went to the store.',
      'Between you and I, this is a bad idea.',
      'She gave the book to him.',
      'They were happy with their results.'
    ],
    correctAnswer: 1,
    explanation: 'The correct phrase should be "Between you and me." The pronoun "I" is used as a subject, while "me" is used as an object.',
    subject: 'english'
  },
  {
    id: 'eng-2',
    question: 'Choose the correct word to complete the sentence: "She is _____ intelligent than her brother."',
    options: ['more', 'most', 'much', 'many'],
    correctAnswer: 0,
    explanation: 'When comparing two people or things, we use the comparative form "more" + adjective.',
    subject: 'english'
  },
  {
    id: 'eng-3',
    question: 'What is the plural form of "criterion"?',
    options: ['criteria', 'criterions', 'criterias', 'criterion'],
    correctAnswer: 0,
    explanation: '"Criterion" is a Greek-derived word, and its plural form is "criteria."',
    subject: 'english'
  },
  {
    id: 'eng-4',
    question: 'Which of the following is a synonym for "lethargic"?',
    options: ['sluggish', 'energetic', 'enthusiastic', 'attentive'],
    correctAnswer: 0,
    explanation: '"Lethargic" means lacking energy, slow, and sluggish.',
    subject: 'english'
  },
  {
    id: 'eng-5',
    question: 'Identify the correct sentence:',
    options: [
      'The committee has made their decision.',
      'The committee have made their decision.',
      'The committee has made its decision.',
      'The committee have made its decision.'
    ],
    correctAnswer: 2,
    explanation: 'In American English, collective nouns like "committee" are treated as singular, so they take singular verbs and pronouns ("has" and "its").',
    subject: 'english'
  }
];

export default function UserEducation() {
  const { toast } = useToast();
  const [currentSubject, setCurrentSubject] = useState<'math' | 'english'>('math');
  const [answeredQuestions, setAnsweredQuestions] = useState<Record<string, boolean>>({});
  const [completedTests, setCompletedTests] = useState<Record<string, number>>({
    math: 0,
    english: 0
  });
  
  const questions = currentSubject === 'math' ? mathQuestions : englishQuestions;
  
  const handleAnswerSubmit = (questionId: string, isCorrect: boolean) => {
    setAnsweredQuestions(prev => ({
      ...prev,
      [questionId]: isCorrect
    }));
    
    // Check if all questions are answered
    const currentQuestionIds = questions.map(q => q.id);
    const answeredIds = Object.keys(answeredQuestions).filter(id => currentQuestionIds.includes(id));
    
    if (answeredIds.length === questions.length - 1) { // If this was the last question
      const correctCount = Object.entries(answeredQuestions)
        .filter(([id, isCorrect]) => currentQuestionIds.includes(id) && isCorrect)
        .length + (isCorrect ? 1 : 0);
      
      const score = Math.round((correctCount / questions.length) * 100);
      
      setCompletedTests(prev => ({
        ...prev,
        [currentSubject]: prev[currentSubject] + 1
      }));
      
      toast({
        title: `${currentSubject.charAt(0).toUpperCase() + currentSubject.slice(1)} Test Completed!`,
        description: `You scored ${score}% (${correctCount}/${questions.length} correct)`,
      });
    }
  };
  
  const resetTest = () => {
    setAnsweredQuestions({});
    toast({
      title: "Test Reset",
      description: "You can now retake the test.",
    });
  };
  
  // Calculate progress
  const answeredCount = questions.filter(q => q.id in answeredQuestions).length;
  const correctCount = questions.filter(q => answeredQuestions[q.id] === true).length;
  const progress = (answeredCount / questions.length) * 100;
  
  return (
    <UserLayout title="Education & Tests">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Math Tests Completed</CardTitle>
              <Calculator className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{completedTests.math}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">English Tests Completed</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{completedTests.english}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Score</CardTitle>
              <Medal className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {answeredCount > 0 
                  ? `${Math.round((correctCount / answeredCount) * 100)}%` 
                  : 'N/A'}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Progress</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="text-2xl font-bold">{Math.round(progress)}%</div>
                <Progress value={progress} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs
          defaultValue="math"
          value={currentSubject}
          onValueChange={(value) => setCurrentSubject(value as 'math' | 'english')}
        >
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="math" className="flex items-center gap-2">
                <Calculator className="h-4 w-4" />
                <span>Math</span>
              </TabsTrigger>
              <TabsTrigger value="english" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>English</span>
              </TabsTrigger>
            </TabsList>
            
            <Button 
              variant="outline" 
              size="sm" 
              onClick={resetTest}
              className="flex items-center gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Reset Test</span>
            </Button>
          </div>
          
          <TabsContent value="math" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Mathematics Practice Test</CardTitle>
                <CardDescription>
                  Complete these questions to assess your math skills. These questions focus on 
                  algebra, geometry, and arithmetic.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {mathQuestions.map((question) => (
                  <QuestionCard
                    key={question.id}
                    question={question}
                    onAnswerSubmit={handleAnswerSubmit}
                  />
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="english" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>English Practice Test</CardTitle>
                <CardDescription>
                  Complete these questions to assess your English language skills. These questions focus on 
                  grammar, vocabulary, and reading comprehension.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {englishQuestions.map((question) => (
                  <QuestionCard
                    key={question.id}
                    question={question}
                    onAnswerSubmit={handleAnswerSubmit}
                  />
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </UserLayout>
  );
}
