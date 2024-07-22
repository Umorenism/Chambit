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
      <div className=" py-5 p-2 flex-wrap flex justify-around">
        {slideritem.map((item, index) => (
          <div key={index}>
            <p className="mb-5">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
