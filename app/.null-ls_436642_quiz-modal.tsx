"use client"

import type { FunctionComponent } from "react"
import { useState } from "react"

const quotes = [
  'I will press and press...',
  'My belle, my head o...',
  'See this my big belle',
  '... Nye nye nye, just dey emit',
  'Kami sama!!!',
  'See this fine girl',
  'Ah Nissi!'
]

const QuizModal: FunctionComponent = () => {
  const [activeQuote, setActiveQuote] = useState("")

  return (
    <div className="fixed top-0 left-0 w-full h-full backdrop-filter backdrop-blur-lg">
      <div className="flex items-center justify-center h-full p-4 sm:p-0">
        <div className="max-w-[400px] p-4 rounded-md bg-white drop-shadow-lg">
          <header>
            <h3 className="font-semibold text-2xl font-montserrat">Select Sammy's favourite quote in 100lvl</h3>
          </header>
          <div className="my-4 flex flex-wrap">
            {quotes.map(quote => (
              <button type="button" onClick={() => setActiveQuote(quote)} key={quote} className="shadow-md border-2 border-black rounded-md py-1 px-2">
                <span className="font-semibold font-notoSans">{quote}</span>
              </button>
            ))}
          </div>
          <div>
            <button
              type="button"
              className="rounded-md w-full grow border-2 border-blue-600 bg-blue-600 p-2 font-robotoMono shadow-md font-semibold text-white duration-300 ease-in-out hover:bg-white hover:text-blue-600"
            >
              💀 Try your luck 💀
            </button>
            <div>
              <p className="text-xs font-slate-700">
                *Getting the selection wrong would have severe consequences
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizModal
