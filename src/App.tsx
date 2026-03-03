import { motion } from 'framer-motion';
import { Zap, CheckCircle2, ArrowRight, Menu, Rocket, ShieldCheck, Activity } from 'lucide-react';
import LivePreviewSection from './components/LivePreviewSection';

const LINKS = {
  login: 'https://app.clonagram.site/login',
  signup: 'https://app.clonagram.site/signup',
};

const glass = {
  background: 'rgba(15,23,42,0.55)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.06)',
} as const;

/* ── Animated background blobs via Framer Motion ── */
const Blob = ({ style }: { style: React.CSSProperties }) => (
  <motion.div
    style={{
      position: 'fixed',
      borderRadius: '50%',
      filter: 'blur(90px)',
      pointerEvents: 'none',
      zIndex: -1,
      ...style,
    }}
    animate={{
      x: [0, 40, -20, 0],
      y: [0, -60, 30, 0],
      scale: [1, 1.08, 0.94, 1],
    }}
    transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
  />
);

const AnimatedBackground = () => (
  <>
    <Blob style={{ top: '-10%', left: '-8%', width: 640, height: 640, background: 'rgba(34,158,217,0.10)' }} />
    <Blob style={{ bottom: '5%', right: '-10%', width: 500, height: 500, background: 'rgba(34,158,217,0.07)', animationDelay: '8s' }} />
    <Blob style={{ top: '35%', left: '55%', width: 380, height: 380, background: 'rgba(34,158,217,0.06)', animationDelay: '14s' }} />
  </>
);

/* ── Navbar ── */
const Navbar = () => (
  <nav style={{ ...glass, position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>
    <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <div style={{ background: 'rgba(34,158,217,0.12)', border: '1px solid rgba(34,158,217,0.20)' }} className="p-1.5 rounded-lg">
          <Zap strokeWidth={1.5} className="text-primary w-4 h-4 fill-current" />
        </div>
        <span className="text-[15px] font-semibold text-white tracking-[-0.02em]" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>
          Clonegram
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <a href="#recursos" className="text-slate-400 hover:text-slate-200 text-sm font-normal transition-colors">Recursos</a>
        <a href="#preco" className="text-slate-400 hover:text-slate-200 text-sm font-normal transition-colors">Preço</a>
        <a
          href={LINKS.login}
          target="_blank" rel="noopener noreferrer"
          style={{ border: '1px solid rgba(255,255,255,0.10)' }}
          className="text-slate-300 hover:text-white text-sm font-normal px-5 py-2 rounded-full transition-all hover:border-white/20"
        >
          Entrar
        </a>
      </div>
      <Menu strokeWidth={1.5} className="md:hidden text-slate-400 w-5 h-5" />
    </div>
  </nav>
);

/* ── Hero ── */
const Hero = () => (
  <section className="relative pt-28 pb-20 overflow-hidden">
    {/* radial hero glow */}
    <div
      style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: 'radial-gradient(ellipse 80% 55% at 50% -10%, rgba(34,158,217,0.11) 0%, transparent 70%)',
        pointerEvents: 'none',
      }}
    />

    <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
        style={{ background: 'rgba(34,158,217,0.08)', border: '1px solid rgba(34,158,217,0.15)' }}
      >
        <span className="flex h-1.5 w-1.5 relative">
          <span className="animate-ping absolute rounded-full bg-primary opacity-70 inset-0" />
          <span className="relative rounded-full bg-primary w-1.5 h-1.5" />
        </span>
        <span className="text-primary text-[11px] font-medium tracking-wide">Automação de Elite para o Telegram</span>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12 }}
        className="text-[2.75rem] md:text-[4.5rem] text-white mb-5 leading-[1.07]"
        style={{ fontFamily: 'Outfit, Inter, sans-serif', fontWeight: 600, letterSpacing: '-0.03em' }}
      >
        Domine o Telegram.<br />
        <span style={{ background: 'linear-gradient(130deg,#229ED9,#7dd3fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Clone Canais Inteiros
        </span>
        <br />com 1 Clique.
      </motion.h1>

      {/* Sub */}
      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 0.26 }}
        className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-9 font-normal"
      >
        A ferramenta de automação definitiva. Transfira milhares de mensagens e
        arquivos instantaneamente com precisão absoluta.
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.38 }}
      >
        <a
          href={LINKS.signup}
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 group"
          style={{
            background: '#229ED9',
            color: '#fff',
            fontWeight: 500,
            fontSize: '0.875rem',
            letterSpacing: '0.01em',
            borderRadius: '999px',
            padding: '0.8rem 2rem',
            boxShadow: '0 4px 28px rgba(34,158,217,0.22)',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 6px 36px rgba(34,158,217,0.40)')}
          onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 4px 28px rgba(34,158,217,0.22)')}
        >
          Começar a Clonar Agora
          <ArrowRight strokeWidth={1.5} className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </motion.div>

      {/* Integrated dashboard */}
      <LivePreviewSection />
    </div>
  </section>
);

/* ── Features ── */
const Features = () => {
  const items = [
    { icon: <Rocket strokeWidth={1.5} className="w-5 h-5 text-primary" />, title: 'Velocidade Extrema', desc: 'Infraestrutura dedicada para clonagem em massa sem lentidão.' },
    { icon: <Activity strokeWidth={1.5} className="w-5 h-5 text-primary" />, title: 'Precisão Absoluta', desc: 'Cada detalhe preservado: áudios, vídeos, documentos e muito mais.' },
    { icon: <ShieldCheck strokeWidth={1.5} className="w-5 h-5 text-primary" />, title: 'Proteção Anti-Ban', desc: 'Algoritmo comportamental inteligente para manter suas contas seguras.' },
  ];

  return (
    <section id="recursos" className="py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[2rem] md:text-[2.5rem] text-white mb-4" style={{ fontFamily: 'Outfit, Inter, sans-serif', fontWeight: 600, letterSpacing: '-0.025em' }}>
            Por que o Clonegram?
          </h2>
          <p className="text-slate-500 text-[15px] max-w-md mx-auto">
            Construído para quem leva automação no Telegram a sério.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {items.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={glass}
              className="rounded-2xl p-7 group hover:border-primary/20 transition-colors"
            >
              <div style={{ background: 'rgba(34,158,217,0.08)', border: '1px solid rgba(34,158,217,0.12)' }} className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                {f.icon}
              </div>
              <h3 className="text-[15px] font-semibold text-slate-100 mb-2 tracking-tight">{f.title}</h3>
              <p className="text-slate-500 text-[13px] leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Pricing ── */
const Pricing = () => (
  <section id="preco" className="py-32">
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-[2rem] md:text-[2.5rem] text-white mb-4" style={{ fontFamily: 'Outfit, Inter, sans-serif', fontWeight: 600, letterSpacing: '-0.025em' }}>
          Simples e direto.
        </h2>
        <p className="text-slate-500 text-[15px] max-w-sm mx-auto">
          Pague pelo que usar. Sem mensalidades ou surpresas.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-md mx-auto relative"
      >
        {/* Glow border */}
        <div style={{
          position: 'absolute', inset: -1,
          borderRadius: '1.75rem',
          background: 'linear-gradient(135deg, rgba(34,158,217,0.25), rgba(34,158,217,0.04))',
          pointerEvents: 'none',
        }} />

        <div style={glass} className="rounded-[1.65rem] p-10 text-center">
          <span className="inline-block text-[10px] font-medium tracking-widest uppercase text-primary mb-8 px-3 py-1 rounded-full" style={{ background: 'rgba(34,158,217,0.08)', border: '1px solid rgba(34,158,217,0.15)' }}>
            Oferta de Lançamento
          </span>

          <p className="text-slate-400 text-[11px] tracking-widest uppercase mb-3">Acesso por Clone</p>

          <div className="flex items-end justify-center gap-1 mb-5">
            <span className="text-slate-500 text-lg font-normal mb-1.5">R$</span>
            <span className="text-[5.5rem] leading-none font-semibold text-white" style={{ fontFamily: 'Outfit, Inter, sans-serif', letterSpacing: '-0.04em' }}>20</span>
            <span className="text-slate-500 text-lg font-normal mb-1.5">,00</span>
          </div>

          <p className="text-slate-500 text-[13px] leading-relaxed mb-9 max-w-xs mx-auto">
            Adicione <span className="text-slate-300">1 canal de destino</span> à sua operação com pagamento único via PIX. Créditos vitalícios sem mensalidade.
          </p>

          <a
            href={LINKS.signup}
            target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl text-white text-sm font-medium transition-all"
            style={{ background: '#229ED9', boxShadow: '0 4px 24px rgba(34,158,217,0.25)' }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 6px 32px rgba(34,158,217,0.42)')}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 4px 24px rgba(34,158,217,0.25)')}
          >
            Adquirir Crédito
          </a>

          <div className="mt-6 flex justify-center gap-6 text-[11px] text-slate-500">
            <span className="flex items-center gap-1.5"><CheckCircle2 strokeWidth={1.5} className="w-3.5 h-3.5 text-emerald-500" />Entrega imediata</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 strokeWidth={1.5} className="w-3.5 h-3.5 text-emerald-500" />Via PIX</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ── Footer ── */
const Footer = () => (
  <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }} className="py-10">
    <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-5">
      <div className="flex items-center gap-2">
        <div style={{ background: 'rgba(34,158,217,0.10)', border: '1px solid rgba(34,158,217,0.18)' }} className="p-1.5 rounded-lg">
          <Zap strokeWidth={1.5} className="text-primary w-3.5 h-3.5 fill-current" />
        </div>
        <span className="text-sm font-semibold text-white tracking-[-0.02em]" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>Clonegram</span>
      </div>

      <p className="text-slate-600 text-xs order-last md:order-none">
        © {new Date().getFullYear()} Clonegram. Todos os direitos reservados.
      </p>

      <div className="flex gap-7">
        <a href={LINKS.signup} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Criar Conta</a>
        <a href={LINKS.login} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Entrar</a>
      </div>
    </div>
  </footer>
);

/* ── Root ── */
export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'hsl(222.2,84%,4.9%)', overflowX: 'hidden' }}>
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}
