import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Belos jardins e piscinas transformados pela Sírius Garden"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Leaf className="w-4 h-4" />
            <span className="text-sm font-medium">Especialistas em Transformação de Ambientes</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Transformamos ambientes em espaços 
            <span className="bg-gradient-to-r from-primary to-nature bg-clip-text text-transparent"> funcionais</span>, 
            <span className="bg-gradient-to-r from-water to-accent bg-clip-text text-transparent"> confortáveis</span> e 
            <span className="bg-gradient-to-r from-earth to-nature bg-clip-text text-transparent"> encantadores</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
            Criação, manutenção e valorização de áreas externas e internas com foco em jardinagem, 
            piscinas, paisagismo e sustentabilidade.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <Star className="w-4 h-4 text-primary" />
              </div>
              <div>
                <div className="font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Projetos Realizados</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-water/10 rounded-full flex items-center justify-center">
                <Users className="w-4 h-4 text-water" />
              </div>
              <div>
                <div className="font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-nature/10 rounded-full flex items-center justify-center">
                <Leaf className="w-4 h-4 text-nature" />
              </div>
              <div>
                <div className="font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Sustentável</div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-gradient-to-r from-primary to-nature hover:from-primary-hover hover:to-primary group">
              Agendar Visita Gratuita
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Ver Nossos Projetos
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground mb-3">Nossos diferenciais:</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">✓ Soluções sob medida</span>
              <span className="px-3 py-1 bg-water/10 text-water rounded-full">✓ Eficiência & Estética</span>
              <span className="px-3 py-1 bg-nature/10 text-nature rounded-full">✓ Atendimento ágil</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;