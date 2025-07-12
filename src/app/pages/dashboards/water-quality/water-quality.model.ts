export interface WaterQuality {
    id: string;
    reference: string;
    analysis: WaterAnalysis[];
}

export interface WaterAnalysis {
    name: String,
    required: String,
    analyzed: String,
    conformity: String,
}

export interface WaterParam {
    name: String
}
