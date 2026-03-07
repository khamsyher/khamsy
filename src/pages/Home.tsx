import {
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { Trans, useTranslation } from "react-i18next";
import { FiMail } from "react-icons/fi";
import Avatar from "../assets/icons/Khamsy Avatar.webp";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";
import { TypewriterEffectSmooth } from "../components/ui/Typewriter-effect";
import { motion } from "framer-motion";
import ToolsAndTechnologies from "./ToolsAndTechnologies";
import EducationCertifications from "./EducationCertifications";
import QaSection from "./QASection";
import CanvasSparkles from "../components/CanvasSparkles";
import { Textarea } from "../components/ui/textarea";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card";
import { Input } from "../components/ui/input";
import ContactInfo from "../components/ContactInfo";

const Home = () => {
  const { t } = useTranslation();
  const words = [
    { text: t("hero.myname.hi"), className: "text-foreground" },
    { text: t("hero.myname.my"), className: "text-foreground" },
    { text: t("hero.myname.name"), className: "text-foreground" },
    { text: t("hero.myname.is"), className: "text-foreground" },
    { text: t("hero.myname.khamsy"), className: "text-primary" },
  ];

  return (
    <div className="bg-background rounded-lg shadow-lg">
      <div className="relative">
        <div className="absolute inset-0 z-0 bg-grid" />
        <CanvasSparkles />
        <div className="relative max-w-6xl mx-auto p-4 pt-10 md:pt-30 z-10">
          <div className="flex flex-col items-center justify-center my-6 select-none">
            <motion.img
              src={Avatar}
              alt="Logo"
              className="w-65 h-65 rounded-full border-2 border-border shadow-lg mb-6 object-cover"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 10 }}
            />
          </div>
          <div>
            <div className="flex justify-center">
              <TypewriterEffectSmooth words={words} />
            </div>
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 10 }}
              className="text-xl md:text-3xl font-semibold text-muted-foreground text-center"
            >
              <Trans
                i18nKey="hero.intro"
                components={{ blue: <span className="text-primary" /> }}
              />
            </motion.h2>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
              className="text-lg md:text-xl text-muted-foreground mt-4 text-center"
            >
              {t("hero.description")}
            </motion.p>
          </div>
          <div className="mt-8 mb-12 flex flex-col items-center">
            <div className="flex space-x-4 mb-6">
              <a
                href="#contact"
                className="flex items-center space-x-2 bg-primary text-primary-foreground py-2.5 px-6 rounded-full hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span>{t("hero.contactMe")}</span>
                <FiMail />
              </a>
              <button className="border border-border text-foreground py-2.5 px-6 rounded-full hover:bg-muted transition-all duration-300">
                {t("hero.downloadCV")}
              </button>
            </div>
            <div className="flex space-x-5 text-2xl text-muted-foreground">
              <FaGithub className="hover:text-foreground transition-colors duration-300 cursor-pointer" />
              <FaInstagram className="hover:text-pink-500 transition-colors duration-300 cursor-pointer" />
              <FaFacebook className="hover:text-blue-600 transition-colors duration-300 cursor-pointer" />
              <FaYoutube className="hover:text-red-500 transition-colors duration-300 cursor-pointer" />
              <FaLinkedin className="hover:text-blue-500 transition-colors duration-300 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      <About />
      <ToolsAndTechnologies />
      <Skills />
      <Projects />
      <Education />
      <EducationCertifications />
      <QaSection />

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">Get in Touch</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your next project? Let's discuss how we can help bring your vision to life.
            </p>
          </div>

          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Left Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-foreground">
                    Let's Start a Conversation
                  </h3>
                  <p className="text-muted-foreground mb-8">
                    We'd love to hear about your project and discuss how our team
                    can help you achieve your goals.
                  </p>
                </div>

                <ContactInfo
                  icon={<Mail className="h-6 w-6 text-primary" />}
                  title="Email Us"
                  value="ziongroupsole@gmail.com"
                />
                <ContactInfo
                  icon={<Phone className="h-6 w-6 text-primary" />}
                  title="Call Us"
                  value="(+856) 20-97-771-567"
                />
                <ContactInfo
                  icon={<MapPin className="h-6 w-6 text-primary" />}
                  title="Visit Us"
                  value="Souphanouvong Road, Wattay Village, Sikhottabong District, Vientiane Capital (Laos PDR)"
                />
              </div>

              {/* Form */}
              <Card className="shadow-xl bg-card text-card-foreground">
                <form>
                  <CardHeader>
                    <CardTitle>Send us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form and we'll get back to you.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">First Name</label>
                        <Input name="firstName" required placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Last Name</label>
                        <Input name="lastName" required placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email</label>
                      <Input
                        type="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Phone</label>
                      <Input name="phone" placeholder="(+856) 20-xx-xxx-xxx" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Service Interested In
                      </label>
                      <select
                        name="service"
                        className="w-full p-3 border border-border rounded-md bg-card text-foreground"
                      >
                        <option>Video Production</option>
                        <option>Website Development</option>
                        <option>Mobile App Development</option>
                        <option>Logo Design</option>
                        <option>Graphic Design</option>
                        <option>Maintenance Facebook page</option>
                        <option>Maintenance TikTok page</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Message</label>
                      <Textarea
                        name="message"
                        placeholder="Tell us about your project..."
                        rows={4}
                      />
                    </div>
                    <input type="hidden" name="time" />
                    <input type="hidden" name="name" />
                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      size="lg"
                    >
                      Send Message
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </CardContent>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
