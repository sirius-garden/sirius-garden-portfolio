import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Users, Droplets, TreePine, Home } from "lucide-react";

const Projects = () => {
  const caseStudies = [
    {
      title: "Residência Moderna com Piscina Integrada",
      client: "Família Silva",
      duration: "3 meses",
      budget: "R$ 80.000",
      challenge: "Transformar um quintal abandonado em uma área de lazer completa com piscina, jardim e área gourmet.",
      solution: "Criamos um projeto integrado com piscina de borda infinita, jardim vertical, deck de madeira e área gourmet com pergolado.",
      results: [
        "Aumento de 35% no valor do imóvel",
        "Redução de 40% no consumo de água",
        "100% de satisfação da família",
        "Espaço utilizado diariamente"
      ],
      features: ["Piscina com bordas infinitas", "Jardim vertical sustentável", "Deck de madeira certificada", "Sistema de irrigação inteligente"],
      category: "Residencial Completo",
      icon: Home,
      gradient: "from-water to-accent"
    },
    {
      title: "Jardim Corporativo Sustentável",
      client: "Empresa GreenTech",
      duration: "2 meses",
      budget: "R$ 45.000",
      challenge: "Criar um espaço verde relaxante para funcionários em um ambiente urbano limitado.",
      solution: "Desenvolvemos jardins verticais modulares, área de descanso com plantas nativas e sistema de captação de água da chuva.",
      results: [
        "Melhoria de 50% no bem-estar dos funcionários",
        "Redução de 30% no estresse corporativo",
        "Certificação LEED Green Building",
        "Economia de 60% na conta de água"
      ],
      features: ["Jardins verticais modulares", "Plantas nativas da região", "Sistema de captação pluvial", "Mobiliário sustentável"],
      category: "Corporativo",
      icon: TreePine,
      gradient: "from-nature to-primary"
    },
    {
      title: "Revitalização de Área Aquática",
      client: "Condomínio Bella Vista",
      duration: "1 mês",
      budget: "R$ 25.000",
      challenge: "Reformar piscina antiga com problemas de vazamento e criar paisagismo ao redor.",
      solution: "Aplicamos impermeabilização moderna, novo sistema de filtragem e criamos jardim tropical integrado.",
      results: [
        "Eliminação completa de vazamentos",
        "Redução de 45% nos custos de manutenção",
        "Valorização da área comum",
        "Aumento de 90% na utilização pelos moradores"
      ],
      features: ["Impermeabilização avançada", "Sistema de filtragem moderno", "Paisagismo tropical", "Iluminação LED subaquática"],
      category: "Piscinas & Aquática",
      icon: Droplets,
      gradient: "from-accent to-water"
    }
  ];

  return (
    <section id="projetos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projetos em <span className="bg-gradient-to-r from-primary to-nature bg-clip-text text-transparent">Destaque</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Conheça alguns dos nossos projetos mais marcantes e veja como transformamos 
            desafios em soluções inovadoras e sustentáveis.
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="overflow-hidden border-0 shadow-soft hover:shadow-elevated transition-all duration-300">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Project Info */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center justify-between mb-6">
                      <Badge variant="outline" className="border-primary text-primary">
                        {project.category}
                      </Badge>
                      <div className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-lg flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
                    
                    {/* Project Details */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div>
                        <div className="text-sm text-muted-foreground">Cliente</div>
                        <div className="font-medium text-foreground">{project.client}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Duração</div>
                        <div className="font-medium text-foreground">{project.duration}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Investimento</div>
                        <div className="font-medium text-foreground">{project.budget}</div>
                      </div>
                    </div>

                    {/* Challenge */}
                    <div className="mb-6">
                      <h4 className="font-bold text-foreground mb-2">🎯 Desafio</h4>
                      <p className="text-muted-foreground">{project.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div className="mb-6">
                      <h4 className="font-bold text-foreground mb-2">💡 Solução</h4>
                      <p className="text-muted-foreground">{project.solution}</p>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-bold text-foreground mb-3">✨ Características Principais</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group">
                      Ver Projeto Completo
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  {/* Results */}
                  <div className="bg-gradient-to-br from-primary/5 to-nature/5 p-8 lg:p-12 flex flex-col justify-center">
                    <h4 className="text-xl font-bold text-foreground mb-6">📈 Resultados Alcançados</h4>
                    
                    <div className="space-y-4">
                      {project.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                          </div>
                          <span className="text-foreground font-medium">{result}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 p-4 bg-background/50 rounded-lg border border-border">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>Projeto concluído em {project.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-nature/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Pronto para Transformar Seu Espaço?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Cada projeto é único e desenvolvido especialmente para suas necessidades. 
              Vamos criar algo extraordinário juntos!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-nature hover:from-primary-hover hover:to-primary">
                Solicitar Orçamento Gratuito
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Baixar Portfólio Completo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;