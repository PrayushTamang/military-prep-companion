
import { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Plus, Edit, Trash2, Check, X } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  joinDate: string;
};

export default function AdminUsers() {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  
  const [users] = useState<User[]>([
    { id: 1, name: 'John Smith', email: 'john.smith@example.com', role: 'User', status: 'active', joinDate: '2023-05-12' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah.j@example.com', role: 'Admin', status: 'active', joinDate: '2023-01-08' },
    { id: 3, name: 'Michael Brown', email: 'michael.b@example.com', role: 'User', status: 'active', joinDate: '2023-06-20' },
    { id: 4, name: 'Emily Wilson', email: 'emily.w@example.com', role: 'User', status: 'inactive', joinDate: '2023-02-15' },
    { id: 5, name: 'David Thompson', email: 'david.t@example.com', role: 'User', status: 'active', joinDate: '2023-07-04' },
  ]);

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddUser = () => {
    toast({
      title: "Feature not implemented",
      description: "This would open a form to add a new user in a real application.",
    });
  };

  const handleEditUser = (userId: number) => {
    toast({
      title: "Edit User",
      description: `Editing user with ID: ${userId}`,
    });
  };

  const handleDeleteUser = (userId: number) => {
    toast({
      title: "Delete User",
      description: `Would delete user with ID: ${userId} in a real application.`,
    });
  };

  const handleToggleStatus = (userId: number, currentStatus: string) => {
    const newStatus = currentStatus === 'active' ? 'inactive' : 'active';
    toast({
      title: "Status Changed",
      description: `User ${userId} status changed to ${newStatus}`,
    });
  };

  return (
    <AdminLayout title="User Management">
      <Card className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search users..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button onClick={handleAddUser}>
            <Plus className="h-4 w-4 mr-2" />
            Add User
          </Button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-3 px-4 font-semibold text-gray-600">Name</th>
                <th className="py-3 px-4 font-semibold text-gray-600">Email</th>
                <th className="py-3 px-4 font-semibold text-gray-600">Role</th>
                <th className="py-3 px-4 font-semibold text-gray-600">Status</th>
                <th className="py-3 px-4 font-semibold text-gray-600">Join Date</th>
                <th className="py-3 px-4 font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{user.name}</td>
                  <td className="py-3 px-4">{user.email}</td>
                  <td className="py-3 px-4">{user.role}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">{user.joinDate}</td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => handleToggleStatus(user.id, user.status)}
                      >
                        {user.status === 'active' ? <X className="h-4 w-4" /> : <Check className="h-4 w-4" />}
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => handleEditUser(user.id)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </AdminLayout>
  );
}
