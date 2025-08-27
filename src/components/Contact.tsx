import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  Linkedin,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Vamos Conversar Sobre Seu <span className="bg-gradient-to-r from-primary to-nature bg-clip-text text-transparent">Projeto</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Entre em contato conosco e descubra como podemos transformar seus espaços em 
            ambientes únicos, funcionais e sustentáveis.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 border-0 shadow-soft">
              <h3 className="text-2xl font-bold text-foreground mb-6">Solicite Seu Orçamento Gratuito</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Nome Completo *</label>
                    <Input placeholder="Seu nome completo" className="border-border focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">E-mail *</label>
                    <Input type="email" placeholder="seu@email.com" className="border-border focus:ring-primary" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Telefone *</label>
                    <Input placeholder="(11) 99999-9999" className="border-border focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Tipo de Projeto</label>
                    <Select>
                      <SelectTrigger className="border-border focus:ring-primary">
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="jardinagem">Jardinagem & Paisagismo</SelectItem>
                        <SelectItem value="piscina">Piscinas & Áreas Aquáticas</SelectItem>
                        <SelectItem value="manutencao">Manutenção & Reparos</SelectItem>
                        <SelectItem value="interiores">Projetos de Interiores</SelectItem>
                        <SelectItem value="completo">Projeto Completo</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Cidade</label>
                  <Input placeholder="Sua cidade" className="border-border focus:ring-primary" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Descreva Seu Projeto</label>
                  <Textarea 
                    placeholder="Conte-nos sobre seu projeto, suas necessidades, prazos e orçamento estimado..."
                    rows={5}
                    className="border-border focus:ring-primary"
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1" />
                  <label className="text-sm text-muted-foreground">
                    Autorizo o contato via telefone, e-mail e WhatsApp para apresentação de propostas e esclarecimentos sobre os serviços.
                  </label>
                </div>

                <Button size="lg" className="w-full bg-gradient-to-r from-primary to-nature hover:from-primary-hover hover:to-primary group">
                  Enviar Solicitação
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info & Benefits */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="p-6 border-0 shadow-soft">
              <h3 className="text-xl font-bold text-foreground mb-6">Informações de Contato</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">(11) 9999-9999</div>
                    <div className="text-sm text-muted-foreground">WhatsApp e Ligações</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-water/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-water" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">contato@siriusgarden.com</div>
                    <div className="text-sm text-muted-foreground">E-mail principal</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-nature/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-nature" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">São Paulo, SP</div>
                    <div className="text-sm text-muted-foreground">Atendemos toda Grande SP</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-earth/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-earth" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Seg - Sex: 8h às 18h</div>
                    <div className="text-sm text-muted-foreground">Sáb: 8h às 12h</div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3">Siga-nos nas redes sociais:</p>
                <div className="flex space-x-3">
                  <Button size="sm" variant="outline" className="p-2">
                    <Instagram className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="p-2">
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="p-2">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Benefits */}
            <Card className="p-6 border-0 shadow-soft bg-gradient-to-br from-primary/5 to-nature/5">
              <h3 className="text-xl font-bold text-foreground mb-6">Por Que Escolher a Sírius Garden?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">Orçamento Gratuito</div>
                    <div className="text-sm text-muted-foreground">Visita e análise sem custos</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-water mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">Garantia Total</div>
                    <div className="text-sm text-muted-foreground">1 ano de garantia em todos os serviços</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-nature mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">Materiais Premium</div>
                    <div className="text-sm text-muted-foreground">Qualidade certificada e sustentável</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-earth mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">Equipe Especializada</div>
                    <div className="text-sm text-muted-foreground">Profissionais capacitados e experientes</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Emergency Contact */}
            <Card className="p-6 border-0 shadow-soft bg-gradient-to-br from-accent/5 to-water/5">
              <h3 className="text-lg font-bold text-foreground mb-3">Atendimento de Emergência</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Para urgências em piscinas e sistemas de irrigação, entre em contato:
              </p>
              <Button variant="outline" size="sm" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                <Phone className="w-4 h-4 mr-2" />
                (11) 9999-9999 (24h)
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;