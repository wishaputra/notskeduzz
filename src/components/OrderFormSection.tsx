import React, { useState } from "react";
import { Send, MessageSquareCode, ShieldCheck, Sparkles } from "lucide-react";
import { packages } from "./PricingSection";

interface OrderFormSectionProps {
  selectedPackage: string;
  setSelectedPackage: (packageName: string) => void;
}

// Target WhatsApp business number (e.g. +62 851-2345-6789).
// The user can edit this number in their environment variables or directly in code.
const WHATSAPP_NUMBER = "6285117279141";

export const OrderFormSection = ({
  selectedPackage,
  setSelectedPackage,
}: OrderFormSectionProps) => {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    details: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [redirected, setRedirected] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Compile WhatsApp message
    const message = `Halo Ka! Saya ingin berkonsultasi/memesan website atau aplikasi:

*Detail Pemesanan:*
- Nama Lengkap: ${formData.name}
- Nama Bisnis: ${formData.businessName || "-"}
- Kontak HP/WA: ${formData.phone}
- Pilihan Layanan/Paket: *${selectedPackage}*

*Kebutuhan Tambahan / Catatan:*
${formData.details || "Tidak ada catatan tambahan."}

Terima kasih.`;

    const encodedText = encodeURIComponent(message);
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;

    // Simulate sending progress
    setTimeout(() => {
      setIsSubmitting(false);
      setRedirected(true);
      window.open(waUrl, "_blank", "noopener,noreferrer");

      // Reset redirection notice after a while
      setTimeout(() => setRedirected(false), 5000);
    }, 1200);
  };

  return (
    <section id="order" className="py-20 md:py-32 bg-secondary/20 relative border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <p className="font-mono text-primary text-sm mb-3">04. Hubungi Saya</p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
                  Konsultasikan Proyek Anda
                </h2>
                <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                  Isi formulir singkat di samping. Saya akan langsung mengarahkan Anda ke WhatsApp untuk berdiskusi lebih lanjut.
                </p>
              </div>

              {/* Guarantees Box */}
              <div className="p-6 rounded-xl bg-background border border-border/60 space-y-4">
                <h4 className="text-sm font-bold text-foreground font-mono flex items-center gap-2">
                  <Sparkles size={16} className="text-primary" />
                  Jaminan Proses Layanan
                </h4>

                <div className="space-y-3 text-xs text-muted-foreground">
                  <div className="flex gap-2">
                    <ShieldCheck className="text-primary w-4 h-4 shrink-0 mt-0.5" />
                    <p>
                      <strong>Tanpa Denda Revisi:</strong> Berkomitmen untuk menyesuaikan desain sesuai kuota revisi paket tanpa biaya siluman.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <ShieldCheck className="text-primary w-4 h-4 shrink-0 mt-0.5" />
                    <p>
                      <strong>Kontrak & Transparansi:</strong> Ketentuan pengerjaan jelas di awal dan update progress pengerjaan dilakukan berkala.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <ShieldCheck className="text-primary w-4 h-4 shrink-0 mt-0.5" />
                    <p>
                      <strong>Serah Terima Aset Penuh:</strong> Akun hosting, domain, dan kode sumber proyek diserahkan 100% milik Anda.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7">
              <div className="p-8 rounded-2xl bg-gradient-card border border-border glow-subtle">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-lg bg-primary/5 border border-primary/20 text-primary">
                    <MessageSquareCode size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Formulir Pesanan Jasa</h3>
                    <p className="text-xs text-muted-foreground">Isi data dan lanjutkan via WhatsApp</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Nama */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-muted-foreground mb-2 font-mono">
                      NAMA LENGKAP *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Masukkan nama Anda..."
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground text-sm focus:outline-none focus:border-primary/80 focus:ring-1 focus:ring-primary/80 transition-all font-sans"
                    />
                  </div>

                  {/* Nama Bisnis */}
                  <div>
                    <label htmlFor="businessName" className="block text-xs font-semibold text-muted-foreground mb-2 font-mono">
                      NAMA BISNIS / PERUSAHAAN (OPSIONAL)
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      placeholder="Contoh: Toko Ritel Maju Jaya, Coffee Shop..."
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground text-sm focus:outline-none focus:border-primary/80 focus:ring-1 focus:ring-primary/80 transition-all font-sans"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    {/* Telepon */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-muted-foreground mb-2 font-mono">
                        NOMOR HP / WHATSAPP *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="Contoh: 081234567890"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground text-sm focus:outline-none focus:border-primary/80 focus:ring-1 focus:ring-primary/80 transition-all font-sans"
                      />
                    </div>

                    {/* Paket */}
                    <div>
                      <label htmlFor="package" className="block text-xs font-semibold text-muted-foreground mb-2 font-mono">
                        LAYANAN / PAKET *
                      </label>
                      <select
                        id="package"
                        value={selectedPackage}
                        onChange={(e) => setSelectedPackage(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground text-sm focus:outline-none focus:border-primary/80 focus:ring-1 focus:ring-primary/80 transition-all font-sans appearance-none cursor-pointer"
                      >
                        {packages.map((pkg) => (
                          <option key={pkg.name} value={pkg.name} className="bg-card text-foreground">
                            {pkg.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Kebutuhan / Catatan */}
                  <div>
                    <label htmlFor="details" className="block text-xs font-semibold text-muted-foreground mb-2 font-mono">
                      DETAIL KEBUTUHAN / REQUEST KHUSUS
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      rows={4}
                      placeholder="Jelaskan kebutuhan website atau aplikasi Anda (fitur kustom, alur sistem, referensi, dll.)..."
                      value={formData.details}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground text-sm focus:outline-none focus:border-primary/80 focus:ring-1 focus:ring-primary/80 transition-all font-sans resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-gradient-primary text-primary-foreground font-bold rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 glow-primary disabled:opacity-50"
                  >
                    <Send size={16} />
                    {isSubmitting ? "Menghubungkan..." : "Kirim Form & Lanjut WhatsApp"}
                  </button>

                  {redirected && (
                    <p className="text-center text-xs text-primary font-mono animate-pulse mt-2">
                      Membuka WhatsApp... Silakan periksa tab baru browser Anda.
                    </p>
                  )}
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
