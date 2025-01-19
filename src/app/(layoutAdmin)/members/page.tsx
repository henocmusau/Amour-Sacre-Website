import { getAllCategories, getAllMembers } from "@/actions/Member";
import PageTitle from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import NewMember from "./_components/NewButton";

export default async function MembersPage() {
    const data = await getAllMembers()
    // const data2 = await getAllCategories()

    console.log(data)
    return (
        <>
            <PageTitle title="Membres" newBtn={<NewMember />} />

            {/* SEARCHBAR */}
            <div>SEARCHBAR</div>
        </>
    );
}
