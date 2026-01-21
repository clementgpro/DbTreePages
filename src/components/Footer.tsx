import { Github, Twitter } from "lucide-react";
import appIcon from "@/assets/app-icon.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={appIcon} alt="DbTree" className="h-9 w-9 rounded-lg" />
            <span className="text-xl font-bold">DbTree</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="transition-colors hover:text-foreground">Documentation</a>
            <a href="#" className="transition-colors hover:text-foreground">Changelog</a>
            <a href="#" className="transition-colors hover:text-foreground">Support</a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} DbTree. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
