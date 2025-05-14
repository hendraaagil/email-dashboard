import { useState } from 'react'
import {
  Check,
  Copy,
  ExternalLink,
  MoreHorizontal,
  Plus,
  RefreshCw,
  Trash,
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

export default function DomainManagement() {
  const [addDomainOpen, setAddDomainOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const domains = [
    {
      name: 'example.com',
      status: 'active',
      type: 'apex',
      verified: true,
      dns: 'configured',
      addedOn: '2023-05-10',
    },
    {
      name: 'blog.example.com',
      status: 'active',
      type: 'subdomain',
      verified: true,
      dns: 'configured',
      addedOn: '2023-06-15',
    },
    {
      name: 'dev.example.com',
      status: 'pending',
      type: 'subdomain',
      verified: false,
      dns: 'pending',
      addedOn: '2023-07-20',
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Domains</h2>
          <p className="text-muted-foreground">
            Manage your custom domains and DNS settings.
          </p>
        </div>
        <Dialog open={addDomainOpen} onOpenChange={setAddDomainOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Domain
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add a new domain</DialogTitle>
              <DialogDescription>
                Enter the domain you want to add to your project.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="domain">Domain</Label>
                <Input id="domain" placeholder="example.com" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setAddDomainOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setAddDomainOpen(false)}>
                Add Domain
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All Domains</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-4">
          <Card>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Domain</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>DNS</TableHead>
                    <TableHead>Added On</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {domains.map((domain) => (
                    <TableRow key={domain.name}>
                      <TableCell className="font-medium">
                        {domain.name}
                      </TableCell>
                      <TableCell>{domain.type}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            domain.status === 'active' ? 'default' : 'outline'
                          }
                        >
                          {domain.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            domain.dns === 'configured' ? 'default' : 'outline'
                          }
                        >
                          {domain.dns}
                        </Badge>
                      </TableCell>
                      <TableCell>{domain.addedOn}</TableCell>
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
                              <ExternalLink className="mr-2 h-4 w-4" />
                              <span>Visit</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <RefreshCw className="mr-2 h-4 w-4" />
                              <span>Refresh DNS</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
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
        </TabsContent>
        <TabsContent value="active" className="mt-4">
          <Card>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Domain</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>DNS</TableHead>
                    <TableHead>Added On</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {domains
                    .filter((d) => d.status === 'active')
                    .map((domain) => (
                      <TableRow key={domain.name}>
                        <TableCell className="font-medium">
                          {domain.name}
                        </TableCell>
                        <TableCell>{domain.type}</TableCell>
                        <TableCell>
                          <Badge variant="default">{domain.status}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="default">{domain.dns}</Badge>
                        </TableCell>
                        <TableCell>{domain.addedOn}</TableCell>
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
                                <ExternalLink className="mr-2 h-4 w-4" />
                                <span>Visit</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <RefreshCw className="mr-2 h-4 w-4" />
                                <span>Refresh DNS</span>
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
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
        </TabsContent>
        <TabsContent value="pending" className="mt-4">
          <Card>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Domain</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>DNS</TableHead>
                    <TableHead>Added On</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {domains
                    .filter((d) => d.status === 'pending')
                    .map((domain) => (
                      <TableRow key={domain.name}>
                        <TableCell className="font-medium">
                          {domain.name}
                        </TableCell>
                        <TableCell>{domain.type}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{domain.status}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{domain.dns}</Badge>
                        </TableCell>
                        <TableCell>{domain.addedOn}</TableCell>
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
                                <span>Refresh DNS</span>
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
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
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>DNS Configuration</CardTitle>
          <CardDescription>
            Configure your DNS settings for dev.example.com
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-md border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">CNAME Record</h3>
                  <p className="text-sm text-muted-foreground">
                    Add this CNAME record to your DNS provider.
                  </p>
                </div>
                <Button variant="outline" size="sm" onClick={copyToClipboard}>
                  {copied ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-4 w-4" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="font-medium">Host</div>
                  <div className="mt-1">dev</div>
                </div>
                <div>
                  <div className="font-medium">Type</div>
                  <div className="mt-1">CNAME</div>
                </div>
                <div>
                  <div className="font-medium">Value</div>
                  <div className="mt-1">cname.vercel-dns.com</div>
                </div>
              </div>
            </div>
            <div className="rounded-md border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">TXT Record</h3>
                  <p className="text-sm text-muted-foreground">
                    Add this TXT record to verify domain ownership.
                  </p>
                </div>
                <Button variant="outline" size="sm" onClick={copyToClipboard}>
                  {copied ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-4 w-4" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="font-medium">Host</div>
                  <div className="mt-1">_vercel</div>
                </div>
                <div>
                  <div className="font-medium">Type</div>
                  <div className="mt-1">TXT</div>
                </div>
                <div>
                  <div className="font-medium">Value</div>
                  <div className="mt-1">vc-verification=example123456789</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="mr-2">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh DNS
          </Button>
          <Button>Verify Domain</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
