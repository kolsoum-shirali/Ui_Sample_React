const socials = [
  { icon: "icon-whatsapp" },
  { icon: "icon-telegram" },
  { icon: "icon-instagram" },
];

export default function Socials() {
  return (
    <ul className="flex gap-2">
      {socials.map((social, index) => {
        return (
          <li key={index} className="flex justify-center items-center bg-liberty aspect-square rounded-full w-8">
            <i
              className={`${social.icon} text-lg lg:text-xl text-white cursor-pointer`}
            ></i>
          </li>
        );
      })}
    </ul>
  );
}
