
import { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  FileText, 
  TrendingUp, 
  Activity,
  Calendar
} from 'lucide-react';

export default function AdminDashboard() {
  const [stats] = useState({
    totalUsers: 1250,
    activeUsers: 890,
    contentItems: 150,
    fitnessPlans: 45
  });

  const [recentActions] = useState([
    { id: 1, action: 'New user registered', time: '10 minutes ago', user: 'John Smith' },
    { id: 2, action: 'Content updated', time: '45 minutes ago', user: 'Admin' },
    { id: 3, action: 'New fitness plan created', time: '2 hours ago', user: 'Sarah Johnson' },
    { id: 4, action: 'Settings changed', time: '1 day ago', user: 'Admin' },
    { id: 5, action: 'User account deleted', time: '2 days ago', user: 'Admin' }
  ]);

  return (
    <AdminLayout title="Dashboard">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          icon={<Users className="h-8 w-8 text-military-olive" />}
          title="Total Users"
          value={stats.totalUsers}
          trend="+12% from last month"
        />
        <StatCard 
          icon={<Activity className="h-8 w-8 text-military-olive" />}
          title="Active Users"
          value={stats.activeUsers}
          trend="+8% from last month"
        />
        <StatCard 
          icon={<FileText className="h-8 w-8 text-military-olive" />}
          title="Content Items"
          value={stats.contentItems}
          trend="+5 new items"
        />
        <StatCard 
          icon={<TrendingUp className="h-8 w-8 text-military-olive" />}
          title="Fitness Plans"
          value={stats.fitnessPlans}
          trend="+3 this week"
        />
      </div>

      {/* Recent Activity */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-military-navy">Recent Activity</h2>
          <Button variant="outline" size="sm">View All</Button>
        </div>
        <div className="space-y-4">
          {recentActions.map((action) => (
            <div key={action.id} className="flex items-start p-4 bg-gray-50 rounded-md">
              <div className="mr-4 mt-1">
                <Calendar className="h-5 w-5 text-military-olive" />
              </div>
              <div>
                <p className="font-medium">{action.action}</p>
                <div className="flex text-sm text-gray-500 mt-1">
                  <span>{action.time}</span>
                  <span className="mx-2">•</span>
                  <span>{action.user}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </AdminLayout>
  );
}

// Simple stat card component
function StatCard({ 
  icon, 
  title, 
  value, 
  trend 
}: { 
  icon: React.ReactNode; 
  title: string; 
  value: number; 
  trend: string;
}) {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-500 mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-military-navy">{value.toLocaleString()}</h3>
          <p className="text-xs text-green-600 mt-2">{trend}</p>
        </div>
        <div>
          {icon}
        </div>
      </div>
    </Card>
  );
}
