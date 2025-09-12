import { Users, MessageCircle, TrendingUp, BarChart3 } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Users,
      title: "Cadastro Unificado",
      description: "Registre clientes físico + online em um só lugar, com histórico completo de compras e preferências."
    },
    {
      icon: MessageCircle,
      title: "Comunicação Automatizada",
      description: "Envie mensagens por WhatsApp e SMS de forma automática para manter contato com seus clientes."
    },
    {
      icon: TrendingUp,
      title: "Recompra Inteligente",
      description: "Lembretes automáticos baseados no histórico de compras para aumentar a frequência de vendas."
    },
    {
      icon: BarChart3,
      title: "Dashboard Simples",
      description: "Acompanhe vendas, clientes ativos e performance do seu negócio em gráficos fáceis de entender."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Tudo que você precisa em um só lugar
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa solução foi pensada especialmente para o dia a dia de agropecuárias, com ferramentas simples e eficazes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 border border-border/50 hover:border-primary/20 group"
            >
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="h-8 w-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-card-foreground mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;