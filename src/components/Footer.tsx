import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

const socialLinks = [
  { href: "https://github.com/khamsyher", icon: FaGithub, label: "GitHub" },
  { href: "https://www.facebook.com/khamsy.her.2025", icon: FaFacebook, label: "Facebook" },
  { href: "https://instagram.com", icon: FaInstagram, label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-card">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      <div className="container max-w-6xl mx-auto px-6 py-10 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-foreground">KHAMSYHER</h3>
            <p className="text-sm text-muted-foreground mt-1">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
