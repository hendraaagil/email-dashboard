import { useState } from 'react'
import { AtSign, Globe, MessageSquare, Settings, User } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'

import DomainManagement from '@/components/pages/domain-management'
import MailboxManagement from '@/components/pages/mailbox-management'
import BroadcastEmail from '@/components/pages/broadcast-email'
import AccountSettings from '@/components/pages/account-settings'

export default function App() {
  const [activeTab, setActiveTab] = useState('domains')

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <div className="flex h-14 items-center px-4 group-data-[collapsible=icon]:px-0">
            <h1 className="text-lg font-semibold group-data-[collapsible=icon]:hidden">
              Dashboard
            </h1>
            <div className="hidden h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary group-data-[collapsible=icon]:flex">
              <Settings className="h-5 w-5" />
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Management</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={activeTab === 'domains'}
                    onClick={() => setActiveTab('domains')}
                    tooltip="Domains"
                  >
                    <button>
                      <Globe className="h-4 w-4" />
                      <span>Domains</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={activeTab === 'mailboxes'}
                    onClick={() => setActiveTab('mailboxes')}
                    tooltip="Mailboxes"
                  >
                    <button>
                      <AtSign className="h-4 w-4" />
                      <span>Mailboxes</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={activeTab === 'broadcast'}
                    onClick={() => setActiveTab('broadcast')}
                    tooltip="Broadcast Email"
                  >
                    <button>
                      <MessageSquare className="h-4 w-4" />
                      <span>Broadcast Email</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={activeTab === 'settings'}
                    onClick={() => setActiveTab('settings')}
                    tooltip="Account Settings"
                  >
                    <button>
                      <Settings className="h-4 w-4" />
                      <span>Account Settings</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <div className="p-4 group-data-[collapsible=icon]:p-0">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                <User className="h-5 w-5" />
              </div>
              <div className="group-data-[collapsible=icon]:hidden">
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  admin@example.com
                </p>
              </div>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-white px-4 dark:border-gray-800 dark:bg-gray-950">
          <SidebarTrigger />
          <div className="w-full flex-1">
            <h1 className="text-lg font-semibold">
              {activeTab === 'domains' && 'Domain Management'}
              {activeTab === 'mailboxes' && 'Mailbox Management'}
              {activeTab === 'broadcast' && 'Broadcast Email'}
              {activeTab === 'settings' && 'Account Settings'}
            </h1>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-4 md:p-6">
          {activeTab === 'domains' && <DomainManagement />}
          {activeTab === 'mailboxes' && <MailboxManagement />}
          {activeTab === 'broadcast' && <BroadcastEmail />}
          {activeTab === 'settings' && <AccountSettings />}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
