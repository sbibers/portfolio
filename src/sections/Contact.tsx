import { useState, type FormEvent } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  ArrowRight,
} from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';
import { useInView } from '../hooks/useInView';
import { PERSONAL_INFO } from '../utils/constants';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: PERSONAL_INFO.email,
    href: `mailto:${PERSONAL_INFO.email}`,
    copyable: true,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Salam Baybars',
    href: PERSONAL_INFO.linkedin,
    copyable: false,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@sbibers',
    href: PERSONAL_INFO.github,
    copyable: false,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: PERSONAL_INFO.location,
    href: undefined,
    copyable: false,
  },
];

export default function Contact() {
  const [ref, visible] = useInView(0.1);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [copied, setCopied] = useState(false);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setStatus('error');
      window.setTimeout(() => setStatus('idle'), 1800);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const subject = encodeURIComponent(form.subject || 'Portfolio Contact');
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);

    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    setStatus('success');
    window.setTimeout(() => {
      setStatus('idle');
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 2500);
  };

  return (
    <SectionWrapper className="section-shell">
      <div id="contact" className="scroll-mt-24">
        <SectionHeading
          kicker="04 / Contact"
          title="Contact"
          subtitle="The best way to reach me for internships, project work, or technical roles."
        />

        <div
          ref={ref}
          className={`grid gap-8 lg:grid-cols-[0.94fr_1.06fr] transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="space-y-4">
            <div className="section-frame p-6">
              <p className="section-kicker">Direct contact</p>
              <h3 className="mt-3 text-2xl font-bold text-white">Let’s talk.</h3>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                If you have an internship, project, or role in mind, you can reach me through any
                of the channels below.
              </p>

              <div className="mt-6 space-y-3">
                {contactLinks.map(({ icon: Icon, label, value, href, copyable }) => (
                  <div
                    key={label}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary-400/20"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-primary-300 shadow-[0_16px_35px_rgba(0,0,0,0.2)]">
                      <Icon size={18} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs uppercase tracking-[0.24em] text-gray-500">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 block truncate text-sm font-medium text-gray-100 transition-colors group-hover:text-primary-200"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="mt-1 truncate text-sm font-medium text-gray-100">{value}</p>
                      )}
                    </div>

                    {copyable && (
                      <button
                        onClick={() => handleCopy(value)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-primary-400/25 hover:text-white"
                        aria-label="Copy email address"
                      >
                        {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: 'Response style', value: 'Fast & focused' },
                { label: 'Preferred work', value: 'Systems + Web' },
              ].map((item) => (
                <div key={item.label} className="section-frame p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-500">{item.label}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="section-frame p-6 md:p-8"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="section-kicker">Send a message</p>
                <h3 className="mt-2 text-2xl font-bold text-white">Start the conversation</h3>
              </div>
              <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-2xl border border-primary-400/20 bg-primary-500/10 text-primary-200">
                <ArrowRight size={18} />
              </div>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-gray-400">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-gray-600 outline-none transition-all duration-300 focus:border-primary-400/40 focus:ring-2 focus:ring-primary-500/20"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-gray-400">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-gray-600 outline-none transition-all duration-300 focus:border-primary-400/40 focus:ring-2 focus:ring-primary-500/20"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="subject" className="mb-2 block text-sm text-gray-400">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-gray-600 outline-none transition-all duration-300 focus:border-primary-400/40 focus:ring-2 focus:ring-primary-500/20"
                placeholder="What would you like to discuss?"
              />
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-sm text-gray-400">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-gray-600 outline-none transition-all duration-300 focus:border-primary-400/40 focus:ring-2 focus:ring-primary-500/20"
                placeholder="Tell me about the role, project, or idea..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending' || status === 'success'}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary-500 px-6 py-3.5 font-semibold text-white shadow-[0_18px_45px_rgba(99,102,241,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'success' ? (
                <>
                  <CheckCircle2 size={18} />
                  Message ready
                </>
              ) : status === 'error' ? (
                <>
                  <AlertCircle size={18} />
                  Try again
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>

            <p className="mt-4 text-center text-xs text-gray-500">
              This opens your email client with the message prefilled.
            </p>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
