import { Handle, Position } from '@xyflow/react';

const layerColors = {
  input: {
    border: 'border-blue-500',
    bg: 'bg-gradient-to-br from-slate-900 to-blue-950',
    glow: 'shadow-blue-500/20',
    icon: '📥',
    label: 'INPUT'
  },
  process: {
    border: 'border-yellow-500',
    bg: 'bg-gradient-to-br from-slate-900 to-yellow-950',
    glow: 'shadow-yellow-500/20',
    icon: '⚙️',
    label: 'PROCESS'
  },
  output: {
    border: 'border-orange-500',
    bg: 'bg-gradient-to-br from-slate-900 to-orange-950',
    glow: 'shadow-orange-500/20',
    icon: '📤',
    label: 'OUTPUT'
  },
  system: {
    border: 'border-zinc-500',
    bg: 'bg-gradient-to-br from-zinc-900 to-slate-900',
    glow: 'shadow-zinc-500/20',
    icon: '🔧',
    label: 'SYSTEM'
  }
};

export default function CustomNode({ data, selected }) {
  const layer = layerColors[data.layer] || layerColors.system;
  
  return (
    <div 
      className={`
        min-w-[180px] max-w-[200px] rounded-lg p-3 cursor-pointer
        border-2 ${layer.border} ${layer.bg}
        shadow-lg ${selected ? `shadow-xl ${layer.glow}` : ''}
        transition-all duration-200 hover:scale-105
      `}
    >
      {/* Input handle */}
      {data.layer !== 'input' && (
        <Handle
          type="target"
          position={Position.Left}
          className="w-3 h-3 bg-zinc-400 border-2 border-zinc-600"
        />
      )}
      
      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg">{layer.icon}</span>
        <div className="flex-1">
          <div className="text-xs text-zinc-500 font-mono uppercase tracking-wider">
            {layer.label}
          </div>
          <div className="text-white font-bold text-sm leading-tight">
            {data.label}
          </div>
        </div>
      </div>

      {/* Algorithm/Description preview */}
      {data.algorithm && (
        <div className="text-xs font-mono text-zinc-400 bg-black/30 rounded px-2 py-1 mb-2 truncate">
          {data.algorithm}
        </div>
      )}

      {/* Mini metrics */}
      {data.metrics && (
        <div className="flex flex-wrap gap-1">
          {Object.entries(data.metrics).slice(0, 2).map(([key, value]) => (
            <span 
              key={key}
              className="text-[10px] bg-white/10 text-zinc-300 rounded px-1.5 py-0.5"
            >
              {key}: {value}
            </span>
          ))}
        </div>
      )}

      {/* Output handle */}
      {data.layer !== 'output' && (
        <Handle
          type="source"
          position={Position.Right}
          className="w-3 h-3 bg-zinc-400 border-2 border-zinc-600"
        />
      )}
    </div>
  );
}
