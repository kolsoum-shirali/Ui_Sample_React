import Logo from "../../assets/img/logo.png";
import Divider from "@mui/material/Divider";

export default function Register() {
  return (
    <div className="p-3 lg:p-10">
      <div className="flex flex-col justify-center items-center">
        <img src={Logo} alt="" className="w-52" />
      </div>
      <div className="lg:w-2/5 mx-auto mt-5 lg:mt-10 space-y-5">
        <div className="shadow-md border border-gray-400/20 p-3 lg:p-10 rounded-md">
          <div className="text-center space-y-3">
            <h1 className="text-green-800 font-semibold text-2xl">
              عضو خانواده بزرگ گرینی شوید!
            </h1>
            <h2 className="text-gray-500 text-base">
              ثبت نام شما تنها چند دقیقه زمان می برد.
            </h2>
          </div>
          <form className="flex flex-col mt-7 space-y-4">
            <input
              type="text"
              autoComplete="off"
              id="name"
              placeholder="نام خود را وارد کنید"
              className="h-11 border border-gray-400/20 focus:border focus:border-green-800/50 px-3 rounded-md placeholder:text-sm text-sm bg-gray-100/50 placeholder:text-gray-500"
            />
            <input
              type="text"
              id="email"
              autoComplete="off"
              placeholder="آدرس ایمیل خود را وارد کنید"
              className="h-11 border border-gray-400/20 focus:border focus:border-green-800/50 px-3 rounded-md placeholder:text-sm text-sm bg-gray-100/50 placeholder:text-gray-500"
            />
            <input
              type="text"
              autoComplete="off"
              id="pass"
              placeholder="پسوورد خود را وارد کنید"
              className="h-11 border border-gray-400/20 focus:border focus:border-green-800/50 px-3 rounded-md placeholder:text-sm text-sm bg-gray-100/50 placeholder:text-gray-500"
            />
            <input
              type="text"
              id="rePass"
              autoComplete="off"
              placeholder="پسوورد را دوباره وارد کنید"
              className="h-11 border border-gray-400/20 focus:border focus:border-green-800/50 px-3 rounded-md placeholder:text-sm text-sm bg-gray-100/50 placeholder:text-gray-500"
            />
            <div className="flex items-center text-sm gap-2">
              <input type="checkbox" />

              <span className="text-green-800">
                قبول تمام قوانین و شرایط استفاده
              </span>
            </div>
            <button className="bg-green-600 text-white p-3 md:px-8 rounded-md text-sm lg:text-base hover:bg-white hover:transition-colors hover:text-green-800 border-2 border-green-600">
              ثبت نام
            </button>
          </form>
        </div>
        <div className="shadow-md border border-gray-400/20 p-5 rounded-md">
          <p className="text-center text-sm">
            از قبل عضو هستید؟
            <span className="text-green-800 font-semibold">وارد شوید</span>
          </p>
        </div>
        <div className="flex items-center justify-center  gap-2 text-sm  text-green-800">
          <p>GREENY</p>
          <Divider orientation="vertical" flexItem />
          <div >
            <span>Copyright by</span>
            <i className="icon-copyright"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
