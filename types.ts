
export interface Asset {
  id: string;
  type: 'image' | 'text' | 'json' | 'video';
  content: string;
  prompt: string;
  timestamp: number;
  description?: string;
  isSecret?: boolean;
}

export interface EnhancementOption {
  id: string;
  label: string;
  description: string;
  value: string;
  technicalDirective?: string; // Specific instruction for the model
}

export interface StyleManifesto {
  id: string;
  name: string;
  icon: string;
  philosophy: string;
  technicalRules: string[];
  options: EnhancementOption[];
  isSecret?: boolean;
}

export interface GenerationState {
  isGenerating: boolean;
  message: string;
}

export interface Suggestion {
  text: string;
  category: string;
}

export interface PromptTemplate {
  title: string;
  prompt: string;
  enhancements: string[];
  isSecret?: boolean;
  type?: 'image' | 'video';
  manifestoId: string;
}
