import { useState, useEffect } from "react";
import { Menu, X, MessageSquareCode } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Layanan", href: "#services" },
  { name: "Kelebihan", href: "#features" },
  { name: "Paket Harga", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#home"
            className="flex items-center gap-2 font-mono text-xl font-bold text-gradient tracking-tight"
          >
            <MessageSquareCode className="text-primary w-6 h-6 animate-pulse" />
            <span>{"<NotSkeduzz />"}</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#order"
              className="px-4 py-2 text-xs font-semibold bg-gradient-primary text-primary-foreground rounded-lg hover:opacity-95 transition-all duration-300 glow-subtle hover:glow-primary"
            >
              Konsultasi Gratis
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-fade-in-down">
            <div className="flex flex-col gap-4 pt-2 border-t border-border/50">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-medium py-1"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#order"
                onClick={() => setIsOpen(false)}
                className="w-full text-center px-4 py-2.5 text-sm font-semibold bg-gradient-primary text-primary-foreground rounded-lg hover:opacity-95 transition-all duration-300 shadow-md"
              >
                Konsultasi Gratis
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
