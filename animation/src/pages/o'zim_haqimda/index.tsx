import { Progress } from "antd";
import model from "../../assets/Model.png";
import figma from "../../assets/figma.svg"
import { skills } from "../../utils/about";
const About = () => {
  return (
    <div className="bg-black text-white !mt-[20px] pt-[30px] ">
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-[40px] font-bold">About Me</h2>
        <p className="text-gray-400 text-[20px] font-500 mt-2">
          User Interface And User Experience And Also Video Editing
        </p>
      </div>
      <div className="flex items-center justify-around">
        <img src={model} alt="logo" />
        <div className="font-500 text-[20px] text-[#959595] max-w-[500px]">
          <p>
            A software engineer, the modern-day architect of digital realms,
            navigates the ethereal landscapes of code, sculpting intangible
            structures that shape our technological world. With fingers poised
            over keyboards like virtuoso pianists, they compose symphonies of
            logic, their minds a labyrinth of algorithms and solutions.Their
            canvas is a screen, a vast expanse where lines of code dance in
            intricate patterns, weaving the fabric of programs and applications.
            Each keystroke is a brushstroke, crafting intricate architectures
            and breathing life into innovative designs.In this digital atelier,
            they don the mantle of problem solvers, confronting bugs and
            glitches like valiant knights in an ever-evolving quest for
            perfection. Debugging becomes a noble pursuit, unraveling the
            mysteries hidden within the tangled webs of code. designs.In this
            digital atelier.
          </p>
          <button className="border border-gray-400 text-gray-300 cursor-pointer w-[208px] h-[48px] rounded-[8px] !mt-5 bg-orange-500">
            Download CV
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center gap-[70px]">
        {skills.map((val) => (
          <div className="!my-[50px]">
            <Progress
              type="dashboard"
              percent={val.percent}
              style={{ padding: 2 }}
              strokeColor="#FD6F00"
              format={() => (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <img
                    src={figma}
                    alt={val.name}
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>
              )}
            />
            <div className="flex items-center justify-center flex-col">
              <p className="text-[30px] text-[#FD6F00] font-700">
                {val.percent}%
              </p>
              <p className="text-[24px] font-[600] text-[grey]">{val.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
