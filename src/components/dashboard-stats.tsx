'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowUpRight, Users, DollarSign, ShoppingCart } from 'lucide-react';

const stats = [
  {
    title: 'Total Revenue',
    value: '$45,231.89',
    change: '+20.1%',
    icon: DollarSign,
  },
  {
    title: 'Active Users',
    value: '2,345',
    change: '+15.2%',
    icon: Users,
  },
  {
    title: 'New Orders',
    value: '1,235',
    change: '+12.3%',
    icon: ShoppingCart,
  },
];

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="flex items-center text-sm text-emerald-500">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              {stat.change}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}