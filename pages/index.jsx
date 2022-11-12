import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import DefaultLayout from "../components/default/layout";
import Script from "next/script";
import React from "react";
import Select from 'react-tailwindcss-select';
import { SlArrowRight } from 'react-icons/sl';
import { AiFillEdit, AiFillDelete, AiFillFileAdd, AiFillSave, AiOutlineFileDone } from 'react-icons/ai';
import { BiBookContent, BiCart, BiNews } from 'react-icons/bi';
import { GiStabbedNote } from 'react-icons/gi';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import { MdPictureAsPdf, MdSimCardDownload } from 'react-icons/md';

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
                <img src="https://demo.themesberg.com/windster/images/logo.svg" className="h-32 transform motion-safe:hover:scale-110 transition hover:rotate-6" alt="BlueC Engineering"/>
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
                <StepComponent name="REC" description="Recipe" icon={<BiBookContent />} />

                <ArrowRight />
                <StepComponent name="DONE" description="Finish it!" icon={<AiOutlineFileDone />} />

              </div>
            </div>
          </div>
        </div>



        <div className="w-full grid grid-cols-1 gap-4 mb-4">
          <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
          <h1 class="mb-4 text-center font-black text-cyan-700">PROJECT TIMELINE</h1>

            <ol class="relative border-l border-gray-200 dark:border-gray-700">
              <li class="mb-10 ml-6">
                <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                </span>
                <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Quotation</h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 13th, 2022</time>
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

              </li>
              <li class="mb-10 ml-6">
                <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                </span>
                <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Purchase Order</h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2nd, 2022</time>
                <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path></svg> Download PDF</a>
              </li>
              <li class="mb-10 ml-6">
                <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                </span>
                <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Good Recipe</h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 7th, 2022</time>
                <p class="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">Get comments for good recopies. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam nesciunt architecto tempore modi omnis minus dolore, aliquid esse, repellendus impedit placeat eum illo unde reiciendis, asperiores quod optio quas. Natus.</p>
                <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path></svg> Download PDF</a>
              </li>
              <li class="mb-10 ml-6">
                <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                </span>
                <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Invoice</h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 16th, 2022</time>
                <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path></svg> Download PDF</a>
              </li>
              <li class="mb-10 ml-6">
                <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                </span>
                <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Recipe</h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 18th, 2022</time>
                <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path></svg> Download PDF</a>
              </li>
              <li class="ml-6">
                <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                </span>
                <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Done</h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 20th, 2022</time>
              </li>
            </ol>


          </div>
        </div>

      </DefaultLayout >

      <Script async defer src="https://buttons.github.io/buttons.js"></Script>
      <Script src="https://demo.themesberg.com/windster/app.bundle.js"></Script>
    </div >
  );

  function ArrowRight() {
    return <div class="flex-1 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 2h-7.229l7.014 7h-13.785v6h13.785l-7.014 7h7.229l10-10z" /></svg>
    </div>;
  }

  function StepComponent({ name, description, icon, step, nextStep }) {
    return <div class="w-1/3 text-center px-6">
      {nextStep ?
        <div
          class={`bg-gray-300 rounded-lg items-center justify-center border border-gray-200 flex flex-col`}
        >
          <div
            class={`w-3/3 bg-transparent h-10 flex items-center justify-center icon-step text-gray-600`}
          >
            {icon}
          </div>
          <div
            class={`w-3/3 bg-gray-200 h-24 w-full flex flex-col items-center justify-center px-1 body-step rounded-b-lg`}
          >
            <h2 class={`font-bold text-sm`}>{name}</h2>
            <p class={`text-xs text-gray-600`}>
              ({description})
            </p>
          </div>
        </div>
        :
        <div
          class={`${!step ? 'bg-cyan-700' : 'bg-cyan-500'} rounded-lg items-center justify-center border ${!step ? 'border-cyan-500' : 'border-cyan-200'} flex flex-col`}
        >
          <div
            class={`w-3/3 bg-transparent h-10 flex items-center justify-center icon-step ${!step ? 'text-white' : 'text-gray-600'}`}
          >
            {icon}
          </div>
          <div
            class={`w-3/3 ${!step ? 'bg-cyan-500' : 'bg-cyan-200'} h-24 w-full flex flex-col items-center justify-center px-1 body-step rounded-b-lg`}
          >
            <h2 class={`font-bold text-sm ${!step ? 'text-white' : 'text-gray-600'}`}>{name}</h2>
            <p class={`text-xs ${!step ? 'text-white' : 'text-gray-600'}`}>
              ({description})
            </p>
          </div>
        </div>}
    </div>;
  }

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
