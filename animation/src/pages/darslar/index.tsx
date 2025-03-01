import { Carousel } from "antd";
import lula from "../../assets/lula.png";
import nan from "../../assets/lulu.png"
import nana from "../../assets/nana.png";
import lulu from "../../assets/lulu_nana.png"
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
