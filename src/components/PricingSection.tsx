import { Check, Flame, MessageSquare } from "lucide-react";

export interface Package {
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  popular: boolean;
  features: string[];
  ctaText: string;
  tag: string;
}

export const packages: Package[] = [
  {
    name: "Landing Page",
    price: "Rp 300.000",
    originalPrice: "Rp 600.000",
    description: "Cocok untuk promosi produk tunggal, kampanye iklan (Ads), atau portofolio personal.",
    popular: false,
    features: [
      "1 Halaman Utama Kustom",
      "Desain Responsive & Mobile-friendly",
      "Integrasi Formulir & Tombol WhatsApp",
      "Bantu Setup Domain & Hosting (Gratis)",
      "Sertifikat SSL (HTTPS) Gratis",
      "Garansi Error & Bugs 1 Bulan",
      "Revisi Desain Maksimal 2x",
    ],
    ctaText: "Pesan Landing Page",
    tag: "landing-page",
  },
  {
    name: "Company Profile",
    price: "Rp 800.000",
    originalPrice: "Rp 1.200.000",
    description: "Sangat direkomendasikan untuk mengenalkan brand bisnis, instansi, atau jasa UKM Anda.",
    popular: true,
    features: [
      "Hingga 5 Halaman Utama",
      "Desain Premium Modern & Interaktif",
      "Panel Admin Manajemen Konten (CMS)",
      "Galeri Proyek / Daftar Layanan",
      "Bantu Setup Domain & Hosting (Gratis)",
      "Integrasi WhatsApp & Peta Lokasi",
      "SEO Setup Dasar & Google Index",
      "Garansi Error & Bugs 3 Bulan",
      "Revisi Desain Maksimal 3x",
    ],
    ctaText: "Pesan Company Profile",
    tag: "company-profile",
  },
  {
    name: "E-Commerce (Toko Online)",
    price: "Rp 1.800.000",
    originalPrice: "Rp 2.800.000",
    description: "Sempurna untuk brand ritel, butik online, dan UKM yang ingin jualan otomatis.",
    popular: false,
    features: [
      "Halaman Produk Unlimited",
      "Sistem Keranjang & Checkout",
      "Panel Admin Manajemen Produk & Order",
      "Kalkulator Ongkos Kirim Otomatis",
      "Integrasi WhatsApp / Gateway Pembayaran",
      "Bantu Setup Domain & Hosting (Gratis)",
      "SEO Setup & Kecepatan Muat Ekstrim",
      "Garansi Error & Bugs 3 Bulan",
      "Revisi Desain Maksimal 5x",
    ],
    ctaText: "Pesan Toko Online",
    tag: "ecommerce",
  },
  {
    name: "App Kasir & Kustom",
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.000.000",
    description: "Aplikasi kasir (POS), CRM, inventory, atau sistem web kustom sesuai kebutuhan alur bisnis Anda.",
    popular: false,
    features: [
      "Desain UI/UX Kustom Penuh",
      "Database & Alur Sistem Terintegrasi",
      "Transaksi Penjualan & Cetak Struk (Untuk POS)",
      "Sistem Hak Akses & Login User",
      "Bantu Setup VPS/Hosting Cloud (Gratis)",
      "Dukungan Teknis & Maintenance 6 Bulan",
      "Revisi Fleksibel Selama Pengerjaan",
    ],
    ctaText: "Konsultasi Kustom",
    tag: "custom",
  },
];

interface PricingSectionProps {
  onSelectPackage: (packageName: string) => void;
}

export const PricingSection = ({ onSelectPackage }: PricingSectionProps) => {
  const handleSelect = (packageName: string) => {
    onSelectPackage(packageName);
    // Smooth scroll to order section
    const orderSection = document.getElementById("order");
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-20 md:py-32 bg-background relative border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-24">
            <p className="font-mono text-primary text-sm mb-3">03. Paket Harga</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
              Investasi Website & Aplikasi Anda
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm md:text-base">
              Pilihan harga transparan sesuai kebutuhan proyek Anda. Tanpa biaya tersembunyi.
              Catatan: Harga di bawah belum termasuk biaya sewa hosting dan domain (bisa dibantu setup secara gratis).
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 items-stretch">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-xl border transition-all duration-300 flex flex-col justify-between relative ${pkg.popular
                  ? "border-primary bg-gradient-card glow-subtle scale-[1.02] z-10"
                  : "border-border bg-gradient-card hover:border-primary/30"
                  } p-6`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold font-mono flex items-center gap-1 uppercase tracking-wider">
                    <Flame size={12} className="fill-current" />
                    Terpopuler
                  </div>
                )}

                <div>
                  {/* Name & Desc */}
                  <h3 className="text-lg font-bold text-foreground mb-1">{pkg.name}</h3>
                  <p className="text-xs text-muted-foreground min-h-[48px] leading-relaxed mb-4">
                    {pkg.description}
                  </p>

                  {/* Pricing */}
                  <div className="mb-6">
                    {pkg.originalPrice && (
                      <span className="text-xs text-muted-foreground/60 line-through mr-2 font-mono">
                        {pkg.originalPrice}
                      </span>
                    )}
                    <div className="text-2xl font-extrabold text-foreground flex items-baseline">
                      <span className="text-gradient">{pkg.price}</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-border/50 mb-6" />

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                        <Check className="text-primary w-4 h-4 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleSelect(pkg.name)}
                  className={`w-full py-2.5 px-4 rounded-lg font-semibold text-xs transition-all duration-300 flex items-center justify-center gap-2 ${pkg.popular
                    ? "bg-gradient-primary text-primary-foreground hover:opacity-90 hover:glow-primary"
                    : "bg-secondary hover:bg-secondary/80 text-foreground border border-border/80 hover:border-primary/20"
                    }`}
                >
                  <MessageSquare size={14} />
                  {pkg.ctaText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
