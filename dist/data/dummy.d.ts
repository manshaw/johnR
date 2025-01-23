export declare const DUMMY_DATABASE: {
    userId: string;
    profile: {
        name: string;
        designation: string;
        imageUrl: string;
    };
    summary: {
        income: {
            amount: number;
            currency: string;
            symbol: string;
            trend: {
                value: string;
                type: string;
            };
            period: {
                text: string;
                value: string;
            };
        };
        expenses: {
            amount: number;
            currency: string;
            symbol: string;
            trend: {
                value: string;
                type: string;
            };
            period: {
                text: string;
                value: string;
            };
        };
        taxes: {
            amount: number;
            currency: string;
            symbol: string;
            trend: {
                value: string;
                type: string;
            };
            period: {
                text: string;
                value: string;
            };
        };
        invoices: {
            amount: number;
            trend: {
                value: string;
                type: string;
            };
            period: {
                text: string;
                value: string;
            };
        };
    };
    graph: {
        income: {
            quaterly: {
                '1st Quarter': {
                    month: string;
                    value: number;
                }[];
            };
        };
    };
}[];
