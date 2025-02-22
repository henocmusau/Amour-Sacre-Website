import { getMember } from "@/actions/Member";
import PageTitle from "@/components/PageTitle";

export default async function MemberPage({ params }: { params: { id: string } }) {
    const data = await params
    const memberId = data.id.split('-')
    const id = memberId[memberId.length - 1]
    const member = await getMember(parseInt(id, 10))

    return (
        <main className="flex-1 overflow-y-auto bg-muted/10 p-8">
            <div>
                <pre>
                    <code>
                        {JSON.stringify(member, null, 2)}
                    </code>
                </pre>
            </div>
        </main>
    );
}