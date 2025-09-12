import { UserPlus, MessageSquare, Repeat } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "1. Cadastre seus clientes",
      description: "Registre informações básicas, histórico de compras e preferências de cada cliente de forma rápida e organizada."
    },
    {
      icon: MessageSquare,
      title: "2. Automatize a comunicação",
      description: "Configure mensagens automáticas por WhatsApp e SMS para promoções, lembretes e follow-up pós-venda."
    },
    {
      icon: Repeat,
      title: "3. Gere mais recompras",
      description: "Receba notificações inteligentes sobre quando contatar cada cliente para maximizar suas vendas recorrentes."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Como funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Em apenas 3 passos simples, você estará vendendo mais e fidelizando melhor seus clientes.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary via-accent to-success"></div>
            
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-primary rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10">
                  <step.icon className="h-10 w-10 text-primary-foreground" />
                </div>
                
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;