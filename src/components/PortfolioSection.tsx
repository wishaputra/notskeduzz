import { useState } from "react";
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
    type: "web",
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
    type: "web",
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
    type: "app",
  },
];

const filterOptions = [
  { label: "Semua Proyek", value: "All" },
  { label: "Website", value: "web" },
  { label: "Aplikasi Kasir / POS", value: "app" },
];

export const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((project) => project.type === activeFilter);

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-background relative border-t border-border/30">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.01)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-primary text-xs md:text-sm font-bold tracking-wider uppercase mb-3">
              03. Portofolio
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
              Hasil Karya & Proyek Pilihan
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Beberapa proyek website dan aplikasi kustom yang telah selesai saya rancang dan kembangkan untuk membantu digitalisasi bisnis klien.
            </p>
          </div>

          {/* Interactive Filters Tabs */}
          <div className="flex justify-center gap-3 mb-16 md:mb-20">
            <div className="inline-flex p-1.5 rounded-full bg-secondary/30 border border-border/60 backdrop-blur-md">
              {filterOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setActiveFilter(option.value)}
                  className={`px-5 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
                    activeFilter === option.value
                      ? "bg-gradient-primary text-primary-foreground glow-subtle shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects List with simple fade-in transitions */}
          <div className="space-y-24 min-h-[400px]">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <div
                  key={project.title}
                  className={`grid lg:grid-cols-12 gap-8 items-center animate-fade-in ${
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
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
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
                    <span className="text-xs text-primary font-bold uppercase tracking-wider mb-2">
                      {project.tag}
                    </span>
                    
                    <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4 hover:text-primary transition-colors duration-200">
                      {project.title}
                    </h3>

                    <div className="p-6 rounded-xl bg-gradient-card border border-border/80 shadow-md mb-6 relative z-10 w-full text-left hover:border-primary/20 transition-colors duration-300">
                      <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Tags */}
                    <div className={`flex flex-wrap gap-2 mb-6 ${index % 2 === 1 ? "justify-end" : ""}`}>
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-[10px] rounded-md bg-secondary/60 border border-border/40 text-muted-foreground font-semibold"
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
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <p className="text-muted-foreground text-sm">Tidak ada proyek dalam kategori ini.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
