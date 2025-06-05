import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/profile"); 
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[375px] h-[812px] bg-white rounded-md shadow">
        <div className="w-[188px] h-[69px] mt-[40px] ml-[20px] text-left font-medium text-[28px] leading-[36px] font-[Rubik] tracking-[0px] text-[#1D2226] opacity-100">
          Create your PopX account
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            required
            className="mt-[31px] ml-[20px] w-[335px] h-[40px] border border-[#CBCBCB] rounded-[6px] opacity-100 px-3"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            required
            className="mt-[31px] ml-[20px] w-[335px] h-[40px] border border-[#CBCBCB] rounded-[6px] opacity-100 px-3"
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            className="mt-[31px] ml-[20px] w-[335px] h-[40px] border border-[#CBCBCB] rounded-[6px] opacity-100 px-3"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="mt-[31px] ml-[20px] w-[335px] h-[40px] border border-[#CBCBCB] rounded-[6px] opacity-100 px-3"
          />
          <input
            type="text"
            placeholder="Company Name"
            required
            className="mt-[31px] ml-[20px] w-[335px] h-[40px] border border-[#CBCBCB] rounded-[6px] opacity-100 px-3"
          />

          <div className="w-[132px] h-[47px]">
            <div className="mt-[31px] ml-[20px] w-[140px] h-[15px] text-[13px] leading-[17px] font-normal font-[Rubik] text-[#1D2226]">
              Are you an Agency?
              <span className="w-[6px] h-[15px] text-[13px] leading-[17px] font-normal font-[Rubik] text-[#DD4A3D]">*</span>
            </div>
            <div className="mt-[15px] ml-[20px]">
              <label className="inline-flex items-center mr-[10px]">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  required
                  className="form-radio h-[22px] w-[22px] text-[#642AF5] border-[#6C25FF] focus:ring-[#6C25FF]"
                />
                <span className="ml-2 text-[14px] text-[#1D2226] font-[Rubik]">Yes</span>
              </label>

              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  required
                  className="form-radio h-[22px] w-[22px] text-[#6C25FF] border-[#6C25FF] focus:ring-[#6C25FF]"
                />
                <span className="ml-2 text-[14px] text-[#1D2226] font-[Rubik]">No</span>
              </label>
            </div>
          </div>

          <div className="mt-[215px] ml-[20px] w-[335px] h-[46px]">
            <button
              type="submit"
              className="w-full h-full bg-[#6C25FF] text-white rounded-md text-[16px] leading-[17px] font-medium font-[Rubik] opacity-100"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
