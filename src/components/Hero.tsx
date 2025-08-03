import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-handy-talkies.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-accent/80" />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Professional
          <span className="block text-accent-foreground">Handy Talkie</span>
          Rentals
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-95">
          Reliable two-way radio communication solutions for your events, 
          construction sites, security operations, and business needs.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg"
            onClick={scrollToContact}
            className="text-lg px-8 py-4"
          >
            Get Quote Now
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary"
          >
            View Equipment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;