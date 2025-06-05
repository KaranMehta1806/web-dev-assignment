import { useNavigate } from "react-router-dom";

export default function LandingScreen(){

    const navigate = useNavigate();    

    return(
        <div className="flex justify-center items-center min-h-screen">
             <div className=" w-[375px] h-[812px] bg-white p-6 rounded-md shadow">
                <div className="mt-[549px] w-[231px] h-[33px] font-medium text-[28px] leading-[17px] font-[Rubik] text-[#1D2226] tracking-[0px] text-left ">
                    Welcome to PopX
                </div>
                <div className="mt-[7px] w-[240px] h-[44px] text-left  font-medium text-[18px] leading-[17px] font-[Rubik] text-[#1D2226] opacity-[0.6] tracking-[0px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </div>
                <div className="mt-[18px] w-[335px] h-[46px] ">
                    <button className="w-full h-full bg-[#6C25FF] text-white rounded-md text-[16px] leading-[17px] font-medium font-[Rubik] opacity-100 opacity-100"
                    onClick={() => navigate("/signup")}>
                        Create Account
                    </button>
                </div>
                <div className="mt-[10px] w-[335px] h-[46px] ">
                    <button className="w-full h-full bg-[#6C25FF4B]  text-black rounded-md text-[16px] leading-[17px] font-medium font-[Rubik] opacity-100 opacity-100"
                    onClick={() => navigate("/login")}>
                        Already have an account? Login
                    </button>
                </div>
              
  </div>

              
        </div>
       
    )
}