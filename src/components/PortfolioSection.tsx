import { ExternalLink, Github } from "lucide-react";
import furekushiImage from "../assets/furekushi.png";
import simapekaImage from "../assets/simapeka.png";
import kedaisyncImage from "../assets/kedaisync.png";

const projects = [
  {
    title: "Furekushi (E-Commerce Platform)",
    description:
      "Platform e-commerce modern dengan fitur keranjang belanja interaktif, manajemen katalog, dan dashboard admin yang responsif. Didesain dari nol untuk performa cepat dan pengalaman belanja digital yang mulus.",
    tech: ["React", "Vite", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/wishaputra/furekushi",
    demo: "https://furekushi.vercel.app",
    image: furekushiImage,
    tag: "E-Commerce",
  },
  {
    title: "Corporate University for ASN",
    description:
      "Sistem portal pembelajaran digital (Learning Management System) kustom untuk Aparatur Sipil Negara (ASN) guna mempelajari keahlian profesional baru, melacak progress materi, dan menerbitkan sertifikasi karir resmi.",
    tech: ["Laravel", "Vite.js", "Tailwind CSS", "MySQL"],
    github: "https://github.com/wishaputra/simapeka.git",
    demo: "#",
    image: simapekaImage,
    tag: "LMS Web App",
  },
  {
    title: "KedaiSync (POS & Inventory)",
    description:
      "Aplikasi kasir (Point of Sale) digital dan manajemen stok barang untuk UMKM. Memudahkan pencatatan transaksi harian, perhitungan laba rugi otomatis, serta pengelolaan sirkulasi produk secara luring-sentris.",
    tech: ["Flutter", "Dart", "SQLite"],
    github: "https://github.com/wishaputra/kedaisync",
    demo: "#",
    image: kedaisyncImage,
    tag: "POS Application",
  },
];

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-background relative border-t border-border/30">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.01)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-24">
            <p className="font-mono text-primary text-sm mb-3">03. Portofolio</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
              Hasil Karya & Proyek Pilihan
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm md:text-base">
              Beberapa proyek website dan aplikasi kustom yang telah selesai saya rancang dan kembangkan untuk membantu digitalisasi bisnis klien.
            </p>
          </div>

          {/* Projects List */}
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`grid lg:grid-cols-12 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Project Image Box */}
                <div
                  className={`lg:col-span-7 relative group overflow-hidden rounded-xl border border-border/60 bg-gradient-card ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Details Box */}
                <div
                  className={`lg:col-span-5 flex flex-col ${
                    index % 2 === 1 ? "lg:order-1 lg:text-right lg:items-end" : "lg:items-start"
                  }`}
                >
                  <span className="font-mono text-xs text-primary font-bold uppercase tracking-wider mb-2">
                    {project.tag}
                  </span>
                  
                  <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4 hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>

                  <div className="p-6 rounded-xl bg-gradient-card border border-border/80 shadow-md mb-6 relative z-10 w-full text-left">
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className={`flex flex-wrap gap-2 mb-6 ${index % 2 === 1 ? "justify-end" : ""}`}>
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[10px] rounded-md bg-secondary/60 border border-border text-muted-foreground font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full border border-border bg-secondary/30 text-muted-foreground hover:text-primary hover:border-primary/50 hover:glow-subtle transition-all duration-300"
                      aria-label={`${project.title} GitHub Source`}
                    >
                      <Github size={18} />
                    </a>
                    {project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-full border border-border bg-secondary/30 text-muted-foreground hover:text-primary hover:border-primary/50 hover:glow-subtle transition-all duration-300"
                        aria-label={`${project.title} Live Demo`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
