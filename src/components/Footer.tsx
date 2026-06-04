import { MessageSquareCode, Mail, Phone, ExternalLink } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12 md:py-16 relative z-10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
          
          {/* Logo & Description */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#home"
              className="flex items-center gap-2 font-mono text-xl font-bold text-gradient tracking-tight"
            >
              <MessageSquareCode className="text-primary w-6 h-6" />
              <span>{"<WishDev />"}</span>
            </a>
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed max-w-sm">
              Jasa pembuatan website & aplikasi kustom berkualitas premium. Berfokus menghadirkan platform digital berkinerja tinggi, aman, dan memikat untuk kesuksesan bisnis Anda.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-foreground font-mono uppercase tracking-wider">
              Tautan Navigasi
            </h4>
            <div className="flex flex-col gap-2.5 text-xs text-muted-foreground">
              <a href="#home" className="hover:text-primary transition-colors">Home</a>
              <a href="#services" className="hover:text-primary transition-colors">Layanan Saya</a>
              <a href="#features" className="hover:text-primary transition-colors">Kelebihan</a>
              <a href="#pricing" className="hover:text-primary transition-colors">Paket Harga</a>
              <a href="#faq" className="hover:text-primary transition-colors">Pertanyaan Umum (FAQ)</a>
            </div>
          </div>

          {/* Contacts & Socials */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-foreground font-mono uppercase tracking-wider">
              Kontak Hubung
            </h4>
            <div className="space-y-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-primary shrink-0" />
                <a href="mailto:support@wishdev.online" className="hover:text-primary transition-colors">
                  support@wishdev.online
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-primary shrink-0" />
                <a href="https://wa.me/6285117279141" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  +62 851-1727-9141
                </a>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <span className="font-mono text-[10px]">Reference:</span>
                <a
                  href="https://github.com/wishaputra"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-primary transition-colors"
                >
                  wishaputra <ExternalLink size={10} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border/50 mb-8" />

        {/* Bottom copyright */}
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] md:text-xs text-muted-foreground font-mono">
          <p>&copy; {currentYear} WishDev. All rights reserved.</p>
          <p>
            Designed & Developed in Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
};
