import { getServerSession } from "next-auth";
import Characters from "./characters/page";
import LoginPage from "./login/page";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Characters />
    </main>
  );
}
