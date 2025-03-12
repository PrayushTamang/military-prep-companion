
import { useState } from 'react';
import UserLayout from '@/components/user/UserLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Calendar, Camera, Plus, Trophy } from 'lucide-react';

export default function UserProgress() {
  // Mock progress data for charts
  const weightData = [
    { date: 'Jan 1', value: 82 },
    { date: 'Feb 1', value: 81 },
    { date: 'Mar 1', value: 79 },
    { date: 'Apr 1', value: 78 },
    { date: 'May 1', value: 77 },
    { date: 'Jun 1', value: 76 },
  ];
  
  const strengthData = [
    { date: 'Jan 1', value: 120 },
    { date: 'Feb 1', value: 130 },
    { date: 'Mar 1', value: 135 },
    { date: 'Apr 1', value: 140 },
    { date: 'May 1', value: 145 },
    { date: 'Jun 1', value: 155 },
  ];
  
  const cardioData = [
    { date: 'Jan 1', value: 25 },
    { date: 'Feb 1', value: 27 },
    { date: 'Mar 1', value: 30 },
    { date: 'Apr 1', value: 28 },
    { date: 'May 1', value: 32 },
    { date: 'Jun 1', value: 35 },
  ];
  
  // Mock achievements
  const achievements = [
    { id: 1, name: "30-Day Streak", description: "Worked out for 30 consecutive days", date: "May 15, 2023", icon: <Trophy className="h-5 w-5 text-yellow-500" /> },
    { id: 2, name: "Weight Loss Goal", description: "Lost 5kg and reached your target weight", date: "Apr 3, 2023", icon: <TrendingUp className="h-5 w-5 text-green-500" /> },
    { id: 3, name: "Strength Milestone", description: "Increased bench press max to 100kg", date: "Mar 22, 2023", icon: <Trophy className="h-5 w-5 text-blue-500" /> }
  ];
  
  return (
    <UserLayout title="Progress Tracking">
      <div className="space-y-6">
        <Tabs defaultValue="metrics">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="metrics">Key Metrics</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="photos">Progress Photos</TabsTrigger>
          </TabsList>
          
          <TabsContent value="metrics" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Weight Progress
                  </CardTitle>
                  <CardDescription>Track your weight changes over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={weightData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="date" />
                        <YAxis domain={['dataMin - 5', 'dataMax + 5']} />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="value"
                          name="Weight (kg)"
                          stroke="#0A1933"
                          strokeWidth={2}
                          dot={{ stroke: '#0A1933', strokeWidth: 2, r: 4 }}
                          activeDot={{ r: 6, stroke: '#0A1933', strokeWidth: 2 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Starting</div>
                      <div className="font-medium">82 kg</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Change</div>
                      <div className="font-medium text-green-600">-6 kg</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Current</div>
                      <div className="font-medium">76 kg</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Strength Progress
                  </CardTitle>
                  <CardDescription>Track your strength gains over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={strengthData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="date" />
                        <YAxis domain={['dataMin - 10', 'dataMax + 10']} />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="value"
                          name="Bench Press (kg)"
                          stroke="#4D5D53"
                          strokeWidth={2}
                          dot={{ stroke: '#4D5D53', strokeWidth: 2, r: 4 }}
                          activeDot={{ r: 6, stroke: '#4D5D53', strokeWidth: 2 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Starting</div>
                      <div className="font-medium">120 kg</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Change</div>
                      <div className="font-medium text-green-600">+35 kg</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Current</div>
                      <div className="font-medium">155 kg</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Cardio Performance
                  </CardTitle>
                  <CardDescription>Track your cardio improvements over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={cardioData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="date" />
                        <YAxis domain={['dataMin - 5', 'dataMax + 5']} />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="value"
                          name="5k Run Time (min)"
                          stroke="#C2B280"
                          strokeWidth={2}
                          dot={{ stroke: '#C2B280', strokeWidth: 2, r: 4 }}
                          activeDot={{ r: 6, stroke: '#C2B280', strokeWidth: 2 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Starting</div>
                      <div className="font-medium">25 min</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Change</div>
                      <div className="font-medium text-green-600">-10 min</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Current</div>
                      <div className="font-medium">35 min</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Add New Measurement</CardTitle>
                  <CardDescription>Track additional metrics for more comprehensive progress tracking</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center py-10">
                    <Button className="flex items-center gap-2">
                      <Plus className="h-4 w-4" />
                      <span>Add New Measurement</span>
                    </Button>
                    <p className="text-sm text-muted-foreground mt-4 text-center max-w-xs">
                      Track body measurements, performance metrics, and other health indicators.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="achievements">
            <Card>
              <CardHeader>
                <CardTitle>Your Achievements</CardTitle>
                <CardDescription>Milestones and accomplishments in your fitness journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement) => (
                    <div 
                      key={achievement.id} 
                      className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-gray-100 rounded-full p-3">
                          {achievement.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">{achievement.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {achievement.description}
                          </p>
                          <div className="text-xs text-muted-foreground mt-2">
                            Achieved on {achievement.date}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="text-center py-6">
                    <Button variant="outline" className="flex items-center gap-2">
                      <Trophy className="h-4 w-4" />
                      <span>View All Achievements</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="photos">
            <Card>
              <CardHeader>
                <CardTitle>Progress Photos</CardTitle>
                <CardDescription>Visual record of your transformation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-10">
                  <Camera className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground mb-4">
                    You haven't uploaded any progress photos yet.
                  </p>
                  <Button className="flex items-center gap-2">
                    <Camera className="h-4 w-4" />
                    <span>Upload First Photo</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </UserLayout>
  );
}
