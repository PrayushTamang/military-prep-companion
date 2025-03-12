
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Settings, 
  ChevronLeft, 
  ChevronRight, 
  LogOut 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function AdminLayout({ children, title }: AdminLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const { toast } = useToast();

  const navItems = [
    { path: '/admin', icon: <LayoutDashboard />, label: 'Dashboard' },
    { path: '/admin/users', icon: <Users />, label: 'Users' },
    { path: '/admin/content', icon: <FileText />, label: 'Content' },
    { path: '/admin/settings', icon: <Settings />, label: 'Settings' },
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
          "bg-military-navy text-white transition-all duration-300 flex flex-col",
          collapsed ? "w-16" : "w-64"
        )}
      >
        <div className="p-4 border-b border-military-navy/20 flex justify-between items-center">
          {!collapsed && <h2 className="font-bold text-xl">Admin</h2>}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setCollapsed(!collapsed)}
            className="text-white hover:bg-military-navy/50"
          >
            {collapsed ? <ChevronRight /> : <ChevronLeft />}
          </Button>
        </div>
        
        <nav className="flex-1 py-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path}
                  className={cn(
                    "flex items-center px-4 py-3 hover:bg-military-navy/80 transition-colors",
                    location.pathname === item.path ? "bg-military-navy/50" : "",
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
        
        <div className="p-4 border-t border-military-navy/20">
          <Button 
            variant="ghost" 
            className={cn(
              "text-white hover:bg-military-navy/50 w-full",
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
        <header className="bg-white border-b px-6 py-4">
          <h1 className="text-2xl font-semibold text-military-navy">{title}</h1>
        </header>
        
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
