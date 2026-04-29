import BlogCard from "./BlogCard";
import blog1 from "../../../../assets/img/blog1.png";
import blog2 from "../../../../assets/img/blog2.png";
import blog3 from "../../../../assets/img/blog3.png";
const blogs = [
  {
    img: blog1,
    title: "Top essential Trends in 2021",
    desc: "More off this less hello samlande lied much over tightly circa horse taped mightly",
    id:1
  },
  {
    img: blog2,
    title: "Top essential Trends in 2021",
    desc: "More off this less hello samlande lied much over tightly circa horse taped mightly",
    id:2
  },
  {
    img: blog3,
    title: "Top essential Trends in 2021",
    desc: "More off this less hello samlande lied much over tightly circa horse taped mightly",
    id:3
  },
];

export default function LatestBlog() {
  return (
    <div className="md:w-8/12 mx-auto max-md:px-5">
      <h1 className="text-center text-2xl lg:text-4xl text-liberty font-bold">Latest Blog</h1>
      <div className="grid grid-cols-3 gap-5 lg:gap-14 mt-5 md:mt-10">
        {blogs.map((blog, index) => (
          <BlogCard blog={blog} key={index}  />
        ))}
      </div>
    </div>
  );
}
