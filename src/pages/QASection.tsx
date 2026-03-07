import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

interface QuestionProps {
  title: string;
  content: string;
}

const questions: QuestionProps[] = [
  {
    title: "What technologies do you specialize in?",
    content:
      "I specialize in modern web technologies including React, Next.js, TypeScript, Node.js, and various database systems like PostgreSQL and MongoDB. I also have experience with cloud platforms such as Vercel and AWS, focusing on building scalable and performant applications.",
  },
  {
    title: "What kind of projects do you typically work on?",
    content:
      "I enjoy working on a variety of projects, from building scalable web applications and interactive user interfaces to developing robust backend APIs and optimizing performance. I'm particularly interested in full-stack development and creating seamless user experiences that solve real-world problems.",
  },
  {
    title: "Are you available for freelance work or new opportunities?",
    content:
      "Yes, I am open to new opportunities and freelance projects. Please feel free to reach out through the contact information provided in the footer to discuss your project or potential collaborations. I'm always eager to take on new challenges.",
  },
  {
    title: "How do you approach problem-solving in development?",
    content:
      "My approach to problem-solving involves breaking down complex issues into smaller, manageable parts. I prioritize understanding the root cause, researching effective solutions, and implementing clean, maintainable code. I also believe in iterative development, continuous testing, and collaborative feedback to ensure robust and efficient solutions.",
  },
];

const QaSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted to-background transition-colors duration-300">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center space-y-6 mb-12">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Your Questions, Answered.
            </h2>
            <p className="max-w-[900px] text-md md:text-lg text-foreground leading-relaxed">
              Delve deeper into my expertise and approach. Here are some common inquiries.
            </p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {questions.map((q, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className="bg-card border border-border rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <AccordionTrigger className="flex items-center justify-between p-6 text-lg text-foreground hover:text-primary [&[data-state=open]>svg]:rotate-180">
                  {q.title}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-base text-muted-foreground leading-relaxed">
                  {q.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default QaSection;