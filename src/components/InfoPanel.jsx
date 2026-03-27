export default function InfoPanel({ node, onClose }) {
  if (!node) return null;

  const data = node.data;
  
  const layerStyles = {
    input: 'border-blue-500 text-blue-400',
    process: 'border-yellow-500 text-yellow-400',
    output: 'border-orange-500 text-orange-400',
    system: 'border-zinc-500 text-zinc-400'
  };

  const style = layerStyles[data.layer] || layerStyles.system;

  return (
    <div className="absolute top-4 right-4 w-96 max-h-[calc(100vh-2rem)] overflow-y-auto info-panel rounded-xl p-6 z-50">
      {/* Close button */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
      >
        ✕
      </button>

      {/* Header */}
      <div className={`border-l-4 ${style} pl-4 mb-6`}>
        <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">
          {data.layer}
        </div>
        <h2 className="text-2xl font-bold text-white">{data.label}</h2>
      </div>

      {/* Description */}
      <p className="text-zinc-300 mb-6 leading-relaxed">
        {data.description}
      </p>

      {/* Quote */}
      {data.quote && (
        <blockquote className="virgil-quote mb-6 text-sm">
          {data.quote}
          <footer className="text-zinc-600 mt-2 text-xs">— Virgil Abloh</footer>
        </blockquote>
      )}

      {/* Algorithm */}
      {data.algorithm && (
        <div className="mb-6">
          <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
            Algorithm
          </h3>
          <code className="block bg-black/50 text-green-400 p-3 rounded-lg font-mono text-sm">
            {data.algorithm}
          </code>
        </div>
      )}

      {/* Dependencies */}
      {data.dependencies && (
        <div className="mb-6">
          <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
            Dependencies
          </h3>
          <div className="flex flex-wrap gap-2">
            {data.dependencies.map((dep, i) => (
              <span 
                key={i}
                className="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full text-sm hover:bg-zinc-700 transition-colors cursor-default"
              >
                {dep}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Artifacts */}
      {data.artifacts && (
        <div className="mb-6">
          <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
            Notable Artifacts
          </h3>
          <ul className="space-y-1">
            {data.artifacts.map((artifact, i) => (
              <li key={i} className="text-zinc-300 text-sm flex items-center gap-2">
                <span className="text-orange-500">→</span> {artifact}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Metrics */}
      {data.metrics && (
        <div>
          <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
            Metrics
          </h3>
          <div className="bg-black/30 rounded-lg overflow-hidden">
            {Object.entries(data.metrics).map(([key, value], i) => (
              <div 
                key={key}
                className={`flex justify-between p-3 ${i > 0 ? 'border-t border-zinc-800' : ''}`}
              >
                <span className="text-zinc-400 text-sm font-mono">{key}</span>
                <span className="text-white text-sm font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
