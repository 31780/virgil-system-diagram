import { useState } from 'react';

const layers = [
  { key: 'inputs', label: 'Input Layer', icon: '📥', color: 'blue', description: 'Cultural dependencies & references' },
  { key: 'processes', label: 'Process Layer', icon: '⚙️', color: 'yellow', description: 'Transformation algorithms' },
  { key: 'outputs', label: 'Output Layer', icon: '📤', color: 'orange', description: 'Creative artifacts' },
  { key: 'system', label: 'System Layer', icon: '🔧', color: 'zinc', description: 'Infrastructure concepts' },
];

const colorMap = {
  blue: {
    bg: 'bg-blue-500/10',
    border: 'border-blue-500',
    text: 'text-blue-400',
    glow: 'shadow-blue-500/20',
  },
  yellow: {
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500',
    text: 'text-yellow-400',
    glow: 'shadow-yellow-500/20',
  },
  orange: {
    bg: 'bg-orange-500/10',
    border: 'border-orange-500',
    text: 'text-orange-400',
    glow: 'shadow-orange-500/20',
  },
  zinc: {
    bg: 'bg-zinc-500/10',
    border: 'border-zinc-500',
    text: 'text-zinc-400',
    glow: 'shadow-zinc-500/20',
  },
};

function NodeCard({ node, color, expanded, onToggle }) {
  const colors = colorMap[color];
  
  return (
    <div 
      className={`
        ${colors.bg} border-l-4 ${colors.border} rounded-r-xl p-4 mb-3
        transition-all duration-300 cursor-pointer
        ${expanded ? `shadow-lg ${colors.glow}` : ''}
      `}
      onClick={onToggle}
    >
      <div className="flex justify-between items-start">
        <h3 className="text-white font-semibold text-lg">{node.label}</h3>
        <span className={`${colors.text} text-xl transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </div>
      
      {!expanded && (
        <p className="text-zinc-500 text-sm mt-1 line-clamp-1">{node.description}</p>
      )}
      
      {expanded && (
        <div className="mt-4 space-y-4 animate-fadeIn">
          <p className="text-zinc-300 text-sm leading-relaxed">{node.description}</p>
          
          {node.quote && (
            <blockquote className="border-l-2 border-orange-500 pl-3 text-zinc-400 text-sm italic">
              {node.quote}
              <footer className="text-zinc-600 mt-1 text-xs not-italic">— Virgil Abloh</footer>
            </blockquote>
          )}
          
          {node.algorithm && (
            <div className="bg-black/40 rounded-lg p-3">
              <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Algorithm</div>
              <code className="text-green-400 text-sm font-mono">{node.algorithm}</code>
            </div>
          )}
          
          {node.dependencies && (
            <div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Dependencies</div>
              <div className="flex flex-wrap gap-2">
                {node.dependencies.map((dep, i) => (
                  <span key={i} className="bg-zinc-800 text-zinc-300 px-2 py-1 rounded-full text-xs">
                    {dep}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {node.artifacts && (
            <div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Artifacts</div>
              <div className="flex flex-wrap gap-2">
                {node.artifacts.map((artifact, i) => (
                  <span key={i} className="bg-orange-500/20 text-orange-300 px-2 py-1 rounded-full text-xs">
                    {artifact}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {node.metrics && (
            <div className="bg-black/30 rounded-lg overflow-hidden">
              {Object.entries(node.metrics).map(([key, value], i) => (
                <div key={key} className={`flex justify-between p-2 ${i > 0 ? 'border-t border-zinc-800' : ''}`}>
                  <span className="text-zinc-500 text-xs font-mono">{key}</span>
                  <span className="text-white text-xs">{value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function LayerSection({ layer, nodes, color, isActive, onActivate }) {
  const [expandedNode, setExpandedNode] = useState(null);
  const colors = colorMap[color];
  const nodeArray = Object.values(nodes);

  return (
    <section className="mb-6">
      <button 
        onClick={onActivate}
        className={`
          w-full flex items-center gap-3 p-4 rounded-xl mb-3 transition-all
          ${isActive ? `${colors.bg} border ${colors.border}` : 'bg-zinc-900/50'}
        `}
      >
        <span className="text-2xl">{layer.icon}</span>
        <div className="flex-1 text-left">
          <h2 className={`font-bold ${isActive ? colors.text : 'text-white'}`}>{layer.label}</h2>
          <p className="text-zinc-500 text-sm">{layer.description}</p>
        </div>
        <span className={`${colors.text} text-xl transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      
      {isActive && (
        <div className="pl-2 animate-slideDown">
          {nodeArray.map((node) => (
            <NodeCard 
              key={node.id}
              node={node}
              color={color}
              expanded={expandedNode === node.id}
              onToggle={() => setExpandedNode(expandedNode === node.id ? null : node.id)}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default function MobileView({ nodeData }) {
  const [activeLayer, setActiveLayer] = useState('inputs');

  return (
    <div className="min-h-screen bg-virgil-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-virgil-black/95 backdrop-blur-sm border-b border-zinc-800 p-4">
        <div className="text-center">
          <div className="text-orange-500 text-xs font-mono tracking-wider mb-1">
            "Creativity is a distributed system"
          </div>
          <h1 className="text-xl font-bold">The Creative Pipeline</h1>
          <p className="text-zinc-500 text-sm">Virgil Abloh's methodology as system architecture</p>
        </div>
      </header>

      {/* Navigation dots */}
      <div className="sticky top-[88px] z-40 bg-virgil-black/90 backdrop-blur-sm py-3 px-4 border-b border-zinc-800/50">
        <div className="flex justify-center gap-3">
          {layers.map((layer) => {
            const colors = colorMap[layer.color];
            return (
              <button
                key={layer.key}
                onClick={() => setActiveLayer(layer.key)}
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center transition-all
                  ${activeLayer === layer.key 
                    ? `${colors.bg} border-2 ${colors.border} scale-110` 
                    : 'bg-zinc-800/50 border border-zinc-700'
                  }
                `}
              >
                <span className="text-lg">{layer.icon}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <main className="p-4 pb-24">
        {layers.map((layer) => (
          <LayerSection
            key={layer.key}
            layer={layer}
            nodes={nodeData[layer.key]}
            color={layer.color}
            isActive={activeLayer === layer.key}
            onActivate={() => setActiveLayer(activeLayer === layer.key ? null : layer.key)}
          />
        ))}
        
        {/* Quote */}
        <div className="mt-8 p-6 bg-gradient-to-br from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20 text-center">
          <blockquote className="text-lg font-light italic text-white mb-2">
            "If you change 3% of something, it becomes something new."
          </blockquote>
          <cite className="text-zinc-500 text-sm">— Virgil Abloh</cite>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-virgil-black/95 backdrop-blur-sm border-t border-zinc-800 p-4">
        <div className="flex justify-between items-center text-xs">
          <span className="text-zinc-600">Submitted to Virgil Abloh™ Archive</span>
          <span className="text-orange-500 font-mono">"Free game."</span>
        </div>
      </footer>
    </div>
  );
}
