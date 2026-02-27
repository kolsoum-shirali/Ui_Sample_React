import { Link } from "react-router-dom";

import blog1 from "../../../assets/img/Products/1.webp";
import blog2 from "../../../assets/img/Products/2.jpg";
import blog3 from "../../../assets/img/Products/3.jpg";
import blog4 from "../../../assets/img/Products/4.jpg";
import blog5 from "../../../assets/img/Products/5.jpeg";
import blog6 from "../../../assets/img/Products/6.jpg";
import blog7 from "../../../assets/img/Products/7.jpg";
import blog8 from "../../../assets/img/Products/8.jpg";
const blogs = [
  {
    img: blog1,
    title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    img: blog2,
    title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    img: blog3,
    title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    img: blog4,
    title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    img: blog5,
    title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    img: blog6,
    title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    img: blog7,
    title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    img: blog8,
    title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    desc: "لورم ایپسوم  متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
];

export default function PopularBlogs() {
  return (
    <div className="shadow-md rounded-md border border-gray-400/20 p-5">
      <h3 className="text-xl font-semibold relative before:absolute before:-bottom-2 before:right-0 before:w-14 before:h-[3px] before:bg-green-800">
        مطالب محبوب
      </h3>
      <div className="mt-5">
        {blogs.map((blog, index) => (
          <Link to="/" className="bg-red-400">
            <div
              key={index}
              className="grid grid-cols-12 gap-3 p-3 rounded-md hover:text-green-800 border-b border-gray-400/20  last:border-0 hover:bg-slate-100 group"
            >
              <div className="col-span-4 h-24 rounded-sm flex justify-center overflow-hidden">
                <img
                  src={blog.img}
                  alt={blog.img}
                  className="w-full h-auto rounded-md object-cover"
                />
              </div>
              <div className="col-span-8 text-sm flex flex-col justify-between">
                <p className="line-clamp-2">{blog.title}</p>
                <p className="text-gray-500 group-hover:text-green-800">
                  5 دی 1405
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
