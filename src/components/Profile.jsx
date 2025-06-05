export default function Profile() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className=" w-[375px] h-[812px] bg-[#F7F8F9]  rounded-md shadow">
        <div className=" w-[375px] h-[68px] bg-[#FFFFFF] font-medium text-[28px] leading-[17px] font-[Rubik] text-[#1D2226] tracking-[0px]  ">
          <div className="w-[166px] h-[22px] text-left pt-[27px] pl-[14px] text-[18px] leading-[21px] font-[Rubik] tracking-[0px] text-[#1D2226]">
            Account Settings
          </div>
        </div>
        <div className="flex mt-[30px] ml-[20px] w-[375px] h-[76px]">
          <div className="h-[76px] w-[76px] bg-[url('/img/Ellipse114.png')] bg-no-repeat bg-[length:76px_76px] bg-origin-padding bg-transparent"></div>
          <div className="ml-[20px]">
            <div className="font-medium text-[15px] leading-[19px] font-[Rubik] tracking-normal text-[#1D2226] capitalize opacity-100">
              Marry Doe
            </div>
            <div className="font-normal text-[14px] leading-[19px] font-[Rubik] tracking-[0px] mt-[6px] text-[#1D2226] capitalize opacity-100">
              Marry@Gmail.Com
            </div>
          </div>
        </div>

        <div className="mt-[30px] ml-[20px] w-[337px] h-[63px]  text-left font-normal text-[14px] leading-[22px] font-[Rubik] tracking-normal text-[#1D2226] capitalize opacity-100">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </div>
        <div className="mt-[20px] w-[375px] border-t border-dashed border-[#CBCBCB] opacity-100"></div>
      </div>
    </div>
  );
}
