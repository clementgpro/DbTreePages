import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Monitor, Apple, Clock } from "lucide-react";
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
          <div className="text-center mb-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Télécharger <span className="gradient-text">DbTree</span>
            </h1>
            <p className="text-muted-foreground">
              Dernière version : 1.0.0 | Date de sortie : 10 janvier 2026
            </p>
          </div>

          {/* Platform tabs */}
          <div className="max-w-3xl mx-auto mt-12">
            <div className="flex justify-center gap-2 mb-8">
              <Button variant="default" className="gap-2">
                <Monitor className="h-4 w-4" />
                Windows
              </Button>
              <Button variant="outline" className="gap-2 opacity-60" disabled>
                <Apple className="h-4 w-4" />
                Mac
                <span className="text-xs bg-muted px-2 py-0.5 rounded-full ml-1">Bientôt</span>
              </Button>
            </div>

            {/* Download table */}
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="text-left px-6 py-4 font-medium text-sm">Plateforme</th>
                    <th className="text-left px-6 py-4 font-medium text-sm">Version</th>
                    <th className="text-right px-6 py-4 font-medium text-sm">Téléchargement</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Windows available */}
                  <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Monitor className="h-5 w-5 text-primary" />
                        <span>Windows x64 (Portable)</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">1.0.0</td>
                    <td className="px-6 py-4 text-right">
                      <Button size="sm" className="gap-2">
                        <Download className="h-4 w-4" />
                        Télécharger
                      </Button>
                    </td>
                  </tr>

                  {/* macOS coming soon */}
                  <tr className="border-b border-border opacity-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Apple className="h-5 w-5 text-muted-foreground" />
                        <span className="text-muted-foreground">macOS Intel</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">-</td>
                    <td className="px-6 py-4 text-right">
                      <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        Bientôt
                      </span>
                    </td>
                  </tr>
                  <tr className="opacity-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Apple className="h-5 w-5 text-muted-foreground" />
                        <span className="text-muted-foreground">macOS Apple Silicon</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">-</td>
                    <td className="px-6 py-4 text-right">
                      <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        Bientôt
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Info box */}
            <div className="mt-8 rounded-xl border border-border bg-muted/30 p-6">
              <h3 className="font-semibold mb-2">Installation Windows</h3>
              <p className="text-muted-foreground text-sm mb-4">
                La version portable ne nécessite aucune installation. Décompressez l'archive et lancez DbTree.exe.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• JRE inclus - aucune installation Java requise</li>
                <li>• Compatible Windows 10 et 11 (64-bit)</li>
                <li>• Taille : ~150 MB</li>
              </ul>
            </div>

            {/* Newsletter for Mac users */}
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Vous utilisez macOS ? Laissez votre email pour être notifié dès la sortie.
              </p>
              <div className="flex gap-2 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="votre@email.com" 
                  className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button>Me notifier</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DownloadPage;
