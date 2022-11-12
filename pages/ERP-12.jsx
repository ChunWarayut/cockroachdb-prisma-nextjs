import Head from "next/head";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import DefaultLayout from "../components/default/layout";
import Script from "next/script";
import React from "react";

import { ArrowRight, StepComponent } from "../components/stepComponent";

import { AiFillSave, AiOutlineFileDone } from 'react-icons/ai';
import { BiBookContent, BiCart, BiNews } from 'react-icons/bi';
import { GiStabbedNote } from 'react-icons/gi';
import { FaFileInvoiceDollar } from 'react-icons/fa';

export default function Home() {
  const { data: session } = useSession();
  const [showModal, setShowModal] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);

  const routes = useRouter();
  useEffect(() => {
    if (!session) {
      routes.push("/login");
    }
  }, [session]);


  return (
    <div>
      <Head>
        <title>INVOICE | BlueC ERP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DefaultLayout>

        <div className="w-full gap-4 mb-4 flex items-center justify-end">
          <div>
            <button
              name="create"
              value="create"
              onClick={() => setShowModal2(true)}
              className="hidden sm:inline-flex text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3"
            >
              Reprint
            </button>
          </div>
        </div>

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
                <StepComponent name="PO" description="Purchase Order" icon={<BiCart />} />

                <ArrowRight />
                <StepComponent name="GR" description="Good Recipe" icon={<GiStabbedNote />} />

                <ArrowRight />
                <StepComponent name="INV" description="Invoice" icon={<FaFileInvoiceDollar />} />

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

            <div className="py-2">

              <div class="w-full md:w-1/3 px-8 my-6">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  Date
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="date" placeholder="01/01/2022" value="01/01/2022" />
              </div>

            </div>
          </div>
        </div>


        <div className="w-full grid grid-cols-1 gap-4 mb-4">
          <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
            <div className="w-full gap-4 mb-4 flex items-center justify-start">
              <h1 className="text-2xl">Invoice Recipe</h1>
            </div>
            <div className="w-full gap-4 flex items-center justify-center">
              <img src="https://www.dearcowboy.com/static/image/postimage/library366/01.jpg" />
            </div>
            <div class="w-full md:w-3/3 px-8">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Upload File
              </label>

              <div class="flex justify-center items-center w-full">
                <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div class="flex flex-col justify-center items-center pt-5 pb-6">
                    <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" />
                </label>
              </div>

            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 gap-4 mb-4">
          <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
            <div className="w-full gap-4 mb-4 flex items-center justify-start">
              <h1 className="text-2xl">Recipe</h1>
            </div>
            <div class="w-full md:w-3/3 px-8">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Upload File
              </label>

              <div class="flex justify-center items-center w-full">
                <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div class="flex flex-col justify-center items-center pt-5 pb-6">
                    <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" />
                </label>
              </div>

            </div>
          </div>
        </div>


        <div class="flex flex-wrap -mx-3 mb-2">
        </div>

        <div className="flex flex-row items-center">


          <div className="w-full gap-4 mb-4 flex items-center justify-end">

            <div>
              <button
                name="create"
                value="create"
                onClick={() => setShowModal2(true)}
                className="hidden sm:inline-flex text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm py-2.5 text-center items-center px-5"
              >
                Print
              </button>
            </div>

            <div>
              <button
                name="create"
                value="create"
                onClick={() => setShowModal2(true)}
                className="hidden sm:inline-flex text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3"
              >
                <AiFillSave />&nbsp;Save
              </button>
            </div>
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

}
