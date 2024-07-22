const slideritem = [
  {
    title: "Hot",
  },
  {
    title: "Gainers",
  },
  {
    title: "Losers",
  },
  {
    title: "New",
  },
];

export const GainItem = () => {
  return (
    <div className="bg-gray-950 text-white mt-3 py-14 mb-10 px-4 ">
      <div className=" py-5 p-2 flex-wrap flex justify-around bg-gray-600 items-center rounded-lg">
        {slideritem.map((item, index) => (
          <div key={index} className="">
            <p className="mb-5 text-lg font-bold hover:text-orange-500 cursor-pointer">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
