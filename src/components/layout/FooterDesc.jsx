export default function FooteDesc() {
  return (
    <div className="lg:col-span-2 space-y-5">
      <h1 className="font-bold text-4xl">HeKto</h1>
     <div className="flex">
       <input
        type="text"
        id="search"
        name="search"
        autoComplete="off"
        placeholder="Enter Email Address"
        className="h-11 border border-gray-400/20 focus:border focus:border-mainPink px-3 placeholder:text-sm text-sm placeholder:text-gray-400 w-6/12"
      />
      <button className="bg-mainPink text-white px-10 rounded-sm text-sm">Sign Up</button>
     </div>
      <div className="text-sm lg:text-base text-gray-400 space-y-1">
        <h6>Contact Info</h6>
        <p>17 Princess Road,London,Greater London NW1 8JR, UK</p>
      </div>
    </div>
  );
}
