
import { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { useToast } from "@/hooks/use-toast";

export default function AdminSettings() {
  const { toast } = useToast();
  
  const [settings, setSettings] = useState({
    siteName: 'Military Career Prep',
    contactEmail: 'admin@militarycareerprep.com',
    allowRegistration: true,
    enableNotifications: true,
    maintenanceMode: false,
    analyticsEnabled: true,
    autoApproveContent: false,
    maxUploadSize: 5,
  });

  const handleSaveGeneral = () => {
    toast({
      title: "Settings Saved",
      description: "General settings have been updated successfully.",
    });
  };

  const handleSaveFeatures = () => {
    toast({
      title: "Features Updated",
      description: "Feature settings have been updated successfully.",
    });
  };

  const handleResetSettings = () => {
    toast({
      title: "Settings Reset",
      description: "All settings have been reset to defaults.",
    });
  };

  const handleToggle = (setting: keyof typeof settings) => {
    setSettings({
      ...settings,
      [setting]: !settings[setting]
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, setting: keyof typeof settings) => {
    const value = e.target.type === 'number' ? Number(e.target.value) : e.target.value;
    
    setSettings({
      ...settings,
      [setting]: value
    });
  };

  return (
    <AdminLayout title="Settings">
      <div className="grid grid-cols-1 gap-6">
        {/* General Settings */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-military-navy mb-6">General Settings</h2>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Site Name
                </label>
                <Input 
                  value={settings.siteName} 
                  onChange={(e) => handleInputChange(e, 'siteName')}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Email
                </label>
                <Input 
                  type="email" 
                  value={settings.contactEmail} 
                  onChange={(e) => handleInputChange(e, 'contactEmail')}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Max Upload Size (MB)
              </label>
              <Input 
                type="number" 
                value={settings.maxUploadSize} 
                onChange={(e) => handleInputChange(e, 'maxUploadSize')}
                className="w-32"
              />
            </div>
          </div>
          
          <div className="mt-6">
            <Button onClick={handleSaveGeneral}>
              Save Changes
            </Button>
          </div>
        </Card>
        
        {/* Feature Settings */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-military-navy mb-6">Feature Settings</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Allow Registration</p>
                <p className="text-sm text-gray-500">Allow new users to register</p>
              </div>
              <Switch 
                checked={settings.allowRegistration} 
                onCheckedChange={() => handleToggle('allowRegistration')}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Enable Notifications</p>
                <p className="text-sm text-gray-500">Send email notifications</p>
              </div>
              <Switch 
                checked={settings.enableNotifications} 
                onCheckedChange={() => handleToggle('enableNotifications')}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Maintenance Mode</p>
                <p className="text-sm text-gray-500">Put site in maintenance mode</p>
              </div>
              <Switch 
                checked={settings.maintenanceMode} 
                onCheckedChange={() => handleToggle('maintenanceMode')}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Analytics</p>
                <p className="text-sm text-gray-500">Enable usage analytics</p>
              </div>
              <Switch 
                checked={settings.analyticsEnabled} 
                onCheckedChange={() => handleToggle('analyticsEnabled')}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Auto-Approve Content</p>
                <p className="text-sm text-gray-500">Automatically approve new content</p>
              </div>
              <Switch 
                checked={settings.autoApproveContent} 
                onCheckedChange={() => handleToggle('autoApproveContent')}
              />
            </div>
          </div>
          
          <div className="mt-6 flex items-center space-x-4">
            <Button onClick={handleSaveFeatures}>
              Save Changes
            </Button>
            <Button 
              variant="outline" 
              onClick={handleResetSettings}
              className="text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              Reset to Defaults
            </Button>
          </div>
        </Card>
      </div>
    </AdminLayout>
  );
}
