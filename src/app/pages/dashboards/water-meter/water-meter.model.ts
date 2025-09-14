export interface WaterMeterPreview {
    id: string;
    reference: string;
    link_id: string;
    link_name: string;
    start: Date;
    end: Date,
    price_per_unit: number, 
    free_tier: number,
}

export interface WaterMeter {
    id: string;
    reference: string;
    link_id: string;
    link_name: string;
    start: Date;
    end: Date,
    price_per_unit: number, 
    free_tier: number,
    consumption_total: number,
    paid_usage_value: number,
    total: number,
}
