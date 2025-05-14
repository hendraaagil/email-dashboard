import { useState } from 'react'
import { MoreHorizontal, Plus, RefreshCw, Trash } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function MailboxManagement() {
  const [addMailboxOpen, setAddMailboxOpen] = useState(false)

  const mailboxes = [
    {
      email: 'info@example.com',
      domain: 'example.com',
      status: 'active',
      storage: '2.4 GB / 10 GB',
      createdOn: '2023-05-10',
    },
    {
      email: 'support@example.com',
      domain: 'example.com',
      status: 'active',
      storage: '1.2 GB / 10 GB',
      createdOn: '2023-06-15',
    },
    {
      email: 'sales@example.com',
      domain: 'example.com',
      status: 'suspended',
      storage: '8.7 GB / 10 GB',
      createdOn: '2023-07-20',
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Mailboxes</h2>
          <p className="text-muted-foreground">
            Manage your email mailboxes and accounts.
          </p>
        </div>
        <Dialog open={addMailboxOpen} onOpenChange={setAddMailboxOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Mailbox
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create a new mailbox</DialogTitle>
              <DialogDescription>
                Add a new email mailbox to your domain.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input
                  id="username"
                  placeholder="info"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="domain" className="text-right">
                  Domain
                </Label>
                <Select defaultValue="example.com">
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select domain" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="example.com">example.com</SelectItem>
                    <SelectItem value="blog.example.com">
                      blog.example.com
                    </SelectItem>
                    <SelectItem value="dev.example.com">
                      dev.example.com
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="password" className="text-right">
                  Password
                </Label>
                <Input id="password" type="password" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="storage" className="text-right">
                  Storage
                </Label>
                <Select defaultValue="10">
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select storage size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5 GB</SelectItem>
                    <SelectItem value="10">10 GB</SelectItem>
                    <SelectItem value="25">25 GB</SelectItem>
                    <SelectItem value="50">50 GB</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setAddMailboxOpen(false)}
              >
                Cancel
              </Button>
              <Button onClick={() => setAddMailboxOpen(false)}>
                Create Mailbox
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Email Mailboxes</CardTitle>
          <CardDescription>
            Manage your email accounts across all domains.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Email Address</TableHead>
                <TableHead>Domain</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Storage</TableHead>
                <TableHead>Created On</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mailboxes.map((mailbox) => (
                <TableRow key={mailbox.email}>
                  <TableCell className="font-medium">{mailbox.email}</TableCell>
                  <TableCell>{mailbox.domain}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        mailbox.status === 'active' ? 'default' : 'outline'
                      }
                    >
                      {mailbox.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{mailbox.storage}</TableCell>
                  <TableCell>{mailbox.createdOn}</TableCell>
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
                        <DropdownMenuItem>
                          <RefreshCw className="mr-2 h-4 w-4" />
                          <span>Reset Password</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <RefreshCw className="mr-2 h-4 w-4" />
                          <span>Upgrade Storage</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          {mailbox.status === 'active' ? (
                            <span>Suspend Mailbox</span>
                          ) : (
                            <span>Activate Mailbox</span>
                          )}
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Trash className="mr-2 h-4 w-4" />
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

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Email Forwarding</CardTitle>
            <CardDescription>
              Configure email forwarding rules for your domains.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-md border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">contact@example.com</h3>
                    <p className="text-sm text-muted-foreground">
                      Forwards to: support@example.com
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </div>
              </div>
              <div className="rounded-md border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">hello@example.com</h3>
                    <p className="text-sm text-muted-foreground">
                      Forwards to: info@example.com
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Add Forwarding Rule
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Catch-All Email</CardTitle>
            <CardDescription>
              Configure catch-all email settings for your domains.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-md border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">example.com</h3>
                    <p className="text-sm text-muted-foreground">
                      Catch-all forwards to: info@example.com
                    </p>
                  </div>
                  <Badge>Active</Badge>
                </div>
              </div>
              <div className="rounded-md border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">blog.example.com</h3>
                    <p className="text-sm text-muted-foreground">
                      No catch-all configured
                    </p>
                  </div>
                  <Badge variant="outline">Inactive</Badge>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Configure Catch-All
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
