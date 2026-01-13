import { Button } from "@/components/ui/button";
import { TreePine } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <TreePine className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">DbTree</span>
        </Link>

        {/* Navigation links */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="/#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Fonctionnalités
          </a>
          <a href="/#how-it-works" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Comment ça marche
          </a>
          <a href="/#pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Tarifs
          </a>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Button size="sm" asChild>
            <Link to="/download">Télécharger</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
