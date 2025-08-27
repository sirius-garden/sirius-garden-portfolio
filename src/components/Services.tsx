import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  TreePine, 
  Droplets, 
  Wrench, 
  Home, 
  Calendar,
  ArrowRight,
  Scissors,
  Paintbrush
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: TreePine,
      title: "Jardinagem & Paisagismo",
      description: "Criação e design de jardins únicos, seleção de plantas adequadas ao clima, sistemas de irrigação inteligentes e paisagismo completo.",
      features: ["Design personalizado", "Plantas nativas", "Irrigação automatizada", "Manutenção incluída"],
      gradient: "from-nature to-primary",
      bgColor: "nature/10"
    },
    {
      icon: Droplets,
      title: "Piscinas & Áreas Aquáticas",
      description: "Construção, reforma e manutenção de piscinas, spas, fontes e cascatas com tecnologia moderna e design inovador.",
      features: ["Limpeza profissional", "Tratamento químico", "Equipamentos modernos", "Monitoramento regular"],
      gradient: "from-water to-accent",
      bgColor: "water/10"
    },
    {
      icon: Wrench,
      title: "Manutenção & Pequenos Reparos",
      description: "Serviços de manutenção preventiva e corretiva em jardins, piscinas, sistemas de irrigação e estruturas externas.",
      features: ["Poda especializada", "Fertilização", "Controle de pragas", "Reparos estruturais"],
      gradient: "from-earth to-nature",
      bgColor: "earth/10"
    },
    {
      icon: Home,
      title: "Projetos de Interiores Verdes",
      description: "Integração de áreas verdes em ambientes internos, jardins verticais, vasos decorativos e plantas de interior.",
      features: ["Jardins verticais", "Plantas de interior", "Vasos decorativos", "Iluminação LED"],
      gradient: "from-primary to-water",
      bgColor: "primary/10"
    },
    {
      icon: Calendar,
      title: "Gestão Completa de Espaços",
      description: "Planejamento, execução e manutenção contínua de todos os ambientes externos e internos do seu imóvel.",
      features: ["Planejamento anual", "Cronograma flexível", "Relatórios mensais", "Suporte 24/7"],
      gradient: "from-accent to-primary",
      bgColor: "accent/10"
    },
    {
      icon: Paintbrush,
      title: "Consultoria & Design",
      description: "Consultoria especializada em paisagismo, projetos 3D, seleção de materiais e acompanhamento de obra.",
      features: ["Projetos 3D", "Consultoria técnica", "Seleção de materiais", "Acompanhamento"],
      gradient: "from-earth to-accent",
      bgColor: "muted"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos <span className="bg-gradient-to-r from-primary to-nature bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas para transformar seus ambientes em espaços únicos, 
            funcionais e sustentáveis que proporcionam qualidade de vida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="p-6 border-0 shadow-soft hover:shadow-elevated transition-all duration-300 group">
                <div className={`w-16 h-16 bg-${service.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" size="sm" className="w-full group/btn border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Saiba Mais
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Process Overview */}
        <div className="bg-gradient-to-r from-primary/5 to-nature/5 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Nosso Processo de Trabalho
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Um processo estruturado e transparente que garante resultados excepcionais em todos os projetos.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "01", title: "Briefing", desc: "Entendemos suas necessidades e sonhos" },
              { step: "02", title: "Planejamento", desc: "Criamos o projeto personalizado" },
              { step: "03", title: "Execução", desc: "Implementamos com excelência" },
              { step: "04", title: "Acompanhamento", desc: "Garantimos a qualidade" },
              { step: "05", title: "Manutenção", desc: "Cuidamos continuamente" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-nature rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-lg">{phase.step}</span>
                </div>
                <h4 className="font-bold text-foreground mb-2">{phase.title}</h4>
                <p className="text-sm text-muted-foreground">{phase.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-primary to-nature hover:from-primary-hover hover:to-primary">
              Iniciar Meu Projeto
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;