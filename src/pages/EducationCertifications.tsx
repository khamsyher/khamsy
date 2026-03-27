import { FaEye } from "react-icons/fa";
import SoutsakaLogo from "../assets/images/download.jfif";
import AloLogo from "../assets/images/Alo.jpg";
import WecareLogo from "../assets/images/Wecare.jpg";
import CertificateWecare from "../assets/pdf/Wecare.pdf";
import CertificateAlo from "../assets/pdf/alo certificate officer.pdf";
import ZionLogo from "../assets/images/ZION.png";

interface Entry {
  logo: string;
  alt: string;
  title: string;
  role: string;
  subtitle?: string;
  period: string;
  description: string;
  descriptionIcon?: React.ReactNode;
  certificate?: string;
}

const entries: Entry[] = [
  {
    logo: ZionLogo,
    alt: "Zion Group Logo",
    title: "Zion Group Sole Co., Ltd",
    role: "Front-End Developer",
    period: "August 2024 – Present",
    description:
      "Building and maintaining scalable web applications with a focus on front-end architecture, performance optimization, and design system standardization.",
  },
  {
    logo: SoutsakaLogo,
    alt: "Soutsaka Institute Logo",
    title: "Soutsaka Institute of Technology",
    role: "Computer Programming",
    subtitle: "International School of Engineering",
    period: "Graduated: September 2024",
    description:
      "Studied core computer science fundamentals including algorithms, data structures, computer architecture, and digital communications.",
  },
  {
    logo: AloLogo,
    alt: "Alo Technology Group Logo",
    title: "Alo Technology Group",
    role: "Full-Stack JavaScript Web Development",
    period: "July 2023 – February 2024",
    description:
      "Completed an 8-month hands-on development program building real-world full-stack web applications with modern JavaScript technologies.",
    certificate: CertificateAlo,
  },
  {
    logo: WecareLogo,
    alt: "WeCare Logo",
    title: "WeCare",
    role: "Healthcare Administration System",
    period: "February – July 2023",
    description:
      "Built an admin panel over a 6-month real-world project collaboration, handling data management and healthcare workflows.",
    descriptionIcon: <FaEye className="text-muted-foreground shrink-0" />,
    certificate: CertificateWecare,
  },
];

const CARD_CLASS =
  "flex items-start gap-4 bg-card p-6 rounded-2xl shadow border border-border";
const LOGO_CLASS = "w-24 h-24 object-contain shrink-0";
const BTN_CLASS =
  "mt-2 px-4 py-1 text-foreground border border-border rounded-full text-sm hover:bg-muted transition";

const EducationCertifications = () => {
  return (
    <div className="min-h-screen p-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
        Education & Certifications
      </h2>

      <div className="space-y-10 max-w-5xl mx-auto">
        {entries.map((entry) => (
          <div key={entry.title} className={CARD_CLASS}>
            <img src={entry.logo} alt={entry.alt} className={LOGO_CLASS} />
            <div>
              <h3 className="font-bold text-primary">{entry.title}</h3>
              <p className="text-lg font-medium text-foreground">{entry.role}</p>
              {entry.subtitle && (
                <p className="text-muted-foreground">({entry.subtitle})</p>
              )}
              <p className="text-muted-foreground">{entry.period}</p>
              <p className="text-muted-foreground text-sm flex items-center gap-1">
                {entry.descriptionIcon}
                {entry.description}
              </p>
              {entry.certificate && (
                <button
                  onClick={() => window.open(entry.certificate, "_blank")}
                  className={BTN_CLASS}
                >
                  View Certificate
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationCertifications;
