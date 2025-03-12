
import { useState } from 'react';
import UserLayout from '@/components/user/UserLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Apple, Plus, PieChart, Calendar, Utensils } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { PieChart as RechartsChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip as ChartTooltip } from 'recharts';

export default function UserNutrition() {
  // Mock nutrition data
  const dailyCalories = {
    consumed: 1850,
    goal: 2200,
    remaining: 350,
    percentage: 84
  };
  
  const macroData = [
    { name: 'Protein', value: 35, color: '#0A1933' },
    { name: 'Carbs', value: 45, color: '#4D5D53' },
    { name: 'Fat', value: 20, color: '#C2B280' },
  ];
  
  const meals = [
    { id: 1, name: 'Breakfast', time: '7:30 AM', calories: 450, protein: 25, carbs: 50, fat: 15 },
    { id: 2, name: 'Snack', time: '10:00 AM', calories: 180, protein: 10, carbs: 15, fat: 8 },
    { id: 3, name: 'Lunch', time: '12:30 PM', calories: 650, protein: 40, carbs: 65, fat: 20 },
    { id: 4, name: 'Snack', time: '3:30 PM', calories: 120, protein: 5, carbs: 15, fat: 5 },
  ];
  
  return (
    <UserLayout title="Nutrition">
      <div className="space-y-6">
        <Tabs defaultValue="today">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="meal-plan">Meal Plans</TabsTrigger>
            <TabsTrigger value="history">History & Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="today" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Utensils className="h-5 w-5" />
                    Today's Meals
                  </CardTitle>
                  <CardDescription>Track what you've eaten today</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-end mb-4">
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Add Meal
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    {meals.map((meal) => (
                      <div 
                        key={meal.id} 
                        className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-medium">{meal.name}</h4>
                            <p className="text-sm text-muted-foreground">{meal.time}</p>
                          </div>
                          <div className="font-medium">{meal.calories} kcal</div>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4 mt-3">
                          <div className="text-center">
                            <div className="text-xs text-muted-foreground">Protein</div>
                            <div className="font-medium">{meal.protein}g</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xs text-muted-foreground">Carbs</div>
                            <div className="font-medium">{meal.carbs}g</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xs text-muted-foreground">Fat</div>
                            <div className="font-medium">{meal.fat}g</div>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    <div className="border border-dashed rounded-lg p-4 text-center">
                      <Button variant="ghost">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Another Meal
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Calories</CardTitle>
                    <CardDescription>Daily calorie tracking</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="py-4 flex flex-col items-center">
                      <div className="text-3xl font-bold">{dailyCalories.consumed}</div>
                      <div className="text-sm text-muted-foreground">of {dailyCalories.goal} kcal</div>
                    </div>
                    
                    <Progress value={dailyCalories.percentage} className="h-2 mb-4" />
                    
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-sm text-muted-foreground">Consumed</div>
                        <div className="font-medium">{dailyCalories.consumed} kcal</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Remaining</div>
                        <div className="font-medium">{dailyCalories.remaining} kcal</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Macronutrients</CardTitle>
                    <CardDescription>Protein, carbs and fat</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsChart>
                          <Pie
                            data={macroData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            innerRadius={40}
                            paddingAngle={2}
                          >
                            {macroData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Legend />
                          <ChartTooltip />
                        </RechartsChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="meal-plan">
            <Card>
              <CardHeader>
                <CardTitle>Meal Plans</CardTitle>
                <CardDescription>Browse meal plans and nutrition guides</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-10">
                  <p className="text-muted-foreground mb-4">
                    You don't have any active meal plans. Browse our collection or create your own.
                  </p>
                  <div className="flex justify-center gap-4">
                    <Button variant="outline">Browse Plans</Button>
                    <Button>Create Custom Plan</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Nutrition History</CardTitle>
                <CardDescription>View your nutrition data over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-6">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Select Date Range</span>
                  </Button>
                  <div className="text-sm text-muted-foreground">
                    Showing last 7 days
                  </div>
                </div>
                <p className="text-center py-10 text-muted-foreground">
                  Track your nutrition over time to identify trends and patterns.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </UserLayout>
  );
}
