import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Berapa lama proses pengerjaan websitenya?",
    answer: "Durasi pengerjaan bergantung pada paket pilihan Anda. Paket Landing Page selesai dalam 3-5 hari kerja. Paket Company Profile membutuhkan waktu sekitar 7-10 hari kerja. Sementara paket E-Commerce (Toko Online) membutuhkan waktu sekitar 14-21 hari kerja, disesuaikan dengan ketersediaan aset teks/gambar Anda.",
  },
  // {
  //   question: "Apakah saya harus menyewa hosting dan membeli domain sendiri?",
  //   answer: "Tidak perlu repot. Seluruh harga paket kami sudah termasuk pendaftaran nama domain pilihan Anda (.com, .id, atau .net) dan sewa cloud hosting berkecepatan tinggi secara gratis untuk 1 tahun pertama. Pada tahun kedua, Anda hanya perlu membayar biaya perpanjangan domain dan hosting tahunan yang terjangkau.",
  // },
  {
    question: "Bagaimana cara melakukan pembayaran?",
    answer: "Sistem pembayaran kami menggunakan Down Payment (DP) sebesar 50% sebagai tanda jadi pengerjaan. Setelah website selesai dirancang di server uji coba dan disetujui oleh Anda, Anda melakukan pelunasan sisa 50% sisa biaya, baru kemudian file website kami deploy secara resmi ke domain utama Anda.",
  },
  {
    question: "Apakah saya bisa mengubah konten/gambar website secara mandiri setelah selesai?",
    answer: "Sangat bisa. Untuk paket Company Profile dan E-Commerce, kami membangun website terintegrasi dengan CMS (Content Management System) yang mudah digunakan. Kami juga menyertakan panduan singkat (bisa berupa teks/video) agar Anda dapat mengubah teks, menambah postingan blog, atau meng-upload produk baru kapan saja.",
  },
  {
    question: "Apakah ada garansi jika website mengalami error?",
    answer: "Ya, kami berkomitmen memberikan garansi bebas error (bug/broken link/tampilan rusak) selama 1 hingga 3 bulan penuh sejak website dirilis online (tergantung paket). Jika terjadi kendala sistem, kami akan memperbaikinya tanpa dipungut biaya sepeser pun.",
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
            <p className="font-mono text-primary text-sm mb-3">05. FAQ</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
              Pertanyaan Umum
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm md:text-base">
              Menjawab rasa penasaran Anda seputar pengerjaan, pembayaran, dan kelayakan sistem kami.
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
