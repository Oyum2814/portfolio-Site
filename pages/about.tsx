import Navbar from "../components/Navbar"
import Blogs from "../components/Blogs"

const About=()=>{
    return (
        <div className="flex justify-start  invisible lg:visible md:visible">
            <Navbar />
            <div className="h-[95vh]  my-auto w-[55%] mx-5  flex flex-col justify-start align-center overflow-y-scroll ">
            {/* <div className="text-3xl text-white m-auto">About Panel</div> */}
            <h1 className="text-white text-center font-bold text-3xl mt-3 font-mono">
            Skills
            </h1>
            <div className="h-auto rounded-lg py-7 w-[75%] mx-auto bg-[#151728] mt-[50px] ">
            <div className="text-white w-[80%] mx-auto ">
                <h2 className="font-bold mb-3 text-md">Front End Web Development</h2>
                <div className="shadow w-full bg-blue-100 rounded-xl">
                <div className=" rounded-xl bg-blue-600 text-sm leading-none py-2 text-center font-bold text-white w-[95%]">
                    Jquery, React, Next, Typescript, TailwindCSS
                </div>
                </div>
            </div>
    
            <div className="text-white w-[80%] mx-auto mt-[25px]">
                <h2 className="font-bold mb-3 text-md">Back End Web Development</h2>
                <div className="rounded-xl shadow w-full bg-blue-100">
                <div className="rounded-xl bg-blue-600 text-sm leading-none py-2 text-center font-bold text-white w-[95%]">
                    Node, Express, Flask, Django
                </div>
                </div>
            </div>
    
            <div className="text-white w-[80%] mx-auto mt-[25px]">
                <h2 className="font-bold mb-3 text-md">SQL</h2>
                <div className="rounded-xl shadow w-full bg-blue-100">
                <div className="rounded-xl bg-blue-600 text-sm leading-none py-2 text-center  font-bold text-white w-[90%]">
                    MySQL, Postgresql, Sqlite, SQL Alchemy, MongoDB
                </div>
                </div>
            </div>
            <div className="text-white w-[80%] mx-auto mt-[25px]">
                <h2 className="font-bold mb-3 text-md">Competitive Programming</h2>
                <div className="shadow w-full bg-blue-100 rounded-xl">
                <div className="rounded-xl bg-blue-600 text-sm leading-none py-2 text-center  font-bold text-white w-[90%]">
                    C++, Java, C, Python, DSA
                </div>
                </div>
            </div>
    
            <div className="text-white w-[80%] mx-auto mt-[25px]">
                <h2 className="font-bold mb-3 text-md">Web Scraping & Automation</h2>
                <div className="rounded-xl shadow w-full bg-blue-100">
                <div className="rounded-xl bg-blue-600 text-sm leading-none py-2 text-center font-bold text-white w-[90%]">
                    BeautifulSoup, Selenium
                </div>
                </div>
            </div>
    
            <div className="text-white w-[80%] mx-auto mt-[25px]">
                <h2 className="font-bold mb-3 text-md">Game Development</h2>
                <div className="rounded-xl shadow w-full bg-blue-100">
                <div className="rounded-xl bg-blue-600 text-sm leading-none py-2 text-center font-bold text-white w-[90%]">
                    Unity 3D, Blender, C# Scripting
                </div>
                </div>
            </div>
            </div>
            <div className="-my-6 p-4 mt-8 mx-auto">
            {/* <!-- Item #1 --> */}
            <div className="relative pl-8 sm:pl-32 py-6 group">
                {/* <!-- Purple label --> */}
                <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
                Education
                </div>
                {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                <div className="my-4 flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                    May, 2020
                </time>
                <div className="text-xl font-bold text-white">
                    St Joseph's College, Prayagraj
                </div>
                </div>
                {/* <!-- Content --> */}
                <div className="text-slate-500">
                Secured 90.8% marks in Secondary (X) <br /> 88% in Higher Secondary
                (XII)
                </div>
                {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                <div className="my-4 flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                    Sept, 2021
                </time>
                <div className="text-xl font-bold text-white">
                    SRM Institute of Science and Technology
                </div>
                </div>
                {/* <!-- Content --> */}
                <div className="text-slate-500">CGPA (Current) : 9.40</div>
            </div>
    
            {/* <!-- Item #3 --> */}
            <div className="relative pl-8 sm:pl-32 py-6 group">
                {/* <!-- Purple label --> */}
                <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
                Clubs
                </div>
                {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                <div className="my-4 flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                    Oct, 2021
                </time>
                <div className="text-xl font-bold text-white">Next Tech Lab</div>
                </div>
                {/* <!-- Content --> */}
                <div className="text-slate-500">Current Position : Member</div>
    
                {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                <div className="my-4 flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                    Nov, 2022
                </time>
                <div className="text-xl font-bold text-white">NSCC SRM</div>
                </div>
                {/* <!-- Content --> */}
                <div className="text-slate-500">Current Position : President</div>
                {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                <div className="my-4 flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                    Jun, 2023
                </time>
                <div className="text-xl font-bold text-white">TPH SRM</div>
                </div>
                {/* <!-- Content --> */}
                <div className="text-slate-500">Current Position : Web 2.0 Head</div>
            </div>
    
            {/* <!-- Item #4 --> */}
            <div className="relative pl-8 sm:pl-32 py-6 group">
                {/* <!-- Purple label --> */}
                <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
                Achievements and Promotions
                </div>
                {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                <div className="my-4 flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                    May, 2023
                </time>
                <div className="text-xl font-bold text-white">NSCC SRM</div>
                </div>
                {/* <!-- Content --> */}
                <div className="text-slate-500">
                Was Promoted to President of the Club
                </div>
                {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                <div className="my-4 flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                    Aug, 2023
                </time>
                <div className="text-xl font-bold text-white">1st Runners Up</div>
                </div>
                {/* <!-- Content --> */}
                <div className="text-slate-500">Quantathon 1.0 Hackathon</div>
            </div>
            </div>
            </div>
            <Blogs />
        </div>
    );
}
export default About