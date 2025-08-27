import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Linkedin,
  TreePine,
  ArrowRight,
  Leaf
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Receba Dicas de Jardinagem</h3>
            <p className="text-primary-foreground/80 mb-6">
              Cadastre-se e receba mensalmente dicas exclusivas sobre paisagismo, 
              cuidados com plantas e tendências em decoração externa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Seu melhor e-mail"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Cadastrar
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Sírius Garden</h3>
                <p className="text-sm text-primary-foreground/80">Transformação de Ambientes</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Especialistas em criar, manter e valorizar áreas externas e internas com foco 
              em sustentabilidade e qualidade de vida.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-3">
              <Button size="sm" variant="outline" className="p-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="p-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="p-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Nossos Serviços</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Jardinagem & Paisagismo</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Piscinas & Áreas Aquáticas</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Manutenção & Reparos</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Projetos de Interiores</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Gestão de Espaços</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Consultoria & Design</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><a href="#sobre" className="hover:text-primary-foreground transition-colors">Sobre Nós</a></li>
              <li><a href="#projetos" className="hover:text-primary-foreground transition-colors">Projetos</a></li>
              <li><a href="#depoimentos" className="hover:text-primary-foreground transition-colors">Depoimentos</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Orçamento</a></li>
              <li><a href="#contato" className="hover:text-primary-foreground transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-foreground/60" />
                <div>
                  <div className="text-primary-foreground">(11) 9999-9999</div>
                  <div className="text-sm text-primary-foreground/60">WhatsApp e Ligações</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-foreground/60" />
                <div>
                  <div className="text-primary-foreground">contato@siriusgarden.com</div>
                  <div className="text-sm text-primary-foreground/60">E-mail principal</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-foreground/60" />
                <div>
                  <div className="text-primary-foreground">São Paulo, SP</div>
                  <div className="text-sm text-primary-foreground/60">Atendemos toda Grande SP</div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="mt-6 p-4 bg-primary-foreground/10 rounded-lg">
              <p className="text-sm text-primary-foreground/80 mb-2">Emergência 24h:</p>
              <p className="font-medium text-primary-foreground">(11) 9999-9999</p>
            </div>
          </div>
        </div>

        {/* Certifications & Trust */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="text-center">
            <div className="flex flex-wrap justify-center items-center gap-6 mb-6 text-sm text-primary-foreground/60">
              <span>✓ Licença Ambiental</span>
              <span>✓ CREA Regularizado</span>
              <span>✓ Seguro Total</span>
              <span>✓ Materiais Certificados</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-primary-foreground/10 border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/80">
            <div>
              © 2024 Sírius Garden. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary-foreground transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">LGPD</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;