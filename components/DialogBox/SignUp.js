'use client'

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useSignUp } from "../ContextAPI/SignUpContext";

export default function MyModal() {
//   let [isOpen, setIsOpen] = useState(true);
  const { isDialogOpen, toggleSignUp } = useSignUp();

  function closeModal() {
    toggleSignUp(false);
  }


  return (
    <>
      <Transition appear show={isDialogOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" w-fit min-w-[60vw] h-fit transform overflow-hidden rounded-2xl bg-white pt-4 px-4 text-left align-middle shadow-xl transition-all">
                  <div className="mt-2 bg-slate-700 h-[70vh] md:h-[85vh] ">
                    <iframe
                      src="https://www.yoactiv.com/widenq.aspx?adminid=oEMpha6rcTYV4XnsGGSpeg==&leadsrc=9"
                      frameborder="0"
                      className=" h-full w-full"
                    ></iframe>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className=" absolute top-0 right-0 inline-flex justify-center rounded-full border border-transparent px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      X
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
