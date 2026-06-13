import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const PALETTE = [
  { color: '#8B5CF6', label: 'Mood Mode' },
  { color: '#2DD4BF', label: 'Teal' },
  { color: '#e879f9', label: 'Iridescence' },
  { color: '#FB923C', label: 'Biophilic' },
  { color: '#C084FC', label: 'Pastel' },
  { color: '#A3E635', label: 'Moss' },
  { color: '#FF6B35', label: 'Arid' },
  { color: '#C792EA', label: 'Vibe' },
]

// Blob positions scattered at edges/corners
const BLOBS = [
  { color: '#8B5CF6', top: '5%',  left: '5%',  size: 320 },
  { color: '#e879f9', top: '8%',  left: '70%', size: 280 },
  { color: '#2DD4BF', top: '45%', left: '-5%', size: 260 },
  { color: '#A3E635', top: '60%', left: '80%', size: 300 },
  { color: '#FB923C', top: '80%', left: '15%', size: 240 },
  { color: '#FF6B35', top: '85%', left: '65%', size: 280 },
  { color: '#C084FC', top: '30%', left: '85%', size: 200 },
  { color: '#C792EA', top: '55%', left: '40%', size: 180 },
]

export default function Loader({ onDone }) {
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setExiting(true), 2200)
    const t2 = setTimeout(onDone, 3000)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [onDone])

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="loader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: '#09090B' }}
          aria-label="Loading"
          aria-live="polite"
        >
          {/* Ambient blobs — all 8 palette colors */}
          {BLOBS.map(({ color, top, left, size }) => (
            <motion.div
              key={color + top}
              aria-hidden="true"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, ease: 'easeOut' }}
              style={{
                position: 'absolute',
                top,
                left,
                width: size,
                height: size,
                background: color,
                borderRadius: '50%',
                filter: 'blur(90px)',
                opacity: 0.07,
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
              }}
            />
          ))}

          {/* HM Logo */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative z-10"
          >
            <img
              src="/logo.svg"
              alt="HM"
              width={52}
              height={52}
              style={{ filter: 'invert(1)', opacity: 0.95 }}
            />
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="relative z-10 mt-5 flex flex-col items-center gap-1.5"
          >
            <span
              className="text-white/85 font-semibold tracking-[0.22em] uppercase"
              style={{ fontSize: '11px' }}
            >
              Vibe Theme
            </span>
            <span
              className="text-white/25 tracking-widest"
              style={{ fontSize: '9px' }}
            >
              8 dark themes for VS Code
            </span>
          </motion.div>

          {/* Palette color chips */}
          <motion.div
            className="relative z-10 mt-9 flex gap-2"
            aria-hidden="true"
          >
            {PALETTE.map(({ color, label }, i) => (
              <motion.div
                key={color}
                title={label}
                initial={{ scale: 0, opacity: 0, y: 10 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{
                  delay: 0.55 + i * 0.07,
                  type: 'spring',
                  stiffness: 380,
                  damping: 22,
                }}
                style={{
                  background: color,
                  boxShadow: `0 0 14px ${color}90, 0 0 4px ${color}60`,
                }}
                className="w-5 h-5 rounded-full"
              />
            ))}
          </motion.div>

          {/* Thin progress bar using all 8 colors */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden"
            aria-hidden="true"
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 1.6, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="w-full h-full"
              style={{
                background: `linear-gradient(90deg, ${PALETTE.map(p => p.color).join(', ')})`,
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
