import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import contactImage from "@/assets/contact-person.jpg";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to rent? Contact us for pricing and availability
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={contactImage} 
                    alt="Contact Person" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-2xl">Sarah Johnson</CardTitle>
                <CardDescription className="text-lg">
                  Rental Specialist
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">
                  "I'm here to help you find the perfect communication solution for your needs. 
                  With over 5 years of experience in equipment rental, I'll ensure you get 
                  the right gear at the right price."
                </p>
              </CardContent>
            </Card>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-secondary/50 rounded-lg">
                <Phone className="w-6 h-6 text-primary" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-secondary/50 rounded-lg">
                <Mail className="w-6 h-6 text-primary" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-muted-foreground">rentals@handytalkie.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-secondary/50 rounded-lg">
                <MapPin className="w-6 h-6 text-primary" />
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-muted-foreground">Downtown Equipment Center</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg text-white">
                <Instagram className="w-6 h-6" />
                <div>
                  <h4 className="font-semibold">Follow Us</h4>
                  <a 
                    href="https://instagram.com/handytalkierentals" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    @handytalkierentals
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Request a Quote</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="eventType">Event/Usage Type</Label>
                <Input id="eventType" placeholder="e.g., Wedding, Construction, Security" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Additional Details</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your event, number of devices needed, dates, etc."
                  rows={4}
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                Send Quote Request
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;