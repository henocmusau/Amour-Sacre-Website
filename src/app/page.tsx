import { getAllMembers } from "@/actions/Member";
import PageTitle from "@/components/PageTitle";

export default async function Home() {
  // const data = await getAllMembers()

  // console.log(data)
  return (
    <div className="h-full w-full">
      <PageTitle title="Dashboard" />
    </div>
  );
}
