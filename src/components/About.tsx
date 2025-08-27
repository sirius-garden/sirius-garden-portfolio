import { Card } from "@/components/ui/card";
import { Target, Eye, Heart, Award, Droplets, Recycle } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sobre a <span className="bg-gradient-to-r from-primary to-nature bg-clip-text text-transparent">Sírius Garden</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Há mais de 10 anos transformando sonhos em realidade através da criação de ambientes únicos, 
            funcionais e sustentáveis que conectam pessoas com a natureza.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 text-center border-0 shadow-soft hover:shadow-elevated transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-nature rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Nossa Missão</h3>
            <p className="text-muted-foreground">
              Transformar ambientes em espaços funcionais, bonitos e sustentáveis, 
              proporcionando qualidade de vida e bem-estar através do contato com a natureza.
            </p>
          </Card>

          <Card className="p-8 text-center border-0 shadow-soft hover:shadow-elevated transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-water to-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="w-8 h-8 text-water-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Nossa Visão</h3>
            <p className="text-muted-foreground">
              Ser referência nacional em paisagismo e gestão de ambientes externos, 
              reconhecida pela excelência, inovação e compromisso com a sustentabilidade.
            </p>
          </Card>

          <Card className="p-8 text-center border-0 shadow-soft hover:shadow-elevated transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-earth to-nature rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-earth-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Nossos Valores</h3>
            <p className="text-muted-foreground">
              Qualidade excepcional, sustentabilidade ambiental, atendimento personalizado 
              e transparência em todos os processos e relacionamentos.
            </p>
          </Card>
        </div>

        {/* Key Differentials */}
        <div className="bg-gradient-to-r from-primary/5 to-nature/5 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Nossos Diferenciais
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Soluções Sob Medida</h4>
                <p className="text-muted-foreground text-sm">
                  Cada projeto é único, desenvolvido especificamente para suas necessidades e preferências.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-water/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Droplets className="w-6 h-6 text-water" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Eficiência & Estética</h4>
                <p className="text-muted-foreground text-sm">
                  Combinamos funcionalidade com beleza, criando espaços práticos e encantadores.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-nature/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Recycle className="w-6 h-6 text-nature" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Sustentabilidade</h4>
                <p className="text-muted-foreground text-sm">
                  Práticas ecológicas, uso consciente de recursos e materiais sustentáveis.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Atendimento Ágil</h4>
                <p className="text-muted-foreground text-sm">
                  Resposta rápida, comunicação transparente e acompanhamento constante.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-earth/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-earth" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Manutenção Contínua</h4>
                <p className="text-muted-foreground text-sm">
                  Cuidado permanente para manter seus espaços sempre perfeitos.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Valorização Imobiliária</h4>
                <p className="text-muted-foreground text-sm">
                  Projetos que aumentam o valor e a qualidade de vida do seu imóvel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;