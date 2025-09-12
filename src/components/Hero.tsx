import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-agro.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-success to-primary/90">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Seu CRM simples e inteligente para
            <span className="block text-accent drop-shadow-lg">agropecuária</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Capture dados de clientes, automatize comunicação e aumente a retenção com nossa solução feita especialmente para agropecuárias de pequeno e médio porte.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="cta" size="lg" className="text-lg px-8 py-4 h-auto">
              Teste grátis por 30 dias
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto border-white text-white hover:bg-white hover:text-primary">
              Quero conhecer agora
            </Button>
          </div>
          
          <div className="mt-8 text-white/80">
            <p className="text-sm">✓ Sem cartão de crédito • ✓ Setup em 5 minutos • ✓ Suporte completo</p>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/20 to-transparent" />
    </section>
  );
};

export default Hero;