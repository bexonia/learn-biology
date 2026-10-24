import { useState } from 'react';
import ProkaryoteExplorer from './prokaryote/ProkaryoteExplorer';
import EukaryoteExplorer from './eukaryote/EukaryoteExplorer';

export {
  MREB_TOUR_STOPS,
  FTSZ_TOUR_STOPS,
  GYRASE_TOUR_STOPS,
  POL_III_TOUR_STOPS,
} from './prokaryote/ProkaryoteExplorer';

export default function App() {
  const initialDomain =
    typeof window !== 'undefined' && window.location.search.includes('domain=eukaryote')
      ? 'eukaryote'
      : 'prokaryote';
  const [domain, setDomain] = useState<'prokaryote' | 'eukaryote'>(initialDomain);

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      {/* Top-Center Domain Switcher Pill */}
      <div
        id="domain-switcher-bar"
        style={{
          position: 'fixed',
          bottom: '14px',
          left: '16px',
          zIndex: 9999,
          display: 'flex',
          gap: '4px',
          background: 'rgba(10, 18, 34, 0.92)',
          padding: '4px',
          borderRadius: '20px',
          border: '1px solid rgba(0, 245, 212, 0.45)',
          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.35)'
        }}
      >
        <button
          id="btn-domain-prokaryote"
          onClick={() => setDomain('prokaryote')}
          style={{
            padding: '4px 11px',
            borderRadius: '16px',
            border: 'none',
            fontSize: '11px',
            fontWeight: 800,
            cursor: 'pointer',
            background: domain === 'prokaryote' ? '#06D6A0' : 'transparent',
            color: domain === 'prokaryote' ? '#061220' : '#CBD5E1'
          }}
        >
          🦠 Prokaryote (29)
        </button>
        <button
          id="btn-domain-eukaryote"
          onClick={() => setDomain('eukaryote')}
          style={{
            padding: '4px 11px',
            borderRadius: '16px',
            border: 'none',
            fontSize: '11px',
            fontWeight: 800,
            cursor: 'pointer',
            background: domain === 'eukaryote' ? '#00F5D4' : 'transparent',
            color: domain === 'eukaryote' ? '#061220' : '#CBD5E1'
          }}
        >
          🧬 Eukaryote (36)
        </button>
      </div>

      {domain === 'eukaryote' ? <EukaryoteExplorer /> : <ProkaryoteExplorer />}
    </div>
  );
}
