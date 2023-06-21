import { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { api } from "~/utils/api";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sammy's Birthday Gift</title>
        <meta name="description" content="Sammy's birthday gift" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen items-center justify-center bg-yellow-100">
        <div className="divide-y-blue-600 max-w-[450px] divide-y border-2 border-blue-600">
          <div className="h-40 w-full bg-yellow-400/80 shadow-md">
            <div className="relative mx-auto flex h-40 w-40 translate-y-1/2 items-center justify-center rounded-full bg-blue-600 shadow-md">
              <Image
                src="/birthday-cake.svg"
                height={100}
                width={100}
                alt="cake"
                className="h-32 w-32"
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
              <p className="font-montserrat text-lg font-semibold">
                On this special day, I hope you take a moment to reflect on your
                accomplishments, embrace the love and appreciation that surround
                you, and embrace the exciting journey ahead. May the year ahead
                be filled with abundant blessings, success in all your
                endeavors, and happiness beyond measure. 🎈
              </p>
              <div className="py-4">
                <p className="flex gap-2">
                  <input
                    type="text"
                    className="grow border border-blue-600 bg-transparent p-2 font-robotoMono font-semibold"
                  />
                  <button
                    type="button"
                    className="border border-blue-600 bg-blue-600 p-2 text-white"
                  >
                    <Image
                      src="/present.svg"
                      height={100}
                      width={100}
                      alt="present"
                      className="h-6 w-6"
                    />
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
