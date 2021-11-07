export enum ValueType {
    Temperature,
    FrequencyPenalty,
    MaxToken
}

export default class SliderPropertyDefinition {
    minValue!: number;
    maxValue!: number;
    stepValue!: number;
    name!: string;
    value: number = 0;
    type!: ValueType;
}