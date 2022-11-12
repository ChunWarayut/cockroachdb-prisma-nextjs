import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import DefaultLayout from "../components/default/layout";
import Script from "next/script";
import React from "react";
import Select from 'react-tailwindcss-select';
import { SlArrowRight } from 'react-icons/sl';
import { ArrowRight, StepComponent } from "../components/stepComponent";

import { AiFillEdit, AiFillDelete, AiFillFileAdd, AiFillSave, AiOutlineFileDone } from 'react-icons/ai';
import { BiBookContent, BiCart, BiNews } from 'react-icons/bi';
import { GiStabbedNote } from 'react-icons/gi';
import { FaFileInvoiceDollar } from 'react-icons/fa';

const options = [
  { value: "fox", label: "Fox CO. LTD." },
  { value: "Butterfly", label: "Butterfly CO. LTD." },
  { value: "Honeybee", label: "Honeybee CO. LTD." },
];

export default function Home() {
  const { data: session } = useSession();
  const [showModal, setShowModal] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);
  const [animal, setAnimal] = React.useState(null);

  const routes = useRouter();
  useEffect(() => {
    if (!session) {
      routes.push("/login");
    }
  }, [session]);

  const handleChange = (value) => {
    console.log("value:", value);
    setAnimal(value);
  };

  console.log("session", session);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DefaultLayout>

        <div className="w-full grid grid-cols-1 gap-4 mb-4">
          <div className="bg-gradient-to-r from-blue-500 to-green-500 relative shadow-lg rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">

            <div className="">
              <div className="absolute right-28 bottom-6">
                <img src="https://demo.themesberg.com/windster/images/logo.svg" className="h-32 transform motion-safe:hover:scale-110 transition hover:rotate-6" alt="BlueC Engineering" />
              </div>
              <div className="p-20 absolute rounded-full bg-white opacity-20 bottom-8 -right-20">
              </div>
              <div className="p-2 absolute rounded-full bg-white opacity-20 bottom-4 right-20">
              </div>
              <div className="p-16 absolute rounded-full bg-white opacity-20 -bottom-12 -left-8">
              </div>
              <div className="p-2 absolute rounded-full bg-white opacity-20 top-12 left-4">
              </div>
            </div>

            <div className="container ml-16">

              <div className="flex flex-row items-center">
                <h3 className="text-lg leading-7 font-bold text-white tracking-wide">
                  Project:
                </h3>
                <p className="ml-2 text-sm text-gray-100">
                  Project description
                </p>
              </div>

              <div className="flex flex-row items-center">
                <h3 className="text-lg leading-7 font-bold text-white tracking-wide">
                  Customer:
                </h3>
                <p className="ml-2 text-sm text-gray-100">
                  Customer description
                </p>
              </div>
              <div className="flex flex-row items-center">
                <h3 className="text-lg leading-7 font-bold text-white tracking-wide">
                  Supplier:
                </h3>
                <p className="ml-2 text-sm text-gray-100">
                  Supplier description
                </p>
              </div>

              <div className="flex flex-row items-center">
                <h3 className="text-lg leading-7 font-bold text-white tracking-wide">
                  Detail:
                </h3>
                <p className="ml-2 text-sm text-gray-100">
                  Detail description
                </p>
              </div>

            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 gap-4 mb-4">
          <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
            <div>
              <h1 class="mb-4 text-center font-black text-cyan-700">STEPS</h1>
              <div class="flex flex-row items-center justify-around">

                <StepComponent name="QN" description="Quotation" icon={<BiNews />} />

                <ArrowRight />
                <StepComponent nextStep name="PO" description="Purchase Order" icon={<BiCart />} />

                <ArrowRight />
                <StepComponent nextStep name="GR" description="Good Recipe" icon={<GiStabbedNote />} />

                <ArrowRight />
                <StepComponent nextStep name="INV" description="Invoice" icon={<FaFileInvoiceDollar />} />

                <ArrowRight />
                <StepComponent nextStep name="REC" description="Recipe" icon={<BiBookContent />} />

                <ArrowRight />
                <StepComponent nextStep name="DONE" description="Finish it!" icon={<AiOutlineFileDone />} />

              </div>
            </div>
          </div>
        </div>



        <div className="w-full grid grid-cols-1 gap-4 mb-4">
          <div className="bg-white shadow rounded-lg">

            <div className="flex flex-row items-center justify-between py-2">

              <div class="flex items-center pl-4 rounded">
                <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="bordered-checkbox-2" class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300 pr-2">Supplier: xxxxxxxxxxxx</label>
              </div>
              <div class="flex items-center pr-4 rounded">
                <label for="bordered-checkbox-2" class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300 pr-2">Status: xxxxxxxxxxxx</label>
              </div>
            </div>

            {TablePagination()}
          </div>
        </div>


        <div className="w-full grid grid-cols-1 gap-4 mb-4">
          <div className="bg-white shadow rounded-lg">

            <div className="flex flex-row items-center justify-between py-2">

              <div class="flex items-center pl-4 rounded">
                <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="bordered-checkbox-2" class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300 pr-2">Supplier: xxxxxxxxxxxx</label>
              </div>
              <div class="flex items-center pr-4 rounded">
                <label for="bordered-checkbox-2" class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300 pr-2">Status: xxxxxxxxxxxx</label>
              </div>
            </div>

            {TablePagination()}
          </div>
        </div>


        <div className="w-full grid grid-cols-1 gap-4 mb-4">
          <div className="bg-white shadow rounded-lg">

            <div className="flex flex-row items-center justify-between py-2">

              <div class="flex items-center pl-4 rounded">
                <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="bordered-checkbox-2" class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300 pr-2">Supplier: xxxxxxxxxxxx</label>
              </div>
              <div class="flex items-center pr-4 rounded">
                <label for="bordered-checkbox-2" class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300 pr-2">Status: xxxxxxxxxxxx</label>
              </div>
            </div>

            {TablePagination()}
          </div>
        </div>


        <div className="w-full grid grid-cols-1 gap-4 mb-4">
          <div className="bg-white shadow rounded-lg">

            <div className="flex flex-row items-center justify-between py-2">

              <div class="flex items-center pl-4 rounded">
                <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="bordered-checkbox-2" class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300 pr-2">Supplier: xxxxxxxxxxxx</label>
              </div>
              <div class="flex items-center pr-4 rounded">
                <label for="bordered-checkbox-2" class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300 pr-2">Status: xxxxxxxxxxxx</label>
              </div>
            </div>

            {TablePagination()}
          </div>
        </div>


        <div className="w-full gap-4 mb-4 flex items-center justify-end">
          <div>
            <button
              name="create"
              value="create"
              onClick={() => setShowModal2(true)}
              className="hidden sm:inline-flex ml-5 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3"
            >
              <AiFillSave />&nbsp;บันทึก
            </button>
          </div>
        </div>
        <>
          {showModal ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                    {/*body*/}
                    <div className="relative p-6 flex-auto">

                      <form class="w-full max-w-lg">
                        <div class="flex flex-wrap -mx-3 mb-6">
                          <div class="w-full md:w-2/2 px-3 mb-6">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                              Name
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                            <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                          </div>
                          <div class="w-full md:w-2/2 px-3 mb-6">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                              Price
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="100" />
                          </div>
                          <div class="w-full md:w-1/2 px-3 mb-6">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                              qty
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="1" />
                          </div>
                          <div class="w-full md:w-1/2 px-3 mb-6">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                              Amount
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="100" />
                          </div>
                          <div class="w-full md:w-2/2 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                              Comments
                            </label>
                            <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"> </textarea>
                          </div>
                        </div>

                      </form>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-cyan-600 text-white active:bg-cyan-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>

        <>
          {showModal2 ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                    {/*body*/}
                    <div className="relative p-6 flex-auto">

                      <form class="w-full max-w-lg">
                        <div class="flex flex-wrap -mx-3 mb-6">
                          <div class="w-full md:w-2/2 px-3 mb-6">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                              Name
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                            <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                          </div>
                          <div class="w-full md:w-2/2 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                              Price
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="100" />
                          </div>
                        </div>

                      </form>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal2(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-cyan-600 text-white active:bg-cyan-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal2(false)}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>

      </DefaultLayout >

      <Script async defer src="https://buttons.github.io/buttons.js"></Script>
      <Script src="https://demo.themesberg.com/windster/app.bundle.js"></Script>
    </div >
  );

  function TablePagination() {
    return <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6">
              code
            </th>
            <th scope="col" class="py-3 px-6">
              name
            </th>
            <th scope="col" class="py-3 px-6">
              qty
            </th>
            <th scope="col" class="py-3 px-6">
              unit price
            </th>
            <th scope="col" class="py-3 px-6">
              amount
            </th>
            <th scope="col" class="py-3 px-6">
              comment
            </th>
            <th scope="col" class="py-3 px-6">
              จัดการ
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Apple MacBook Pro 17"
            </th>
            <td class="py-4 px-6">Sliver</td>
            <td class="py-4 px-6">10</td>
            <td class="py-4 px-6">200</td>
            <td class="py-4 px-6">2000</td>
            <td class="py-4 px-6">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</td>
            <td class="py-4 px-6 flex items-center justify-start">
              <a
                href="#"
                class="font-medium text-cyan-600 dark:text-cyan-500 hover:underline"
              >
                <AiFillEdit />
              </a>
              <a
                href="#"
                class="font-medium text-cyan-600 dark:text-cyan-500 hover:underline ml-2"
              >
                <AiFillDelete />
              </a>
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Apple MacBook Pro 17"
            </th>
            <td class="py-4 px-6">Sliver</td>
            <td class="py-4 px-6">10</td>
            <td class="py-4 px-6">200</td>
            <td class="py-4 px-6">2000</td>
            <td class="py-4 px-6">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</td>
            <td class="py-4 px-6 flex items-center justify-start">
              <a
                href="#"
                class="font-medium text-cyan-600 dark:text-cyan-500 hover:underline"
              >
                <AiFillEdit />
              </a>
              <a
                href="#"
                class="font-medium text-cyan-600 dark:text-cyan-500 hover:underline ml-2"
              >
                <AiFillDelete />
              </a>
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Apple MacBook Pro 17"
            </th>
            <td class="py-4 px-6">Sliver</td>
            <td class="py-4 px-6">10</td>
            <td class="py-4 px-6">200</td>
            <td class="py-4 px-6">2000</td>
            <td class="py-4 px-6">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</td>
            <td class="py-4 px-6 flex items-center justify-start">
              <a
                href="#"
                class="font-medium text-cyan-600 dark:text-cyan-500 hover:underline"
              >
                <AiFillEdit />
              </a>
              <a
                href="#"
                class="font-medium text-cyan-600 dark:text-cyan-500 hover:underline ml-2"
              >
                <AiFillDelete />
              </a>
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Apple MacBook Pro 17"
            </th>
            <td class="py-4 px-6">Sliver</td>
            <td class="py-4 px-6">10</td>
            <td class="py-4 px-6">200</td>
            <td class="py-4 px-6">2000</td>
            <td class="py-4 px-6">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</td>
            <td class="py-4 px-6 flex items-center justify-start">
              <a
                href="#"
                class="font-medium text-cyan-600 dark:text-cyan-500 hover:underline"
              >
                <AiFillEdit />
              </a>
              <a
                href="#"
                class="font-medium text-cyan-600 dark:text-cyan-500 hover:underline ml-2"
              >
                <AiFillDelete />
              </a>
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Apple MacBook Pro 17"
            </th>
            <td class="py-4 px-6">Sliver</td>
            <td class="py-4 px-6">10</td>
            <td class="py-4 px-6">200</td>
            <td class="py-4 px-6">2000</td>
            <td class="py-4 px-6">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</td>
            <td class="py-4 px-6 flex items-center justify-start">
              <a
                href="#"
                class="font-medium text-cyan-600 dark:text-cyan-500 hover:underline"
              >
                <AiFillEdit />
              </a>
              <a
                href="#"
                class="font-medium text-cyan-600 dark:text-cyan-500 hover:underline ml-2"
              >
                <AiFillDelete />
              </a>
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Apple MacBook Pro 17"
            </th>
            <td class="py-4 px-6">Sliver</td>
            <td class="py-4 px-6">10</td>
            <td class="py-4 px-6">200</td>
            <td class="py-4 px-6">2000</td>
            <td class="py-4 px-6">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</td>
            <td class="py-4 px-6 flex items-center justify-start">
              <a
                href="#"
                class="font-medium text-cyan-600 dark:text-cyan-500 hover:underline"
              >
                <AiFillEdit />
              </a>
              <a
                href="#"
                class="font-medium text-cyan-600 dark:text-cyan-500 hover:underline ml-2"
              >
                <AiFillDelete />
              </a>
            </td>
          </tr>

        </tbody>
      </table>
      <nav
        class="flex justify-center items-center p-4"
        aria-label="Table navigation"
      >
        <p>Total 12,000 Bath</p>
      </nav>
    </div>;
  }

}
