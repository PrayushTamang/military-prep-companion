
import { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Plus, Edit, Trash2, Eye, FileText, Book, Dumbbell, Compass } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

type ContentItem = {
  id: number;
  title: string;
  type: 'article' | 'guide' | 'exercise' | 'career';
  author: string;
  dateCreated: string;
  status: 'published' | 'draft';
};

export default function AdminContent() {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<string>('all');
  
  const [contentItems] = useState<ContentItem[]>([
    { id: 1, title: 'Basic Training Guide', type: 'guide', author: 'Sarah Johnson', dateCreated: '2023-05-12', status: 'published' },
    { id: 2, title: 'Fitness Requirements by Branch', type: 'article', author: 'Michael Brown', dateCreated: '2023-06-20', status: 'published' },
    { id: 3, title: 'Running Form Techniques', type: 'exercise', author: 'Emily Wilson', dateCreated: '2023-02-15', status: 'draft' },
    { id: 4, title: 'Military Intelligence Career Path', type: 'career', author: 'David Thompson', dateCreated: '2023-07-04', status: 'published' },
    { id: 5, title: 'Pushup Progression Program', type: 'exercise', author: 'Sarah Johnson', dateCreated: '2023-08-01', status: 'published' },
  ]);

  const typeIcons = {
    article: <FileText className="h-4 w-4" />,
    guide: <Book className="h-4 w-4" />,
    exercise: <Dumbbell className="h-4 w-4" />,
    career: <Compass className="h-4 w-4" />
  };

  const filteredItems = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.author.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeTab === 'all') return matchesSearch;
    return matchesSearch && item.type === activeTab;
  });

  const handleAddContent = () => {
    toast({
      title: "Feature not implemented",
      description: "This would open a form to add new content in a real application.",
    });
  };

  const handleEditContent = (contentId: number) => {
    toast({
      title: "Edit Content",
      description: `Editing content with ID: ${contentId}`,
    });
  };

  const handleDeleteContent = (contentId: number) => {
    toast({
      title: "Delete Content",
      description: `Would delete content with ID: ${contentId} in a real application.`,
    });
  };

  const handlePreviewContent = (contentId: number) => {
    toast({
      title: "Preview Content",
      description: `Previewing content with ID: ${contentId}`,
    });
  };

  return (
    <AdminLayout title="Content Management">
      <Card className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search content..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button onClick={handleAddContent}>
            <Plus className="h-4 w-4 mr-2" />
            Add Content
          </Button>
        </div>
        
        <div className="flex space-x-2 mb-6 overflow-x-auto">
          <Button 
            variant={activeTab === 'all' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setActiveTab('all')}
          >
            All
          </Button>
          <Button 
            variant={activeTab === 'article' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setActiveTab('article')}
          >
            <FileText className="h-4 w-4 mr-2" />
            Articles
          </Button>
          <Button 
            variant={activeTab === 'guide' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setActiveTab('guide')}
          >
            <Book className="h-4 w-4 mr-2" />
            Guides
          </Button>
          <Button 
            variant={activeTab === 'exercise' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setActiveTab('exercise')}
          >
            <Dumbbell className="h-4 w-4 mr-2" />
            Exercises
          </Button>
          <Button 
            variant={activeTab === 'career' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setActiveTab('career')}
          >
            <Compass className="h-4 w-4 mr-2" />
            Careers
          </Button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-3 px-4 font-semibold text-gray-600">Title</th>
                <th className="py-3 px-4 font-semibold text-gray-600">Type</th>
                <th className="py-3 px-4 font-semibold text-gray-600">Author</th>
                <th className="py-3 px-4 font-semibold text-gray-600">Created</th>
                <th className="py-3 px-4 font-semibold text-gray-600">Status</th>
                <th className="py-3 px-4 font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{item.title}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      {typeIcons[item.type]}
                      <span className="ml-2 capitalize">{item.type}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">{item.author}</td>
                  <td className="py-3 px-4">{item.dateCreated}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      item.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => handlePreviewContent(item.id)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => handleEditContent(item.id)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => handleDeleteContent(item.id)}
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
