
import React, { useState, useRef, useMemo, useEffect } from 'react';
import { Asset, StyleManifesto, GenerationState, Suggestion, PromptTemplate } from './types';
import { STYLE_MANIFESTOS, LOADING_MESSAGES, PROMPT_TEMPLATES } from './constants';
import { generateImage, generateVideo, elaboratePrompt, generateCreativeText, getSuggestions, refineNarrative, analyzeAsset } from './services/geminiService';

const Oscilloscope: React.FC<{ weights: any, secretMode: boolean }> = ({ weights, secretMode }) => {
  const points = 40;
  const path = useMemo(() => {
    return Array.from({ length: points }).map((_, i) => {
      const x = (i / (points - 1)) * 100;
      const freq = weights.distortion * 2.8;
      const amp = (weights.prestige + weights.technicalPolish) * 6.5;
      const y = 50 + Math.sin((x / 10) * freq) * amp + Math.cos((x / 4) * weights.materialDepth) * 4;
      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');
  }, [weights]);

  return (
    <div className="w-full h-24 bg-black/50 rounded-xl border border-zinc-900/50 mb-8 flex items-center justify-center relative overflow-hidden group">
      <div className="scanning-line opacity-10"></div>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
        <path d={path} fill="none" stroke={secretMode ? '#d946ef' : '#22d3ee'} strokeWidth="0.8" className="opacity-80 transition-all duration-500" />
      </svg>
      <div className="absolute top-2 left-3 text-[7px] font-mono text-zinc-700 tracking-[0.4em] uppercase">NEURAL_OSCILLATION // ACTIVE_STREAM</div>
      <div className="absolute bottom-2 right-3 text-[6px] font-mono text-zinc-800 tracking-tighter">FREQ: {(weights.distortion * 440).toFixed(0)}Hz // AMP: {(weights.prestige * 10).toFixed(1)}dB</div>
    </div>
  );
};

const App: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [activeEnhancementValues, setActiveEnhancementValues] = useState<string[]>([]);
  const [assets, setAssets] = useState<Asset[]>([]);
  const [genState, setGenState] = useState<GenerationState>({ isGenerating: false, message: '' });
  const [activeManifestoId, setActiveManifestoId] = useState<string>(STYLE_MANIFESTOS[0].id);
  const [showTemplates, setShowTemplates] = useState(false);
  const [hasApiKey, setHasApiKey] = useState(false);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [isSuggesting, setIsSuggesting] = useState(false);
  const [isRefining, setIsRefining] = useState(false);
  const [analyzingId, setAnalyzingId] = useState<string | null>(null);
  
  const [weights, setWeights] = useState({ prestige: 1.0, distortion: 1.0, atmosphere: 1.0, technicalPolish: 1.0, materialDepth: 1.0 });
  const [secretMode, setSecretMode] = useState(false);
  const [ritualClicks, setRitualClicks] = useState(0);
  
  const loadingIntervalRef = useRef<number | null>(null);
  const suggestionTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const checkKey = async () => {
      if (window.aistudio?.hasSelectedApiKey) {
        const selected = await window.aistudio.hasSelectedApiKey();
        setHasApiKey(selected);
      }
    };
    checkKey();
  }, []);

  const activeManifestos = useMemo(() => {
    return STYLE_MANIFESTOS.filter(m => 
      m.options.some(opt => activeEnhancementValues.includes(opt.value)) || m.id === activeManifestoId
    );
  }, [activeEnhancementValues, activeManifestoId]);

  const fullPrompt = useMemo(() => {
    let result = prompt;
    if (activeEnhancementValues.length > 0) result += `, ${activeEnhancementValues.join(', ')}`;
    Object.entries(weights).forEach(([key, val]) => {
      if (val > 1.0) result += `, (${key}:${val.toFixed(2)})`;
    });
    return result;
  }, [prompt, activeEnhancementValues, weights]);

  useEffect(() => {
    if (prompt.length < 5) return;
    if (suggestionTimeoutRef.current) window.clearTimeout(suggestionTimeoutRef.current);
    suggestionTimeoutRef.current = window.setTimeout(async () => {
      setIsSuggesting(true);
      const res = await getSuggestions(fullPrompt, activeManifestos, secretMode);
      setSuggestions(res);
      setIsSuggesting(false);
    }, 1200);
  }, [prompt, activeEnhancementValues, secretMode, fullPrompt, activeManifestos]);

  const handleSelectKey = async () => {
    if (window.aistudio?.openSelectKey) {
      await window.aistudio.openSelectKey();
      setHasApiKey(true);
    }
  };

  const startGenerating = (message: string) => {
    setGenState({ isGenerating: true, message });
    let i = 0;
    loadingIntervalRef.current = window.setInterval(() => {
      i = (i + 1) % LOADING_MESSAGES.length;
      setGenState(prev => ({ ...prev, message: LOADING_MESSAGES[i] }));
    }, 3000);
  };

  const stopGenerating = () => {
    setGenState({ isGenerating: false, message: '' });
    if (loadingIntervalRef.current) clearInterval(loadingIntervalRef.current);
  };

  const handleGenerateQuad = async () => {
    if (!prompt.trim() || genState.isGenerating) return;
    if (!hasApiKey) { handleSelectKey(); return; }
    startGenerating("Reading Manifestos...");
    try {
      const betterPrompt = await elaboratePrompt(fullPrompt, activeManifestos, secretMode);
      const results = await Promise.all(Array(4).fill(null).map(() => generateImage(betterPrompt)));
      const newAssets: Asset[] = results.filter((url): url is string => url !== null).map((imageUrl) => ({ id: Math.random().toString(36).substr(2, 9), type: 'image', content: imageUrl, prompt: betterPrompt, timestamp: Date.now(), isSecret: secretMode }));
      setAssets(prev => [...newAssets, ...prev]);
    } catch (error) {
      if (error instanceof Error && error.message === "KEY_REQUIRED") setHasApiKey(false);
    } finally { stopGenerating(); }
  };

  const handleGenerateVideo = async () => {
    if (!prompt.trim() || genState.isGenerating) return;
    if (!hasApiKey) { handleSelectKey(); return; }
    startGenerating("Directing Cinematic Sequence...");
    try {
      const betterPrompt = await elaboratePrompt(fullPrompt, activeManifestos, secretMode);
      const videoUrl = await generateVideo(betterPrompt);
      if (videoUrl) {
        setAssets(prev => [{ id: Math.random().toString(36).substr(2, 9), type: 'video', content: videoUrl, prompt: betterPrompt, timestamp: Date.now(), isSecret: secretMode }, ...prev]);
      }
    } catch (e) { console.error(e); } finally { stopGenerating(); }
  };

  const handleGenerateText = async () => {
    if (!prompt.trim() || genState.isGenerating) return;
    startGenerating("Weaving Narrative...");
    const creativeText = await generateCreativeText(fullPrompt);
    if (creativeText) {
      setAssets(prev => [{ id: Math.random().toString(36).substr(2, 9), type: 'text', content: creativeText, prompt: fullPrompt, timestamp: Date.now(), isSecret: secretMode }, ...prev]);
    }
    stopGenerating();
  };

  const handleStoryboard = async () => {
    if (!prompt.trim() || genState.isGenerating) return;
    if (!hasApiKey) { handleSelectKey(); return; }
    startGenerating("Building Asset Collective...");
    try {
      const blueprint = await elaboratePrompt(fullPrompt, activeManifestos, secretMode);
      
      // Storyboarding specific sequence for consistency
      const prompts = [
        `Establishing exterior shot, architectural masterpiece facade: ${blueprint}`,
        `Intimate interior sanctum, high-fashion editorial composition: ${blueprint}`,
        `Character portrait, signature features, supernatural presence: ${blueprint}`,
      ];

      const [images, text] = await Promise.all([
        Promise.all(prompts.map(p => generateImage(p))),
        generateCreativeText(blueprint)
      ]);

      const newAssets: Asset[] = images.filter((url): url is string => url !== null).map((url, i) => ({
        id: `sb-${i}-${Date.now()}`,
        type: 'image',
        content: url,
        prompt: prompts[i],
        timestamp: Date.now(),
        description: `STORYBOARD_STEP_${i+1}: ${['EXTERIOR', 'INTERIOR', 'CHARACTER'][i]}`
      }));

      if (text) {
        newAssets.push({
          id: `sb-text-${Date.now()}`,
          type: 'text',
          content: text,
          prompt: blueprint,
          timestamp: Date.now(),
          description: "STORYBOARD_NARRATIVE_FRAGMENT"
        });
      }

      setAssets(prev => [...newAssets, ...prev]);
    } catch (e) { console.error(e); } finally { stopGenerating(); }
  };

  const handleCritique = async (asset: Asset) => {
    if (analyzingId) return;
    setAnalyzingId(asset.id);
    const critique = await analyzeAsset(asset.content);
    setAssets(prev => prev.map(a => a.id === asset.id ? { ...a, description: critique } : a));
    setAnalyzingId(null);
  };

  const handleRefine = async () => {
    if (!prompt.trim() || isRefining) return;
    setIsRefining(true);
    const refined = await refineNarrative(prompt);
    setPrompt(refined);
    setIsRefining(false);
  };

  const toggleEnhancement = (val: string) => {
    setActiveEnhancementValues(prev => prev.includes(val) ? prev.filter(e => e !== val) : [...prev, val]);
  };

  const loadTemplate = (template: PromptTemplate) => {
    setPrompt(template.prompt);
    const vals: string[] = [];
    template.enhancements.forEach(id => {
      STYLE_MANIFESTOS.forEach(m => {
        const opt = m.options.find(o => o.id === id);
        if (opt) vals.push(opt.value);
      });
    });
    setActiveEnhancementValues(vals);
    setShowTemplates(false);
  };

  const addSuggestion = (text: string) => {
    setPrompt(prev => prev.trim() + (prev ? ', ' : '') + text);
    setSuggestions(prev => prev.filter(s => s.text !== text));
  };

  const filteredCategories = STYLE_MANIFESTOS.filter(m => !m.isSecret || secretMode);
  const activeManifesto = STYLE_MANIFESTOS.find(m => m.id === activeManifestoId);

  return (
    <div className="flex flex-col h-screen max-h-screen overflow-hidden text-zinc-300 font-sans selection:bg-cyan-500/30">
      {/* Editorial Header */}
      <header className="px-10 py-6 border-b border-zinc-900 bg-[#08080a] flex items-center justify-between z-50">
        <div className="flex items-center gap-6">
          <button 
            onClick={() => { setRitualClicks(c => c + 1); if(ritualClicks >= 6) setSecretMode(true); }}
            className={`w-14 h-14 machined-btn rounded-xl flex items-center justify-center border border-zinc-800/50 shadow-2xl group transition-all duration-700 ${secretMode ? 'ring-1 ring-fuchsia-500/50 shadow-fuchsia-500/20' : ''}`}
          >
             <span className={`text-2xl font-black italic tracking-tighter ${secretMode ? 'text-fuchsia-500 animate-pulse' : 'text-cyan-500'} group-hover:scale-110 transition-transform`}>W</span>
          </button>
          <div className="flex flex-col">
            <h1 className="text-xl font-black tracking-[-0.05em] uppercase text-zinc-100 italic">wwwrong</h1>
            <p className="text-[8px] font-bold uppercase tracking-[0.6em] text-zinc-600">Technical Middleware // Architecture Suite</p>
          </div>
        </div>
        
        <div className="flex gap-3">
          <button onClick={() => setShowTemplates(!showTemplates)} className="px-5 py-2 machined-btn text-[9px] font-black uppercase tracking-[0.2em] rounded-lg text-zinc-500 hover:text-zinc-200">The Archives</button>
          <button onClick={handleStoryboard} disabled={genState.isGenerating} className={`px-5 py-2 machined-btn text-[9px] font-black uppercase tracking-[0.2em] rounded-lg text-zinc-500 hover:text-zinc-200 ${genState.isGenerating ? 'opacity-50 cursor-not-allowed' : ''}`}>Storyboard</button>
          <div className="w-[1px] h-8 bg-zinc-800 mx-2"></div>
          <button onClick={handleGenerateVideo} disabled={genState.isGenerating} className="px-8 py-2 machined-btn text-[9px] font-black uppercase tracking-[0.3em] rounded-lg bg-indigo-950/20 text-indigo-400 border-indigo-500/10 hover:bg-indigo-900/40">Animate</button>
          <button onClick={handleGenerateQuad} disabled={genState.isGenerating} className={`px-8 py-2 machined-btn text-[9px] font-black uppercase tracking-[0.3em] rounded-lg ${secretMode ? 'text-fuchsia-400 bg-fuchsia-950/20 border-fuchsia-500/10' : 'text-cyan-400 bg-cyan-950/20 border-cyan-500/10'} hover:opacity-80`}>Materialize</button>
        </div>
      </header>

      <main className="flex-1 flex overflow-hidden">
        {/* Module Sidebar */}
        <aside className="w-80 h-full border-r border-zinc-900 bg-[#08080a]/80 overflow-y-auto flex flex-col no-scrollbar">
          <div className="p-8">
            <h2 className="text-[9px] font-black text-zinc-700 uppercase tracking-[0.5em] mb-8">System_Specimen_Nodes</h2>
            
            <Oscilloscope weights={weights} secretMode={secretMode} />

            <div className="grid grid-cols-4 gap-4 mb-10">
              {filteredCategories.map(cat => {
                const isActive = activeEnhancementValues.some(val => cat.options.some(opt => opt.value === val));
                const isSelected = activeManifestoId === cat.id;
                return (
                  <button 
                    key={cat.id} 
                    onClick={() => setActiveManifestoId(cat.id)} 
                    className={`relative w-full aspect-square rounded-xl machined-btn flex flex-col items-center justify-center transition-all ${isSelected ? 'ring-1 ring-cyan-500/50 scale-105 active-module-glow' : 'opacity-40 hover:opacity-100'} ${isActive ? 'bg-cyan-950/10 border-cyan-500/20 opacity-100' : ''}`}
                  >
                    <span className={`text-[11px] font-mono font-black tracking-tighter text-zinc-100 relative z-10 ${isActive ? 'animate-pulse' : ''}`}>{cat.icon}</span>
                    <span className="text-[6px] font-mono text-zinc-700 absolute bottom-2 tracking-widest">{cat.id.substring(0,4).toUpperCase()}</span>
                    {isActive && <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_12px_rgba(34,211,238,1)]"></div>}
                  </button>
                );
              })}
            </div>
            
            {activeManifesto && (
              <div className="animate-in fade-in slide-in-from-left-4 duration-500">
                <div className="mb-8 p-6 bg-zinc-900/10 rounded-2xl border border-zinc-800/20 relative group">
                  <div className="scanning-line opacity-20 group-hover:opacity-100 transition-opacity"></div>
                  <h3 className="text-[8px] font-black text-cyan-600 uppercase tracking-[0.3em] mb-4">Architectural_Intent_{activeManifesto.icon}</h3>
                  <p className="text-[10px] text-zinc-500 font-medium leading-relaxed italic uppercase tracking-tighter">
                    {activeManifesto.philosophy}
                  </p>
                </div>
                <div className="space-y-3">
                  {activeManifesto.options.map(opt => {
                    const active = activeEnhancementValues.includes(opt.value);
                    return (
                      <button 
                        key={opt.id} 
                        onClick={() => toggleEnhancement(opt.value)} 
                        className={`w-full text-left p-5 rounded-xl border transition-all machined-btn relative overflow-hidden group/opt ${active ? 'border-cyan-500/30 bg-cyan-950/10 shadow-[0_0_20px_rgba(34,211,238,0.05)]' : 'border-zinc-800/40 opacity-70 hover:opacity-100'}`}
                      >
                        {active && <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500/50"></div>}
                        <div className={`font-black text-[10px] uppercase tracking-widest ${active ? 'text-cyan-400' : 'text-zinc-500 group-hover/opt:text-zinc-300'}`}>{opt.label}</div>
                        <div className="text-[9px] text-zinc-700 mt-1 uppercase tracking-tight line-clamp-2">{opt.description}</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* Central Vision Field */}
        <div className="flex-1 flex flex-col overflow-hidden relative bg-[#050505]">
          {/* Data Stream Ribbon */}
          <div className="h-6 bg-zinc-950 border-b border-zinc-900 flex items-center overflow-hidden">
             <div className="data-stream-text flex gap-8 text-[8px] font-mono text-zinc-800 uppercase tracking-[0.4em]">
                {STYLE_MANIFESTOS.map(m => (
                  <span key={m.id} className={activeManifestoId === m.id ? 'text-cyan-900' : ''}>
                    SYS_SPECIMEN_{m.icon} // MODULE_{m.name.toUpperCase().replace(/\s+/g, '_')} // READY // PARSING_TECHNICAL_RULES //
                  </span>
                ))}
                {STYLE_MANIFESTOS.map(m => (
                  <span key={m.id+'_2'} className={activeManifestoId === m.id ? 'text-cyan-900' : ''}>
                    SYS_SPECIMEN_{m.icon} // MODULE_{m.name.toUpperCase().replace(/\s+/g, '_')} // READY // PARSING_TECHNICAL_RULES //
                  </span>
                ))}
             </div>
          </div>

          {showTemplates && (
            <div className="absolute inset-0 z-40 bg-[#050505]/95 backdrop-blur-3xl p-16 overflow-y-auto no-scrollbar">
              <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-16">
                  <h2 className="text-4xl font-black uppercase italic tracking-tighter text-zinc-100">Project Archives</h2>
                  <button onClick={() => setShowTemplates(false)} className="w-12 h-12 machined-btn rounded-full flex items-center justify-center text-xl">&times;</button>
                </div>

                <div className="mb-16 p-12 machined-btn rounded-[3rem] border border-zinc-800/40 relative overflow-hidden group">
                  <div className="scanning-line opacity-10"></div>
                  <h3 className="text-[9px] font-black uppercase tracking-[0.5em] text-cyan-500 mb-8">The "wwwrong" Theory</h3>
                  <p className="text-3xl font-light text-zinc-200 leading-tight italic mb-10">
                    "AI democratized the engine, not the expertise. We architect technical truths. We build blueprints."
                  </p>
                  <div className="grid grid-cols-3 gap-12 border-t border-zinc-800/40 pt-10">
                    {['Material_Physics', 'Optical_Rigor', 'Neuro_Aesthetics'].map((item, i) => (
                      <div key={i}>
                        <h4 className="text-[9px] font-black uppercase text-zinc-700 mb-2">{item}</h4>
                        <p className="text-[10px] text-zinc-600 uppercase tracking-tighter">Enforced studio rules across the latent spectrum.</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8 pb-20">
                  {PROMPT_TEMPLATES.map((t, idx) => (
                    <div key={idx} onClick={() => loadTemplate(t)} className="p-8 machined-btn border border-zinc-800/40 rounded-3xl cursor-pointer group hover:border-cyan-500/20">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-black text-lg uppercase tracking-tight group-hover:text-cyan-400 transition-colors">{t.title}</h3>
                        <span className="text-[8px] font-bold px-2 py-1 rounded-md uppercase tracking-widest bg-zinc-900 text-zinc-600">{t.type}</span>
                      </div>
                      <p className="text-[10px] text-zinc-500 italic uppercase tracking-tight line-clamp-2">"{t.prompt}"</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="p-12 max-w-4xl mx-auto w-full flex-1 flex flex-col overflow-hidden">
            <div className="mb-12 flex-shrink-0">
              <div className="flex justify-between items-center mb-6">
                 <label className="text-[9px] font-black uppercase tracking-[0.6em] text-zinc-700 font-mono">VISION_BLUEPRINT // INPUT_STREAM</label>
                 <div className="flex gap-2">
                    <button onClick={handleRefine} disabled={isRefining} className="px-4 py-2 machined-btn text-[9px] font-black uppercase tracking-widest rounded-lg text-zinc-500 hover:text-cyan-500 transition-colors">Audit_Prompt</button>
                    <button onClick={handleGenerateText} className="px-4 py-2 machined-btn text-[9px] font-black uppercase tracking-widest rounded-lg text-zinc-500 hover:text-indigo-400 transition-colors">Gen_Dossier</button>
                 </div>
              </div>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="DEFINE_LATENT_TRAJECTORY..."
                className="w-full bg-transparent text-5xl font-extralight text-zinc-100 placeholder-zinc-900 border-none outline-none focus:ring-0 resize-none min-h-[160px] tracking-tighter leading-[1.1] font-sans"
              />
              <div className="flex flex-wrap gap-2 mt-8 min-h-[40px]">
                {suggestions.map((s, i) => (
                  <button key={i} onClick={() => addSuggestion(s.text)} className="px-4 py-2 machined-btn rounded-lg text-[9px] font-black uppercase tracking-widest text-zinc-600 hover:text-cyan-400 transition-all hover:scale-105">
                    <span className="opacity-30 mr-2">[{s.category}]</span> {s.text}
                  </button>
                ))}
                {isSuggesting && <div className="w-4 h-4 border-2 border-cyan-500/10 border-t-cyan-500 rounded-full animate-spin ml-4 self-center"></div>}
              </div>
            </div>

            {/* Asset Dossier Gallery */}
            <div className="flex-1 overflow-y-auto space-y-16 pb-40 no-scrollbar">
              {genState.isGenerating && (
                <div className="aspect-video machined-btn rounded-[3rem] border border-zinc-800/30 flex items-center justify-center flex-col gap-6 animate-pulse relative overflow-hidden">
                  <div className="scanning-line opacity-30"></div>
                  <div className={`w-14 h-14 border-t-2 ${secretMode ? 'border-fuchsia-500' : 'border-cyan-500'} rounded-full animate-spin shadow-[0_0_20px_rgba(34,211,238,0.2)]`}></div>
                  <p className="text-zinc-700 text-[10px] uppercase font-black tracking-[0.5em]">{genState.message}</p>
                </div>
              )}
              {assets.map((asset) => (
                <div key={asset.id} className="group relative animate-in fade-in slide-in-from-bottom-12 duration-[800ms] ease-out">
                  {asset.type === 'image' ? (
                    <div className="space-y-8">
                      <div className="relative overflow-hidden rounded-[3rem] machined-btn border border-zinc-900/40 p-1">
                        <div className="absolute inset-0 coded-border pointer-events-none"></div>
                        <img src={asset.content} className="w-full h-full object-cover rounded-[2.9rem] group-hover:scale-[1.02] transition-transform duration-[2500ms] ease-out" />
                        
                        <div className="absolute top-8 left-8 p-3 bg-black/60 backdrop-blur-md rounded-xl border border-white/5 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
                           <div className="text-[8px] font-mono text-cyan-500 uppercase tracking-widest mb-1">Dossier ID</div>
                           <div className="text-[9px] font-mono text-zinc-300">#{asset.id.toUpperCase()}</div>
                        </div>

                        <div className="absolute top-8 right-8 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                          <button onClick={() => handleCritique(asset)} className="px-6 py-3 bg-black/80 backdrop-blur-xl text-[9px] font-black uppercase tracking-widest rounded-xl hover:text-cyan-400 transition-colors border border-white/5 shadow-2xl">
                            {analyzingId === asset.id ? 'ANALYTIC_AUDIT...' : 'TECHNICAL_CRITIQUE'}
                          </button>
                        </div>
                      </div>
                      
                      {asset.description && (
                        <div className="p-12 machined-btn rounded-[2.5rem] border border-zinc-800/20 text-[11px] font-mono text-zinc-500 leading-relaxed uppercase tracking-tighter relative overflow-hidden">
                          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none text-4xl font-black italic">AUDIT</div>
                          <div className="text-cyan-700 font-black mb-6 tracking-[0.6em] text-[9px]">TECHNICAL_STUDIO_LOG // ANALYZED</div>
                          <div className="max-w-2xl">{asset.description}</div>
                        </div>
                      )}
                    </div>
                  ) : asset.type === 'video' ? (
                    <div className="rounded-[3rem] overflow-hidden machined-btn border border-zinc-900/40 p-1 relative">
                      <div className="absolute inset-0 coded-border pointer-events-none"></div>
                      <video src={asset.content} controls className="w-full h-full rounded-[2.9rem]" autoPlay loop muted />
                    </div>
                  ) : (
                    <div className="p-16 machined-btn rounded-[3rem] border border-zinc-800/40 italic text-3xl font-light text-zinc-300 leading-relaxed relative group/text uppercase tracking-tight">
                       <div className="absolute top-4 left-6 text-[8px] font-mono text-zinc-800 tracking-[0.4em]">FRAGMENT_SOURCE</div>
                       "{asset.content}"
                       <div className="absolute bottom-8 right-10 text-[8px] font-mono text-zinc-800 opacity-0 group-hover/text:opacity-100 transition-opacity uppercase tracking-[0.5em]">Neuro-Narrative Module // v.31</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Neural Parameters aside */}
        <aside className="w-80 h-full border-l border-zinc-900 bg-[#08080a]/80 p-10 overflow-y-auto no-scrollbar flex flex-col">
           <div className="flex-1">
             <h2 className="text-[9px] font-black text-zinc-700 uppercase tracking-[0.6em] mb-12">Neural_Balance_Matrix</h2>
             <div className="space-y-12">
               {Object.entries(weights).map(([key, val]) => (
                  <div key={key} className="space-y-4">
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-600 font-mono">
                        {key === 'prestige' ? 'PRST_01' : 
                         key === 'distortion' ? 'DSTR_02' : 
                         key === 'atmosphere' ? 'ATMS_03' : 
                         key === 'technicalPolish' ? 'PLSH_04' : 'MTRL_05'}_NODE
                      </span>
                      <span className={`text-[11px] font-black font-mono ${secretMode ? 'text-fuchsia-500' : 'text-cyan-500'}`}>{val.toFixed(2)}</span>
                    </div>
                    <input 
                      type="range" 
                      min="1" max="2" step="0.05" 
                      value={val} 
                      onChange={(e) => setWeights(prev => ({...prev, [key]: parseFloat(e.target.value)}))} 
                      className="w-full"
                    />
                  </div>
               ))}
             </div>
             
             <div className="mt-24 p-8 machined-btn rounded-2xl border border-zinc-800/20 bg-black/30 relative group">
                <div className="scanning-line opacity-5"></div>
                <h3 className="text-[8px] font-black text-zinc-800 uppercase tracking-[0.4em] mb-5">Active_Blueprints</h3>
                <div className="flex flex-wrap gap-2">
                  {activeManifestos.map(m => (
                    <span key={m.id} className="text-[9px] font-mono font-black uppercase tracking-widest px-3 py-1 bg-zinc-950 rounded-md text-zinc-600 border border-zinc-900/50">{m.icon}</span>
                  ))}
                  {activeManifestos.length === 0 && <span className="text-[9px] text-zinc-800 font-mono">STDBY_MODE</span>}
                </div>
             </div>
           </div>
           
           <div className="mt-12 text-[8px] font-mono text-zinc-800 uppercase tracking-[0.3em] leading-relaxed pt-10 border-t border-zinc-900/50">
             Precision Middleware for Technical Visionaries. <br/>
             Latent Space Architecture Suite. <br/>
             // <br/>
             Developed by wwwrong.
           </div>
        </aside>
      </main>
    </div>
  );
};

export default App;
