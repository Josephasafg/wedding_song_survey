export interface Rating {
    count: number;
    average: number;
}

export interface Contributor {
    username: string;
    resource_url: string;
}

export interface ReleaseCommunity {
    status: string;
    rating: Rating;
    want: number;
    contributors: Contributor[];
    have: number;
    submitter: Contributor | null;
    data_quality: string;
}

export interface Format {
    qty: string;
    descriptions?: string[];
    name: string;
    text?: string;
}

export interface SearchResult {
    barcode: string[]
    catno: string
    community: ReleaseCommunity
    format: string[]
    format_quantity: number
    formats: Format[];
    genre: string[]
    label: string[]
    thumb: string;
    title: string;
    country: string
    uri: string;
    master_url: null;
    cover_image: string;
    resource_url: string;
    master_id: null;
    type: "release";
    id: number;
    user_data?: {
        in_collection: boolean;
        in_wantlist: boolean;
    };
}

export interface DiscogSearch {
    pagination: any
    results: SearchResult[]
}
