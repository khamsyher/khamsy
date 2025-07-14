import { Timeline } from "../components/ui/Timeline";
import { useTranslation } from "react-i18next";
import CodingMan from "../assets/images/coding-man.jpg"
import CodingMan2 from "../assets/images/Man-Coding.jpg"
import Graduated from "../assets/images/Graduated Photo.jpg"
import Studying from "../assets/images/study at soutsaka.jpg"
import Zion from "../assets/images/kham at zion.jpg"

const Education = () => {
   const { t } = useTranslation();
  const data = [
    {
      title: "2021",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm ">
            Started my academic journey in <strong>Computer Programming</strong> at <strong>Soutsaka Institute</strong>. Focused on foundational topics including algorithms, web development, and database systems.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={CodingMan}
              alt="Graduation day"
              className="w-full h-32 rounded-lg object-cover shadow-md"
            />
            <img
              src={Studying}
              alt="Studying"
              className="w-full h-32 rounded-lg object-cover shadow-md"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm ">
            Started my academic journey in <strong>Computer Programming</strong> at <strong>Soutsaka Institute</strong>. Focused on foundational topics including algorithms, web development, and database systems.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={CodingMan}
              alt="Graduation day"
              className="w-full h-32 rounded-lg object-cover shadow-md"
            />
            <img
              src={Studying}
              alt="Studying"
              className="w-full h-32 rounded-lg object-cover shadow-md"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm ">
            Started my academic journey in <strong>Computer Programming</strong> at <strong>Soutsaka Institute</strong>. Focused on foundational topics including algorithms, web development, and database systems.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={CodingMan}
              alt="Graduation day"
              className="w-full h-32 rounded-lg object-cover shadow-md"
            />
            <img
              src={Studying}
              alt="Studying"
              className="w-full h-32 rounded-lg object-cover shadow-md"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm ">
            Began my professional career as a <strong>Junior Web Developer</strong> at <strong>ALO Technology Group</strong>, contributing to internal tools and client projects using React, Node.js, and cloud services.
          </p>
          <img
            src={CodingMan2}
            alt="Working at ALO Technology Group"
            className="w-full h-80 rounded-lg object-cover shadow-md mb-4"
          />
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm ">
            Graduated from <strong>Soutsaka Institute</strong> with a diploma in Computer Programming. Immediately joined <strong>ZION GROUP</strong> as a <strong>Front-End Developer</strong>, building scalable web applications and leading UI/UX design initiatives.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={Graduated}
              alt="Graduation day"
              className="w-full h-54 rounded-lg object-cover shadow-md"
            />
            <img
              src={Zion}
              alt="Team at ZION GROUP"
              className="w-full h-54 rounded-lg object-cover shadow-md"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-center text-3xl  font-bold mb-4">
        {t('education.title')}        
      </h1>
      <Timeline data={data} />
    </div>
  );
};

export default Education;
