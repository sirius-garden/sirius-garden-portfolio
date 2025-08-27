import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Proprietária Residencial",
      content: "A Sírius Garden transformou completamente nosso quintal! O projeto da piscina com jardim vertical ficou incrível. A família toda usa o espaço diariamente e já recebemos várias visitas que ficaram impressionadas.",
      rating: 5,
      project: "Área de Lazer Completa"
    },
    {
      name: "Carlos Mendes",
      role: "Administrador Predial",
      content: "Excelente trabalho na revitalização da área da piscina do condomínio. Resolveram problemas antigos de vazamento e criaram um paisagismo maravilhoso. Os moradores estão encantados!",
      rating: 5,
      project: "Revitalização de Piscina"
    },
    {
      name: "Ana Paula Costa",
      role: "Diretora de RH",
      content: "O jardim corporativo que a Sírius criou na nossa empresa mudou o ambiente de trabalho. Os funcionários ficam mais relaxados e produtivos. Projeto sustentável e muito bem executado!",
      rating: 5,
      project: "Jardim Corporativo"
    },
    {
      name: "Roberto Oliveira",
      role: "Proprietário de Sítio",
      content: "Serviço de manutenção impecável! A equipe é pontual, profissional e cuidadosa. Meu jardim nunca esteve tão bonito e bem cuidado. Recomendo para todos!",
      rating: 5,
      project: "Manutenção Paisagística"
    },
    {
      name: "Fernanda Lima",
      role: "Arquiteta",
      content: "Como profissional da área, posso afirmar que o trabalho da Sírius Garden é de excelente qualidade. Atenção aos detalhes, materiais de primeira e execução perfeita. Parceria de confiança!",
      rating: 5,
      project: "Paisagismo Residencial"
    },
    {
      name: "Eduardo Santos",
      role: "Empresário",
      content: "Investimento que valeu cada centavo! Além da beleza, o projeto aumentou significativamente o valor do meu imóvel. Atendimento personalizado e resultado acima das expectativas.",
      rating: 5,
      project: "Projeto Completo de Jardim"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating
            ? "text-yellow-400 fill-yellow-400"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section id="depoimentos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que Nossos <span className="bg-gradient-to-r from-primary to-nature bg-clip-text text-transparent">Clientes</span> Dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista. Veja alguns depoimentos 
            de quem já transformou seus espaços conosco.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Projetos Realizados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-water mb-2">98%</div>
            <div className="text-muted-foreground">Satisfação</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-nature mb-2">10+</div>
            <div className="text-muted-foreground">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-earth mb-2">4.9</div>
            <div className="text-muted-foreground">Avaliação Média</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 border-0 shadow-soft hover:shadow-elevated transition-all duration-300 relative">
              <div className="absolute top-4 right-4 text-primary/20">
                <Quote className="w-8 h-8" />
              </div>
              
              <div className="mb-4">
                <div className="flex items-center space-x-1 mb-2">
                  {renderStars(testimonial.rating)}
                </div>
                <div className="text-sm text-primary font-medium">{testimonial.project}</div>
              </div>
              
              <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              
              <div className="border-t border-border pt-4">
                <div className="font-bold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-nature/5 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Por Que Nossos Clientes Confiam em Nós?</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h4 className="font-bold text-foreground mb-2">Qualidade Garantida</h4>
              <p className="text-sm text-muted-foreground">Materiais premium e execução impecável</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-water/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-bold text-foreground mb-2">Agilidade</h4>
              <p className="text-sm text-muted-foreground">Cronogramas respeitados e entregas pontuais</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-nature/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h4 className="font-bold text-foreground mb-2">Transparência</h4>
              <p className="text-sm text-muted-foreground">Comunicação clara em todas as etapas</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-earth/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h4 className="font-bold text-foreground mb-2">Garantia Total</h4>
              <p className="text-sm text-muted-foreground">Suporte contínuo e manutenção garantida</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;