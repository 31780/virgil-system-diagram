import { useCallback, useState, useEffect } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import CustomNode from './components/CustomNode';
import InfoPanel from './components/InfoPanel';
import Legend from './components/Legend';
import Header from './components/Header';
import MobileView from './components/MobileView';
import { initialNodes, initialEdges, nodeData } from './data/nodes';

const nodeTypes = {
  customNode: CustomNode,
};

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const onNodeClick = useCallback((event, node) => {
    setSelectedNode(node);
  }, []);

  const onPaneClick = useCallback(() => {
    setSelectedNode(null);
  }, []);

  // Mobile view
  if (isMobile) {
    return <MobileView nodeData={nodeData} />;
  }

  // Desktop view
  return (
    <div className="w-screen h-screen bg-virgil-black">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        onPaneClick={onPaneClick}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        minZoom={0.3}
        maxZoom={2}
        defaultEdgeOptions={{
          type: 'smoothstep',
        }}
      >
        <Background 
          color="#333" 
          gap={20} 
          size={1}
          variant="dots"
        />
        <Controls 
          className="bg-zinc-900 border border-zinc-700 rounded-lg overflow-hidden"
          showInteractive={false}
        />
        <MiniMap 
          nodeColor={(node) => {
            switch (node.data?.layer) {
              case 'input': return '#3b82f6';
              case 'process': return '#f7c948';
              case 'output': return '#ff6b35';
              default: return '#71717a';
            }
          }}
          maskColor="rgba(0, 0, 0, 0.8)"
          className="bg-zinc-900 border border-zinc-700 rounded-lg"
        />
      </ReactFlow>

      <Header />
      <Legend />
      <InfoPanel 
        node={selectedNode} 
        onClose={() => setSelectedNode(null)} 
      />
      
      {/* Attribution */}
      <div className="absolute bottom-4 right-4 text-xs text-zinc-600 z-50">
        Built with React Flow • Submitted to Virgil Abloh™ Archive
      </div>
    </div>
  );
}
