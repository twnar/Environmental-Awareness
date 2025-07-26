export interface ImpactData {
    title: string;
    description: string;
    statistics: {
        label: string;
        value: number;
    }[];
    callToAction: string;
}