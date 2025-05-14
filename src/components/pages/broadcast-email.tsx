import { useState } from 'react'
import {
  Calendar,
  Clock,
  MoreHorizontal,
  Plus,
  Send,
  Users,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function BroadcastEmail() {
  const [createCampaignOpen, setCreateCampaignOpen] = useState(false)

  const campaigns = [
    {
      name: 'May Newsletter',
      status: 'sent',
      recipients: 1250,
      opens: '45%',
      clicks: '12%',
      sentOn: '2023-05-10',
    },
    {
      name: 'Product Launch',
      status: 'draft',
      recipients: 0,
      opens: '-',
      clicks: '-',
      sentOn: '-',
    },
    {
      name: 'Summer Sale',
      status: 'scheduled',
      recipients: 1500,
      opens: '-',
      clicks: '-',
      sentOn: '2023-07-15 (scheduled)',
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Broadcast Email</h2>
          <p className="text-muted-foreground">
            Create and manage email campaigns.
          </p>
        </div>
        <Dialog open={createCampaignOpen} onOpenChange={setCreateCampaignOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create Campaign
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Create a new email campaign</DialogTitle>
              <DialogDescription>
                Set up your email campaign details and content.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="campaign-name">Campaign Name</Label>
                <Input id="campaign-name" placeholder="Summer Newsletter" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="subject">Email Subject</Label>
                <Input
                  id="subject"
                  placeholder="Your Summer Newsletter is here!"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="sender">Sender</Label>
                <Select defaultValue="info@example.com">
                  <SelectTrigger>
                    <SelectValue placeholder="Select sender email" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="info@example.com">
                      info@example.com
                    </SelectItem>
                    <SelectItem value="support@example.com">
                      support@example.com
                    </SelectItem>
                    <SelectItem value="sales@example.com">
                      sales@example.com
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="recipients">Recipients</Label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select recipient list" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Subscribers (1,500)</SelectItem>
                    <SelectItem value="active">Active Users (950)</SelectItem>
                    <SelectItem value="new">New Subscribers (250)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="content">Email Content</Label>
                <Textarea
                  id="content"
                  placeholder="Write your email content here..."
                  className="min-h-[150px]"
                />
              </div>
            </div>
            <DialogFooter className="flex flex-col sm:flex-row sm:justify-between sm:space-x-0">
              <Button
                variant="outline"
                onClick={() => setCreateCampaignOpen(false)}
              >
                Save as Draft
              </Button>
              <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
                <Button
                  variant="outline"
                  onClick={() => setCreateCampaignOpen(false)}
                >
                  Schedule
                </Button>
                <Button onClick={() => setCreateCampaignOpen(false)}>
                  Send Now
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="campaigns" className="w-full">
        <TabsList>
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="subscribers">Subscribers</TabsTrigger>
        </TabsList>
        <TabsContent value="campaigns" className="mt-4">
          <Card>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Campaign</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Recipients</TableHead>
                    <TableHead>Opens</TableHead>
                    <TableHead>Clicks</TableHead>
                    <TableHead>Sent On</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {campaigns.map((campaign) => (
                    <TableRow key={campaign.name}>
                      <TableCell className="font-medium">
                        {campaign.name}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            campaign.status === 'sent'
                              ? 'default'
                              : campaign.status === 'scheduled'
                                ? 'secondary'
                                : 'outline'
                          }
                        >
                          {campaign.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{campaign.recipients}</TableCell>
                      <TableCell>{campaign.opens}</TableCell>
                      <TableCell>{campaign.clicks}</TableCell>
                      <TableCell>{campaign.sentOn}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            {campaign.status === 'draft' && (
                              <>
                                <DropdownMenuItem>
                                  <Send className="mr-2 h-4 w-4" />
                                  <span>Send Now</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Calendar className="mr-2 h-4 w-4" />
                                  <span>Schedule</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <span>Edit</span>
                                </DropdownMenuItem>
                              </>
                            )}
                            {campaign.status === 'scheduled' && (
                              <>
                                <DropdownMenuItem>
                                  <Send className="mr-2 h-4 w-4" />
                                  <span>Send Now</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Calendar className="mr-2 h-4 w-4" />
                                  <span>Reschedule</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <span>Edit</span>
                                </DropdownMenuItem>
                              </>
                            )}
                            {campaign.status === 'sent' && (
                              <>
                                <DropdownMenuItem>
                                  <span>View Report</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <span>Duplicate</span>
                                </DropdownMenuItem>
                              </>
                            )}
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">
                              <span>Delete</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="templates" className="mt-4">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Welcome Email</CardTitle>
                <CardDescription>For new subscribers</CardDescription>
              </CardHeader>
              <CardContent className="text-sm">
                <div className="flex h-[120px] items-center justify-center rounded-md border border-dashed">
                  Email Template Preview
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" size="sm">
                  Preview
                </Button>
                <Button size="sm">Use Template</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Monthly Newsletter</CardTitle>
                <CardDescription>Standard newsletter layout</CardDescription>
              </CardHeader>
              <CardContent className="text-sm">
                <div className="flex h-[120px] items-center justify-center rounded-md border border-dashed">
                  Email Template Preview
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" size="sm">
                  Preview
                </Button>
                <Button size="sm">Use Template</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Product Announcement</CardTitle>
                <CardDescription>For product launches</CardDescription>
              </CardHeader>
              <CardContent className="text-sm">
                <div className="flex h-[120px] items-center justify-center rounded-md border border-dashed">
                  Email Template Preview
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" size="sm">
                  Preview
                </Button>
                <Button size="sm">Use Template</Button>
              </CardFooter>
            </Card>
            <Card className="border-dashed">
              <CardHeader className="pb-2">
                <CardTitle>Create New Template</CardTitle>
                <CardDescription>
                  Design a custom email template
                </CardDescription>
              </CardHeader>
              <CardContent className="flex h-[120px] items-center justify-center">
                <Button variant="ghost">
                  <Plus className="mr-2 h-4 w-4" />
                  Create Template
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="subscribers" className="mt-4">
          <Card>
            <CardHeader className="flex flex-row items-center">
              <div className="flex-1">
                <CardTitle>Email Subscribers</CardTitle>
                <CardDescription>
                  Manage your email subscriber lists.
                </CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Search subscribers..."
                  className="w-[250px]"
                />
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Subscriber
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      1,500 Total Subscribers
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      250 New this month
                    </span>
                  </div>
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by list" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Subscribers</SelectItem>
                    <SelectItem value="active">Active Users</SelectItem>
                    <SelectItem value="new">New Subscribers</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Email</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Subscribed On</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      john.doe@example.com
                    </TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell>
                      <Badge>Active</Badge>
                    </TableCell>
                    <TableCell>2023-01-15</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      jane.smith@example.com
                    </TableCell>
                    <TableCell>Jane Smith</TableCell>
                    <TableCell>
                      <Badge>Active</Badge>
                    </TableCell>
                    <TableCell>2023-02-20</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      robert.johnson@example.com
                    </TableCell>
                    <TableCell>Robert Johnson</TableCell>
                    <TableCell>
                      <Badge variant="outline">Unsubscribed</Badge>
                    </TableCell>
                    <TableCell>2023-03-10</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
