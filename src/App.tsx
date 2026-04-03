import React, { useEffect, useState } from 'react';
import { Check, X, ShieldCheck, CreditCard, Truck, ChevronRight, Magnet, ArrowDownToLine, Phone, Settings } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

// Trust Badge Component
const TrustBadge = ({ icon: Icon, text }: { icon: any, text: string }) => (
  <div className="flex items-center gap-2 text-brand-text/80 text-sm md:text-base bg-brand-metal/30 px-4 py-2 rounded-full border border-white/5 mx-2 whitespace-nowrap">
    <Icon className="w-5 h-5 text-brand-blue" />
    <span className="font-medium">{text}</span>
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

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  // URL Oficial de compra directa Gripen Tiendanube
  const CHECKOUT_URL = "https://gripen.mitiendanube.com/cart/add/335829652/";


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text selection:bg-brand-blue/30 overflow-x-hidden font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-bg border-b border-brand-metal/20 py-4 shadow-xl' : 'bg-brand-bg py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/img/Logo.png" alt="Gripen Logo" className="h-10 md:h-14 w-auto object-contain" />
          </div>
          <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 bg-brand-text text-brand-bg px-6 py-2.5 rounded-full font-bold hover:bg-brand-blue hover:text-white transition-all shadow-lg hover:shadow-brand-blue/50">
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
              className="lg:w-1/2 text-center lg:text-left z-10"
            >
              <div className="inline-block px-4 py-1.5 rounded-full border border-brand-blue/30 bg-brand-blue/10 text-brand-blue-light font-bold text-sm mb-6 uppercase tracking-wider">
                Nuevo Lanzamiento
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
                Tu iPhone en el <span className="blue-gradient-text inline-block">ángulo perfecto.</span><br />Siempre.
              </h1>
              <p className="text-lg md:text-xl text-brand-text/70 mb-10 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Ingeniería de precisión. La base magnética MagSafe definitiva creada con aluminio aeroespacial para quienes no se conforman.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="bg-brand-blue text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-blue-light transition-all flex items-center justify-center gap-2 blue-glow group">
                  Obtener Gripen <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="flex items-center justify-center gap-2 text-brand-text/50 text-sm font-medium">
                  <ShieldCheck className="w-5 h-5" /> Garantía de 12 meses
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative rounded-3xl overflow-hidden glass-panel p-2 shadow-2xl shadow-brand-blue/20">
                <img
                  src="/img/Soporte_MagSafe_en_202604031732.jpeg"
                  alt="Soporte Gripen MagSafe en escritorio minimalista"
                  className="w-full h-auto rounded-2xl object-cover object-center"
                  style={{ maxHeight: '600px' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/60 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Band */}
      <div className="border-y border-white/5 bg-brand-metal/10 py-6 overflow-hidden flex">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex whitespace-nowrap min-w-max"
        >
          {/* Duplicated for infinite scroll effect */}
          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex">
              <TrustBadge icon={CreditCard} text="Mercado Pago" />
              <TrustBadge icon={CreditCard} text="3 Cuotas sin Interés" />
              <TrustBadge icon={Truck} text="Envíos rápidos a todo el país" />
              <TrustBadge icon={ShieldCheck} text="Garantía Gripen 12 meses" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* The Problem / Solution (High Conversion) */}
      <section className="py-24 md:py-32 bg-brand-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-black mb-6">El fin del <span className="text-gray-500 line-through">plástico barato</span>.</h2>
            <p className="text-xl text-brand-text/60 max-w-2xl mx-auto font-light">Diseñado para ser eterno. Contrastá la ingeniería maciza de Gripen contra el resto.</p>
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
                alt="Detalle ingeniería Gripen"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 glass-panel rounded-xl p-4 flex items-center justify-between">
                <div>
                  <div className="text-sm text-brand-blue-light font-bold">Acabado CNC</div>
                  <div className="text-white font-medium">Textura antideslizante</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-brand-blue/20 flex items-center justify-center border border-brand-blue/50">
                  <Settings className="text-brand-blue-light w-5 h-5" />
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
                  <div className="grid grid-cols-12 gap-4 pb-4 border-b border-white/5 items-center">
                    <div className="col-span-4 text-brand-text/50 font-medium">Material</div>
                    <div className="col-span-4 font-bold flex items-center gap-2"><Check className="w-4 h-4 text-brand-blue" /> Aluminio CNC</div>
                    <div className="col-span-4 text-brand-text/40 flex items-center gap-2"><X className="w-4 h-4" /> Plástico ABS</div>
                  </div>
                  {/* Row */}
                  <div className="grid grid-cols-12 gap-4 pb-4 border-b border-white/5 items-center">
                    <div className="col-span-4 text-brand-text/50 font-medium">Imanes</div>
                    <div className="col-span-4 font-bold flex items-center gap-2"><Check className="w-4 h-4 text-brand-blue" /> N52 Ultra Poderosos</div>
                    <div className="col-span-4 text-brand-text/40 flex items-center gap-2"><X className="w-4 h-4" /> N35 (Se deslizan)</div>
                  </div>
                  {/* Row */}
                  <div className="grid grid-cols-12 gap-4 pb-4 border-b border-white/5 items-center">
                    <div className="col-span-4 text-brand-text/50 font-medium">Ajuste</div>
                    <div className="col-span-4 font-bold flex items-center gap-2"><Check className="w-4 h-4 text-brand-blue" /> Perilla OPEN/Tight</div>
                    <div className="col-span-4 text-brand-text/40 flex items-center gap-2"><X className="w-4 h-4" /> Bisagras vencidas</div>
                  </div>
                  {/* Row */}
                  <div className="grid grid-cols-12 gap-4 pb-4 border-b border-white/5 items-center">
                    <div className="col-span-4 text-brand-text/50 font-medium">Estabilidad</div>
                    <div className="col-span-4 font-bold flex items-center gap-2"><Check className="w-4 h-4 text-brand-blue" /> Cero vibraciones</div>
                    <div className="col-span-4 text-brand-text/40 flex items-center gap-2"><X className="w-4 h-4" /> Inestable y ruidoso</div>
                  </div>
                </div>

                <div className="mt-8 bg-brand-blue/10 border border-brand-blue/20 rounded-xl p-4 text-center">
                  <p className="text-brand-blue-light font-medium italic">
                    "No arriesgues tu iPhone con plásticos baratos. Gripen es la última estación de control que vas a comprar."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid / Lifestyle */}
      <section className="py-24 bg-brand-metal/5 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Diseñado para los que <span className="text-brand-blue">no se conforman.</span></h2>
            <p className="text-xl text-brand-text/60 max-w-2xl mx-auto font-light">Se adapta a tu ritmo, en cualquier ambiente.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Bento Item 1: Relax */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="col-span-1 md:col-span-2 relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden group"
            >
              <img src="/img/Soporte_magnético_celular_202604031857.jpeg" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" alt="Relax" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold mb-2">Relax Manos Libres</h3>
                <p className="text-brand-text/70 font-light">Disfruta de tus series en la pose perfecta. Cero esfuerzo.</p>
              </div>
            </motion.div>

            {/* Bento Item 2: Gym/Focus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
              className="col-span-1 relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden group"
            >
              <img src="/img/Premium_phone_holder_202604031854.jpeg" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" alt="Gym" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold mb-2">Enfoque y Rendimiento</h3>
                <p className="text-brand-text/70 font-light">Acompaña tu rutina con precisión milimétrica.</p>
              </div>
            </motion.div>

            {/* Bento Item 3: Versatility */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="col-span-1 md:col-span-3 relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden group"
            >
              <img src="/img/Soporte_articulado_MagSafe_202604031820.jpeg" className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700" alt="Versatility" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/90 via-black/20 to-transparent flex flex-col justify-end p-8 md:items-center md:text-center">
                <h3 className="text-2xl font-bold mb-2">Versatilidad Total</h3>
                <p className="text-brand-text/70 font-light max-w-lg">De tu escritorio a la cocina. Tu dispositivo siempre seguro y visible.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section className="py-24 md:py-32 bg-brand-bg relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Especificaciones de Clase <span className="blue-gradient-text">Aeroespacial</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Feature
              icon={Settings}
              title="Aleación Aeroespacial"
              description="Mecanizado CNC a partir de un solo bloque de aluminio. Acabado mate premium resistente a rayones y huellas."
            />
            <Feature
              icon={Magnet}
              title="Sistema N52"
              description="La matriz de imanes de neodimio N52 garantiza compatibilidad total con MagSafe y un agarre ultra fuerte."
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
              description="Soporta la línea iPhone Pro Max sin vibraciones, caídas ni pérdida de ángulo con el tiempo."
            />
            <Feature
              icon={Check}
              title="Habita Tech"
              description="Soporte diseñado y optimizado para encajar armónicamente con tu setup Minimalista y Dark Mode."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-bg border-t border-brand-metal/20 pt-16 pb-32 md:pb-16 text-brand-text/60">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <img src="/img/Logo.png" alt="Gripen Logo" className="h-12 md:h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Términos</a>
              <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            </div>
          </div>
          <div className="text-center text-sm border-t border-white/5 pt-8">
            &copy; 2026 Gripen Accesorios. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full p-4 glass-panel z-50 animate-in slide-in-from-bottom pb-8">
        <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="w-full bg-brand-blue text-white py-4 rounded-full font-bold text-lg shadow-lg shadow-brand-blue/40 flex items-center justify-center gap-2">
          Comprar Ahora <ChevronRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
