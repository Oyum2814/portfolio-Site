import Blogs from "../components/Blogs"
import Navbar from "../components/Navbar"
const Resume = ()=>{
    return(
    <div className="flex justify-start invisible lg:visible md:visible">
        <Navbar />
        <div className="h-[95vh] rounded-[8px] my-auto w-[55%] mx-5 bg-[#151728] flex flex-col justify-start align-center ">
            <object
                width="100%"
                data="https://firebasestorage.googleapis.com/v0/b/authentication-project-dfc5e.appspot.com/o/Assets%2FMy_Resume.pdf?alt=media&token=bc0d95ef-aa4a-4f9d-b72f-f19b4513290a"
                type="application/pdf"
                className="h-full"
                aria-label=""
            ></object>
        </div>
        <Blogs />
    </div>
    
    );
}

export default Resume;