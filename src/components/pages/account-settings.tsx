'use client'

import { useState } from 'react'
import { Bell, CreditCard, Key, Lock, User } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Switch } from '@/components/ui/switch'
import { Separator } from '@/components/ui/separator'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function AccountSettings() {
  const [saveSuccess, setSaveSuccess] = useState(false)

  const handleSave = () => {
    setSaveSuccess(true)
    setTimeout(() => setSaveSuccess(false), 3000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Account Settings</h2>
        <p className="text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile">
            <User className="mr-2 h-4 w-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="security">
            <Lock className="mr-2 h-4 w-4" />
            Security
          </TabsTrigger>
          <TabsTrigger value="billing">
            <CreditCard className="mr-2 h-4 w-4" />
            Billing
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Update your account profile information.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="Admin User" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="admin@example.com"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" defaultValue="Acme Inc." />
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="mb-4 text-lg font-medium">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      defaultValue="+1 (555) 123-4567"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" defaultValue="123 Main St" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" defaultValue="San Francisco" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="state">State</Label>
                      <Input id="state" defaultValue="CA" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="zip">Zip Code</Label>
                      <Input id="zip" defaultValue="94105" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="country">Country</Label>
                    <Select defaultValue="us">
                      <SelectTrigger>
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave}>
                {saveSuccess ? 'Saved!' : 'Save Changes'}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="security" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>
                Manage your account security and authentication.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Change Password</h3>
                <div className="grid gap-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
                <Button>Update Password</Button>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">
                  Two-Factor Authentication
                </h3>
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <div className="font-medium">Authenticator App</div>
                    <div className="text-sm text-muted-foreground">
                      Use an authenticator app to generate one-time codes.
                    </div>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <div className="font-medium">Text Message</div>
                    <div className="text-sm text-muted-foreground">
                      Receive codes via SMS to your phone.
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">API Keys</h3>
                <div className="rounded-lg border">
                  <div className="flex items-center justify-between p-4">
                    <div className="space-y-0.5">
                      <div className="font-medium">Production API Key</div>
                      <div className="text-sm text-muted-foreground">
                        Created on May 10, 2023
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Key className="mr-2 h-4 w-4" />
                        Show Key
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-destructive"
                      >
                        Revoke
                      </Button>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between p-4">
                    <div className="space-y-0.5">
                      <div className="font-medium">Development API Key</div>
                      <div className="text-sm text-muted-foreground">
                        Created on June 15, 2023
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Key className="mr-2 h-4 w-4" />
                        Show Key
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-destructive"
                      >
                        Revoke
                      </Button>
                    </div>
                  </div>
                </div>
                <Button variant="outline">
                  <Key className="mr-2 h-4 w-4" />
                  Generate New API Key
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="billing" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Billing Information</CardTitle>
              <CardDescription>
                Manage your billing information and subscription.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Current Plan</h3>
                    <p className="text-sm text-muted-foreground">
                      Professional Plan - $49/month
                    </p>
                  </div>
                  <Button variant="outline">Change Plan</Button>
                </div>
                <div className="mt-4 text-sm">
                  <div className="flex justify-between py-1">
                    <span>Billing cycle</span>
                    <span>Monthly</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Next billing date</span>
                    <span>July 1, 2023</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Payment Method</h3>
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-md bg-muted p-2">
                      <CreditCard className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-medium">Visa ending in 4242</div>
                      <div className="text-sm text-muted-foreground">
                        Expires 12/2025
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </div>
                <Button variant="outline">Add Payment Method</Button>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Billing History</h3>
                <div className="rounded-lg border">
                  <div className="grid grid-cols-4 gap-4 p-4 text-sm font-medium">
                    <div>Date</div>
                    <div>Description</div>
                    <div>Amount</div>
                    <div className="text-right">Receipt</div>
                  </div>
                  <Separator />
                  <div className="grid grid-cols-4 gap-4 p-4 text-sm">
                    <div>Jun 1, 2023</div>
                    <div>Professional Plan - Monthly</div>
                    <div>$49.00</div>
                    <div className="text-right">
                      <Button variant="link" size="sm" className="h-auto p-0">
                        Download
                      </Button>
                    </div>
                  </div>
                  <Separator />
                  <div className="grid grid-cols-4 gap-4 p-4 text-sm">
                    <div>May 1, 2023</div>
                    <div>Professional Plan - Monthly</div>
                    <div>$49.00</div>
                    <div className="text-right">
                      <Button variant="link" size="sm" className="h-auto p-0">
                        Download
                      </Button>
                    </div>
                  </div>
                  <Separator />
                  <div className="grid grid-cols-4 gap-4 p-4 text-sm">
                    <div>Apr 1, 2023</div>
                    <div>Professional Plan - Monthly</div>
                    <div>$49.00</div>
                    <div className="text-right">
                      <Button variant="link" size="sm" className="h-auto p-0">
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="notifications" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>
                Configure how and when you receive notifications.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Email Notifications</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-marketing">Marketing emails</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive emails about new products, features, and more.
                      </p>
                    </div>
                    <Switch id="email-marketing" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-security">Security alerts</Label>
                      <p className="text-sm text-muted-foreground">
                        Get notified about security alerts and account activity.
                      </p>
                    </div>
                    <Switch id="email-security" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-updates">Account updates</Label>
                      <p className="text-sm text-muted-foreground">
                        Get notified about account updates and changes.
                      </p>
                    </div>
                    <Switch id="email-updates" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-billing">Billing updates</Label>
                      <p className="text-sm text-muted-foreground">
                        Get notified about billing and subscription changes.
                      </p>
                    </div>
                    <Switch id="email-billing" defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">System Notifications</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="browser-notifications">
                        Browser notifications
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Show browser notifications for important alerts.
                      </p>
                    </div>
                    <Switch id="browser-notifications" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="sms-notifications">
                        SMS notifications
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Receive text messages for critical updates.
                      </p>
                    </div>
                    <Switch id="sms-notifications" />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Notification Frequency</h3>
                <div className="grid gap-2">
                  <Label htmlFor="notification-frequency">
                    Email digest frequency
                  </Label>
                  <Select defaultValue="daily">
                    <SelectTrigger>
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="realtime">Real-time</SelectItem>
                      <SelectItem value="daily">Daily digest</SelectItem>
                      <SelectItem value="weekly">Weekly digest</SelectItem>
                      <SelectItem value="never">Never</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-muted-foreground">
                    Choose how often you want to receive email digests.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave}>
                {saveSuccess ? 'Saved!' : 'Save Preferences'}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
