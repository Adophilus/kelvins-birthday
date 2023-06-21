import type { FunctionComponent } from "react";
import CrossCircle from "~/icons/cross-circle";

const ErrorPage: FunctionComponent = () => {
  return (
    <>
      <main className="fixed bg-red-300 flex items-center justify-center h-screen w-screen top-0 left-0">
        <div className="flex justify-center">
          <CrossCircle className="w-40 h-40 text-white" />
        </div>
        <div>
          <header>
            <h2 className="text-white text-4xl font-bold">You've been extridited, leave at once</h2>
          </header>
        </div>
      </main>
    </>
  )
}

export default ErrorPage
