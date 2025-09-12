import { Star } from "lucide-react";
import farmerPhoto from "@/assets/farmer-testimonial.jpg";

const Testimonial = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-secondary to-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16">
            Resultados comprovados
          </h2>
          
          <div className="bg-card rounded-3xl p-12 shadow-card border border-border/50">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            
            <blockquote className="text-2xl md:text-3xl text-card-foreground mb-8 leading-relaxed font-medium">
              "Consegui aumentar em <span className="text-accent font-bold">20% minhas recompras</span> com o CRM simples. 
              Agora sei exatamente quando contatar cada cliente e nunca mais perco uma venda por falta de organização."
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <img 
                src={farmerPhoto} 
                alt="João Silva"
                className="w-16 h-16 rounded-full object-cover shadow-md"
              />
              <div className="text-left">
                <div className="font-semibold text-card-foreground text-lg">João Silva</div>
                <div className="text-muted-foreground">Agropecuária Silva • Minas Gerais</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;