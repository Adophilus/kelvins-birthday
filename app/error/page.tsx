import type { FunctionComponent } from "react";
import CrossCircle from "~/icons/cross-circle";

const ErrorPage: FunctionComponent = () => {
  return (
    <>
      <main className="fixed bg-red-600 flex items-center justify-center h-screen w-screen top-0 left-0">
        <div className="flex flex-col gap-4">
          <div className="flex justify-center">
            <CrossCircle className="w-40 h-40 text-white" />
          </div>
          <div className="px-4">
            <header>
              <h2 className="text-white text-center gap-4 text-4xl font-bold">

                You are hereby banished from this realm.<br />Depart immediately!
              </h2>
            </header>
          </div>
        </div>
      </main>
    </>
  )
}

export default ErrorPage
