import { Progress } from "antd";
import model from "../../assets/Model.png";
import { skills } from "../../utils/about";
import figma from "../../assets/figma.svg";
const About = () => {
  return (
    <div className=" text-black mt-[20px] pt-[30px] min-h-screen">
      {/* Sarlavha qismi */}
      <div className="flex items-center justify-center flex-col text-center px-4">
        <h2 className="text-[40px] sm:text-[32px] font-bold">About Me</h2>
        <p className="text-gray-400 text-[20px] sm:text-[16px] font-500 mt-2 max-w-[90%]">
          User Interface And User Experience And Also Video Editing
        </p>
      </div>

      {/* Rasm va matn qismi */}
      <div className="flex flex-col md:flex-row items-center justify-around px-4 py-8 gap-8">
        <img
          src={model}
          alt="logo"
          className="w-full max-w-[400px] md:max-w-[300px] sm:max-w-[250px] h-auto"
        />
        <div className="font-500 text-[20px] sm:text-[16px] text-[#959595] max-w-[500px] px-4">
          <p>
            A software engineer, the modern-day architect of digital realms,
            navigates the ethereal landscapes of code, sculpting intangible
            structures that shape our technological world. With fingers poised
            over keyboards like virtuoso pianists, they compose symphonies of
            logic, their minds a labyrinth of algorithms and solutions. Their
            canvas is a screen, a vast expanse where lines of code dance in
            intricate patterns, weaving the fabric of programs and applications.
            Each keystroke is a brushstroke, crafting intricate architectures
            and breathing life into innovative designs. In this digital atelier,
            they don the mantle of problem solvers, confronting bugs and
            glitches like valiant knights in an ever-evolving quest for
            perfection. Debugging becomes a noble pursuit, unraveling the
            mysteries hidden within the tangled webs of code. designs. In this
            digital atelier.
          </p>
        </div>
      </div>

      {/* Skills qismi */}
   
    </div>
  );
};

export default About;
