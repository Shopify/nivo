import React from 'react';
import { Arc } from 'd3-shape';
import { CommonProps, ComputedDatum, DataProps, NormalizedDatum, MouseEventHandlers, SunburstCustomLayerProps } from './types';
declare type MaybeColor = {
    color?: string;
};
export declare const useEventHandlers: <RawDatum>({ data, isInteractive, onClick: onClickHandler, onMouseEnter: onMouseEnterHandler, onMouseLeave: onMouseLeaveHandler, onMouseMove: onMouseMoveHandler, tooltip, }: Pick<CommonProps<RawDatum>, "isInteractive" | "tooltip"> & Partial<{
    onClick: import("./types").MouseEventHandler<RawDatum, SVGPathElement>;
    onMouseEnter: import("./types").MouseEventHandler<RawDatum, SVGPathElement>;
    onMouseLeave: import("./types").MouseEventHandler<RawDatum, SVGPathElement>;
    onMouseMove: import("./types").MouseEventHandler<RawDatum, SVGPathElement>;
}> & {
    data: NormalizedDatum<RawDatum>;
}) => {
    onClick: undefined;
    onMouseEnter: undefined;
    onMouseLeave: undefined;
    onMouseMove: undefined;
} | {
    onClick: (event: React.MouseEvent<SVGPathElement>) => void | undefined;
    onMouseEnter: (event: React.MouseEvent<SVGPathElement>) => void;
    onMouseLeave: (event: React.MouseEvent<SVGPathElement>) => void;
    onMouseMove: (event: React.MouseEvent<SVGPathElement>) => void;
};
export declare const useSunburst: <RawDatum extends MaybeColor>({ childColor, colors, cornerRadius, data, id, value, valueFormat, radius, }: {
    childColor: import("@nivo/colors").InheritedColorConfig<NormalizedDatum<RawDatum>>;
    colors: import("@nivo/colors").OrdinalColorScaleConfig<Pick<NormalizedDatum<RawDatum>, "color" | "data" | "depth" | "id" | "formattedValue" | "percentage" | "value">>;
    cornerRadius: number;
    data: RawDatum;
    id: string | ((datum: RawDatum) => import("./types").DatumId);
    radius: number;
    value: string | ((datum: RawDatum) => number);
    valueFormat: string | ((value: number) => string) | undefined;
}) => {
    arcGenerator: Arc<any, ComputedDatum<RawDatum>>;
    nodes: ComputedDatum<RawDatum>[];
};
/**
 * Memoize the context to pass to custom layers.
 */
export declare const useSunburstLayerContext: <RawDatum>({ nodes, arcGenerator, centerX, centerY, radius, }: {
    nodes: ComputedDatum<RawDatum>[];
    arcGenerator: Arc<any, ComputedDatum<RawDatum>>;
    centerX: number;
    centerY: number;
    radius: number;
}) => SunburstCustomLayerProps<RawDatum>;
export {};
//# sourceMappingURL=hooks.d.ts.map