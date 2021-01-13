/// <reference types="react" />
import { Arc } from 'd3-shape';
import { HierarchyRectangularNode } from 'd3-hierarchy';
import { OrdinalColorScaleConfig, InheritedColorConfig } from '@nivo/colors';
import { Theme, Dimensions, Box, ValueFormat, SvgDefsAndFill, ModernMotionProps, PropertyAccessor } from '@nivo/core';
export declare type DatumId = string | number;
export declare type DatumValue = number;
export declare type LabelAccessorFunction<RawDatum> = (datum: RawDatum) => string | number;
export declare type SunburstLayerId = 'slices' | 'sliceLabels';
export interface SunburstCustomLayerProps<RawDatum> {
    nodes: ComputedDatum<RawDatum>[];
    centerX: number;
    centerY: number;
    radius: number;
    arcGenerator: Arc<any, ComputedDatum<RawDatum>>;
}
export declare type SunburstCustomLayer<RawDatum> = React.FC<SunburstCustomLayerProps<RawDatum>>;
export declare type SunburstLayer<RawDatum> = SunburstLayerId | SunburstCustomLayer<RawDatum>;
export interface DataProps<RawDatum> {
    data: RawDatum;
    id?: PropertyAccessor<RawDatum, DatumId>;
    value?: PropertyAccessor<RawDatum, DatumValue>;
    valueFormat?: ValueFormat<number>;
}
export interface ChildrenDatum<RawDatum> {
    children?: Array<RawDatum & ChildrenDatum<RawDatum>>;
}
export interface NormalizedDatum<RawDatum> {
    color?: string;
    data: RawDatum & ChildrenDatum<RawDatum>;
    depth: number;
    id: DatumId;
    formattedValue: string | number;
    fill?: string;
    parent?: ComputedDatum<RawDatum>;
    percentage: number;
    value: DatumValue;
}
export interface ComputedDatum<RawDatum> {
    x0: number;
    y0: number;
    x1: number;
    y1: number;
    data: NormalizedDatum<RawDatum>;
    depth: number;
    height: number;
    parent: HierarchyRectangularNode<RawDatum> | null;
    value: number;
}
export declare type CommonProps<RawDatum> = {
    layers: SunburstLayer<RawDatum>[];
    margin: Box;
    cornerRadius: number;
    colors: OrdinalColorScaleConfig<Omit<NormalizedDatum<RawDatum>, 'fill' | 'parent'>>;
    borderWidth: number;
    borderColor: string;
    childColor: InheritedColorConfig<NormalizedDatum<RawDatum>>;
    enableSliceLabels: boolean;
    sliceLabel: string | LabelAccessorFunction<NormalizedDatum<RawDatum>>;
    sliceLabelsSkipAngle: number;
    sliceLabelsTextColor: InheritedColorConfig<NormalizedDatum<RawDatum>>;
    role: string;
    theme: Theme;
    isInteractive: boolean;
    tooltip: (props: NormalizedDatum<RawDatum>) => JSX.Element;
};
export declare type MouseEventHandler<RawDatum, ElementType> = (datum: NormalizedDatum<RawDatum>, event: React.MouseEvent<ElementType>) => void;
export declare type MouseEventHandlers<RawDatum, ElementType> = Partial<{
    onClick: MouseEventHandler<RawDatum, ElementType>;
    onMouseEnter: MouseEventHandler<RawDatum, ElementType>;
    onMouseLeave: MouseEventHandler<RawDatum, ElementType>;
    onMouseMove: MouseEventHandler<RawDatum, ElementType>;
}>;
export declare type SvgProps<RawDatum> = DataProps<RawDatum> & Dimensions & SvgDefsAndFill<RawDatum> & MouseEventHandlers<RawDatum, SVGPathElement> & ModernMotionProps & Partial<CommonProps<RawDatum>>;
export declare type SunburstArcProps<RawDatum> = Pick<SvgProps<RawDatum>, 'onClick' | 'onMouseEnter' | 'onMouseLeave' | 'onMouseMove' | 'borderWidth' | 'borderColor'> & Pick<CommonProps<RawDatum>, 'isInteractive' | 'tooltip'> & {
    arcGenerator: Arc<any, ComputedDatum<RawDatum>>;
    node: ComputedDatum<RawDatum>;
};
export declare type SunburstLabelProps<RawDatum> = {
    label: CommonProps<RawDatum>['sliceLabel'];
    nodes: Array<ComputedDatum<RawDatum>>;
    skipAngle?: number;
    textColor: CommonProps<RawDatum>['sliceLabelsTextColor'];
};
//# sourceMappingURL=types.d.ts.map