import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const features = [
    "Até 100 clientes cadastrados",
    "Comunicação por WhatsApp e SMS",
    "Dashboard básico de vendas",
    "Lembretes de recompra",
    "Suporte por email",
    "Integração com redes sociais"
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comece grátis hoje mesmo
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Teste nossa solução por 30 dias sem compromisso e veja os resultados em seu negócio.
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <div className="bg-card rounded-3xl p-8 shadow-card border-2 border-accent/20 relative overflow-hidden">
            {/* Badge */}
            <div className="absolute -top-1 -right-1">
              <div className="bg-accent text-accent-foreground px-6 py-2 rounded-bl-2xl rounded-tr-3xl font-semibold text-sm">
                POPULAR
              </div>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-2">Plano Starter</h3>
              <div className="mb-4">
                <span className="text-5xl font-bold text-accent">Grátis</span>
                <span className="text-muted-foreground ml-2">por 30 dias</span>
              </div>
              <p className="text-muted-foreground">
                Depois apenas <span className="font-semibold text-card-foreground">R$ 97/mês</span>
              </p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="bg-success/20 rounded-full p-1">
                    <Check className="w-4 h-4 text-success" />
                  </div>
                  <span className="text-card-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button variant="cta" size="lg" className="w-full text-lg py-4 h-auto">
              Começar teste gratuito
            </Button>
            
            <p className="text-center text-sm text-muted-foreground mt-4">
              Sem cartão de crédito • Cancele a qualquer momento
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;