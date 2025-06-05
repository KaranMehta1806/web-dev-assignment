import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/profile"); 
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[375px] h-[812px] bg-white rounded-md shadow">
        <div className="w-[188px] h-[69px] mt-[40px] ml-[20px] text-left font-medium text-[28px] leading-[36px] font-[Rubik] tracking-[0px] text-[#1D2226] opacity-60">
          Signin to your PopX account
        </div>
        <div className="w-[240px] h-[48px] mt-[14px] ml-[20px] text-left font-medium text-[18px] leading-[26px] font-[Rubik] tracking-[0px] text-[#919191] opacity-100">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </div>

        <form onSubmit={handleSubmit}>
        
          
          <input
            type="email"
            placeholder="Email Address"
            required
             disabled
            className="mt-[31px] ml-[20px] w-[335px] h-[40px] border border-[#CBCBCB] rounded-[6px] opacity-100 px-3"
          />
          <input
            type="password"
            placeholder="Password"
            required
             disabled
            className="mt-[20px] ml-[20px] w-[335px] h-[40px] border border-[#CBCBCB] rounded-[6px] opacity-100 px-3"
          />
          

          

          <div className="mt-[18px] ml-[20px] w-[335px] h-[46px]">
            <button
              type="submit"
              className="w-full h-full bg-[#CBCBCB] text-white rounded-md text-[16px] leading-[17px] font-medium font-[Rubik] opacity-100"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
