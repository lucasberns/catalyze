import { Mail, Phone, MapPin, Shield } from "lucide-react";
const Footer = () => {
  return <footer className="bg-earth text-earth-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">CRM Agro</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <span>contato@crmagro.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span>(11) 9 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span>Lages, SC</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-accent transition-colors">Como funciona</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Preços</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Suporte</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
            </ul>
          </div>
          
          {/* LGPD & Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Privacidade</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm">
                    Coletamos dados com consentimento conforme LGPD. Seus dados estão seguros conosco.
                  </p>
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">LGPD</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-earth-foreground/20 mt-12 pt-8 text-center">
          <p className="text-sm text-earth-foreground/80">
            © 2024 CRM Agro. Todos os direitos reservados. Desenvolvido com ❤️ para o agronegócio brasileiro.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;