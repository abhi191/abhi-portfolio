import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

// Visitor-facing accent switcher. Defaults to Vermilion (red) for first-time
// visitors; any manual choice is persisted so a returning visitor keeps their
// pick instead of it resetting.

const STORAGE_KEY = 'portfolio-accent';
const DEFAULT_ACCENT_NAME = 'Vermilion';

export interface AccentOption {
  name: string;
  hex: string;
  rgb: string;
  contrast: string; // text color on solid accent surfaces
  text: string;     // accent-as-text color; darkened for light hues so it stays legible on paper
}

export const ACCENT_OPTIONS: AccentOption[] = [
  { name: 'Electric cobalt', hex: '#2B4EFF', rgb: '43 78 255', contrast: '#F6F6F4', text: '#2B4EFF' },
  { name: 'Emerald', hex: '#0C9A6C', rgb: '12 154 108', contrast: '#F6F6F4', text: '#0C9A6C' },
  { name: 'Fuchsia', hex: '#D6246E', rgb: '214 36 110', contrast: '#F6F6F4', text: '#D6246E' },
  { name: 'Vermilion', hex: '#D7263D', rgb: '215 38 61', contrast: '#F6F6F4', text: '#D7263D' },
  { name: 'Acid lime', hex: '#BDD71C', rgb: '189 215 28', contrast: '#16171A', text: '#BDD71C' },
  { name: 'Sun yellow', hex: '#F7C213', rgb: '247 194 19', contrast: '#16171A', text: '#F7C213' },
];

export const applyAccent = (option: AccentOption) => {
  const root = document.documentElement;
  root.style.setProperty('--accent-rgb', option.rgb);
  root.style.setProperty('--accent', option.hex);
  root.style.setProperty('--accent-contrast', option.contrast);
  root.style.setProperty('--accent-text', option.text);
  window.dispatchEvent(new CustomEvent('accentchange', { detail: option.hex }));
};

const SPRING = { type: 'spring', stiffness: 500, damping: 32 } as const;

const AccentSwitcher: React.FC = () => {
  // Returning visitor keeps their saved accent; first visit defaults to red.
  const [active, setActive] = useState<AccentOption>(() => {
    let saved: string | null = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch { /* storage unavailable */ }
    const match = ACCENT_OPTIONS.find((o) => o.name === saved);
    return match ?? ACCENT_OPTIONS.find((o) => o.name === DEFAULT_ACCENT_NAME)!;
  });
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    applyAccent(active);
    try { localStorage.setItem(STORAGE_KEY, active.name); } catch { /* storage unavailable */ }
  }, [active]);

  // Close on outside click or Escape
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="fixed left-4 bottom-4 z-50"
    >
      <motion.button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close accent picker' : 'Open accent picker'}
        aria-expanded={open}
        title={`Accent: ${active.name}`}
        className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md border border-brand-dark/10 shadow-[0_8px_24px_-8px_rgba(22,23,26,0.3)] flex items-center justify-center"
        whileHover={reduceMotion ? undefined : { scale: 1.08 }}
        whileTap={reduceMotion ? undefined : { scale: 0.92 }}
        transition={SPRING}
      >
        <motion.span
          className="block w-4 h-4 rounded-full"
          style={{ backgroundColor: active.hex }}
          animate={reduceMotion ? undefined : { scale: open ? 0.7 : 1 }}
          transition={SPRING}
        />
      </motion.button>

      {/* Static rail handles the horizontal centering above the icon. Motion owns
          the flyout's transform for the open/close animation, so centering must
          live on a separate, non-animated element or Motion overwrites it. */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3">
      <AnimatePresence>
        {open && (
          <motion.div
            role="radiogroup"
            aria-label="Preview accent color"
            className="flex flex-col items-center gap-1.5 bg-white/90 backdrop-blur-md border border-brand-dark/10 rounded-full px-2 py-2.5 shadow-[0_8px_24px_-8px_rgba(22,23,26,0.3)]"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.94, transition: { duration: 0.15 } }}
            transition={SPRING}
            style={{ transformOrigin: 'bottom center' }}
          >
            {ACCENT_OPTIONS.map((option, i) => (
              <motion.button
                key={option.name}
                role="radio"
                aria-checked={active.name === option.name}
                title={option.name}
                onClick={() => {
                  setActive(option);
                  setOpen(false);
                }}
                className={`w-6 h-6 rounded-full ${active.name === option.name ? 'ring-2 ring-brand-dark ring-offset-2 ring-offset-white' : ''}`}
                style={{ backgroundColor: option.hex }}
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.4, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ ...SPRING, delay: reduceMotion ? 0 : (ACCENT_OPTIONS.length - 1 - i) * 0.035 }}
                whileHover={reduceMotion ? undefined : { scale: 1.18 }}
                whileTap={reduceMotion ? undefined : { scale: 0.9 }}
              >
                <span className="sr-only">{option.name}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
};

export default AccentSwitcher;
