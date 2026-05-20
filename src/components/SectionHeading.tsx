import { useInView } from '../hooks/useInView';

interface Props {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({ kicker, title, subtitle, align = 'center' }: Props) {
  const [ref, visible] = useInView();

  const alignmentClass = align === 'left' ? 'text-left' : 'text-center';
  const subAlignmentClass = align === 'left' ? 'mx-0' : 'mx-auto';

  return (
    <div
      ref={ref}
      className={`mb-14 transition-all duration-700 ${alignmentClass} ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      {kicker && <p className="section-kicker mb-3 text-cyan-200/80">{kicker}</p>}
      <h2 className="text-3xl font-bold text-white md:text-4xl">
        {title}
        <span className="text-gradient">.</span>
      </h2>
      {subtitle && (
        <p className={`mt-3 max-w-2xl text-gray-400 ${subAlignmentClass}`}>{subtitle}</p>
      )}
      <div
        className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 ${
          align === 'left' ? '' : 'mx-auto'
        }`}
      />
    </div>
  );
}
