import { ArrowDown, Code, Sparkles, Smartphone, ShieldCheck } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero pt-20"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[130px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-[130px] animate-float animation-delay-300" />

      <div className="container mx-auto px-6 relative z-10 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting / Sub-headline */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs md:text-sm font-mono mb-6 animate-fade-in-down opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            <Sparkles size={14} className="animate-spin-slow" />
            <span>Jasa Web & Aplikasi Kustom</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <span className="text-foreground">Jasa Pembuatan</span>{" "}
            <span className="text-gradient">Website & Aplikasi</span>
          </h1>

          {/* Description */}
          <p className="text-muted-foreground text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            Saya membangun website dan aplikasi kustom (seperti aplikasi kasir, toko online, profil bisnis) berkinerja tinggi, responsif, dan aman untuk mendongkrak penjualan serta efisiensi bisnis Anda.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            <a
              href="#pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 hover:scale-[1.02] transition-all duration-300 glow-primary"
            >
              Pilih Paket Jasa
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-border bg-secondary/30 text-foreground hover:bg-secondary/60 hover:border-primary/50 transition-all duration-300 rounded-lg"
            >
              Lihat Layanan Saya
            </a>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto border-t border-border/50 pt-8 animate-fade-in-up opacity-0 text-left" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/5 border border-primary/10 text-primary shrink-0">
                <Code size={18} />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-foreground">Clean Code</h4>
                <p className="text-[10px] text-muted-foreground">React & Tailwind</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/5 border border-primary/10 text-primary shrink-0">
                <Smartphone size={18} />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-foreground">Fully Responsive</h4>
                <p className="text-[10px] text-muted-foreground">Mobile Optimized</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/5 border border-primary/10 text-primary shrink-0">
                <ShieldCheck size={18} />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-foreground">Garansi Sistem</h4>
                <p className="text-[10px] text-muted-foreground">Bebas Error & Bug</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={22} />
          </a>
        </div>
      </div>
    </section>
  );
};
