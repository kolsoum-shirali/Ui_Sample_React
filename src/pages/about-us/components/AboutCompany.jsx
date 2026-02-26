import img1 from "../../../assets/img/1.jpg";
import img2 from "../../../assets/img/2.jpg";
import img3 from "../../../assets/img/3.jpg";
import img4 from "../../../assets/img/4.png";

const images = [{ img: img1 }, { img: img2 }, { img: img3 }, { img: img4 }];
const options = [
  { title: "کاربران ثبت نام شده", desc: 1520 },
  { title: "بازدیدکنندگان در روز", desc: 780 },
  { title: "مجموع محصولات", desc: 15 },
];
export default function AboutCompany() {
  return (
    <section className="grid grid-cols-2 gap-10 items-center">
      <div className="col-span-2 lg:col-span-1 space-y-6">
        <h1 className="text-2xl font-semibold text-center">
          انگیزه ما این است که بهترین ها را برای کسانی که شایسته هستند ارائه
          دهیم
        </h1>
        <p className="text-justify text-base text-gray-500">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
        <ul className="grid grid-cols-3 md:gap-7">
          {options.map((option, index) => (
            <li
              key={index}
              className="col-span-3 md:col-span-1 flex flex-col md:space-y-2 p-3 md:border-l border-gray-400/40 last:border-l-0"
            >
              <span className="font-semibold text-lg">{option.desc}</span>
              <span className="text-gray-500 text-base">{option.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-2 lg:col-span-1">
        <div className="grid grid-cols-2 gap-2">
          {images.map((item, index) => {
            return (
              <div key={index} className="col-span-1">
                <div className="h-48 lg:h-64 flex justify-center">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
