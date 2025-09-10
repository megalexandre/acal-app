export interface WaterMeter {
    id: string;
    reference: string;
    linkId: string;
    start: Date;
    end: Date,
    value: Number,
    freeTier: Number
}