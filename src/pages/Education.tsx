import { Timeline } from "../components/ui/Timeline";
import { useTranslation } from "react-i18next";
import CodingMan from "../assets/images/coding-man.jpg";
import CodingMan2 from "../assets/images/Man-Coding.jpg";
import Graduated from "../assets/images/Graduated Photo.jpg";
import Studying from "../assets/images/study at soutsaka.jpg";
import PresentFinalproject from "../assets/images/present final project.jpg";
import WorkshopCetificate from "../assets/pdf/Certificate Workshop at Comet.pdf";
import Zion from "../assets/images/kham at zion.jpg";
import HackathonImage from "../assets/images/Hackathon image.jpg";
import WorkshopImage from "../assets/images/Workshop at comet.jpg";

const Education = () => {
  const { t } = useTranslation();
  const data = [
    {
      title: "2021",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-muted-foreground md:text-sm">
            Began my academic journey in <strong>Computer Programming</strong> at <strong>Soutsaka Institute</strong>, focusing on core concepts such as algorithms, web development, and database systems. Gained foundational knowledge through hands-on learning and collaborative projects.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <img
              src={CodingMan}
              alt="Coding practice"
              className="w-full h-54 rounded-lg object-cover shadow-md"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-muted-foreground md:text-sm">
            Continued my studies at <strong>Soutsaka Institute</strong>, advancing my skills in front-end and back-end development. Focused on responsive design, JavaScript frameworks, and version control systems like Git, preparing for real-world application development.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <img
              src={Studying}
              alt="Focused study"
              className="w-full h-54 rounded-lg object-cover shadow-md"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-muted-foreground md:text-sm">
            Finalized my academic studies while starting my first industry role as a <strong>Junior Web Developer</strong> at <strong>WeCare</strong>. I was responsible for building internal tools and scalable web applications using <strong>Nuxt.js</strong>, <strong>Hasura</strong>, <strong>GraphQL</strong>, and cloud services. This experience introduced me to agile workflows and real-world product delivery.
          </p>
          <p className="mb-4 text-xs font-normal text-muted-foreground md:text-sm">
            After successfully completing the WeCare project, I transitioned to <strong>ALO Technology Group</strong> as a <strong>Junior Web Developer</strong>. There, I contributed to multiple client projects using <strong>React</strong> and <strong>Node.js</strong>, while strengthening my understanding of frontend architecture and collaborative development.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={CodingMan}
              alt="Work at WeCare"
              className="w-full h-54 rounded-lg object-cover shadow-md"
            />
            <img
              src={WorkshopImage}
              alt="Workshop at Comet Company"
              className="w-full h-54 rounded-lg object-cover shadow-md"
            />
          </div>
          <p className="my-4 text-xs font-normal text-muted-foreground md:text-sm">
            Participated in an intensive <strong>Hackathon Workshop</strong> hosted by <strong>Comet Company</strong>, where I collaborated with a team to develop a prototype solution in under 48 hours. This experience enhanced my skills in rapid prototyping, team communication, and product pitching. It was a valuable opportunity to apply design thinking and engineering under time pressure.
          </p>
          <button
            onClick={() => window.open(WorkshopCetificate, "_blank")}
            className="mb-4 inline-block px-4 py-1 border border-border rounded-full text-xs md:text-sm hover:bg-muted transition"
          >
            View Hackathon Certificate
          </button>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={HackathonImage}
              alt="Hackathon project"
              className="w-full h-64 rounded-lg object-cover shadow-md"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-muted-foreground md:text-sm">
            Continued my role at <strong>ALO Technology Group</strong> as a <strong>Junior Web Developer</strong>, contributing to client projects and enhancing front-end application performance using <strong>React</strong>, <strong>TypeScript</strong>, and modern design systems.
          </p>
          <p className="mb-4 text-xs font-normal text-muted-foreground md:text-sm">
            Successfully <strong>graduated from Soutsaka Institute</strong> with a diploma in <strong>Computer Programming</strong>. My final year project was a web application that connects users to car repair services across <strong>Vientiane Capital</strong>. The platform allows users to find and request mobile repair services anytime, anywhere.
          </p>
          <p className="mb-4 text-xs font-normal text-muted-foreground md:text-sm">
            The project showcased my full-stack development skills — including user authentication, geolocation-based service listings, and mobile-first UI design — and marked a major milestone in my academic and professional growth.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={PresentFinalproject}
              alt="Final Year Project Presentation"
              className="w-full h-54 rounded-lg object-cover shadow-md"
            />
            <img
              src={CodingMan2}
              alt="Graduation Ceremony"
              className="w-full h-54 rounded-lg object-cover shadow-md"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-muted-foreground md:text-sm">
            Continued my professional growth at <strong>ZION GROUP</strong> as a <strong>Front-End Developer</strong>. Took ownership of front-end architecture, improved performance, and mentored junior developers. Played a vital role in major product launches and design system standardization.
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
    <div id="education" className="max-w-6xl mx-auto p-6">
      <h1 className="text-center text-3xl font-bold mb-4 text-foreground">
        {t("education.title")}
      </h1>
      <Timeline data={data} />
    </div>
  );
};

export default Education;
