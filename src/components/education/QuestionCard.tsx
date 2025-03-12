
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Check, X } from 'lucide-react';

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  subject: 'math' | 'english';
}

interface QuestionCardProps {
  question: Question;
  onAnswerSubmit: (questionId: string, isCorrect: boolean) => void;
}

export default function QuestionCard({ question, onAnswerSubmit }: QuestionCardProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = () => {
    if (selectedOption === null) return;
    
    const correct = selectedOption === question.correctAnswer;
    setIsCorrect(correct);
    setIsSubmitted(true);
    onAnswerSubmit(question.id, correct);
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-lg">
          {question.subject === 'math' ? '🔢' : '📝'} {question.question}
        </CardTitle>
        <CardDescription>
          Select the correct answer from the options below
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup 
          value={selectedOption?.toString()} 
          onValueChange={(value) => setSelectedOption(parseInt(value))}
          className="space-y-3"
          disabled={isSubmitted}
        >
          {question.options.map((option, index) => (
            <div 
              key={index} 
              className={`flex items-center space-x-2 rounded-md border p-3 ${
                isSubmitted && index === question.correctAnswer 
                  ? 'border-green-500 bg-green-50' 
                  : isSubmitted && index === selectedOption 
                    ? (isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50') 
                    : ''
              }`}
            >
              <RadioGroupItem value={index.toString()} id={`option-${question.id}-${index}`} />
              <Label 
                htmlFor={`option-${question.id}-${index}`}
                className="flex-1 cursor-pointer"
              >
                {option}
              </Label>
              {isSubmitted && index === question.correctAnswer && <Check className="h-5 w-5 text-green-500" />}
              {isSubmitted && !isCorrect && index === selectedOption && <X className="h-5 w-5 text-red-500" />}
            </div>
          ))}
        </RadioGroup>
        
        {isSubmitted && question.explanation && (
          <div className={`mt-4 p-3 rounded-md ${isCorrect ? 'bg-green-50 text-green-800' : 'bg-amber-50 text-amber-800'}`}>
            <p className="text-sm font-medium">Explanation:</p>
            <p className="text-sm">{question.explanation}</p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        {!isSubmitted ? (
          <Button 
            onClick={handleSubmit} 
            disabled={selectedOption === null}
            className="w-full sm:w-auto"
          >
            Submit Answer
          </Button>
        ) : (
          <div className="flex items-center">
            <div className={`mr-2 text-sm font-medium ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
              {isCorrect ? 'Correct!' : 'Incorrect'}
            </div>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
