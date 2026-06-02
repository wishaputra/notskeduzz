import { Zap, Search, Lock, Smartphone, Palette, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Ultra Fast Performance",
    description: "Kecepatan muat halaman di bawah 2 detik. Kami menggunakan framework berkinerja tinggi dan aset teroptimasi untuk performa Google PageSpeed sempurna.",
  },
  {
    icon: Search,
    title: "Google SEO Friendly",
    description: "Selesai dibuat langsung siap diindeks Google. Kami melengkapi website dengan tag meta dinamis, struktur heading semantik, dan sitemap otomatis.",
  },
  {
    icon: Smartphone,
    title: "100% Mobile Responsive",
    description: "Tampilan website beradaptasi sempurna di layar iPhone, Android, tablet, hingga monitor PC 4K. Navigasi mobile-friendly yang sangat nyaman.",
  },
  {
    icon: Palette,
    title: "Desain Premium Kustom",
    description: "Tanpa template murahan atau berat. Kami mendesain UI dari nol untuk memastikan website merefleksikan karakter brand bisnis Anda secara elegan.",
  },
  {
    icon: Lock,
    title: "Sistem Aman & Stabil",
    description: "Proteksi penuh terhadap celah keamanan (injection/XSS). Kode yang rapi meminimalkan risiko server down atau crash saat lalu lintas tinggi.",
  },
  {
    icon: HeartHandshake,
    title: "Support & Garansi",
    description: "Garansi perbaikan bug gratis selama 3 bulan pertama setelah peluncuran, ditambah panduan lengkap cara mengelola isi website mandiri.",
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
            <p className="font-mono text-primary text-sm mb-3">02. Kelebihan Kami</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
              Mengapa Memilih Jasa Kami?
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm md:text-base">
              Kami tidak sekadar membuat website asal jadi. Kami fokus pada kualitas kode, kecepatan akses, dan hasil konversi riil untuk bisnis Anda.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="p-6 md:p-8 rounded-xl bg-background border border-border/80 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/5 border border-primary/20 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground group-hover:glow-subtle transition-all duration-300">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
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
