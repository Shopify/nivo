import * as React from 'react';
import { stackOffsetDiverging, stackOffsetExpand, stackOffsetNone, stackOffsetSilhouette, stackOffsetWiggle } from 'd3-shape';
import { ScaleLinear } from 'd3-scale';
import { Box, Dimensions, Theme, SvgDefsAndFill, ModernMotionProps, ValueFormat } from '@nivo/core';
import { AxisProps } from '@nivo/axes';
import { OrdinalColorScaleConfig, InheritedColorConfig } from '@nivo/colors';
import { LegendProps } from '@nivo/legends';
export declare type DatumId = string | number;
export declare type DatumValue = number;
export declare type DatumFormattedValue = string | number;
export declare type DatumPropertyAccessor<RawDatum, T> = (datum: RawDatum) => T;
export interface DataProps<RawDatum> {
    data: RawDatum[];
    id: string | number | DatumPropertyAccessor<RawDatum, DatumId>;
    value: string | number | DatumPropertyAccessor<RawDatum, DatumValue>;
    dimensions: {
        id: string;
        value: string | number | DatumPropertyAccessor<RawDatum, DatumValue>;
    }[];
    valueFormat?: ValueFormat<number>;
}
export interface NormalizedDatum<RawDatum> {
    index: number;
    id: DatumId;
    value: DatumValue;
    data: RawDatum;
}
export interface DimensionDatum<RawDatum> {
    id: string;
    value: number;
    formattedValue: string | number;
    color: string;
    x: number;
    y: number;
    width: number;
    height: number;
    datum: ComputedDatum<RawDatum>;
}
export interface ComputedDatum<RawDatum> extends NormalizedDatum<RawDatum> {
    x: number;
    y: number;
    width: number;
    height: number;
    dimensions: DimensionDatum<RawDatum>[];
}
export interface BarDatum<RawDatum> extends DimensionDatum<RawDatum> {
    key: string;
    fill?: string;
    borderColor: string;
    borderWidth: number;
}
export declare type LabelAccessorFunction<RawDatum> = (datum: ComputedDatum<RawDatum>) => string | number;
export declare type LayerId = 'grid' | 'axes' | 'bars' | 'legends';
export interface CustomLayerProps<RawDatum> {
    data: ComputedDatum<RawDatum>[];
    bars: BarDatum<RawDatum>[];
    thicknessScale: ScaleLinear<number, number>;
    dimensionsScale: ScaleLinear<number, number>;
}
export declare type CustomLayer<RawDatum> = React.FC<CustomLayerProps<RawDatum>>;
export declare type Layer<RawDatum> = LayerId | CustomLayer<RawDatum>;
export interface TooltipProps<RawDatum> {
    bar: BarDatum<RawDatum>;
}
export declare type BarTooltipType<RawDatum> = (props: TooltipProps<RawDatum>) => JSX.Element;
export declare type Layout = 'horizontal' | 'vertical';
export declare const offsetById: {
    expand: typeof stackOffsetExpand;
    diverging: typeof stackOffsetDiverging;
    none: typeof stackOffsetNone;
    silouhette: typeof stackOffsetSilhouette;
    wiggle: typeof stackOffsetWiggle;
};
export declare type OffsetId = keyof typeof offsetById;
export declare type CommonProps<RawDatum> = {
    margin: Box;
    layout: Layout;
    offset: OffsetId;
    outerPadding: number;
    innerPadding: number;
    axisTop?: AxisProps;
    axisRight?: AxisProps;
    axisBottom?: AxisProps;
    axisLeft?: AxisProps;
    enableGridX: boolean;
    gridXValues?: number[];
    enableGridY: boolean;
    gridYValues?: number[];
    colors: OrdinalColorScaleConfig<Omit<DimensionDatum<RawDatum>, 'color' | 'fill'>>;
    theme: Theme;
    borderWidth: number;
    borderColor: InheritedColorConfig<DimensionDatum<RawDatum>>;
    enableLabels: boolean;
    label: string | LabelAccessorFunction<RawDatum>;
    labelSkipWidth: number;
    labelSkipHeight: number;
    labelTextColor: InheritedColorConfig<DimensionDatum<RawDatum>>;
    isInteractive: boolean;
    tooltip: BarTooltipType<RawDatum>;
    legends: LegendProps[];
    role: string;
};
export declare type MouseEventHandler<RawDatum, ElementType> = (datum: BarDatum<RawDatum>, event: React.MouseEvent<ElementType>) => void;
export declare type MouseEventHandlers<RawDatum, ElementType> = Partial<{
    onClick: MouseEventHandler<RawDatum, ElementType>;
    onMouseEnter: MouseEventHandler<RawDatum, ElementType>;
    onMouseMove: MouseEventHandler<RawDatum, ElementType>;
    onMouseLeave: MouseEventHandler<RawDatum, ElementType>;
}>;
export declare type SvgProps<RawDatum> = DataProps<RawDatum> & Dimensions & Partial<CommonProps<RawDatum>> & ModernMotionProps & SvgDefsAndFill<BarDatum<RawDatum>> & MouseEventHandlers<RawDatum, SVGRectElement> & {
    layers?: Layer<RawDatum>[];
};
//# sourceMappingURL=types.d.ts.map