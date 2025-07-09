export interface Customer {
    id: string;
    name: string;
    identity_card: string;
    phone_number: string | null;
    partner_number: string | null;
    voter: boolean;
}
