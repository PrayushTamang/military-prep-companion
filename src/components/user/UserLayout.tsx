
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  User, 
  Dumbbell, 
  Apple, 
  LineChart, 
  ChevronLeft, 
  ChevronRight, 
  LogOut,
  Bell
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserLayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function UserLayout({ children, title }: UserLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const { toast } = useToast();
  
  // Mock notification count
  const notificationCount = 3;

  const navItems = [
    { path: '/dashboard', icon: <LayoutDashboard />, label: 'Dashboard' },
    { path: '/dashboard/profile', icon: <User />, label: 'Profile' },
    { path: '/dashboard/workouts', icon: <Dumbbell />, label: 'Workouts' },
    { path: '/dashboard/nutrition', icon: <Apple />, label: 'Nutrition' },
    { path: '/dashboard/progress', icon: <LineChart />, label: 'Progress' },
  ];

  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    // Redirect to home page would go here in a real app
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside 
        className={cn(
          "bg-military-olive/90 text-white transition-all duration-300 flex flex-col",
          collapsed ? "w-16" : "w-64"
        )}
      >
        <div className="p-4 border-b border-military-olive/20 flex justify-between items-center">
          {!collapsed && <h2 className="font-bold text-xl">MyFitness</h2>}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setCollapsed(!collapsed)}
            className="text-white hover:bg-military-olive/50"
          >
            {collapsed ? <ChevronRight /> : <ChevronLeft />}
          </Button>
        </div>
        
        {!collapsed && (
          <div className="p-4 border-b border-military-olive/20">
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder.svg" alt="User" />
                <AvatarFallback className="bg-military-navy text-military-sand">JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">John Doe</p>
                <p className="text-xs text-military-sand/80">Premium Member</p>
              </div>
            </div>
          </div>
        )}
        
        <nav className="flex-1 py-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path}
                  className={cn(
                    "flex items-center px-4 py-3 hover:bg-military-olive/80 transition-colors",
                    location.pathname === item.path ? "bg-military-olive/50" : "",
                    collapsed ? "justify-center" : "justify-start"
                  )}
                >
                  <span className="text-military-sand">{item.icon}</span>
                  {!collapsed && <span className="ml-3">{item.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-4 border-t border-military-olive/20">
          <Button 
            variant="ghost" 
            className={cn(
              "text-white hover:bg-military-olive/50 w-full",
              collapsed ? "justify-center" : "justify-start"
            )}
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5 text-military-sand" />
            {!collapsed && <span className="ml-3">Logout</span>}
          </Button>
        </div>
      </aside>
      
      {/* Main content */}
      <main className="flex-1 overflow-x-hidden">
        <header className="bg-white border-b px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-military-navy">{title}</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Button variant="ghost" size="icon" className="text-military-navy">
                <Bell />
                {notificationCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-military-navy">
                    {notificationCount}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </header>
        
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
