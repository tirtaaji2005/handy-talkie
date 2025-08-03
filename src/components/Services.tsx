import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const services = [
    {
      title: "Event Communication",
      description: "Perfect for conferences, concerts, and large gatherings",
      features: ["Crystal clear audio", "Long battery life", "Easy setup"],
      popular: true
    },
    {
      title: "Construction Sites",
      description: "Rugged devices built for harsh working conditions",
      features: ["Dust resistant", "Drop protection", "Loud speakers"]
    },
    {
      title: "Security Operations",
      description: "Reliable communication for security and surveillance",
      features: ["Encrypted channels", "Emergency alerts", "Night vision compatible"]
    },
    {
      title: "Business Solutions",
      description: "Streamline operations with instant team communication",
      features: ["Multiple channels", "Hands-free options", "Professional service"]
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Rental Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of professional handy talkie solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="relative hover:shadow-lg transition-all duration-300 group">
              {service.popular && (
                <Badge className="absolute -top-3 left-6 bg-accent text-accent-foreground">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;