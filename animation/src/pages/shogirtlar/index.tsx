import img1 from "../../assets/lula.png";
import img2 from "../../assets/lulu.png";
const Students = () => {
  return (
    <div className="flex items-center justify-around gap-[30px] ">
      <div>
        <p className="font-400 text-[44px] text-white">
          Change your <br />
          Digital Experience
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div>
          <img className="w-[200px] h-[200px]" src={img1} alt="" />
        </div>
        <div >
          <img className="w-[250px]   h-[250px]" src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Students;
