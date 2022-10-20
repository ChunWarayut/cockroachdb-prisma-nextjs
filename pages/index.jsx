import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import DefaultLayout from "../components/default/layout";

export default function Home() {
  const { data: session } = useSession();
  const routes = useRouter();
  useEffect(() => {
    if (!session) {
      routes.push("/login");
    }
  }, [session]);

  console.log("session", session);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DefaultLayout>
        <div className="w-full grid grid-cols-1 gap-4 mb-4">
          <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">Dashboard</h1>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
}
