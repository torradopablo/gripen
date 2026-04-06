import React, { useEffect, useState } from 'react';
import { Check, X, ShieldCheck, CreditCard, Truck, ChevronRight, Magnet, ArrowDownToLine, Phone, Settings, Star, Instagram, Mail } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';

// Trust Badge Component
const TrustBadge = ({ icon: Icon, text }: { icon: any, text: string }) => (
  <div className="flex items-center gap-3 text-brand-text/70 text-xs md:text-sm px-6 whitespace-nowrap">
    <Icon className="w-4 h-4 text-brand-blue" />
    <span className="font-semibold tracking-wide uppercase">{text}</span>
  </div>
);

// Infinite Scrolling Banner
const ScrollingBanner = () => (
  <div className="bg-brand-bg border-b border-white/5 py-3 overflow-hidden flex relative z-[60]">
    <motion.div
      animate={{ x: ["0%", "-50%"] }}
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      className="flex whitespace-nowrap"
    >
      {[...Array(2)].map((_, index) => (
        <div key={index} className="flex shrink-0">
          <TrustBadge icon={CreditCard} text="Pago online seguro" />
          <TrustBadge icon={CreditCard} text="3 Cuotas sin Interés" />
          <TrustBadge icon={Truck} text="Envíos GRATIS a todo el país" />
          <TrustBadge icon={ShieldCheck} text="Garantía Gripen 30 días" />
          <TrustBadge icon={CreditCard} text="Pago online seguro" />
          <TrustBadge icon={CreditCard} text="3 Cuotas sin Interés" />
          <TrustBadge icon={Truck} text="Envíos GRATIS a todo el país" />
          <TrustBadge icon={ShieldCheck} text="Garantía Gripen 30 días" />
        </div>
      ))}
    </motion.div>
  </div>
);

// Feature Component
const Feature = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className="p-6 rounded-2xl bg-brand-metal/20 border border-white/5 hover:border-brand-blue/30 transition-colors"
  >
    <div className="bg-brand-blue/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
      <Icon className="w-7 h-7 text-brand-blue" />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-brand-text/70 leading-relaxed font-light">{description}</p>
  </motion.div>
);

// Rating Stars with partial fill support
const RatingStars = ({ rating, size = 5 }: { rating: number, size?: number }) => (
  <div className="flex gap-1 text-brand-blue-light">
    {[...Array(5)].map((_, i) => {
      const fill = Math.min(Math.max(rating - i, 0), 1);
      return (
        <div key={i} className="relative flex items-center justify-center">
          {/* Base star (empty) */}
          <Star className={`w-${size} h-${size} text-gray-700/50`} />
          {/* Top star (filled) */}
          <div className="absolute top-0 left-0 overflow-hidden h-full" style={{ width: `${fill * 100}%` }}>
            <Star className={`w-${size} h-${size} fill-current`} />
          </div>
        </div>
      );
    })}
  </div>
);

// RevealSection Component for scroll entry animations
const RevealSection = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-150px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.section>
);

// Animated divider between sections
const SectionDivider = () => (
  <div className="relative w-full h-px flex justify-center items-center overflow-visible">
    <motion.div
      initial={{ width: "0%", opacity: 0 }}
      whileInView={{ width: "80%", opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.2, ease: "circOut" }}
      className="h-px bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent relative"
    >
      <div className="absolute inset-0 bg-brand-blue/30 blur-[2px]"></div>
    </motion.div>
  </div>
);

const Modal = ({ isOpen, onClose, title, children }: { isOpen: boolean, onClose: () => void, title: string, children: React.ReactNode }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-brand-bg/80 backdrop-blur-sm"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl max-h-[80vh] overflow-hidden glass-panel rounded-3xl flex flex-col shadow-2xl border border-white/10"
        >
          <div className="p-6 border-b border-white/5 flex justify-between items-center bg-brand-metal/20">
            <h3 className="text-xl font-bold">{title}</h3>
            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="p-6 md:p-8 overflow-y-auto text-brand-text/70 leading-relaxed font-light space-y-4 custom-scrollbar text-sm md:text-base">
            {children}
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

const REVIEWS = [
  {
    author: "Federico T.",
    location: "CABA",
    date: "14 MAR 2026",
    rating: 5,
    color: "Gris Titanio",
    text: "La verdad me sorprendió. Es re resistente, muy bueno. Lo re recomiendo para tener en el escritorio trabajando; la relación calidad-precio es insuperable.",
    image: "/img/Reseña1.png"
  },
  {
    author: "Luciana M.",
    location: "Córdoba",
    date: "22 MAR 2026",
    rating: 4.8,
    color: "Gris Titanio",
    text: "Muy bueno, súper práctico. El imán N52 se nota, agarra con una fuerza increíble incluso con la funda puesta.",
    image: "/img/Reseña2.png"
  },
  {
    author: "Martín P.",
    location: "Rosario",
    date: "01 ABR 2026",
    rating: 5,
    color: "Negro",
    text: "Se ve genial, es tal cual la descripción. El diseño en metálico la rompe, queda excelente pegado a mi setup. Lo recomiendo a todos.",
    image: "/img/Reseña3.png"
  },
  {
    author: "Sebastián V.",
    location: "Mendoza",
    date: "22 MAR 2026",
    rating: 4.7,
    color: "Gris Titanio",
    text: "Se siente bien premium y robusto. La articulación no se vence. Muy buen producto la verdad.",
    image: "/img/Reseña10.png"
  },
  {
    author: "Camila R.",
    location: "La Plata",
    date: "27 MAR 2026",
    rating: 5,
    color: "Gris Titanio",
    text: "El producto es súper lindo, todo de diez. La estética y los materiales lo valen al 100%.",
    image: "/img/Reseña12.png"
  },
  {
    author: "Nicolás L.",
    location: "Tigre",
    date: "16 MAR 2026",
    rating: 4.8,
    color: "Gris Titanio",
    text: "Para mi teléfono de gran tamaño va muy bien, banca el peso espectacularmente. La calidad del aluminio es otro nivel.",
    image: "/img/Reseña9.png"
  },
  {
    author: "Guillermo S.",
    location: "Mar del Plata",
    date: "02 ABR 2026",
    rating: 5,
    color: "Gris Titanio",
    text: "Excelente adhesión a superficies lisas, el imán y el agarre me permiten armarlo súper rápido. Un 10.",
    image: "/img/Reseña13.png"
  }
];

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden glass-panel mb-4 shadow-sm hover:border-brand-blue/30 transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-6 py-4 font-bold flex justify-between items-center hover:bg-white/5 transition-colors group"
      >
        <span className="text-brand-text/90 group-hover:text-white transition-colors">{question}</span>
        <span className="text-brand-blue-light text-2xl leading-none transition-transform duration-300" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-6 text-brand-text/70 pb-4 font-light text-sm"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeModal, setActiveModal] = useState<'terms' | 'privacy' | null>(null);

  // Precios desde .env de frontend
  const regularPrice = import.meta.env.VITE_PRICE_REGULAR || "75000";
  const discountedPrice = import.meta.env.VITE_PRICE_DISCOUNTED || "59900";

  const formatPrice = (price: string) => {
    const num = parseInt(price.replace(/\D/g, ''), 10);
    if (isNaN(num)) return price;
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(num);
  };

  // URL Oficial del producto en Gripen Tiendanube
  const CHECKOUT_URL = "https://gripen.mitiendanube.com/productos/soporte-gripen-ultra-firme-soporte-magnetico-articulado-de-alta-resistencia/";


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const regularPriceNum = parseInt(regularPrice.replace(/\D/g, ''));
  const discountedPriceNum = parseInt(discountedPrice.replace(/\D/g, ''));
  const savings = regularPriceNum - discountedPriceNum;
  const discountPercent = (100 - (discountedPriceNum / regularPriceNum * 100)).toFixed(0);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text selection:bg-brand-blue/30 overflow-x-hidden font-sans">

      {/* Top Static Announcement Bar */}
      <div className="bg-brand-blue-dark text-white py-2 px-4 text-center text-xs md:text-sm font-bold border-b border-white/10 relative z-[70]">
        <div className="container mx-auto flex items-center justify-center gap-2">
          <span>🔥</span>
          <span className="uppercase tracking-widest">Oferta exclusiva:</span>
          <span>Ahorrá {formatPrice(savings.toString())} hoy ({discountPercent}% OFF)</span>
          <span className="hidden sm:inline opacity-70 ml-2">| Envío Gratis a todo el país</span>
        </div>
      </div>

      <ScrollingBanner />

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'top-0 bg-brand-bg/95 backdrop-blur-md border-b border-white/5 py-2 shadow-2xl' : 'top-[84px] md:top-[80px] bg-brand-bg/0 py-6'}`}>
        <div className="container mx-auto px-6 flex justify-center md:justify-between items-center text-center md:text-left">
          <div className="flex items-center gap-2">
            <img
              src="/img/Logo.png"
              alt="Gripen Logo"
              className={`w-auto object-contain transition-all duration-500 ${isScrolled ? 'h-13 md:h-17' : 'h-13 md:h-17'}`}
            />
          </div>
          <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className={`hidden md:flex items-center gap-2 bg-brand-text text-brand-bg px-6 py-2 rounded-full font-bold hover:bg-brand-blue hover:text-white transition-all shadow-lg hover:shadow-brand-blue/50 ${isScrolled ? 'scale-90' : 'scale-100'}`}>
            Comprar Ahora <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-blue-dark/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 text-center lg:text-left z-10 w-full"
            >
              <div className="inline-block px-4 py-1.5 rounded-full border border-brand-blue/30 bg-brand-blue/10 text-brand-blue-light font-bold text-sm mb-6 uppercase tracking-wider">
                Soporte Gripen Ultra-Firme
              </div>
              <h1 className="hidden lg:block text-5xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
                El <span className="blue-gradient-text inline-block">ángulo perfecto</span> para tu celu. Siempre.
              </h1>

              {/* MOBILE HEADER: IMAGE + SUPERIMPOSED TITLE */}
              <div className="block lg:hidden w-[calc(100%+2rem)] -mx-4 relative mb-8">
                <div className="relative overflow-hidden glass-panel p-1 shadow-2xl shadow-brand-blue/10">
                  <img
                    src="/img/Soporte_MagSafe_en_202604031732.jpeg"
                    alt="Soporte Gripen Ultra-Firme"
                    className="w-full h-auto min-h-[350px] object-cover rounded-2xl object-[50%_40%]"
                  />
                  {/* Overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/40 to-transparent pointer-events-none rounded-2xl"></div>

                  {/* Superimposed Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 pb-8">
                    <h1 className="text-4xl xs:text-5xl font-black leading-tight tracking-tight mb-2">
                      El <span className="blue-gradient-text inline-block">punto justo</span> para ver tu celular.
                    </h1>
                    <p className="text-white/80 font-light text-sm">
                      Aluminio sólido. Firmeza absoluta.
                    </p>
                  </div>
                </div>
              </div>

              <p className="hidden lg:block text-lg md:text-xl text-brand-text/70 mb-10 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Olvidate de los soportes que vibran. El <span className="text-white font-medium">Soporte Gripen Ultra-Firme</span> es de aluminio macizo y ofrece un agarre sólido para que tu dispositivo no se mueva jamás.
              </p>

              <div className="flex flex-col mb-10 items-center lg:items-start gap-2">
                <div className="flex items-center gap-3">
                  <span className="text-4xl md:text-5xl font-black text-white tracking-tight">{formatPrice(discountedPrice)}</span>
                  <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-sm font-bold border border-green-500/30">
                    -{(100 - (parseInt(discountedPrice.replace(/\D/g, '')) / parseInt(regularPrice.replace(/\D/g, '')) * 100)).toFixed(0)}% OFF
                  </div>
                </div>
                <div className="flex items-center gap-2 text-brand-text/40 font-medium">
                  <span className="line-through decoration-red-500/40">{formatPrice(regularPrice)}</span>
                  <span className="text-xs uppercase tracking-wider">• Precio de Lanzamiento</span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.05)] rounded-2xl p-6 mb-4 lg:max-w-md w-full relative z-[60] backdrop-blur-md">
                <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
                  <div className="flex gap-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <span className="text-brand-text/80 text-sm font-medium">4.9/5 en Reseñas</span>
                </div>

                <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-blue-light transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-blue/30 hover:shadow-brand-blue/60 group">
                  FINALIZAR COMPRA <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                <div className="grid grid-cols-3 gap-1 mt-4 text-brand-text/60 text-[9px] sm:text-[10px] md:text-xs font-bold text-center uppercase tracking-wider">
                  <div className="flex flex-col items-center justify-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-brand-blue/80" /> Compra Segura
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1 border-x border-white/5">
                    <Truck className="w-4 h-4 text-brand-blue/80" /> Envío Gratis
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1">
                    <CreditCard className="w-4 h-4 text-brand-blue/80" /> 3 Cuotas Sin Interés
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden lg:block lg:w-1/2 relative z-0"
            >
              <div className="relative rounded-3xl overflow-hidden glass-panel p-2 shadow-2xl shadow-brand-blue/20">
                <img
                  src="/img/Soporte_MagSafe_en_202604031732.jpeg"
                  alt="Soporte Gripen Ultra-Firme en escritorio minimalista"
                  className="w-full h-auto rounded-2xl object-cover object-center"
                  style={{ maxHeight: '600px' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/60 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* The Problem / Solution (High Conversion) */}
      <RevealSection className="py-24 md:py-32 bg-brand-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Basta de soportes de <span className="text-gray-500 line-through">plástico barato</span>.</h2>
            <p className="text-xl text-brand-text/60 max-w-2xl mx-auto font-light">Diseñado para ser eterno. El Soporte Gripen Ultra-Firme es una pieza de metal macizo que no conoce el desgaste.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <img
                src="/img/Variantes_producto_carrusel_202604031740.jpeg"
                alt="Detalle Soporte Gripen Ultra-Firme"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/5 backdrop-blur-[2px] rounded-xl p-3 flex items-center justify-between border border-white/10">
                <div>
                  <div className="text-[10px] text-brand-blue-light font-bold uppercase tracking-widest opacity-80">Acabado CNC</div>
                  <div className="text-white/90 text-sm font-medium">Textura antideslizante</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center border border-brand-blue/20">
                  <Settings className="text-brand-blue-light/70 w-4 h-4" />
                </div>
              </div>
            </motion.div>

            <div className="lg:w-1/2 w-full">
              <div className="glass-panel rounded-3xl p-6 md:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 blur-3xl rounded-full"></div>

                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <ShieldCheck className="text-brand-blue w-6 h-6" /> Comparativa Técnica
                </h3>

                <div className="space-y-6">
                  {/* Row */}
                  <div className="flex flex-col md:grid md:grid-cols-12 gap-2 md:gap-4 pb-4 border-b border-white/5 md:items-center">
                    <div className="md:col-span-3 text-brand-text/50 font-medium text-sm md:text-base">Material</div>
                    <div className="grid grid-cols-2 md:contents gap-2">
                      <div className="md:col-span-5 font-bold flex items-start md:items-center gap-2 text-sm md:text-base"><Check className="w-5 h-5 text-brand-blue shrink-0 md:mt-0 mt-0.5" /> <span>Aluminio CNC</span></div>
                      <div className="md:col-span-4 text-brand-text/40 flex items-start md:items-center gap-2 text-sm md:text-base"><X className="w-5 h-5 shrink-0 md:mt-0 mt-0.5" /> <span>Plástico ABS</span></div>
                    </div>
                  </div>
                  {/* Row */}
                  <div className="flex flex-col md:grid md:grid-cols-12 gap-2 md:gap-4 pb-4 border-b border-white/5 md:items-center">
                    <div className="md:col-span-3 text-brand-text/50 font-medium text-sm md:text-base">Imanes</div>
                    <div className="grid grid-cols-2 md:contents gap-2">
                      <div className="md:col-span-5 font-bold flex items-start md:items-center gap-2 text-sm md:text-base"><Check className="w-5 h-5 text-brand-blue shrink-0 md:mt-0 mt-0.5" /> <span>N52 Ultra Poderosos</span></div>
                      <div className="md:col-span-4 text-brand-text/40 flex items-start md:items-center gap-2 text-sm md:text-base"><X className="w-5 h-5 shrink-0 md:mt-0 mt-0.5" /> <span>N35 (Se deslizan)</span></div>
                    </div>
                  </div>
                  {/* Row */}
                  <div className="flex flex-col md:grid md:grid-cols-12 gap-2 md:gap-4 pb-4 border-b border-white/5 md:items-center">
                    <div className="md:col-span-3 text-brand-text/50 font-medium text-sm md:text-base">Ajuste</div>
                    <div className="grid grid-cols-2 md:contents gap-2">
                      <div className="md:col-span-5 font-bold flex items-start md:items-center gap-2 text-sm md:text-base"><Check className="w-5 h-5 text-brand-blue shrink-0 md:mt-0 mt-0.5" /> <span>Perilla OPEN/Tight</span></div>
                      <div className="md:col-span-4 text-brand-text/40 flex items-start md:items-center gap-2 text-sm md:text-base"><X className="w-5 h-5 shrink-0 md:mt-0 mt-0.5" /> <span>Bisagras vencidas</span></div>
                    </div>
                  </div>
                  {/* Row */}
                  <div className="flex flex-col md:grid md:grid-cols-12 gap-2 md:gap-4 pb-4 border-b border-white/5 md:items-center">
                    <div className="md:col-span-3 text-brand-text/50 font-medium text-sm md:text-base">Firmeza</div>
                    <div className="grid grid-cols-2 md:contents gap-2">
                      <div className="md:col-span-5 font-bold flex items-start md:items-center gap-2 text-sm md:text-base"><Check className="w-5 h-5 text-brand-blue shrink-0 md:mt-0 mt-0.5" /> <span>Efecto Antigravity</span></div>
                      <div className="md:col-span-4 text-brand-text/40 flex items-start md:items-center gap-2 text-sm md:text-base"><X className="w-5 h-5 shrink-0 md:mt-0 mt-0.5" /> <span>Vibraciones constantes</span></div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-brand-blue/10 border border-brand-blue/20 rounded-xl p-4 text-center">
                  <p className="text-brand-blue-light font-medium italic">
                    "Lo instalás, apoyás el celu y te olvidás. Es el soporte definitivo."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      <SectionDivider />

      {/* Bento Grid / Lifestyle */}
      <RevealSection className="py-24 bg-brand-metal/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Tu celular, <span className="text-brand-blue">donde lo necesites.</span></h2>
            <p className="text-xl text-brand-text/60 max-w-2xl mx-auto font-light">Se adapta a tu ritmo, en el auto, la oficina o cualquier lugar de tu casa.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Bento Item 1: Relax */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="col-span-1 md:col-span-2 relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden group"
            >
              <img src="/img/Soporte_magnético_celular_202604031857.jpeg" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" alt="Relax" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold mb-2">Comodidad Manos Libres</h3>
                <p className="text-brand-text/70 font-light">Donde lo pegás, se queda. Ideal para ver contenido sin esfuerzo.</p>
              </div>
            </motion.div>

            {/* Bento Item 2: Gym/Focus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
              className="col-span-1 relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden group"
            >
              <img src="/img/Premium_phone_holder_202604031854.jpeg" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" alt="Gym" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold mb-2">GPS Siempre a la Vista</h3>
                <p className="text-brand-text/70 font-light">En el auto, banca los pozos y las frenadas más bruscas.</p>
              </div>
            </motion.div>

            {/* Bento Item 3: Versatility */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="col-span-1 md:col-span-3 relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden group"
            >
              <img src="/img/Soporte_articulado_MagSafe_202604031820.jpeg" className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700" alt="Versatility" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/90 via-black/20 to-transparent flex flex-col justify-end p-8 md:items-center md:text-center">
                <h3 className="text-2xl font-bold mb-2">Soporte Multisuperficie</h3>
                <p className="text-brand-text/70 font-light max-w-lg">De tu escritorio a la cocina. Tu dispositivo siempre seguro y visible en cualquier ambiente.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </RevealSection>

      <SectionDivider />

      {/* Installation Guide Section */}
      <RevealSection className="py-24 bg-brand-bg relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Instalación <span className="blue-gradient-text text-glow">Sin Complicaciones</span></h2>
            <p className="text-xl text-brand-text/60 max-w-2xl mx-auto font-light">Prepará tu soporte en segundos. Sin herramientas, pegás y listo.</p>
          </div>

          <div className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-brand-blue/5 border border-white/5 bg-white/5">
            {/* Desktop Image */}
            <img
              src="/img/Explicacion-web.jpeg"
              alt="Guía de instalación paso a paso"
              className="hidden md:block w-full h-auto object-contain"
            />
            {/* Mobile Image */}
            <img
              src="/img/Explicaicon-mobile.jpeg"
              alt="Guía de instalación para celular"
              className="block md:hidden w-full h-auto object-contain"
            />
          </div>
        </div>
      </RevealSection>

      <SectionDivider />

      {/* FAQ Section */}
      <RevealSection className="py-24 bg-brand-bg relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Preguntas <span className="blue-gradient-text">Frecuentes</span></h2>
            <p className="text-lg text-brand-text/60 max-w-2xl mx-auto font-light">Todas las respuestas para que compres con total seguridad.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-2">
            <FaqItem
              question="¿Es compatible con mi teléfono?"
              answer="Funciona con cualquier smartphone. Si tenés imán integrado, se pega directo. Si no, incluimos un anillo metálico adhesivo que podés pegar en tu funda o celular para que el agarre sea total."
            />
            <FaqItem
              question="¿Se cae con los pozos o frenadas?"
              answer="Para nada. El imán interno es ultra potente y está diseñado para soportar incluso los teléfonos más grandes y pesados sin que se muevan un milímetro, pase lo que pase en el camino."
            />
            <FaqItem
              question="¿Qué cubre la garantía de 30 días?"
              answer="Nuestra garantía Gripen cubre cualquier defecto de fabricación o falla de materiales. Si el imán o el soporte no rinden como prometemos, te lo cambiamos o devolvemos el dinero sin dar vueltas."
            />
            <FaqItem
              question="¿Cómo se ajusta la rigidez del ángulo?"
              answer="El soporte cuenta con una perilla de precisión mecanizada en CNC. Simplemente debés aflojarla levemente para acomodar el brazo al ángulo deseado y luego ajustarla para fijar la pose de manera permanente."
            />
            <FaqItem
              question="¿El material de la base daña el escritorio?"
              answer="No, la base incluye una lámina adhesiva 3M especial que asegura máxima adherencia pero no deja ningún tipo de residuo al ser retirada, cuidando tus superficies ante rayones y desgastes."
            />
          </div>
        </div>
      </RevealSection>

      <SectionDivider />

      {/* Reviews Section */}
      <RevealSection className="py-24 bg-brand-metal/5 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Lo que dicen los <span className="blue-gradient-text">usuarios</span></h2>
          </div>
          <div className="flex flex-col md:flex-row gap-12 items-start max-w-6xl mx-auto">

            {/* Reviews Summary */}
            <div className="md:w-1/3 glass-panel p-8 rounded-3xl sticky top-24">
              <div className="flex items-end gap-3 mb-4">
                <span className="text-6xl font-black text-brand-blue-light leading-none">4.8</span>
                <div className="pb-1">
                  <div className="mb-1">
                    <RatingStars rating={4.8} size={5} />
                  </div>
                  <span className="text-brand-text/60 text-sm">Más de +120 reseñas</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-green-400 mb-8 font-medium">
                <Check className="w-4 h-4" /> Todo de compras verificadas
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-bold text-brand-text/80 uppercase tracking-wider mb-3">Menciones en reseñas</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-brand-blue/10 border border-brand-blue/20 rounded-full text-xs font-medium text-brand-blue-light">excelente calidad (24)</span>
                  <span className="px-3 py-1.5 bg-brand-blue/10 border border-brand-blue/20 rounded-full text-xs font-medium text-brand-blue-light">agarre perfecto (18)</span>
                  <span className="px-3 py-1.5 bg-brand-blue/10 border border-brand-blue/20 rounded-full text-xs font-medium text-brand-blue-light">diseño premium (12)</span>
                  <span className="px-3 py-1.5 bg-brand-blue/10 border border-brand-blue/20 rounded-full text-xs font-medium text-brand-blue-light">muy práctico (5)</span>
                </div>
              </div>
            </div>

            {/* Review Cards */}
            {/* Review Cards */}
            <div className="md:w-2/3 columns-1 sm:columns-2 gap-6 space-y-6 sm:space-y-0 [&>div]:mb-6">
              {REVIEWS.map((review, i) => (
                <div key={i} className="glass-panel p-6 rounded-3xl break-inside-avoid hover:border-brand-blue/30 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-brand-blue/20 text-brand-blue-light font-bold flex items-center justify-center border border-brand-blue/30 shadow-inner">
                        {review.author.charAt(0)}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-brand-text/90 text-sm">{review.author}</span>
                        <span className="text-brand-text/40 text-xs">{review.location} • {review.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-green-400 uppercase tracking-wider font-bold bg-green-400/10 px-2 py-1.5 rounded-full border border-green-400/20">
                      <Check className="w-3 h-3" /> Verificada
                    </div>
                  </div>

                  <div className="mb-3">
                    <RatingStars rating={review.rating} size={4} />
                  </div>

                  <p className="text-brand-text/80 font-light leading-relaxed text-sm mb-4">
                    "{review.text}"
                  </p>

                  {review.image && (
                    <div className="mt-4 rounded-2xl overflow-hidden border border-white/5 relative group">
                      <img src={review.image} alt={`Foto de la reseña de ${review.author}`} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </RevealSection>

      <SectionDivider />

      {/* Specs Section */}
      {/*<RevealSection className="py-24 md:py-32 bg-brand-bg relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Especificaciones de <span className="blue-gradient-text text-glow">Grado Industrial</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Feature
              icon={Settings}
              title="Aluminio Macizo"
              description="Mecanizado CNC a partir de un solo bloque. Acabado mate premium resistente a rayones y huellas."
            />
            <Feature
              icon={Magnet}
              title="Sistema N52"
              description="La matriz de imanes de neodimio N52 garantiza compatibilidad magnética universal y un agarre ultra fuerte."
            />
            <Feature
              icon={ArrowDownToLine}
              title="Perilla de Precisión"
              description="Sistema de ajuste millimétrico 'OPEN | Tight'. Textura acanalada para el máximo control del torque."
            />
            <Feature
              icon={Phone}
              title="Rotación 360°"
              description="Doble brazo articulado de fricción calibrada. Encuentra el sweet-spot ergonómico en segundos."
            />
            <Feature
              icon={ShieldCheck}
              title="Estabilidad Absoluta"
              description="Soporta dispositivos de gran tamaño sin vibraciones, caídas ni pérdida de ángulo con el tiempo."
            />
            <Feature
              icon={Check}
              title="Gripen Original"
              description="Soporte diseñado y optimizado para encajar armónicamente con tu setup Minimalista y Dark Mode."
            />
          </div>
        </div>
      </RevealSection>*/}

      <SectionDivider />

      {/* Guarantee Section */}
      <RevealSection className="py-24 bg-brand-bg relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="glass-panel rounded-[3rem] p-8 md:p-16 border border-brand-blue/20 relative overflow-hidden">
            {/* Ambient Light */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 blur-3xl rounded-full -z-10"></div>

            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 text-center lg:text-left">
                <div className="inline-block px-4 py-1.5 rounded-full border border-brand-blue/30 bg-brand-blue/10 text-brand-blue-light font-bold text-xs mb-6 uppercase tracking-[0.2em]">
                  Compromiso Gripen
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                  Tu tranquilidad es <br /> <span className="blue-gradient-text text-glow">nuestra prioridad.</span>
                </h2>
                <p className="text-lg md:text-xl text-brand-text/70 mb-8 font-light leading-relaxed">
                  Sabemos que el <span className="text-white font-medium">Soporte Gripen Ultra-Firme</span> es el mejor soporte que vas a tener. Por eso, te respaldamos con una <span className="text-brand-blue-light font-bold underline decoration-brand-blue/30 underline-offset-4">Garantía Real de 30 Días</span>.
                </p>
                <div className="space-y-4 inline-block text-left">
                  <div className="flex items-center gap-3 text-brand-text/80">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
                      <Check className="w-3.5 h-3.5 text-green-400" />
                    </div>
                    <span className="font-medium">Cambio directo por fallas de fábrica</span>
                  </div>
                  <div className="flex items-center gap-3 text-brand-text/80">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
                      <Check className="w-3.5 h-3.5 text-green-400" />
                    </div>
                    <span className="font-medium">Soporte técnico especializado 24/7</span>
                  </div>
                  <div className="flex items-center gap-3 text-brand-text/80">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
                      <Check className="w-3.5 h-3.5 text-green-400" />
                    </div>
                    <span className="font-medium">Satisfacción 100% Garantizada</span>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 flex justify-center relative">
                {/* Image Glow */}
                <div className="absolute inset-0 bg-brand-blue/20 blur-[100px] scale-75 rounded-full -z-10 animate-pulse"></div>
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative group cursor-default"
                >
                  <img
                    src="/img/garantia_2.jpeg"
                    alt="Sello de Garantía Gripen"
                    className="w-full max-w-[320px] md:max-w-[400px] aspect-square object-cover rounded-full border-4 border-brand-blue/20 drop-shadow-[0_20px_50px_rgba(0,119,255,0.3)] transition-all duration-500 group-hover:drop-shadow-[0_25px_60px_rgba(0,119,255,0.5)]"
                  />
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center -z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500">
                    <ShieldCheck className="w-5 h-5 text-brand-blue-light" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      <SectionDivider />

      {/* High-Converting Pricing CTA */}
      <RevealSection className="py-24 relative overflow-hidden bg-gradient-to-b from-brand-bg to-brand-metal/10">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-blue-dark/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-brand-metal/10 border border-brand-blue/30 rounded-[3rem] p-8 md:p-16 relative overflow-hidden text-center shadow-2xl shadow-brand-blue/10">
            {/* Top Glow */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-brand-blue/30 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="inline-block px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 font-bold text-sm mb-8 uppercase tracking-wider animate-pulse">
              🔥 Stock Limitado - Oferta Especial
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">Llevá tu setup al <span className="blue-gradient-text text-glow">siguiente nivel.</span></h2>
            <p className="text-xl text-brand-text/70 mb-10 font-light max-w-2xl mx-auto">
              Asegurá tu Soporte Gripen Ultra-Firme hoy mismo y experimentá la firmeza absoluta.
            </p>

            <div className="flex flex-col items-center justify-center mb-10 gap-1">
              <span className="text-brand-text/40 text-2xl font-medium line-through decoration-red-500/50 decoration-2">{formatPrice(regularPrice)}</span>
              <div className="flex items-center gap-4">
                <span className="text-6xl md:text-7xl font-black text-white tracking-tight">{formatPrice(discountedPrice)}</span>
                <div className="bg-green-500/20 text-green-400 px-3 py-1.5 rounded-lg font-bold border border-green-500/30 text-lg sm:text-xl">
                  -{(100 - (parseInt(discountedPrice.replace(/\D/g, '')) / parseInt(regularPrice.replace(/\D/g, '')) * 100)).toFixed(0)}%
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-brand-blue text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-brand-blue-light transition-all flex items-center justify-center gap-3 shadow-lg shadow-brand-blue/30 hover:shadow-brand-blue/60 hover:-translate-y-1 group">
                Finalizar Compra <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-brand-text/50 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-blue/70" /> Compra 100% Segura
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-brand-blue/70" /> Envíos Gratis a todo el país
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-brand-blue/70" /> Hasta 3 cuotas sin interés
              </div>
            </div>

            {/* Detailed Shipping Info */}
            <div className="mt-12 pt-8 border-t border-white/5 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-10 bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-md">
                  <img src="/img/logo_correo_argentino_clean.png" alt="Correo Argentino" className="h-[120%] w-auto object-contain scale-110" />
                </div>
                <span className="text-brand-text/60 font-bold uppercase tracking-widest text-xs">Tiempos de Entrega</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-brand-blue-light font-bold text-sm">CABA</div>
                  <div className="text-brand-text/60 text-xs mt-1">2 a 4 días hábiles</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-brand-blue-light font-bold text-sm">GBA</div>
                  <div className="text-brand-text/60 text-xs mt-1">3 a 5 días hábiles</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-brand-blue-light font-bold text-sm">INTERIOR</div>
                  <div className="text-brand-text/60 text-xs mt-1">4 a 10 días hábiles</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </RevealSection>

      {/* Footer */}
      <footer className="bg-brand-bg border-t border-brand-metal/20 pt-16 pb-32 md:pb-16 text-brand-text/60">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <img src="/img/Logo.png" alt="Gripen Logo" className="h-12 md:h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="https://instagram.com/gripen.shop" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors group">
                <Instagram className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                <span>gripen.shop</span>
              </a>
              <a href="mailto:gripen.store@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors group">
                <Mail className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                <span>gripen.store@gmail.com</span>
              </a>
              <button
                onClick={() => setActiveModal('terms')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Términos
              </button>
              <button
                onClick={() => setActiveModal('privacy')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Privacidad
              </button>
            </div>
          </div>
          <div className="text-center text-sm border-t border-white/5 pt-8">
            &copy; 2026 Gripen Accesorios. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {/* Modals */}
      <Modal
        isOpen={activeModal === 'terms'}
        onClose={() => setActiveModal(null)}
        title="Términos y Condiciones"
      >
        <div className="space-y-6">
          <section>
            <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">1. Introducción</h4>
            <p>Al utilizar este sitio web y adquirir los productos Gripen, usted acepta los presentes términos y condiciones en su totalidad. Gripen se reserva el derecho de modificar estos términos en cualquier momento.</p>
          </section>
          <section>
            <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">2. Garantía Oficial</h4>
            <p>Todos los Soportes Gripen cuentan con una garantía oficial de 30 días contra defectos de fabricación. Esta garantía no cubre daños por mal uso, caídas accidentales o modificaciones no autorizadas.</p>
          </section>
          <section>
            <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">3. Envíos y Entregas</h4>
            <p>Los envíos se realizan de forma GRATUITA a todo el país exclusivamente a través de Correo Argentino. Los tiempos estimados de entrega son:</p>
            <ul className="mt-2 space-y-1 list-disc list-inside ml-2">
              <li>CABA: 2 a 4 días hábiles.</li>
              <li>GBA: 3 a 5 días hábiles.</li>
              <li>Interior del país: 4 a 10 días hábiles.</li>
            </ul>
          </section>
          <section>
            <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">4. Devoluciones y Arrepentimiento</h4>
            <p>Conforme a la normativa de la Dirección Nacional de Defensa del Consumidor, el comprador tiene derecho a revocar la compra (Derecho de Arrepentimiento) dentro de los 10 días corridos de recibido el producto.</p>
            <div className="mt-2 p-3 bg-white/5 rounded-xl border border-white/5 space-y-2">
              <p className="font-bold text-white text-xs uppercase tracking-widest">Condiciones de Aceptación:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>El producto debe estar sin uso y en perfectas condiciones.</li>
                <li>Debe conservar su empaque original y todas sus partes.</li>
                <li>El costo de envío por devolución corre por cuenta del comprador, salvo en casos de falla o defecto de fabricación.</li>
              </ul>
            </div>
            <p className="mt-3">En caso de falla o defecto, el cambio o reintegro es 100% sin cargo para el cliente.</p>
          </section>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === 'privacy'}
        onClose={() => setActiveModal(null)}
        title="Política de Privacidad"
      >
        <div className="space-y-6">
          <section>
            <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">Protección de Datos</h4>
            <p>En Gripen respetamos su privacidad. Sus datos personales son tratados bajo estricta confidencialidad de acuerdo con la Ley N° 25.326 de Protección de Datos Personales.</p>
          </section>
          <section>
            <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">Finalidad</h4>
            <p>La información recolectada tiene como única finalidad el procesamiento de sus pedidos, la mejora de nuestra atención al cliente y, opcionalmente, el envío de novedades sobre la marca.</p>
          </section>
          <section>
            <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">Seguridad</h4>
            <p>Implementamos medidas de seguridad técnicas para proteger su información contra accesos no autorizados o alteraciones injustificadas.</p>
          </section>
        </div>
      </Modal>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full p-4 glass-panel z-50 animate-in slide-in-from-bottom pb-8">
        <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="w-full bg-brand-blue text-white py-4 rounded-full font-bold text-lg shadow-lg shadow-brand-blue/40 flex items-center justify-center gap-2">
          Comprar Ahora <ChevronRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
