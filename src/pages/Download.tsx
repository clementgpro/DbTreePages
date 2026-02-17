import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Monitor } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DOWNLOAD_URL = "https://github.com/clementgpro/DbTreePages/releases/download/1.0.0/DbTree.zip";

const DownloadPage = () => {
  const { t } = useTranslation();

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
            {t('download.back')}
          </Link>

          {/* Header */}
          <div className="text-center mb-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('download.title')} <span className="gradient-text">DbTree</span>
            </h1>
            <p className="text-muted-foreground">
              {t('download.version')}
            </p>
          </div>

          {/* Platform tabs */}
          <div className="max-w-3xl mx-auto mt-12">

            {/* Download table */}
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="text-left px-6 py-4 font-medium text-sm">{t('download.platform')}</th>
                    <th className="text-left px-6 py-4 font-medium text-sm">{t('download.versionCol')}</th>
                    <th className="text-right px-6 py-4 font-medium text-sm">{t('download.downloadCol')}</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Windows available */}
                  <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Monitor className="h-5 w-5 text-primary" />
                        <span>{t('download.windows')}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">1.0.0</td>
                    <td className="px-6 py-4 text-right">
                      <Button size="sm" className="gap-2" asChild>
                        <a href={DOWNLOAD_URL} download data-umami-event="Click on Download" data-umami-event-nom-fichier="DbTree.zip">
                          <Download className="h-4 w-4" />
                          {t('download.downloadButton')}
                        </a>
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
