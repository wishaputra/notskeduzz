import { ArrowDown, Code, Smartphone, ShieldCheck } from "lucide-react";
import furekushiImage from "../assets/furekushi.png";
import simapekaImage from "../assets/simapeka.png";
import kedaisyncImage from "../assets/kedaisync.png";

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

      <div className="container mx-auto px-6 relative z-10 py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">


            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              <span className="text-foreground block">Jasa Pembuatan</span>
              <span className="text-gradient block">Website & Aplikasi</span>
            </h1>

            {/* Description */}
            <p className="text-muted-foreground text-sm md:text-lg max-w-xl mb-8 leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
              Saya membangun website dan aplikasi kustom (seperti aplikasi kasir/POS, toko online, profil bisnis) berkinerja tinggi, responsif, dan aman untuk mendongkrak penjualan serta efisiensi bisnis Anda.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              <a
                href="#pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-primary text-primary-foreground font-bold rounded-lg hover:opacity-90 hover:scale-[1.02] transition-all duration-300 shadow-lg glow-primary"
              >
                Pilih Paket Jasa
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-border bg-secondary/30 text-foreground hover:bg-secondary/60 hover:border-primary/50 transition-all duration-300 rounded-lg font-semibold"
              >
                Lihat Layanan Saya
              </a>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 max-w-xl border-t border-border/50 pt-8 animate-fade-in-up opacity-0 text-left" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-primary/5 border border-primary/10 text-primary shrink-0">
                  <Code size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-foreground">Clean Code</h4>
                  <p className="text-[10px] text-muted-foreground">React & Laravel</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-primary/5 border border-primary/10 text-primary shrink-0">
                  <Smartphone size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-foreground">Responsive</h4>
                  <p className="text-[10px] text-muted-foreground">Mobile Optimized</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-primary/5 border border-primary/10 text-primary shrink-0">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-foreground">Garansi Sistem</h4>
                  <p className="text-[10px] text-muted-foreground">Bebas Bug & Error</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mockup Collage */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0 flex items-center justify-center h-[320px] md:h-[450px] animate-fade-in opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
            {/* Glow behind mockup stack */}
            <div className="absolute w-72 h-72 bg-primary/20 rounded-full blur-[80px]" />
            
            {/* Mockup Collage Container */}
            <div className="relative w-full max-w-[380px] h-full flex items-center justify-center">
              
              {/* Back Left Card: Furekushi */}
              <div className="absolute left-0 top-1/4 w-3/5 aspect-video rounded-lg overflow-hidden border border-border/80 shadow-[0_10px_30px_rgba(0,0,0,0.5)] rotate-[-6deg] hover:rotate-0 hover:scale-105 hover:z-30 transition-all duration-300 cursor-pointer bg-gradient-card animate-float">
                <img src={furekushiImage} alt="Furekushi E-Commerce mockup" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-background/90 border-t border-border px-3 py-1.5 text-[10px] font-bold text-foreground">
                  Furekushi (E-Commerce)
                </div>
              </div>

              {/* Back Right Card: KedaiSync */}
              <div className="absolute right-0 top-1/3 w-3/5 aspect-video rounded-lg overflow-hidden border border-border/80 shadow-[0_10px_30px_rgba(0,0,0,0.5)] rotate-[8deg] hover:rotate-0 hover:scale-105 hover:z-30 transition-all duration-300 cursor-pointer bg-gradient-card animate-float animation-delay-300">
                <img src={kedaisyncImage} alt="KedaiSync POS mockup" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-background/90 border-t border-border px-3 py-1.5 text-[10px] font-bold text-foreground">
                  KedaiSync (POS/Kasir)
                </div>
              </div>

              {/* Front Center Card: ASN LMS */}
              <div className="absolute left-1/4 top-12 w-3/5 aspect-video rounded-lg overflow-hidden border border-primary/30 shadow-[0_15px_35px_rgba(220,38,38,0.2)] z-20 hover:scale-110 hover:border-primary transition-all duration-300 cursor-pointer bg-gradient-card animate-float animation-delay-200">
                <img src={simapekaImage} alt="ASN LMS mockup" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-background/90 border-t border-primary/20 px-3 py-1.5 text-[10px] font-bold text-foreground">
                  LMS Portal (Web App)
                </div>
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
