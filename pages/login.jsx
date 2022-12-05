import { useEffect, useState } from "react";
import { signIn, getCsrfToken, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function SignIn({ csrfToken }) {
  const router = useRouter();
  const [error, setError] = useState(null);

  const { data: session } = useSession();
  useEffect(() => {
    if (session?.expires) {
      // router.push("/");
    }
  }, []);

  return (
    <>
      <div className="bg-white dark:bg-gray-900">
        <div className="flex justify-center h-screen">
          <div
            className="hidden bg-cover lg:block lg:w-2/3"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
            }}
          >
            <div className="flex items-end h-full px-20 pb-20 bg-gray-900 bg-opacity-40">
              <div>
                <h2 className="text-4xl font-bold text-white">
                  บริษัท บลูซี เอ็นจิเนียริ่ง จำกัด
                </h2>

                <p className="mt-3 text-gray-300">
                  BlueC Engineering Co.,Ltd.
                </p>

                <p className="mt-3 text-gray-300">
                  29/196 หมู่ 3 ซ.อัจฉริยะพัฒนา ถ.กายจนาภิเษก ต.ปลายบาง อ.บางกรวย จ.นนทบุรี  11130
                </p>

                <p className="mt-3 text-gray-300">
                  29/196 Moo 3 T. Plaibang, A. Bangkruy, Nonthaburi 11130
                </p>

                <p className="mt-3 text-gray-300">
                  TEL :  081-6181053
                </p>

                <p className="mt-3 text-gray-300">
                  Email : marutsuralert@hotmail.com
                </p>

                <p className="mt-3 text-gray-300">
                  เลขประจำตัวผู้เสียภาษีอากร 	: 0125555015738
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">
                  BlueC Engineering
                </h2>

                <p className="mt-3 text-gray-500 dark:text-gray-300">
                  Sign in to access your account
                </p>
              </div>

              <div className="mt-8">
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();

                    const username = e.target.username.value;
                    const password = e.target.password.value;
                    console.log("username", username);
                    console.log("password", password);
                    const res = await signIn("credentials", {
                      redirect: false,
                      username: username,
                      password: password,
                      callbackUrl: `${window.location.origin}`,
                    });
                    if (res?.error) {
                      setError(res.error);
                    } else {
                      setError(null);
                    }
                    if (res.url) router.push(res.url);
                    //   setSubmitting(false);
                  }}
                >
                  <div>
                    <label
                      htmlFor="username"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Username
                    </label>
                    <input
                      required
                      id="username"
                      type="username"
                      name="username"
                      placeholder="username"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between mb-2">
                      <label
                        htmlFor="password"
                        className="text-sm text-gray-600 dark:text-gray-200"
                      >
                        Password
                      </label>
                      {/* <a
                href="#"
                className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
              >
                Forgot password?
              </a> */}
                    </div>

                    <input
                      id="password"
                      type="password"
                      name="password"
                      autoComplete="current-password"
                      placeholder="Your Password"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
