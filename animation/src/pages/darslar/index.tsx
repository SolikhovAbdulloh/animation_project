import { Carousel } from "antd";
import lula from "/lula.png";
import nan from "/lulu.png";
import nana from "/nana.png";
import lulu from "/lulu_nana.png";
const Lessons = () => {
  return (
    <div>
      <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={3000}>
        <div className="w-90% flex items-center justify-center m-auto  ">
          <img className="h-[700px] w-full" src={lula} alt="rasm" />
        </div>
        <div>
          <img className="h-[700px] w-full" src={lulu} alt="rasm" />
        </div>
        <div>
          <img className="h-[700px] w-full" src={nan} alt="rasm" />
        </div>
        <div>
          <img className="h-[700px] w-full" src={nana} alt="rasm" />
        </div>
      </Carousel>
    </div>
  );
};

export default Lessons;
