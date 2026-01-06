import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, ChevronDown, ShieldCheck, Scale, Binary } from 'lucide-react';
// import heroImage from "figma:asset/5bc8747ff68c28cfe4e516a61a7285fe39405632.png";
import heroImage from "../assets/images/fondo2.jpg";
import aboutImage from "../assets/images/josefina3.jpg";
import CopyButton from './components/ui/CoppyButton';


export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('bienvenido');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#2B2A27] text-white">
      {/* Desktop Sidebar Navigation */}
      <nav className="hidden lg:block fixed left-0 top-0 h-full w-64 bg-[#1A1918] border-r border-[#3D3C38] z-50">
        <div className="p-8">
          <div className="mb-12">
            <h2 className="text-[15px] font-semibold tracking-[0.15em] text-[#C4A259] uppercase">
              Estudio Jurídico
            </h2>
            <h1 className="text-[13px] font-light tracking-[0.08em] text-[#9D9585] uppercase mt-1">
              Penal Ferro
            </h1>
          </div>
          <ul className="space-y-1">
            {[
              { id: 'bienvenido', label: 'Bienvenido' },
              { id: 'sobre-nosotros', label: 'Sobre Nosotros' },
              { id: 'areas', label: 'Áreas de Ejercicio' },
              { id: 'contacto', label: 'Contacto' }
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 text-[13px] font-medium tracking-[0.08em] uppercase transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-[#C4A259] bg-[#C4A259]/10 border-l-2 border-[#C4A259]'
                      : 'text-[#9D9585] hover:text-[#C4A259] hover:bg-[#C4A259]/5'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 bg-[#1A1918] border-b border-[#3D3C38] z-50">
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <h2 className="text-[14px] font-semibold tracking-[0.12em] text-[#C4A259] uppercase">
              Estudio Jurídico
            </h2>
            <h1 className="text-[11px] font-light tracking-[0.06em] text-[#9D9585] uppercase">
              Penal Ferro
            </h1>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#C4A259] p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="bg-[#1A1918] border-t border-[#3D3C38]">
            <ul className="py-4">
              {[
                { id: 'bienvenido', label: 'Bienvenido' },
                { id: 'sobre-nosotros', label: 'Sobre Nosotros' },
                { id: 'areas', label: 'Áreas de Ejercicio' },
                { id: 'contacto', label: 'Contacto' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-6 py-3 text-[13px] font-medium tracking-[0.08em] uppercase transition-all ${
                      activeSection === item.id
                        ? 'text-[#C4A259] bg-[#C4A259]/10'
                        : 'text-[#9D9585]'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="lg:ml-64 pt-20 lg:pt-0">
        {/* Hero Section */}
        <section
          id="bienvenido"
          className="relative min-h-screen flex items-center justify-center"
          style={{
            backgroundImage: `linear-gradient(rgba(26, 25, 24, 0.7), rgba(26, 25, 24, 0.7)), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="max-w-5xl mx-auto px-6 lg:px-12 py-20 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-wide text-white mb-8 leading-tight">
              Estudio Jurídico Penal <hr></hr> Ferro y Asoc.
            </h1>
            <div className="w-24 h-[2px] bg-[#C4A259] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-[#D4CDB8] max-w-3xl mx-auto mb-12 leading-relaxed">
              Desde el momento en que intervenimos, delineamos estratégicamente la
              teoría del caso idónea para las circunstancias.
            </p>
            <button
              onClick={() => scrollToSection('sobre-nosotros')}
              className="inline-flex items-center gap-2 bg-[#C4A259] text-[#1A1918] px-8 py-4 text-sm font-semibold tracking-[0.08em] uppercase hover:bg-[#D4B36A] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Conocé Más
              <ChevronRight size={18} />
            </button>
          </div>
        </section>

        {/* About Section */}
        <section
          id="sobre-nosotros"
          className="py-20 lg:py-32 bg-[#B8A67D]"
        >
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-light text-[#1A1918] mb-6 tracking-wide">
                  Abog. Maestranda Josefina Ferro
                </h2>
                <div className="w-16 h-[2px] bg-[#1A1918] mb-8"></div>
                <div className="space-y-6 text-[#2B2A27] leading-relaxed">
                  <p className="text-base md:text-lg">
                    El estudio jurídico se encuentra a cargo de la abogada Josefina Ferro,
                    quien es egresada de la Facultad de Derecho de la Universidad Nacional
                    de Cuyo.
                  </p>
                  <p className="text-base md:text-lg">
                    Ejerce defensa particular en causas penales por delitos de competencia
                    provincial o federal.
                  </p>
                  <p className="text-base md:text-lg">
                    Se especializa en cyberdelito y litigación penal en sistema adversarial.
                  </p>
                </div>
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="mt-8 inline-flex items-center gap-2 bg-[#1A1918] text-[#C4A259] px-7 py-3 text-sm font-semibold tracking-[0.08em] uppercase hover:bg-[#2B2A27] transition-all duration-300"
                >
                  Contactar
                  <ChevronRight size={16} />
                </button>
              </div>
              <div className="order-first lg:order-last">
                <img
                  src={aboutImage}
                  alt="Abog. Josefina Ferro"
                  className="w-full h-auto shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Practice Areas Section */}
        <section
          id="areas"
          className="py-20 lg:py-32 bg-[#3D3928]"
        >
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-white mb-6 tracking-wide">
                Áreas de Ejercicio
              </h2>
              <div className="w-16 h-[2px] bg-[#C4A259] mx-auto mb-6"></div>
              <p className="text-[#D4CDB8] max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
                Nos desempeñamos eficientemente en cada una de las siguientes áreas,
                proporcionando nuestro servicio permanentemente a disposición.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="bg-[#B8A67D] p-8 lg:p-10 hover:bg-[#C4A259] transition-all duration-300 group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#1A1918] flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="text-[#C4A259] " size={24} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-medium text-[#1A1918] tracking-wide">
                    Defensa particular en causas penales
                  </h3>
                </div>
                <p className="text-[#2B2A27] leading-relaxed text-base">
                  Toda persona sospechada por un presunto hecho delictivo tiene derecho
                  —desde el primer momento en que advierte estar siendo investigado— a
                  designar una defensa de su confianza.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#B8A67D] p-8 lg:p-10 hover:bg-[#C4A259] transition-all duration-300 group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#1A1918] flex items-center justify-center flex-shrink-0">
                    <Scale className="text-[#C4A259] " size={24} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-medium text-[#1A1918] tracking-wide">
                    Litigación penal en sistema adversarial
                  </h3>
                </div>
                <p className="text-[#2B2A27] leading-relaxed text-base">
                  La reforma a los Códigos Procesales (para delitos provinciales y federales)
                  derivó en la implementación progresiva del sistema adversarial en el cual,
                  prima la oralidad como regla del proceso penal.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#B8A67D] p-8 lg:p-10 hover:bg-[#C4A259] transition-all duration-300 group md:col-span-2">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#1A1918] flex items-center justify-center flex-shrink-0">
                    {/* <div className="w-6 h-6 border-2 border-[#C4A259]"></div> */}
                    <Binary className="text-[#C4A259] " size={24} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-medium text-[#1A1918] tracking-wide">
                    Cyberdelito
                  </h3>
                </div>
                <p className="text-[#2B2A27] leading-relaxed text-base max-w-4xl">
                  El avance de las herramientas tecnológicas y su utilización en la cotidianeidad
                  de la sociedad, obligan a los operadores jurídicos a prepararse exhaustivamente
                  sobre la normativa aplicable, para lograr defender técnicamente el caso.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contacto"
          className="py-20 lg:py-32 bg-[#2B2A27]"
        >
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-white mb-6 tracking-wide">
                Contacto
              </h2>
              <div className="w-16 h-[2px] bg-[#C4A259] mx-auto mb-6"></div>
              <p className="text-[#D4CDB8] max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                Estamos disponibles para atender su consulta. Contáctenos a través de
                cualquiera de los siguientes medios.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* Phone */}
              <div                 className="bg-[#1A1918] p-8 text-center hover:bg-[#C4A259]/10 border border-[#3D3C38] hover:border-[#C4A259] transition-all duration-300 group"
>
                <a
                href="tel:+5492616123456"
              >
                <div className="w-14 h-14 bg-[#C4A259]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C4A259] transition-all">
                  <Phone className="text-[#C4A259] group-hover:text-[#1A1918]" size={24} />
                </div>
                <h3 className="text-sm font-semibold tracking-[0.08em] uppercase text-[#C4A259] mb-2">
                  Teléfono
                </h3>
                <p className="text-[#D4CDB8] text-base">
                  +54 9 261 658 9732
                </p>
                
                <div className="h-6" aria-hidden="true" />
                
                </a>
                <section style={{ marginTop: 24 }}>
                  <pre
                    style={{
                      maxWidth: 680,
                      maxHeight: 220,
                      overflow: "auto",
                      background: "#11182710",
                      padding: 12,
                      borderRadius: 8,
                    }}
                  >
                  </pre>
                  <CopyButton
                    text={`+5492616123456`}
                    label="Copiar Teléfono"
                  />
                </section>
              </div>


              {/* Email */}
              <div
                className="bg-[#1A1918] p-8 text-center hover:bg-[#C4A259]/10 border border-[#3D3C38] hover:border-[#C4A259] transition-all duration-300 group"
              >
              <a
                href="mailto:estudioabogferro@gmail.com"
              >
                <div className="w-14 h-14 bg-[#C4A259]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C4A259] transition-all">
                  <Mail className="text-[#C4A259] group-hover:text-[#1A1918]" size={24} />
                </div>
                <h3 className="text-sm font-semibold tracking-[0.08em] uppercase text-[#C4A259] mb-2">
                  Email
                </h3>
                <p className="text-[#D4CDB8] text-base break-all">
                  estudioabogferro
                </p>
                <p className="text-[#D4CDB8] text-base break-all" >
                  @gmail.com  
                </p>
              </a>

                <section style={{ marginTop: 24 }}>
                  <pre
                    style={{
                      maxWidth: 680,
                      maxHeight: 220,
                      overflow: "auto",
                      background: "#11182710",
                      padding: 12,
                      borderRadius: 8,
                    }}
                  >
                  </pre>
                  <CopyButton
                    text={`estudioabogferro@gmail.com`}
                    label="Copiar Correo"
                  />
                </section>

              </div>


              {/* Location */}
              <div className="bg-[#1A1918] p-8 text-center border border-[#3D3C38]">
                <div className="w-14 h-14 bg-[#C4A259]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-[#C4A259]" size={24} />
                </div>
                <h3 className="text-sm font-semibold tracking-[0.08em] uppercase text-[#C4A259] mb-2">
                  Ubicación
                </h3>
                <p className="text-[#D4CDB8] text-base">
                  Mendoza, Argentina
                </p>
                <div className="h-6" aria-hidden="true" />

                <section style={{ marginTop: 24 }}>
        <pre
          style={{
            maxWidth: 680,
            maxHeight: 220,
            overflow: "auto",
            background: "#11182710",
            padding: 12,
            borderRadius: 8,
          }}
        >
        </pre>
        <CopyButton
          text={`Av. Bartolomé Mitre 565
                Planta baja, oficina 16
                Ciudad de Mendoza, Mendoza, Argentina`}
          label="Copiar Dirección"
        />
      </section>
              </div>
              
            </div>

            {/* CTA Button */}
            <div className="text-center mt-12">
              
              <a
                href="https://wa.me/2616589732"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#C4A259] text-[#1A1918] px-8 py-4 text-sm font-semibold tracking-[0.08em] uppercase hover:bg-[#D4B36A] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Consultar por WhatsApp
                <ChevronRight size={18} />
              </a>
            </div>
            <div className="text-center mt-12">
              <p className="text-[#D4CDB8] text-base break-all">
                Encontranos en:
              </p>
              
            </div>
                        <div className="w-12 h-[2px] bg-[#C4A259] mx-auto mb-2 mt-2"></div>

            <div className="text-center mt-4">
              
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2  text-[#1A1918] px-8 py-4 text-sm font-semibold tracking-[0.08em] uppercase  transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                 <iframe id="map-canvas" class="map_part" width="350"  height="250"  frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=Av. Bartolomé Mitre 565, M5500 Mendoza&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> 
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#1A1918] border-t border-[#3D3C38] py-8">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="text-center">
              <p className="text-[#9D9585] text-sm tracking-wide">
                © 2026 Estudio Jurídico Penal Ferro y Asoc. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
