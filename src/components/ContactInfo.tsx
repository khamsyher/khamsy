interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

const ContactInfo = ({ icon, title, value }: ContactInfoProps) => (
  <div className="flex items-center space-x-4">
    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
      {icon}
    </div>
    <div className="flex-1">
      <div className="font-semibold text-foreground">{title}</div>
      <div className="text-muted-foreground">{value}</div>
    </div>
  </div>
);

export default ContactInfo;
