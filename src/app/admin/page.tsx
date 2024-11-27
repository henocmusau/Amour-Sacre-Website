import { DashboardStats } from '@/components/dashboard-stats';
import { Sidebar } from '@/components/sidebar';

export default function Home() {
    return (
        <main className="flex-1 overflow-y-auto bg-muted/10 p-8">
            <div className="mx-auto max-w-6xl space-y-8">
                <div>
                    <h1 className="text-3xl font-bold">Welcome back, John</h1>
                    <p className="text-muted-foreground">
                        Here's what's happening with your projects today.
                    </p>
                </div>
                <DashboardStats />
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                    <div className="col-span-4 rounded-lg border bg-card p-8">
                        <h2 className="text-lg font-semibold">Recent Activity</h2>
                        <p className="text-sm text-muted-foreground">
                            Your projects and team updates
                        </p>
                    </div>
                    <div className="col-span-3 rounded-lg border bg-card p-8">
                        <h2 className="text-lg font-semibold">Quick Actions</h2>
                        <p className="text-sm text-muted-foreground">
                            Common tasks and operations
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}