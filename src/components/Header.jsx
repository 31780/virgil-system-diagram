export default function Header() {
  return (
    <div className="absolute top-4 left-4 z-50">
      <div className="info-panel rounded-xl p-4">
        <h1 className="text-xl font-bold text-white mb-1">
          The Creative Pipeline
        </h1>
        <p className="text-zinc-400 text-sm mb-2">
          Virgil Abloh's methodology as system architecture
        </p>
        <div className="flex items-center gap-2 text-xs">
          <span className="bg-orange-500/20 text-orange-400 px-2 py-1 rounded font-mono">
            "Creativity is a distributed system"
          </span>
        </div>
      </div>
      
      <div className="info-panel rounded-xl p-3 mt-2 text-xs text-zinc-500">
        <span className="text-zinc-400">Click nodes</span> to explore • 
        <span className="text-zinc-400"> Drag</span> to pan • 
        <span className="text-zinc-400"> Scroll</span> to zoom
      </div>
    </div>
  );
}
