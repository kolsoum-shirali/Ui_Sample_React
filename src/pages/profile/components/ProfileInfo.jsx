import UserImg from "../../../assets/img/user.png";
export default function ProfileInfo() {
  return (
    <div className="shadow border border-gray-400/20 rounded-md p-5 md:p-10">
      <div className="relative flex justify-between before:absolute before:-bottom-[2px] before:right-0 before:w-20  md:before:w-28 before:h-[3px] before:bg-green-800 border-b border-gray-400/20 pb-2">
        <h3 className="text-base md:text-xl font-semibold ">پروفایل شما</h3>
        <button className="bg-green-200 text-gree-600 px-2 py-2 md:px-8 rounded-md text-sm lg:text-base hover:transition-colors hover:bg-green-600 hover:text-white">
          ویرایش پروفایل
        </button>
      </div>
      <div className="grid grid-cols-6 gap-5 mt-5">
        <div className="col-span-6 lg:col-span-1">
          <div className="h-24 aspect-square flex justify-center">
            <img
              src={UserImg}
              alt=""
              className="w-full h-auto rounded-full object-cover outline-double outline-green-800/50"
            />
          </div>
        </div>
        <div className="col-span-6 lg:col-span-2 space-y-3">
          <div>
            <p className="mb-2">نام</p>
            <input
              type="text"
              id="email"
              autoComplete="off"
              placeholder="نام شما"
              className="w-full h-11 border border-gray-400/20 focus:border focus:border-green-800/50 px-3 rounded-md placeholder:text-sm text-sm bg-gray-100/50 placeholder:text-gray-500"
            />
          </div>
          <div>
            <p className="mb-2">شماره تماس</p>
            <input
              type="text"
              id="email"
              autoComplete="off"
              placeholder="نام شما"
              className="w-full h-11 border border-gray-400/20 focus:border focus:border-green-800/50 px-3 rounded-md placeholder:text-sm text-sm bg-gray-100/50 placeholder:text-gray-500"
            />
          </div>
        </div>
        <div className="col-span-6 lg:col-span-2">
          <p className="mb-2">ایمیل</p>
          <input
            type="text"
            id="email"
            autoComplete="off"
            placeholder="ایمیل"
            className="w-full h-11 border border-gray-400/20 focus:border focus:border-green-800/50 px-3 rounded-md placeholder:text-sm text-sm bg-gray-100/50 placeholder:text-gray-500"
          />
        </div>
        <div className="col-span-6 lg:col-span-1 flex items-center justify-end">
          <button className="bg-green-600 text-white px-2 py-2 md:px-8 mt-1 rounded-md text-sm lg:text-base hover:bg-white hover:transition-colors hover:text-green-800 border-2 border-green-600">
            تغییر پسورد
          </button>
        </div>
      </div>
    </div>
  );
}
