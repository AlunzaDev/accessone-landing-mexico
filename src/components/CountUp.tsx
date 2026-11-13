import { useEffect, useRef, useState } from 'react';

interface CountUpProps { value: number; prefix?: string; suffix?: string; duration?: number; locale?: string }

export default function CountUp({ value, prefix = '', suffix = '', duration = 2000, locale = 'en-US' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;
    let running = false;
    let bounce: Animation | undefined;

    const play = () => {
      if (running) return;
      running = true;
      bounce?.cancel();
      setCurrent(0);
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        setCurrent(Math.round(value * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) frame = requestAnimationFrame(tick);
        else {
          running = false;
          bounce = el.animate([
            { transform: 'translateY(0) scale(1)', offset: 0 },
            { transform: 'translateY(-10px) scale(1.08)', offset: .08 },
            { transform: 'translateY(0) scale(1)', offset: .16 },
            { transform: 'translateY(-5px) scale(1.04)', offset: .22 },
            { transform: 'translateY(0) scale(1)', offset: .28 },
            { transform: 'translateY(0) scale(1)', offset: 1 },
          ], { duration: 3200, iterations: Infinity, easing: 'ease-out' });
        }
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) play();
      else { cancelAnimationFrame(frame); bounce?.cancel(); running = false; }
    }, { threshold: .4 });
    const replay = () => { if (document.visibilityState === 'visible') play(); };
    observer.observe(el);
    window.addEventListener('pageshow', replay);
    document.addEventListener('visibilitychange', replay);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); bounce?.cancel(); window.removeEventListener('pageshow', replay); document.removeEventListener('visibilitychange', replay); };
  }, [value, duration]);

  return <span ref={ref} aria-label={`${prefix}${new Intl.NumberFormat(locale).format(value)}${suffix}`} style={{ display: 'inline-block', fontVariantNumeric: 'tabular-nums', transformOrigin: 'center bottom' }}><span aria-hidden="true">{prefix}{new Intl.NumberFormat(locale).format(current)}{suffix}</span></span>;
}
