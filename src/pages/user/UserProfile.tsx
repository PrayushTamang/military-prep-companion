
import UserLayout from '@/components/user/UserLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

export default function UserProfile() {
  const { toast } = useToast();
  
  const handleSaveProfile = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile information has been saved successfully.",
    });
  };
  
  const handleChangePassword = () => {
    toast({
      title: "Password Changed",
      description: "Your password has been updated successfully.",
    });
  };
  
  return (
    <UserLayout title="My Profile">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>
              Update your account details and personal information.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder.svg" alt="User" />
                <AvatarFallback className="bg-military-navy text-military-sand text-2xl">JD</AvatarFallback>
              </Avatar>
              <div className="space-y-1.5">
                <h3 className="font-semibold text-lg">Profile Picture</h3>
                <p className="text-sm text-muted-foreground">
                  Upload a new profile picture or remove the current one.
                </p>
                <div className="flex gap-2 mt-2">
                  <Button variant="outline" size="sm">Upload New</Button>
                  <Button variant="outline" size="sm">Remove</Button>
                </div>
              </div>
            </div>
            
            <Tabs defaultValue="personal">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="account">Account Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="personal" className="space-y-4 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                    <Input id="firstName" defaultValue="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                    <Input id="lastName" defaultValue="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                  <Input id="phone" type="tel" defaultValue="(555) 123-4567" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="height" className="text-sm font-medium">Height (cm)</label>
                    <Input id="height" type="number" defaultValue="180" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="weight" className="text-sm font-medium">Weight (kg)</label>
                    <Input id="weight" type="number" defaultValue="75" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="age" className="text-sm font-medium">Age</label>
                    <Input id="age" type="number" defaultValue="28" />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="account" className="space-y-4 mt-6">
                <div className="space-y-2">
                  <label htmlFor="username" className="text-sm font-medium">Username</label>
                  <Input id="username" defaultValue="johndoe" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="currentPassword" className="text-sm font-medium">Current Password</label>
                  <Input id="currentPassword" type="password" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="newPassword" className="text-sm font-medium">New Password</label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="confirmPassword" className="text-sm font-medium">Confirm Password</label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                </div>
                
                <Button onClick={handleChangePassword}>Change Password</Button>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSaveProfile}>Save Changes</Button>
          </CardFooter>
        </Card>
      </div>
    </UserLayout>
  );
}
