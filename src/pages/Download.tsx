import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Monitor, Apple, Terminal, Clock, Check, Package } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DownloadPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Back link */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à l'accueil
          </Link>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Télécharger <span className="gradient-text">DbTree</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Commencez à explorer vos données en moins de 2 minutes. 
              Aucune installation Java requise, tout est inclus.
            </p>
          </div>

          {/* Download cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Windows - Available */}
            <div className="relative rounded-2xl border-2 border-primary bg-card p-6 glow-effect">
              <div className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                Disponible
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <Monitor className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-2">Windows</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Version portable (64-bit)
                </p>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                  <Package className="h-4 w-4" />
                  <span>JRE inclus • ~150 MB</span>
                </div>

                <ul className="text-left space-y-2 mb-6 w-full">
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Windows 10/11</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Aucune installation requise</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Prêt à l'emploi</span>
                  </li>
                </ul>
                
                <Button className="w-full" size="lg">
                  <Download className="mr-2 h-5 w-5" />
                  Télécharger
                </Button>
                
                <p className="text-xs text-muted-foreground mt-3">
                  Version 1.0.0 • Gratuit
                </p>
              </div>
            </div>

            {/* macOS - Coming soon */}
            <div className="relative rounded-2xl border border-border bg-card/50 p-6 opacity-75">
              <div className="absolute -top-3 left-6 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground flex items-center gap-1">
                <Clock className="h-3 w-3" />
                Bientôt
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-muted">
                  <Apple className="h-8 w-8 text-muted-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-muted-foreground">macOS</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Intel & Apple Silicon
                </p>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                  <Package className="h-4 w-4" />
                  <span>En développement</span>
                </div>

                <ul className="text-left space-y-2 mb-6 w-full">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>macOS 12+</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Application native</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Notarisée par Apple</span>
                  </li>
                </ul>
                
                <Button className="w-full" size="lg" disabled variant="outline">
                  Bientôt disponible
                </Button>
                
                <p className="text-xs text-muted-foreground mt-3">
                  Prévu pour Q2 2026
                </p>
              </div>
            </div>

            {/* Linux - Coming soon */}
            <div className="relative rounded-2xl border border-border bg-card/50 p-6 opacity-75">
              <div className="absolute -top-3 left-6 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground flex items-center gap-1">
                <Clock className="h-3 w-3" />
                Bientôt
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-muted">
                  <Terminal className="h-8 w-8 text-muted-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-muted-foreground">Linux</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  AppImage & .deb
                </p>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                  <Package className="h-4 w-4" />
                  <span>En développement</span>
                </div>

                <ul className="text-left space-y-2 mb-6 w-full">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Ubuntu, Debian, Fedora</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Format AppImage portable</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Package .deb</span>
                  </li>
                </ul>
                
                <Button className="w-full" size="lg" disabled variant="outline">
                  Bientôt disponible
                </Button>
                
                <p className="text-xs text-muted-foreground mt-3">
                  Prévu pour Q3 2026
                </p>
              </div>
            </div>
          </div>

          {/* Additional info */}
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Configuration requise</h2>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="grid sm:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-medium mb-2">Système</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Windows 10 ou 11 (64-bit)</li>
                    <li>• 4 GB de RAM minimum</li>
                    <li>• 200 MB d'espace disque</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Base de données</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• PostgreSQL 9.6 ou supérieur</li>
                    <li>• Accès réseau à votre base</li>
                    <li>• Identifiants de connexion</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter signup for other platforms */}
          <div className="mt-16 max-w-xl mx-auto text-center">
            <p className="text-muted-foreground">
              Vous utilisez macOS ou Linux ? Laissez votre email pour être notifié dès la sortie.
            </p>
            <div className="mt-4 flex gap-2">
              <input 
                type="email" 
                placeholder="votre@email.com" 
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button>Me notifier</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DownloadPage;
