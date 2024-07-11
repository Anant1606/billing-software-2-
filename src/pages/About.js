import { Footer } from "./index"
import { LogIn, CreateAccount } from "../buttons"

export default function About() {
  return (
    <>
      <section className="bg-teal-200 py-10 lg:py-32 ">
        <div className="max-width">
          <div className="overlay">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center mb-3 text-slate-800 lg:mb-8">
              About Invoicer-Created by Anant sharma
            </h1>
            <ul className="md:flex items-center justify-center mt-10 xl:max-w-3xl xl:mx-auto">
              <li className="flex flex-col text-slate-700 mb-5 md:flex-row md:items-center md:mb-0 md:mr-5">
                <CreateAccount />
              </li>
              <li className="flex flex-col text-slate-700 md:flex-row md:items-center">
                <LogIn />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="slant-left"></div>
      <Footer />
    </>
  )
}
