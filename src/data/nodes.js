// Virgil Abloh Creative System - Node Definitions
// "Everything in quotes" - treating culture like infrastructure

export const nodeData = {
  // INPUT LAYER - Cultural Dependencies
  inputs: {
    archive: {
      id: 'archive',
      label: 'Archive',
      type: 'input',
      description: 'Historical fashion, art movements, design archives',
      dependencies: ['Margiela', 'Duchamp', 'Bauhaus', 'Le Corbusier'],
      quote: '"The archive is the source code."',
      metrics: {
        depth: '100+ years',
        accessPattern: 'Random read',
        cacheHit: 'High for classics'
      }
    },
    street: {
      id: 'street',
      label: 'Street Culture',
      type: 'input',
      description: 'Skateboarding, graffiti, DIY scenes',
      dependencies: ['Supreme', 'Stüssy', 'Futura', 'KAWS'],
      quote: '"Street culture is the open-source movement of fashion."',
      metrics: {
        freshness: 'Real-time',
        volatility: 'High',
        authenticity: 'Required'
      }
    },
    music: {
      id: 'music',
      label: 'Music',
      type: 'input',
      description: 'Hip-hop, house, electronic - sonic DNA',
      dependencies: ['Kanye', 'Chicago House', 'A$AP Mob', 'Daft Punk'],
      quote: '"Music is the metadata of culture."',
      metrics: {
        bpm: 'Variable',
        sampleRate: 'Continuous',
        influence: '∞'
      }
    },
    architecture: {
      id: 'architecture',
      label: 'Architecture',
      type: 'input',
      description: 'Structural thinking, spatial design, IIT training',
      dependencies: ['Mies van der Rohe', 'Rem Koolhaas', 'Zaha Hadid', 'IIT'],
      quote: '"I\'m an architect who happens to make clothes."',
      metrics: {
        foundation: 'Solid',
        load: 'Distributed',
        scale: 'Infinite'
      }
    },
    youth: {
      id: 'youth',
      label: 'Youth Culture',
      type: 'input',
      description: 'The 17-year-old consumer, emerging trends',
      dependencies: ['TikTok', 'Gaming', 'Memes', 'Discord'],
      quote: '"I design for the 17-year-old version of myself."',
      metrics: {
        attention: '8 seconds',
        refresh: 'Constant',
        truth: 'Unfiltered'
      }
    }
  },

  // PROCESS LAYER - The Transforms
  processes: {
    threePercent: {
      id: 'three-percent',
      label: 'The 3% Rule',
      type: 'process',
      description: 'Minimal intervention. Maximum impact. Change only 3%.',
      algorithm: 'transform(input) → input * 0.97 + signature * 0.03',
      quote: '"If you change 3% of something, it becomes something new."',
      metrics: {
        intervention: '3%',
        preservation: '97%',
        originality: 'Contextual'
      }
    },
    quotation: {
      id: 'quotation',
      label: '"Everything in Quotes"',
      type: 'process',
      description: 'Explicit referencing. Nothing is original, everything is imported.',
      algorithm: 'import { reference } from "culture"',
      quote: '"Putting something in quotes makes you acknowledge where it came from."',
      metrics: {
        transparency: '100%',
        attribution: 'Always',
        honesty: 'Radical'
      }
    },
    remix: {
      id: 'remix',
      label: 'Sampling & Remix',
      type: 'process',
      description: 'DJ methodology applied to design. Layer, loop, transform.',
      algorithm: 'sample(a) + sample(b) → new_context',
      quote: '"I\'m a DJ. I take things and put them in a different context."',
      metrics: {
        sources: 'Multiple',
        blend: 'Seamless',
        credit: 'Due'
      }
    },
    tourist: {
      id: 'tourist',
      label: 'Tourist Mode',
      type: 'process',
      description: 'Outsider perspective. Fresh eyes on established fields.',
      algorithm: 'perspective = outsider ? fresh : stale',
      quote: '"A tourist is able to look at something with fresh, curious eyes."',
      metrics: {
        experience: 'None required',
        curiosity: 'Maximum',
        permission: 'Self-granted'
      }
    }
  },

  // OUTPUT LAYER - The Artifacts
  outputs: {
    garment: {
      id: 'garment',
      label: 'Garments',
      type: 'output',
      description: 'Off-White, Louis Vuitton, Nike collaborations',
      artifacts: ['Industrial Belt', 'The Ten', 'LV SS19', 'Meteor Shower'],
      quote: '"A hoodie is a modern suit."',
      metrics: {
        dropFrequency: 'Seasonal+',
        resaleMultiplier: '3-10x',
        cultural_impact: 'Measured in memes'
      }
    },
    show: {
      id: 'show',
      label: 'Shows & Installations',
      type: 'output',
      description: 'Runway as performance, space as medium',
      artifacts: ['LV SS19 Rainbow', 'MCA Chicago', 'Figures of Speech'],
      quote: '"The show is the art. The clothes are merchandise."',
      metrics: {
        attendance: 'Global (streamed)',
        duration: 'Eternal (archived)',
        emotion: 'Required'
      }
    },
    object: {
      id: 'object',
      label: 'Objects & Furniture',
      type: 'output',
      description: 'IKEA, Vitra, gallery pieces',
      artifacts: ['MARKERAD', 'Efflorescence', 'Alaska Chair'],
      quote: '"Design is about access."',
      metrics: {
        accessibility: 'IKEA = High',
        price_range: '$10 - $100,000',
        function: 'Secondary'
      }
    },
    discourse: {
      id: 'discourse',
      label: 'Discourse',
      type: 'output',
      description: 'Lectures, interviews, the conversation itself',
      artifacts: ['Harvard GSD talks', 'Instagram as portfolio', 'This archive'],
      quote: '"Free game."',
      metrics: {
        transparency: 'Open source',
        audience: 'Next generation',
        format: 'Shareable'
      }
    }
  },

  // SYSTEM COMPONENTS - SRE Concepts
  system: {
    loadBalancer: {
      id: 'load-balancer',
      label: 'Cultural Load Balancer',
      type: 'system',
      description: 'Distributes influence across multiple cultural streams',
      quote: '"You can\'t be one thing. The minute you\'re one thing, you\'re dated."',
      metrics: {
        streams: 5,
        distribution: 'Dynamic',
        failover: 'Automatic'
      }
    },
    cache: {
      id: 'cache',
      label: 'Reference Cache',
      type: 'system',
      description: 'Hot: current trends. Cold: deep archive pulls.',
      quote: '"Taste is the accumulation of references."',
      metrics: {
        hot: 'Recent 2 years',
        warm: '5-20 years',
        cold: '20+ years (valuable)'
      }
    },
    slo: {
      id: 'slo',
      label: 'SLO: Serve the Youth',
      type: 'system',
      description: 'Primary objective. All metrics trace back here.',
      quote: '"Everything I do is for the 17-year-old."',
      metrics: {
        objective: 'Inspire next gen',
        indicator: 'Cultural relevance',
        threshold: '∞'
      }
    },
    observability: {
      id: 'observability',
      label: 'Observability',
      type: 'system',
      description: 'How we measure cultural impact',
      quote: '"Instagram is my portfolio."',
      metrics: {
        engagement: 'Social metrics',
        resale: 'StockX/Grailed',
        citation: 'References by others',
        influence_latency: 'Trend → Adoption time'
      }
    }
  }
};

export const initialNodes = [
  // Input layer (left)
  { id: 'archive', type: 'customNode', position: { x: 50, y: 50 }, data: { ...nodeData.inputs.archive, layer: 'input' } },
  { id: 'street', type: 'customNode', position: { x: 50, y: 200 }, data: { ...nodeData.inputs.street, layer: 'input' } },
  { id: 'music', type: 'customNode', position: { x: 50, y: 350 }, data: { ...nodeData.inputs.music, layer: 'input' } },
  { id: 'architecture', type: 'customNode', position: { x: 50, y: 500 }, data: { ...nodeData.inputs.architecture, layer: 'input' } },
  { id: 'youth', type: 'customNode', position: { x: 50, y: 650 }, data: { ...nodeData.inputs.youth, layer: 'input' } },

  // Process layer (center)
  { id: 'three-percent', type: 'customNode', position: { x: 400, y: 100 }, data: { ...nodeData.processes.threePercent, layer: 'process' } },
  { id: 'quotation', type: 'customNode', position: { x: 400, y: 250 }, data: { ...nodeData.processes.quotation, layer: 'process' } },
  { id: 'remix', type: 'customNode', position: { x: 400, y: 400 }, data: { ...nodeData.processes.remix, layer: 'process' } },
  { id: 'tourist', type: 'customNode', position: { x: 400, y: 550 }, data: { ...nodeData.processes.tourist, layer: 'process' } },

  // Output layer (right)
  { id: 'garment', type: 'customNode', position: { x: 750, y: 50 }, data: { ...nodeData.outputs.garment, layer: 'output' } },
  { id: 'show', type: 'customNode', position: { x: 750, y: 200 }, data: { ...nodeData.outputs.show, layer: 'output' } },
  { id: 'object', type: 'customNode', position: { x: 750, y: 350 }, data: { ...nodeData.outputs.object, layer: 'output' } },
  { id: 'discourse', type: 'customNode', position: { x: 750, y: 500 }, data: { ...nodeData.outputs.discourse, layer: 'output' } },

  // System layer (bottom)
  { id: 'load-balancer', type: 'customNode', position: { x: 100, y: 850 }, data: { ...nodeData.system.loadBalancer, layer: 'system' } },
  { id: 'cache', type: 'customNode', position: { x: 350, y: 850 }, data: { ...nodeData.system.cache, layer: 'system' } },
  { id: 'slo', type: 'customNode', position: { x: 600, y: 850 }, data: { ...nodeData.system.slo, layer: 'system' } },
  { id: 'observability', type: 'customNode', position: { x: 850, y: 850 }, data: { ...nodeData.system.observability, layer: 'system' } },
];

export const initialEdges = [
  // Inputs → Processes
  { id: 'e-archive-3p', source: 'archive', target: 'three-percent', animated: true, style: { stroke: '#3b82f6' } },
  { id: 'e-archive-quote', source: 'archive', target: 'quotation', animated: true, style: { stroke: '#3b82f6' } },
  { id: 'e-street-remix', source: 'street', target: 'remix', animated: true, style: { stroke: '#3b82f6' } },
  { id: 'e-street-3p', source: 'street', target: 'three-percent', animated: true, style: { stroke: '#3b82f6' } },
  { id: 'e-music-remix', source: 'music', target: 'remix', animated: true, style: { stroke: '#3b82f6' } },
  { id: 'e-arch-tourist', source: 'architecture', target: 'tourist', animated: true, style: { stroke: '#3b82f6' } },
  { id: 'e-youth-slo', source: 'youth', target: 'slo', animated: true, style: { stroke: '#3b82f6' } },

  // Processes → Outputs
  { id: 'e-3p-garment', source: 'three-percent', target: 'garment', animated: true, style: { stroke: '#f7c948' } },
  { id: 'e-quote-garment', source: 'quotation', target: 'garment', animated: true, style: { stroke: '#f7c948' } },
  { id: 'e-remix-show', source: 'remix', target: 'show', animated: true, style: { stroke: '#f7c948' } },
  { id: 'e-tourist-object', source: 'tourist', target: 'object', animated: true, style: { stroke: '#f7c948' } },
  { id: 'e-quote-discourse', source: 'quotation', target: 'discourse', animated: true, style: { stroke: '#f7c948' } },
  { id: 'e-3p-object', source: 'three-percent', target: 'object', animated: true, style: { stroke: '#f7c948' } },

  // System connections
  { id: 'e-lb-inputs', source: 'load-balancer', target: 'archive', type: 'smoothstep', style: { stroke: '#71717a', strokeDasharray: '5,5' } },
  { id: 'e-cache-process', source: 'cache', target: 'quotation', type: 'smoothstep', style: { stroke: '#71717a', strokeDasharray: '5,5' } },
  { id: 'e-slo-output', source: 'slo', target: 'garment', type: 'smoothstep', style: { stroke: '#71717a', strokeDasharray: '5,5' } },
  { id: 'e-obs-output', source: 'observability', target: 'discourse', type: 'smoothstep', style: { stroke: '#71717a', strokeDasharray: '5,5' } },
];
