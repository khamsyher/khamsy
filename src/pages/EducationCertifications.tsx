import { FaEye } from "react-icons/fa";
import Soutsaka from "../assets/images/download.jfif";
import Alo from "../assets/images/Alo.jpg";
import Wecare from "../assets/images/Wecare.jpg";
import CertificateWecare from "../assets/pdf/Wecare.pdf";
import CertificateAlo from "../assets/pdf/alo certificate officer.pdf";

const EducationCertifications = () => {
  return (
    <div className="min-h-screen p-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
        Education & Certifications
      </h2>

      <div className="space-y-10 max-w-5xl mx-auto">
        {/* Soutsaka institute of technology */}
        <div className="flex items-start gap-4 bg-card p-6 rounded-2xl shadow border border-border">
          <img
            src={Soutsaka}
            alt="Soutsaka Institute"
            className="w-24 h-24 object-contain"
          />
          <div>
            <h3 className="font-bold text-primary">
              Soutsaka institute of technology
            </h3>
            <p className="text-lg font-medium text-foreground">
              Computer Programming
            </p>
            <p className="text-muted-foreground">
              ( International School of Engineering )
            </p>
            <p className="text-muted-foreground">
              Graduated: September 2024
            </p>
            <p className="text-muted-foreground text-sm">
              A field related to computer programming, computer architecture, data structure, digital communications
            </p>
          </div>
        </div>

        {/* Alo Technology Group */}
        <div className="flex items-start gap-4 bg-card p-6 rounded-2xl shadow border border-border">
          <img
            src={Alo}
            alt="Alo Technology Group Logo"
            className="w-24 h-24 object-contain"
          />
          <div>
            <h3 className="font-bold text-primary">
              Software Engineer, Alo Technology Group
            </h3>
            <p className="text-lg font-medium text-foreground">
              Full-Stack JavaScript Web Development
            </p>
            <p className="text-muted-foreground">
              July 2023 – February 2024
            </p>
            <p className="text-muted-foreground text-sm">
              Completed an 8-month hands-on training and development program focusing on real-world
              full-stack web applications using modern JavaScript technologies.
            </p>
            <button
              onClick={() => window.open(CertificateAlo, "_blank")}
              className="mt-2 px-4 py-1 text-foreground border border-border rounded-full text-sm hover:bg-muted transition"
            >
              View Certificate
            </button>
          </div>
        </div>

        {/* WeCare */}
        <div className="flex items-start gap-4 bg-card p-6 rounded-2xl shadow border border-border">
          <img
            src={Wecare}
            alt="Wecare Logo"
            className="w-24 h-24 object-contain"
          />
          <div>
            <h3 className="font-bold text-primary">WeCare</h3>
            <p className="text-lg font-medium text-foreground">
              Healthcare Administration System (Admin Panel)
            </p>
            <p className="text-muted-foreground">
              February – July 2023
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              <FaEye className="text-muted-foreground" />
              Developed over a 6-month period as part of a real-world project collaboration.
            </p>
            <button
              onClick={() => window.open(CertificateWecare, "_blank")}
              className="mt-2 px-4 py-1 text-foreground border border-border rounded-full text-sm hover:bg-muted transition"
            >
              View Certificate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCertifications;
