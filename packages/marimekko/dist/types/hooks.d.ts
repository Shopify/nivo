import { Stack, Series } from 'd3-shape';
import { ScaleLinear } from 'd3-scale';
import { InheritedColorConfig } from '@nivo/colors';
import { NormalizedDatum, ComputedDatum, DataProps, DatumPropertyAccessor, Layout, DimensionDatum, CommonProps, CustomLayerProps, BarDatum, OffsetId } from './types';
export declare const useDataDimensions: <RawDatum>(rawDimensions: {
    id: string;
    value: string | number | DatumPropertyAccessor<RawDatum, number>;
}[]) => {
    dimensionIds: string[];
    dimensions: Record<string, (datum: RawDatum) => number>;
};
export declare const useStack: <RawDatum>(dimensionIds: string[], dimensions: Record<string, (datum: RawDatum) => number>, offset: OffsetId) => Stack<any, RawDatum, string>;
export declare const useStackedData: <RawDatum>(stack: Stack<any, RawDatum, string>, data: RawDatum[]) => {
    stacked: Series<RawDatum, string>[];
    min: number;
    max: number;
};
export declare const useDimensionsScale: (min: number, max: number, width: number, height: number, layout: Layout) => ScaleLinear<number, number, never>;
export declare const useNormalizedData: <RawDatum>(data: RawDatum[], id: string | number | DatumPropertyAccessor<RawDatum, import("./types").DatumId>, value: string | number | DatumPropertyAccessor<RawDatum, number>) => NormalizedDatum<RawDatum>[];
export declare const useThicknessScale: <RawDatum>({ data, width, height, layout, outerPadding, innerPadding, }: {
    data: NormalizedDatum<RawDatum>[];
    width: number;
    height: number;
    layout: Layout;
    outerPadding: number;
    innerPadding: number;
}) => ScaleLinear<number, number, never>;
export declare const useComputedData: <RawDatum>({ data, stacked, dimensionIds, valueFormat, thicknessScale, dimensionsScale, colors, layout, outerPadding, innerPadding, }: {
    data: NormalizedDatum<RawDatum>[];
    stacked: Series<RawDatum, string>[];
    dimensionIds: string[];
    valueFormat: string | ((value: number) => string) | undefined;
    thicknessScale: ScaleLinear<number, number>;
    dimensionsScale: ScaleLinear<number, number>;
    colors: import("@nivo/colors").OrdinalColorScaleConfig<Pick<DimensionDatum<RawDatum>, "id" | "value" | "formattedValue" | "x" | "y" | "width" | "height" | "datum">>;
    layout: Layout;
    outerPadding: number;
    innerPadding: number;
}) => ComputedDatum<RawDatum>[];
export declare const useBars: <RawDatum>(data: ComputedDatum<RawDatum>[], borderColor: InheritedColorConfig<DimensionDatum<RawDatum>>, borderWidth: number) => BarDatum<RawDatum>[];
export declare const useMarimekko: <RawDatum>({ data, id, value, valueFormat, dimensions: rawDimensions, layout, offset, outerPadding, innerPadding, colors, borderColor, borderWidth, width, height, }: {
    data: RawDatum[];
    id: string | number | DatumPropertyAccessor<RawDatum, import("./types").DatumId>;
    value: string | number | DatumPropertyAccessor<RawDatum, number>;
    valueFormat: string | ((value: number) => string) | undefined;
    dimensions: {
        id: string;
        value: string | number | DatumPropertyAccessor<RawDatum, number>;
    }[];
    layout: Layout;
    offset: OffsetId;
    outerPadding: number;
    innerPadding: number;
    colors: import("@nivo/colors").OrdinalColorScaleConfig<Pick<DimensionDatum<RawDatum>, "id" | "value" | "formattedValue" | "x" | "y" | "width" | "height" | "datum">>;
    borderColor: InheritedColorConfig<DimensionDatum<RawDatum>>;
    borderWidth: number;
    width: number;
    height: number;
}) => {
    computedData: ComputedDatum<RawDatum>[];
    bars: BarDatum<RawDatum>[];
    thicknessScale: ScaleLinear<number, number, never>;
    dimensionsScale: ScaleLinear<number, number, never>;
    dimensionIds: string[];
};
export declare const useLayerContext: <RawDatum>({ data, bars, thicknessScale, dimensionsScale, }: {
    data: ComputedDatum<RawDatum>[];
    bars: BarDatum<RawDatum>[];
    thicknessScale: ScaleLinear<number, number>;
    dimensionsScale: ScaleLinear<number, number>;
}) => CustomLayerProps<RawDatum>;
export declare const useLegendData: <RawDatum>(dimensionIds: string[], bars: BarDatum<RawDatum>[]) => {
    id: string;
    label: string;
    color: string;
    fill?: string | undefined;
}[];
//# sourceMappingURL=hooks.d.ts.map