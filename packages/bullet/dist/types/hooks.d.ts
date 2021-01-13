/// <reference types="react" />
import { Datum, CommonBulletProps } from './types';
export declare const useEnhancedData: (data: Datum[], { layout, reverse, height, width, }: Pick<CommonBulletProps, 'layout' | 'reverse' | 'height' | 'width'>) => {
    scale: import("d3-scale").ScaleLinear<number, number, never>;
    id: import("./types").DatumId;
    title?: import("react").ReactNode;
    ranges: number[];
    measures: number[];
    markers?: number[] | undefined;
}[];
//# sourceMappingURL=hooks.d.ts.map