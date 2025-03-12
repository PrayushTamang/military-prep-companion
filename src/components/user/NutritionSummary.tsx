
import { Apple, Circle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default function NutritionSummary() {
  // Mock nutrition data
  const caloriesConsumed = 1850;
  const caloriesGoal = 2200;
  const caloriesPercentage = Math.round((caloriesConsumed / caloriesGoal) * 100);
  
  const macros = [
    { name: "Protein", value: 120, goal: 140, unit: "g", color: "bg-blue-500" },
    { name: "Carbs", value: 200, goal: 250, unit: "g", color: "bg-green-500" },
    { name: "Fat", value: 55, goal: 70, unit: "g", color: "bg-yellow-500" }
  ];
  
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <Apple className="h-5 w-5" />
          Nutrition Summary
        </CardTitle>
        <CardDescription>Today's nutrition tracking</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <div className="font-medium">Calories</div>
              <div className="text-sm text-muted-foreground">
                {caloriesConsumed} / {caloriesGoal} kcal
              </div>
            </div>
            <Progress value={caloriesPercentage} className="h-2" />
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Macronutrients</h4>
            
            {macros.map((macro) => (
              <div key={macro.name}>
                <div className="flex justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <Circle className={`h-3 w-3 fill-current ${macro.color} text-white`} />
                    <span className="text-sm">{macro.name}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {macro.value} / {macro.goal} {macro.unit}
                  </div>
                </div>
                <Progress 
                  value={(macro.value / macro.goal) * 100} 
                  className={`h-1.5 ${macro.color}`} 
                />
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 p-3 rounded-lg">
            <h4 className="text-sm font-medium mb-2">Water Intake</h4>
            <div className="flex items-center gap-2">
              <div className="flex-1">
                <Progress value={60} className="h-2 bg-blue-100" />
              </div>
              <div className="text-sm text-muted-foreground whitespace-nowrap">
                1.5 / 2.5 L
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
