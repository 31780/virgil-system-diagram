export default function Legend() {
  const layers = [
    { name: 'Input', color: 'bg-blue-500', description: 'Cultural dependencies & references' },
    { name: 'Process', color: 'bg-yellow-500', description: 'Transformation algorithms' },
    { name: 'Output', color: 'bg-orange-500', description: 'Creative artifacts' },
    { name: 'System', color: 'bg-zinc-500', description: 'Infrastructure concepts' },
  ];

  return (
    <div className="absolute bottom-4 left-4 info-panel rounded-xl p-4 z-50">
      <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-3">
        System Legend
      </h3>
      <div className="space-y-2">
        {layers.map((layer) => (
          <div key={layer.name} className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${layer.color}`} />
            <span className="text-white text-sm font-medium w-16">{layer.name}</span>
            <span className="text-zinc-500 text-xs">{layer.description}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-zinc-800">
        <div className="flex items-center gap-3 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <div className="w-8 h-0.5 bg-blue-500" style={{ animation: 'pulse 2s infinite' }} />
            <span>Data flow</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-0.5 bg-zinc-500 border-dashed border-t-2 border-zinc-500" />
            <span>System link</span>
          </div>
        </div>
      </div>
    </div>
  );
}
