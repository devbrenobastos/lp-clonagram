import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Zap,
    CheckCircle2,
    Play,
    Clock,
    MessageSquare,
    Activity,
    ShieldCheck,
    MoreHorizontal,
    ArrowRight
} from 'lucide-react';

export default function LivePreviewSection() {
    const [messages, setMessages] = useState(48_312);
    const [running, setRunning] = useState(53);

    useEffect(() => {
        const t = setInterval(() => setMessages(p => p + Math.floor(Math.random() * 3) + 1), 2200);
        return () => clearInterval(t);
    }, []);

    useEffect(() => {
        const t = setInterval(() => setRunning(p => p < 98 ? p + 1 : 42), 900);
        return () => clearInterval(t);
    }, []);

    const stats = [
        { label: 'Mensagens Clonadas', value: messages.toLocaleString('pt-BR'), icon: <MessageSquare strokeWidth={1.5} className="w-4 h-4 text-primary" /> },
        { label: 'Processos Ativos', value: '12', icon: <Activity strokeWidth={1.5} className="w-4 h-4 text-emerald-400" /> },
        { label: 'Uptime do Motor', value: '99.9%', icon: <ShieldCheck strokeWidth={1.5} className="w-4 h-4 text-sky-400" /> },
    ];

    const rows = [
        { id: 'CL-8293', channel: '-10023851920', label: 'CONCLUÍDO', pct: 100, color: 'text-emerald-400', bar: 'bg-emerald-400', icon: <CheckCircle2 strokeWidth={1.5} className="w-3.5 h-3.5" /> },
        { id: 'CL-9104', channel: '-10014928374', label: 'EXECUTANDO', pct: running, color: 'text-sky-400', bar: 'bg-sky-400', icon: <Play strokeWidth={1.5} className="w-3.5 h-3.5" />, shimmer: true },
        { id: 'CL-7721', channel: '-10018273645', label: 'PENDENTE', pct: 0, color: 'text-slate-500', bar: 'bg-slate-700', icon: <Clock strokeWidth={1.5} className="w-3.5 h-3.5" />, pulse: true },
        { id: 'CL-8842', channel: '-10020394857', label: 'CONCLUÍDO', pct: 100, color: 'text-emerald-400', bar: 'bg-emerald-400', icon: <CheckCircle2 strokeWidth={1.5} className="w-3.5 h-3.5" /> },
    ];

    return (
        <div className="w-full max-w-5xl mx-auto mt-14">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mb-4">
                {stats.map((s, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        style={{
                            background: 'rgba(15,23,42,0.55)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255,255,255,0.06)',
                        }}
                        className="rounded-2xl p-4 flex items-center justify-between"
                    >
                        <div>
                            <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">{s.label}</p>
                            <p className="text-xl font-semibold text-white tabular-nums" style={{ fontFamily: 'Outfit, Inter, sans-serif', letterSpacing: '-0.02em' }}>{s.value}</p>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }} className="p-2.5 rounded-xl">
                            {s.icon}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Table card */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    background: 'rgba(15,23,42,0.60)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: '1px solid rgba(255,255,255,0.06)',
                }}
                className="rounded-3xl overflow-hidden"
            >
                {/* Header bar */}
                <div className="flex items-center justify-between px-7 py-5 border-b border-white/[0.05]">
                    <div className="flex items-center gap-2.5">
                        <Zap strokeWidth={1.5} className="w-4 h-4 text-primary fill-current" />
                        <span className="text-sm font-medium text-white tracking-tight">Meus Clones</span>
                        <span className="text-xs text-slate-500 ml-1">monitoramento ativo</span>
                    </div>
                    <div className="flex gap-1.5">
                        {['bg-red-500/30', 'bg-amber-500/30', 'bg-emerald-500/30'].map(c => (
                            <div key={c} className={`w-2.5 h-2.5 rounded-full ${c}`} />
                        ))}
                    </div>
                </div>

                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-white/[0.04]">
                            {['Identificação', 'Status', 'Progresso', ''].map((h, i) => (
                                <th key={i} className="px-7 py-3.5 text-[10px] text-slate-500 uppercase tracking-widest font-medium">{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.04]">
                        {rows.map((row, i) => (
                            <tr key={i} className="group hover:bg-white/[0.015] transition-colors">
                                <td className="px-7 py-5">
                                    <p className="text-sm font-medium text-slate-200 tracking-tight">{row.id}</p>
                                    <p className="text-[11px] text-slate-500 mt-0.5">{row.channel}</p>
                                </td>
                                <td className="px-7 py-5">
                                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium ${row.color}`}
                                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                                        {row.icon} {row.label}
                                    </div>
                                </td>
                                <td className="px-7 py-5 w-56">
                                    <div className="flex items-center gap-3">
                                        <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                                            <motion.div
                                                className={`h-full rounded-full relative ${row.bar}`}
                                                initial={{ width: 0 }}
                                                animate={{ width: `${row.pct}%` }}
                                                transition={{ duration: 1.4, ease: 'easeOut' }}
                                            >
                                                {row.shimmer && (
                                                    <motion.div
                                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                                        animate={{ x: ['-100%', '200%'] }}
                                                        transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                                                    />
                                                )}
                                            </motion.div>
                                            {row.pulse && <div className="absolute inset-0 animate-pulse" style={{ background: 'rgba(100,116,139,0.2)' }} />}
                                        </div>
                                        <span className="text-[11px] font-medium text-slate-400 w-7 tabular-nums">{row.pct}%</span>
                                    </div>
                                </td>
                                <td className="px-7 py-5">
                                    <MoreHorizontal strokeWidth={1.5} className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition-colors" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="px-7 py-4 flex justify-end border-t border-white/[0.04]">
                    <button className="flex items-center gap-1.5 text-[11px] text-slate-500 hover:text-primary transition-colors group">
                        Ver todos <ArrowRight strokeWidth={1.5} className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
