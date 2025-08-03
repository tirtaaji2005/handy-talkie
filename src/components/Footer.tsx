import { Instagram, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">HandyTalkie Rentals</h3>
            <p className="text-primary-foreground/80 mb-4">
              Professional two-way radio communication solutions for all your needs.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/handytalkierentals" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="tel:+15551234567" 
                className="hover:text-accent transition-colors"
              >
                <Phone className="w-6 h-6" />
              </a>
              <a 
                href="mailto:rentals@handytalkie.com" 
                className="hover:text-accent transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Event Communication</li>
              <li>Construction Sites</li>
              <li>Security Operations</li>
              <li>Business Solutions</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>Phone: +1 (555) 123-4567</p>
              <p>Email: rentals@handytalkie.com</p>
              <p>Location: Downtown Equipment Center</p>
              <p>Instagram: @handytalkierentals</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 HandyTalkie Rentals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;