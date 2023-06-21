"use client";

import Image from "next/image";
import { useState } from "react";
import PresentIcon from "~/icons/present";
import { sendMatic } from "./actions";
import type { NextPage } from "next/types";
import { Transition } from "@headlessui/react";
import QuizModal from "./quiz-modal";
import toast from "react-hot-toast";

const HomePage: NextPage = () => {
  const [proven, setProven] = useState(false);
  const [recipientAddress, setRecipientAddress] = useState("")
  const [isShowingModal, setIsShowingModal] = useState(true)

  const onSubmit = async () => {
    const res = await sendMatic({ recipientAddress })
    if (res.message) {
      toast.success(res.message)
    }
    else {
      toast.error(res.message)
    }
    return false
  }

  return (
    <>
      <main className="flex min-h-screen items-center justify-center bg-yellow-100 py-12">
        <div className="divide-y-blue-600 max-w-[450px] divide-y border-2 border-blue-600 shadow-lg">
          <div className="h-40 w-full bg-yellow-400/80 shadow-md">
            <div className="relative mx-auto flex h-40 w-40 translate-y-1/2 items-center justify-center rounded-full bg-blue-600 shadow-md">
              <Image
                src="/birthday-cake.svg"
                height={100}
                width={100}
                alt="cake"
                className="h-32 w-32 drop-shadow-lg"
              />
            </div>
          </div>
          <div className="p-4">
            <div className="h-24" />
            <div>
              <div className="text-center">
                <span className="font-notoSans font-semibold leading-loose text-red-800">
                  21 June, 2023
                </span>
              </div>
              <header className="my-4">
                <h1 className="text-bold text-center font-bungee text-4xl text-blue-600">
                  Happy Birthday!
                </h1>
              </header>
              <p className="text-center font-montserrat text-lg font-semibold">
                On this special day, I hope you take a moment to reflect on your
                accomplishments, embrace the love and appreciation that surround
                you, and embrace the exciting journey ahead. May the year ahead
                be filled with abundant blessings, success in all your
                endeavors, and happiness beyond measure. 🎈
              </p>
              <div className="py-4">
                {!proven ? (
                  <button
                    type="button"
                    className="w-full rounded-md border-2 border-blue-600 bg-blue-600 p-2 font-robotoMono shadow-md font-semibold text-white duration-300 ease-in-out hover:bg-white hover:text-blue-600"
                    onClick={() => {
                      setProven(true);
                    }}
                  >
                    Claim Reward 🎁
                  </button>
                ) : (
                  <form onSubmit={(event) => {
                    event.preventDefault()
                    onSubmit().catch((err) => console.error(err))
                  }}>
                    <p className="flex gap-2">
                      <input
                        placeholder="Enter polygon address..."
                        type="text"
                        name="address"
                        onChange={(event) => setRecipientAddress(event.target.value)}
                        value={recipientAddress}
                        className="grow border-2 border-blue-600 bg-transparent p-2 font-robotoMono font-semibold"
                        required
                      />
                      <button
                        type="submit"
                        className="group border-2 border-blue-600 bg-blue-600 p-2 text-white hover:bg-white"
                      >
                        <PresentIcon className="h-6 w-6 fill-white stroke-2 transition-colors duration-300 ease-in-out group-hover:fill-blue-600 group-hover:fill-blue-600" />
                      </button>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Transition show={isShowingModal}
        x-transitionenter="transition duration-300 ease-out"
        enter-start="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
        enter-end="translate-y-0 opacity-100 sm:scale-100"
        leave="transition duration-150 ease-in"
        leave-start="translate-y-0 opacity-100 sm:scale-100"
        leave-end="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
        className="fixed inset-0 z-10 overflow-y-auto"
        aria-labelledby="modal-title" role="dialog" aria-modal="true"
      >
        <QuizModal onClose={() => setIsShowingModal(false)} />
      </Transition>
    </>
  );
};

export default HomePage;
