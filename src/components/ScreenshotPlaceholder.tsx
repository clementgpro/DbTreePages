import { ImageIcon } from "lucide-react";

interface ScreenshotPlaceholderProps {
  label?: string;
  aspectRatio?: "video" | "square" | "wide";
  className?: string;
}

const ScreenshotPlaceholder = ({ 
  label = "Screenshot", 
  aspectRatio = "video",
  className = ""
}: ScreenshotPlaceholderProps) => {
  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    wide: "aspect-[21/9]"
  };

  return (
    <div 
      className={`
        relative overflow-hidden rounded-xl border border-border/50 
        bg-gradient-to-br from-muted/50 to-muted/20
        ${aspectClasses[aspectRatio]}
        ${className}
      `}
    >
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted-foreground">
        <div className="rounded-full bg-secondary p-4">
          <ImageIcon className="h-8 w-8" />
        </div>
        <span className="text-sm font-medium">{label}</span>
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100" />
    </div>
  );
};

export default ScreenshotPlaceholder;
