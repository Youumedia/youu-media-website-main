import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export function PortfolioHero() {
  return (
    <section className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Discover the cinematic quality and professional delivery that sets
            our work apart. Each project represents our commitment to
            storytelling excellence.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              <Play className="mr-2 h-5 w-5" />
              Watch Showreel
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              25+
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              Projects Completed
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              25+
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              Happy Clients
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              100%
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              Satisfaction Rate
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              5+
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              Years Experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
