'use client';

import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Users,
  Settings,
  BarChart3,
  Mail,
  Bell,
  ChevronRight,
  Menu,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import { ThemeToggle } from './theme-toggle';

const sidebarLinks = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Membres', href: '/members', icon: Users },
  { name: 'Messages', href: '/messages', icon: Mail },
  { name: 'Notifications', href: '/notifications', icon: Bell },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div
      className={cn(
        'relative flex flex-col border-r bg-background duration-300',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="flex h-16 items-center justify-between px-4">
        <h2
          className={cn(
            'text-lg font-semibold duration-300',
            collapsed && 'opacity-0'
          )}
        >
          Dashboard
        </h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="h-8 w-8"
        >
          {collapsed ? <ChevronRight /> : <Menu />}
        </Button>
      </div>
      <ScrollArea className="flex-1 px-2">
        <div className="space-y-2 py-2">
          {sidebarLinks.map((link) => (
            <Link
              key={link.href}
              href={'/admin' + link.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent',
                pathname === link.href && 'bg-accent',
                collapsed && 'justify-center'
              )}
            >
              <link.icon className="h-5 w-5" />
              <span
                className={cn(
                  'duration-300',
                  collapsed && 'w-0 overflow-hidden opacity-0'
                )}
              >
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      </ScrollArea>
      <div className="border-t p-4">
        <div className="flex items-center justify-between">
          <div
            className={cn(
              'flex items-center gap-2 duration-300',
              collapsed && 'opacity-0'
            )}
          >
            <div className="h-8 w-8 rounded-full bg-primary" />
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-muted-foreground">Admin</p>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}