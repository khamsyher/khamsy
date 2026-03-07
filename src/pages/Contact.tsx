import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import ContactInfo from "../components/ContactInfo";

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm("service_6bede6f", "template_6n2d9sb", form.current, "NS3Sg8AhxKlwu3RgF")
      .then(
        (result) => {
          alert("Email sent successfully!");
          console.log("SUCCESS!", result.text);
        },
        (error: { text: string }) => {
          alert("Failed to send email: " + error.text);
        }
      );
  };

  return (
    <div className="container max-w-7xl mx-auto mt-20">
      <section id="contact" className="py-20">
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
              <form ref={form} onSubmit={sendEmail}>
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
                    type="submit"
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
      </section>
    </div>
  );
};

export default ContactForm;
