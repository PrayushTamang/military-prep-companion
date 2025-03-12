
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, Calendar, Dumbbell, Trophy, TrendingUp } from 'lucide-react';
import UserLayout from '@/components/user/UserLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import UpcomingWorkouts from '@/components/user/UpcomingWorkouts';
import NutritionSummary from '@/components/user/NutritionSummary';

// Mock data for charts
const workoutData = [
  { name: 'Mon', workouts: 2 },
  { name: 'Tue', workouts: 1 },
  { name: 'Wed', workouts: 3 },
  { name: 'Thu', workouts: 0 },
  { name: 'Fri', workouts: 2 },
  { name: 'Sat', workouts: 4 },
  { name: 'Sun', workouts: 1 },
];

export default function UserDashboard() {
  const [weeklyProgress, setWeeklyProgress] = useState(65);
  
  return (
    <UserLayout title="Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {/* Stat Cards */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Weekly Workouts</CardTitle>
            <Dumbbell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <span className="text-green-500 flex items-center">
                <ArrowUpRight className="h-3 w-3" /> 16%
              </span>
              from last week
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Calories Burned</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,240</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <span className="text-green-500 flex items-center">
                <ArrowUpRight className="h-3 w-3" /> 8%
              </span>
              from last week
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Days</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5/7</div>
            <p className="text-xs text-muted-foreground mt-1">Goal: 6 days per week</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Achievements</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground mt-1">2 new this month</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Weekly Progress */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Weekly Activity</CardTitle>
            <CardDescription>Your workout frequency for the past week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[240px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={workoutData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="workouts"
                    stroke="#4D5D53"
                    strokeWidth={2}
                    dot={{ stroke: '#4D5D53', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: '#0A1933', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        {/* Progress toward weekly goal */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Goal Progress</CardTitle>
            <CardDescription>You're {weeklyProgress}% of the way there</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
              <div className="flex justify-between mb-2">
                <div className="text-sm font-medium">Workouts</div>
                <div className="text-sm text-muted-foreground">12/15</div>
              </div>
              <Progress value={80} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <div className="text-sm font-medium">Cardio Minutes</div>
                <div className="text-sm text-muted-foreground">85/120</div>
              </div>
              <Progress value={70} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <div className="text-sm font-medium">Weight Training</div>
                <div className="text-sm text-muted-foreground">3/4</div>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <div className="text-sm font-medium">Overall</div>
                <div className="text-sm text-muted-foreground">{weeklyProgress}%</div>
              </div>
              <Progress value={weeklyProgress} className="h-2" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">View Detailed Progress</Button>
          </CardFooter>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Workouts */}
        <UpcomingWorkouts />
        
        {/* Nutrition Summary */}
        <NutritionSummary />
      </div>
    </UserLayout>
  );
}
