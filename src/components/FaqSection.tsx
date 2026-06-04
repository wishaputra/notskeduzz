import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Berapa lama proses pengerjaan website atau aplikasi?",
    answer: "Durasi pengerjaan bergantung pada kompleksitas fitur proyek Anda. Paket Landing Page selesai dalam 3-5 hari kerja. Paket Company Profile membutuhkan waktu sekitar 7-10 hari kerja. Sementara aplikasi kustom seperti Aplikasi Kasir (POS) atau Toko Online berkisar antara 14-21 hari kerja, disesuaikan dengan ketersediaan data/aset Anda.",
  },
  {
    question: "Apakah biaya pembuatan sudah termasuk sewa hosting dan domain?",
    answer: "Belum termasuk. Untuk hosting dan domain, ketentuannya sangat fleksibel: Anda (klien) dapat menyewanya secara mandiri dan saya bantu setup konfigurasinya secara gratis, atau didelegasikan langsung lewat saya agar pengelolaannya lebih praktis. Opsi ini dapat kita diskusikan lebih lanjut saat konsultasi.",
  },
  {
    question: "Bagaimana cara melakukan pembayaran?",
    answer: "Sistem pembayaran menggunakan Down Payment (DP) sebesar 50% sebagai tanda jadi pengerjaan. Setelah proyek selesai dirancang (di server uji coba atau demo lokal) dan disetujui oleh Anda, pelunasan sisa 50% dibayarkan, kemudian website atau aplikasi akan dideploy secara resmi ke server/domain utama Anda.",
  },
  {
    question: "Apakah saya bisa mengubah konten/gambar secara mandiri setelah selesai?",
    answer: "Sangat bisa. Proyek website (seperti profil bisnis dan toko online) maupun aplikasi kasir dibangun terintegrasi dengan panel admin (CMS) yang mudah digunakan. Panduan singkat berupa teks atau video juga disertakan agar Anda dapat mengedit teks, mengelola transaksi, atau meng-upload produk secara mandiri kapan saja.",
  },
  {
    question: "Apakah ada garansi jika website atau aplikasi mengalami error?",
    answer: "Ya, garansi bebas error (bug/broken link/tampilan rusak) diberikan selama 1 hingga 3 bulan penuh sejak website atau aplikasi dirilis online (tergantung paket). Jika terjadi kendala sistem, perbaikan dilakukan tanpa dipungut biaya sepeser pun.",
  },
  {
    question: "Apakah website buatan Anda ramah SEO?",
    answer: "Tentu saja. Semua website dirancang menggunakan kaidah SEO on-page dasar terbaik, mencakup kecepatan loading cepat, struktur heading (H1-H4) yang teratur, meta description yang ramah mesin pencari, serta integrasi sitemap XML untuk mempermudah Google mengindeks website Anda.",
  },
];

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-background relative border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="font-mono text-primary text-sm mb-3">06. FAQ</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
              Pertanyaan Umum
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm md:text-base">
              Menjawab rasa penasaran Anda seputar pengerjaan, pembayaran, dan kelayakan sistem.
            </p>
          </div>

          {/* Accordion Container */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-border/80 bg-gradient-card overflow-hidden transition-all duration-300"
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-secondary/20 transition-colors"
                  >
                    <span className="font-semibold text-foreground text-sm md:text-base flex items-center gap-3">
                      <HelpCircle size={18} className="text-primary shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-muted-foreground transition-transform duration-300 ${isOpen ? "transform rotate-180 text-primary" : ""
                        }`}
                    />
                  </button>

                  {/* Accordion Body */}
                  <div
                    className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] border-t border-border/40" : "max-h-0"
                      } overflow-hidden`}
                  >
                    <div className="p-6 text-muted-foreground text-xs md:text-sm leading-relaxed bg-background/30">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
