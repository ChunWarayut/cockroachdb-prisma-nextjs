import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import DefaultLayout from "../components/default/layout";
import Script from "next/script";
import React from "react";
import Select from 'react-tailwindcss-select';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const options = [
  { value: "fox", label: "Fox CO. LTD." },
  { value: "Butterfly", label: "Butterfly CO. LTD." },
  { value: "Honeybee", label: "Honeybee CO. LTD." },
];

export default function Home() {
  const { data: session } = useSession();
  const [showModal, setShowModal] = React.useState(false);
  const [animal, setAnimal] = React.useState(null);

  const routes = useRouter();
  useEffect(() => {
    if (!session) {
      // routes.push("/login");
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
        <title>ERP-4</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DefaultLayout>
        <div className="w-full grid grid-cols-1 gap-4 mb-4">
          <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">Projects</h1>
              </div>
              <div>
                <button
                  name="create"
                  value="create"
                  onClick={() => setShowModal(true)}
                  className="hidden sm:inline-flex ml-5 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3"
                >
                  + Create project
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 gap-4 mb-4">
          <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
            <div className="flex flex-row items-center">
              {/* <div className="flex-none">
                <h1 className="text-2xl font-bold mr-2">Search</h1>
              </div> */}
              <div className="flex-none mr-2">{SelectSupplier()}</div>
              <div className="flex-none mr-2">{SelectYear()}</div>
              <div className="flex-none mr-2">{checkboxCloseAndDone()}</div>
              <div className="flex-1 ">{SearchComponent()}</div>
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 gap-4 mb-4">
          <div className="bg-white shadow rounded-lg">
            {TablePagination()}
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
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        Create Project
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">

                      <form className="w-full max-w-lg">
                        <div className="flex flex-wrap -mx-3 mb-6">
                          <div className="w-full md:w-2/2 px-3 mb-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                              Project Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                          </div>
                          <div className="w-full md:w-2/2 px-3 mb-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                              Customer Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                          </div>
                          <div className="w-full md:w-2/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                              Project Details
                            </label>
                            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"> </textarea>
                          </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                          <div className="w-full md:w-3/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                              Attach Files
                            </label>

                            <div className="flex justify-center items-center w-full">
                              <label for="dropzone-file" className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div className="flex flex-col justify-center items-center pt-5 pb-6">
                                  <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                              </label>
                            </div>


                          </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                          <div className="w-full md:w-3/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                              Supplier Name
                            </label>
                            <Select
                              value={animal}
                              onChange={handleChange}
                              options={options}
                              isMultiple={true}
                            />

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
                        Save Changes
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

  function checkboxCloseAndDone() {
    return <div className="flex items-center pl-4 rounded dark:border-gray-700">
      <input checked id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
      <label for="bordered-checkbox-2" className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300 pr-2">Included Close&Done Project</label>
    </div>;
  }

  function TablePagination() {
    return <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              PROJECT name
            </th>
            <th scope="col" className="py-3 px-6">
              Customer
            </th>
            <th scope="col" className="py-3 px-6">
              details
            </th>
            <th scope="col" className="py-3 px-6">
              Supplier
            </th>
            <th scope="col" className="py-3 px-6">
              Status
            </th>
            <th scope="col" className="py-3 px-6">

            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              PROJECT 1
            </th>
            <td className="py-4 px-6">Sliver</td>
            <td className="py-4 px-6">Laptop</td>
            <td className="py-4 px-6">xxx</td>
            <td className="py-4 px-6">xxx</td>
            <td className="py-4 px-6 flex items-center justify-start">
              <a
                href="#"
                className="font-medium text-cyan-600 dark:text-cyan-500 hover:underline"
              >
                <AiFillEdit />
              </a>
              <a
                href="#"
                className="font-medium text-cyan-600 dark:text-cyan-500 hover:underline ml-2"
              >
                <AiFillDelete />
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              PROJECT 2
            </th>
            <td className="py-4 px-6">White</td>
            <td className="py-4 px-6">Laptop PC</td>
            <td className="py-4 px-6">xxx</td>
            <td className="py-4 px-6">xxx</td>
            <td className="py-4 px-6 flex items-center justify-start">
              <a
                href="#"
                className="font-medium text-cyan-600 dark:text-cyan-500 hover:underline"
              >
                <AiFillEdit />
              </a>
              <a
                href="#"
                className="font-medium text-cyan-600 dark:text-cyan-500 hover:underline ml-2"
              >
                <AiFillDelete />
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              PROJECT 3
            </th>
            <td className="py-4 px-6">Black</td>
            <td className="py-4 px-6">Accessories</td>
            <td className="py-4 px-6">xxx</td>
            <td className="py-4 px-6">xxx</td>
            <td className="py-4 px-6 flex items-center justify-start">
              <a
                href="#"
                className="font-medium text-cyan-600 dark:text-cyan-500 hover:underline"
              >
                <AiFillEdit />
              </a>
              <a
                href="#"
                className="font-medium text-cyan-600 dark:text-cyan-500 hover:underline ml-2"
              >
                <AiFillDelete />
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              PROJECT 4
            </th>
            <td className="py-4 px-6">Black</td>
            <td className="py-4 px-6">Watches</td>
            <td className="py-4 px-6">xxx</td>
            <td className="py-4 px-6">xxx</td>
            <td className="py-4 px-6 flex items-center justify-start">
              <a
                href="#"
                className="font-medium text-cyan-600 dark:text-cyan-500 hover:underline"
              >
                <AiFillEdit />
              </a>
              <a
                href="#"
                className="font-medium text-cyan-600 dark:text-cyan-500 hover:underline ml-2"
              >
                <AiFillDelete />
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              PROJECT 5
            </th>
            <td className="py-4 px-6">Silver</td>
            <td className="py-4 px-6">PC</td>
            <td className="py-4 px-6">xxx</td>
            <td className="py-4 px-6">xxx</td>
            <td className="py-4 px-6 flex items-center justify-start">
              <a
                href="#"
                className="font-medium text-cyan-600 dark:text-cyan-500 hover:underline"
              >
                <AiFillEdit />
              </a>
              <a
                href="#"
                className="font-medium text-cyan-600 dark:text-cyan-500 hover:underline ml-2"
              >
                <AiFillDelete />
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              PROJECT 6
            </th>
            <td className="py-4 px-6">White</td>
            <td className="py-4 px-6">Accessories</td>
            <td className="py-4 px-6">xxx</td>
            <td className="py-4 px-6">xxx</td>
            <td className="py-4 px-6 flex items-center justify-start">
              <a
                href="#"
                className="font-medium text-cyan-600 dark:text-cyan-500 hover:underline"
              >
                <AiFillEdit />
              </a>
              <a
                href="#"
                className="font-medium text-cyan-600 dark:text-cyan-500 hover:underline ml-2"
              >
                <AiFillDelete />
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              PROJECT 7
            </th>
            <td className="py-4 px-6">Gold</td>
            <td className="py-4 px-6">Tablet</td>
            <td className="py-4 px-6">xxx</td>
            <td className="py-4 px-6">xxx</td>
            <td className="py-4 px-6 flex items-center justify-start">
              <a
                href="#"
                className="font-medium text-cyan-600 dark:text-cyan-500 hover:underline"
              >
                <AiFillEdit />
              </a>
              <a
                href="#"
                className="font-medium text-cyan-600 dark:text-cyan-500 hover:underline ml-2"
              >
                <AiFillDelete />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <nav
        className="flex justify-between items-center p-4"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Showing{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            1-10
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            1000
          </span>
        </span>
        <ul className="inline-flex items-center -space-x-px">
          <li>
            <a
              href="#"
              className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              className="z-10 py-2 px-3 leading-tight text-cyan-600 bg-cyan-50 border border-cyan-300 hover:bg-cyan-100 hover:text-cyan-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              ...
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              100
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>;
  }

  function SelectYear() {
    return (
      <div className="flex flex-row items-center">
        {/* <h1 className="text-2xl font-bold mr-2">Supplier</h1> */}
        <div className="inline-block relative w-64">
          <select className="block appearance-none w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 pr-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500">
            <option>Year</option>
            <option>2022</option>
            <option>2019</option>
            <option>2018</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  function SelectSupplier() {
    return (
      <div className="flex flex-row items-center">
        {/* <h1 className="text-2xl font-bold mr-2">Supplier</h1> */}
        <div className="inline-block relative w-64">
          <select className="block appearance-none w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 pr-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500">
            <option>Supplier</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  function SearchComponent() {
    return (
      <form className="flex items-center ">
        <label for="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
            placeholder="Search"
            required=""
          />
        </div>
        <button
          type="submit"
          className="flex flex-row p-2.5 ml-2 text-sm font-medium text-white bg-cyan-600 rounded-lg border border-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <span className="sr-only">Search</span>
          Search
        </button>
      </form>
    );
  }
}
