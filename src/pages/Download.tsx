import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Monitor } from "lucide-react";
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

                </tbody>
              </table>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DownloadPage;
