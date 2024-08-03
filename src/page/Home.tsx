import { GainItem } from "../component/GainItem";
import { MySlider } from "../component/MySlider";
import { Swap } from "../component/Swap";
import { TotalBal } from "../component/TotalBal";

export const Home = () => {
  return (
    <div className="mt-10 flex-1 min-h-screen bg-black">
      <TotalBal />
      <Swap />
      <MySlider />
      <GainItem />
    </div>
  );
};
