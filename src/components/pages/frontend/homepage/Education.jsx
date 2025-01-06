import { imgPath } from "@/components/helpers/functions-general";
import { FaCalendarAlt, FaGraduationCap, FaMapPin } from "react-icons/fa";

const Education = () => {
  return (
    <section className="py-16 px-32 bg-gray-800">
      <div className="container">
        <div className="grid grid-cols-[2fr_2fr] gap-10">
          <h2 className="text-[60px]">Education</h2>
          <div className="grid grid-cols-2 gap-5 relative">
            <div>
              <div className="relative group">
                <img
                  src={`${imgPath}/School1 (1).png`}
                  alt=""
                  className="w-[270px] cursor-pointer hover:opacity-0 transition-all absolute"
                />
              </div>

              <div className="text-lg font-semibold border-black bg-white max-w-[270px] rounded-md absolute top-8 opacity-0 hover:opacity-100 h-[280px] transition-all">
                <p className="ml-5 text-center font-bold text-black">
                  Don Eulogio Capino Elementary School Annex Putol
                </p>
                <p className="mt-10 text-xl flex justify-center items-center gap-2">
                  <FaMapPin />
                  Dolores Quezon
                </p>
                <p className="mt-3 text-xl flex justify-center items-center gap-2">
                  <FaCalendarAlt />
                  2008-2012
                </p>
              </div>
            </div>
            <div>
              <img
                src={`${imgPath}/School1 (2).png`}
                alt=""
                className="w-[270px] cursor-pointer"
              />
              <div className="text-lg font-semibold">
                <p className="mt-5 flex items-center gap-2">
                  <FaMapPin />
                  Tiaong Quezon
                </p>
                <p className="mt-3 flex items-center gap-2">
                  <FaCalendarAlt />
                  2012-2016
                </p>
              </div>
            </div>
            <div>
              <img
                src={`${imgPath}/School1 (2).png`}
                alt=""
                className="w-[270px] cursor-pointer"
              />
              <div className="text-lg font-semibold">
                <p className="mt-5 flex items-center gap-2">
                  <FaMapPin />
                  Tiaong Quezon
                </p>
                <p className="mt-3 flex items-center gap-2">
                  <FaCalendarAlt />
                  2017-2019
                </p>
              </div>
            </div>
            <div>
              <img
                src={`${imgPath}/School1 (3).png`}
                alt=""
                className="w-[270px] cursor-pointer"
              />
              <div className="text-lg font-semibold">
                <p className="mt-5 flex items-center gap-2">
                  <FaMapPin />
                  San Pablo City
                </p>
                <p className="mt-3 flex items-center gap-2">
                  <FaCalendarAlt />
                  2021-Present
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
