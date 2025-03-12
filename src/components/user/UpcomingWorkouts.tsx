
import { Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Sample workout data
const upcomingWorkouts = [
  {
    id: 1,
    name: "Upper Body Strength",
    date: "Today",
    time: "5:30 PM",
    duration: "45 min",
    instructor: "Mike Johnson"
  },
  {
    id: 2,
    name: "HIIT Cardio",
    date: "Tomorrow",
    time: "6:00 AM",
    duration: "30 min",
    instructor: "Sarah Wilson"
  },
  {
    id: 3,
    name: "Leg Day",
    date: "Wed, Jun 12",
    time: "7:00 PM",
    duration: "60 min",
    instructor: "David Chen"
  }
];

export default function UpcomingWorkouts() {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle>Upcoming Workouts</CardTitle>
          <CardDescription>Your scheduled workouts for the week</CardDescription>
        </div>
        <Button variant="outline" size="sm" className="text-xs">
          View Calendar
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingWorkouts.map((workout) => (
            <div 
              key={workout.id} 
              className="flex items-start gap-4 p-3 rounded-lg border hover:bg-gray-50 transition-colors"
            >
              <div className="bg-military-navy/10 rounded-lg p-2 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-military-navy" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium">{workout.name}</h4>
                <div className="flex flex-col sm:flex-row sm:gap-4 text-sm text-gray-500">
                  <span>{workout.date} at {workout.time}</span>
                  <span>{workout.duration}</span>
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  Instructor: {workout.instructor}
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-xs">
                Details
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
