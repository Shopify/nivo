import { OrdinalColorScaleConfig } from '@nivo/colors';
import { SunburstLayerId } from './types';
export declare const defaultProps: {
    id: string;
    value: string;
    cornerRadius: number;
    layers: SunburstLayerId[];
    colors: OrdinalColorScaleConfig<any>;
    borderWidth: number;
    borderColor: string;
    childColor: {
        from: string;
    };
    role: string;
    enableSliceLabels: boolean;
    sliceLabel: string;
    sliceLabelsSkipAngle: number;
    sliceLabelsTextColor: {
        theme: string;
    };
    isInteractive: boolean;
    animate: boolean;
    motionConfig: string;
    defs: never[];
    fill: never[];
    tooltip: <RawDatum>({ color, id, formattedValue, }: import("./types").NormalizedDatum<RawDatum>) => JSX.Element;
};
//# sourceMappingURL=props.d.ts.map