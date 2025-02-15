import { getAllMembers } from "@/actions/Member";
import PageTitle from "@/components/PageTitle";
import MembersList from "./_components/MembersList";


export default async function Home() {
    const members = await getAllMembers()

    return (
        <main className="flex-1 overflow-y-auto bg-muted/10 p-8">
            {/* <p className="text-2xl font-semibold my-8">Liste des membres</p> */}
            <PageTitle title="Liste des membres" />
            <MembersList members={members} />
            {/* <pre className="mt-2 w-80 rounded-md p-4">
                <code>{JSON.stringify(members, null, 2)} </code>
            </pre> */}
        </main>
    );
}