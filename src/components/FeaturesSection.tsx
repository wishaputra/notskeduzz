import { Zap, Search, Lock, Smartphone, Palette, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Ultra Fast Performance",
    description: "Kecepatan muat halaman di bawah 2 detik. Menggunakan framework berkinerja tinggi dan aset teroptimasi untuk performa Google PageSpeed sempurna.",
  },
  {
    icon: Search,
    title: "Google SEO Friendly",
    description: "Selesai dibuat langsung siap diindeks Google. Website dilengkapi dengan tag meta dinamis, struktur heading semantik, dan sitemap otomatis.",
  },
  {
    icon: Smartphone,
    title: "100% Mobile Responsive",
    description: "Tampilan website dan aplikasi beradaptasi sempurna di layar iPhone, Android, tablet, hingga monitor PC 4K. Navigasi mobile-friendly yang sangat nyaman.",
  },
  {
    icon: Palette,
    title: "Desain Premium Kustom",
    description: "Tanpa template murahan atau berat. UI didesain dari nol untuk memastikan website merefleksikan karakter brand bisnis Anda secara elegan.",
  },
  {
    icon: Lock,
    title: "Sistem Aman & Stabil",
    description: "Proteksi penuh terhadap celah keamanan (injection/XSS). Kode yang rapi meminimalkan risiko server down atau crash saat lalu lintas tinggi.",
  },
  {
    icon: HeartHandshake,
    title: "Support & Garansi",
    description: "Garansi perbaikan bug gratis selama 1 hingga 3 bulan penuh sejak website atau aplikasi dirilis online (tergantung paket). Jika terjadi kendala sistem, perbaikan dilakukan tanpa dipungut biaya sepeser pun.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-secondary/20 relative border-t border-border/30">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-24">
            <p className="text-primary text-xs md:text-sm font-bold tracking-wider uppercase mb-3">
              02. Kelebihan Saya
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
              Mengapa Memilih Jasa Saya?
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Saya tidak sekadar membuat website atau aplikasi asal jadi. Saya fokus pada kualitas performa kode, kecepatan akses, dan hasil konversi riil untuk bisnis Anda.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="p-6 md:p-8 rounded-xl bg-background border border-border/80 hover:border-primary/30 hover:glow-subtle hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/5 border border-primary/20 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground group-hover:glow-subtle transition-all duration-300 animate-float">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
