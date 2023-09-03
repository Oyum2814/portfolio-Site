import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'
import Navbar from "../components/Navbar"
import Blogs from "../components/Blogs"

export default function Home() {
  return (
    <div className="flex justify-start">
      <Navbar />
      <div className="h-[95vh] overflow-y-scroll p-7  my-auto w-[55%] mx-2   flex flex-col justify-start align-center">
      {/* Profile Cover and Profile Name Display */}
      <div className="bg-[#151728] rounded-[8px]">
        <div className="profileCover w-auto h-[250px] "></div>
        <div>
          <div className="flex justify-start mt-[-100px] align-center h-auto">
            <img
              src="https://avatars.githubusercontent.com/u/72745185?v=4"
              alt=""
              className="ml-5 rounded-full h-[120px] w-[120px] bg-gray-600 mt-[30px] z-0"
            />
            <div className="text-white text-center my-auto ml-[5%] font-bold text-xl z-0">
              Om Mukherjee
            </div>
          </div>
        </div>
        <div className="h-[0.5px] mt-5 w-full bg-gray-700 "></div>
      </div>

      <div className="flex justify-between align-center py-5">
        {/* Left Column */}
        <div>
          {/* Introduction */}
          <div className="h-auto flex flex-col justify-center align-center w-[300px] bg-[#151728] p-4 rounded-md">
            <h1 className="text-[#5c5e6e] font-bold text-xl tracking-wider">
              Introduction
            </h1>
            <div className="flex my-2">
              <img
                className="h-[25px] w-[25px]"
                src="https://www.pngall.com/wp-content/uploads/11/World-Wide-Web-PNG-Background.png"
                alt=""
              />
              <div className="text-gray-400 ml-3">Full Stack Web Developer</div>
            </div>
            <div className="flex my-2">
              <img
                alt=""
                className="h-[25px] w-[25px]"
                src="https://www.clker.com/cliparts/w/r/Q/0/x/D/search-icon-light-grey-hi.png"
              />
              <div className="text-gray-400 ml-3">
                Web Scraping And Automation
              </div>
            </div>
            <div className="flex my-2">
              <img
                alt=""
                className="h-[25px] w-[25px]"
                src="https://icones.pro/wp-content/uploads/2021/04/icone-d-ordinateur-gris.png"
              />
              <div className="text-gray-400 ml-3">Competetive Programmer</div>
            </div>
          </div>
        </div>
        {/* Right Column */}
        <div>
          <div className="h-auto w-[350px] bg-[#151728] pt-4 flex flex-col justify-start items-start rounded-[8px]">
            <div className="flex w-full justify-evenly text-gray-400 px-4">
              <div className="bg-[#2e2e40] text-white px-3 rounded-[21px] cursor-pointer">
                Status
              </div>
              <div className="cursor-pointer">Photos</div>
              <div className="cursor-pointer">Videos</div>
            </div>
            <div className="mt-8 flex justify-center p-2">
              <img
                src="https://avatars.githubusercontent.com/u/72745185?s=400&u=43090f96475c9fd9dec3aac54c873ed3dc99969a&v=4"
                alt=""
                className="h-10 w-10 ml-2 rounded-full"
              />
              <input
                placeholder="Write something"
                className="p-2 ml-2 bg-transparent text-white w-full"
              />
            </div>
            <div className="w-full h-[0.5px] bg-gray-600 mt-3"></div>
            <div className="w-full flex justify-end p-3">
              <div className="border-2 border-blue-600 text-sm rounded-lg px-3 py-2 text-blue-400 cursor-pointer hover:bg-blue-600 hover:text-blue-200">
                Submit
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Blogs />

    </div>
  )
}
