"use client"

import Loading from "components/ui/loading"
import { useRouter } from "next/navigation"
import type { FunctionComponent } from "react"
import { useState } from "react"

const quotes = [
  'E be like say na to bomb',
  'See dis fine girl',
  'Thats cool 😎',
  'PHP dey mad o ',
  'I don leave school for una 🚶🚶',
  'Omo ehn!',
  'Sir Bobby 🙌',
  'Head wan blow 🤯🤯',
  'My boss',
  'Na to learn farm work now ..'
]
const correctQuote = quotes[5]

const QuizModal: FunctionComponent<{ onClose: () => void }> = ({ onClose }) => {
  const router = useRouter()
  const [activeQuote, setActiveQuote] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="fixed top-0 left-0 w-full h-full backdrop-filter backdrop-blur-lg">
      <div className="flex items-center justify-center h-full p-4 sm:p-0">
        <div className="max-w-[400px] p-4 rounded-md bg-white drop-shadow-lg">
          <header>
            <h3 className="font-semibold text-xl font-montserrat">Proof of Kelvinism: Select Kelvin&apos;s favourite quote</h3>
          </header>
          <div className="my-4 flex flex-wrap gap-2">
            {quotes.map(quote => (
              <button type="button" onClick={() => setActiveQuote(quote)} key={quote} className={`hover:bg-black hover:text-white duration-300 ease-in-out ${quote === activeQuote ? 'text-white bg-black' : 'text-black bg-white'} shadow-md border-2 border-black rounded-md py-1 px-2`}>
                <span className="font-semibold text-sm font-notoSans">{quote}</span>
              </button>
            ))}
          </div>
          <div>
            <button
              type="button"
              onClick={() => {
                if (isLoading) return
                setIsLoading(true)
                setTimeout(() => {
                  if (activeQuote !== correctQuote) {
                    router.push("/error")
                    return
                  }

                  setIsLoading(false)
                  onClose()
                }, 2000)
              }}
              className={`border-2 border-blue-600 p-2 font-robotoMono shadow-md font-semibold transition duration-300 ease-in-out bg-blue-600 text-white ${isLoading ? 'flex w-auto h-auto rounded-full mx-auto' : 'flex w-full justify-center rounded-md hover:bg-white hover:text-blue-600'}`}
            >
              {isLoading ? (
                <div className="flex justify-center">
                  <Loading className="w-6 h-6 fill-white text-blue-600" />
                </div>
              ) : <>💀 Try your luck 💀</>}
            </button>
            <div>
              <p className="my-1 text-xs font-slate-700">
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
