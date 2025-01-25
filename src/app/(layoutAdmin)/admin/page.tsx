// import { getAllMembers } from '@/actions/Member';
import { DashboardStats } from '@/components/dashboard-stats';
import PageTitle from '@/components/PageTitle';

export default async function Home() {
    // const data = await getAllMembers()

    // console.log(JSON.parse(JSON.stringify(data)))
    return (
        <main className="flex-1 overflow-y-auto bg-muted/10 p-8">
            <div className="mx-auto max-w-6xl space-y-8">

                <PageTitle
                    title='Bienvenue John'
                    description="Here's what's happening with your projects today."
                />

                <DashboardStats />
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">

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