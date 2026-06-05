import { Layout, Building2, ShoppingBag, Cpu, ArrowUpRight, Receipt } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Landing Page",
    description: "Satu halaman berfokus konversi tinggi untuk mempromosikan produk, kampanye iklan, portofolio, atau pendaftaran event secara singkat dan persuasif.",
    features: ["Desain Satu Halaman", "Optimasi Konversi (CTA)", "Integrasi Formulir & WhatsApp", "Kecepatan Muat Cepat"],
  },
  {
    icon: Building2,
    title: "Company Profile",
    description: "Website profil bisnis multi-halaman untuk menampilkan reputasi perusahaan, visi-misi, sejarah, portofolio proyek, dan detail kontak resmi.",
    features: ["Halaman Multi-Tab", "Galeri Portofolio & Jasa", "Peta Lokasi & Kontak", "Desain Profesional"],
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce / Toko Online",
    description: "Toko online modern untuk memajang produk Anda dengan sistem keranjang belanja, manajemen stok, dan integrasi checkout via WhatsApp atau Payment Gateway.",
    features: ["Manajemen Produk", "Keranjang & Checkout", "Kalkulasi Ongkir", "Sistem Pembayaran Aman"],
  },
  {
    icon: Receipt,
    title: "Aplikasi Kasir (POS) & Inventaris",
    description: "Sistem aplikasi kasir digital untuk mencatat penjualan toko secara real-time, manajemen stok produk, cetak struk nota belanja, dan laporan keuangan harian UMKM.",
    features: ["Pencatatan Transaksi", "Manajemen Stok Barang", "Cetak Struk & Nota", "Laporan Keuangan Otomatis"],
  },
  {
    icon: Cpu,
    title: "Custom Web Application",
    description: "Sistem aplikasi web interaktif kustom seperti CRM, sistem antrean, portal internal, dashboard admin kustom, hingga sistem dengan alur logika bisnis yang kompleks.",
    features: ["Database Terintegrasi", "Sistem Login & Hak Akses", "Panel Kontrol Kustom", "Integrasi API Eksternal"],
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-background relative border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-24">
            <p className="text-primary text-xs md:text-sm font-bold tracking-wider uppercase mb-3">
              01. Layanan Saya
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
              Jasa Website & Aplikasi Kustom
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Membangun website dan aplikasi yang dirancang khusus untuk mempercepat pertumbuhan bisnis Anda, menggunakan teknologi modern berkinerja tinggi.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="p-8 rounded-xl bg-gradient-card border border-border/60 hover:border-primary/40 hover:glow-subtle hover:-translate-y-1 transition-all duration-300 group relative flex flex-col justify-between"
                >
                  <div>
                    {/* Icon & Title */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3.5 rounded-xl bg-primary/5 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:glow-subtle transition-all duration-300">
                        <Icon size={24} />
                      </div>
                      <a
                        href="#pricing"
                        className="text-muted-foreground group-hover:text-primary transition-colors duration-300"
                        aria-label={`Pilih paket ${service.title}`}
                      >
                        <ArrowUpRight size={20} />
                      </a>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-2.5 py-1 text-[10px] rounded-md bg-secondary/40 border border-border/40 text-muted-foreground font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href="#order"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-red-400 transition-colors self-start uppercase tracking-wider"
                  >
                    Konsultasikan Jasa Ini &rarr;
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
