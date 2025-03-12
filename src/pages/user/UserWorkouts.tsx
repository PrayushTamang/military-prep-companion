
import { useState } from 'react';
import UserLayout from '@/components/user/UserLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Search, Filter, Plus, Calendar, ListFilter } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function UserWorkouts() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock workout plans data
  const workoutPlans = [
    {
      id: 1,
      name: "Beginner Strength Training",
      level: "Beginner",
      duration: "4 weeks",
      workoutsPerWeek: 3,
      category: "Strength",
      description: "Perfect for beginners looking to build basic strength and form."
    },
    {
      id: 2,
      name: "HIIT Cardio Challenge",
      level: "Intermediate",
      duration: "2 weeks",
      workoutsPerWeek: 4,
      category: "Cardio",
      description: "High-intensity interval training to boost cardiovascular fitness and burn calories."
    },
    {
      id: 3,
      name: "Full Body Transformation",
      level: "Advanced",
      duration: "8 weeks",
      workoutsPerWeek: 5,
      category: "Hybrid",
      description: "Comprehensive program targeting all major muscle groups with progressive overload."
    },
    {
      id: 4,
      name: "Core Strengthening",
      level: "All Levels",
      duration: "3 weeks",
      workoutsPerWeek: 3,
      category: "Core",
      description: "Focus on building a strong core and improving stability."
    }
  ];
  
  // Filter workouts based on search term
  const filteredWorkouts = workoutPlans.filter(workout => 
    workout.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    workout.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    workout.level.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <UserLayout title="Workouts">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search workouts..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <Button variant="outline" className="flex gap-2 items-center">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </Button>
            <Button variant="outline" className="flex gap-2 items-center">
              <ListFilter className="h-4 w-4" />
              <span>Sort</span>
            </Button>
            <Button className="flex gap-2 items-center ml-auto sm:ml-0">
              <Plus className="h-4 w-4" />
              <span>Create</span>
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="plans">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="plans">Workout Plans</TabsTrigger>
            <TabsTrigger value="history">Workout History</TabsTrigger>
            <TabsTrigger value="custom">My Routines</TabsTrigger>
          </TabsList>
          
          <TabsContent value="plans" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWorkouts.length > 0 ? (
                filteredWorkouts.map(workout => (
                  <Card key={workout.id} className="overflow-hidden">
                    <div className="h-3 bg-military-navy" />
                    <CardHeader className="pb-2">
                      <CardTitle>{workout.name}</CardTitle>
                      <CardDescription>
                        {workout.category} • {workout.level}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="text-sm">
                          <span className="font-medium">Duration:</span> {workout.duration}
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">Frequency:</span> {workout.workoutsPerWeek}x per week
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          {workout.description}
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">View Details</Button>
                      <Button>Start Plan</Button>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="col-span-full text-center py-10">
                  <p className="text-muted-foreground">No workouts found matching your search.</p>
                  <Button variant="link" onClick={() => setSearchTerm('')}>
                    Clear search
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Workout History</CardTitle>
                <CardDescription>View and track your past workouts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-6">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>View Calendar</span>
                  </Button>
                  <div className="text-sm text-muted-foreground">
                    Showing last 30 days
                  </div>
                </div>
                <p className="text-center py-10 text-muted-foreground">
                  Your completed workouts will appear here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="custom">
            <Card>
              <CardHeader>
                <CardTitle>My Custom Routines</CardTitle>
                <CardDescription>Create and manage your personalized workout routines</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-10">
                  <p className="text-muted-foreground mb-4">
                    You haven't created any custom routines yet.
                  </p>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create New Routine
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
