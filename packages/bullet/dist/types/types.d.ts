import * as React from 'react';
import { Box, Dimensions, Theme, Colors, ModernMotionProps } from '@nivo/core';
import { ScaleLinear } from 'd3-scale';
import { SpringValues } from 'react-spring';
export declare type DatumId = string | number;
export declare type DatumValue = number;
export declare type WithDatumId<R> = R & {
    id: DatumId;
};
declare type Point = {
    x: number;
    y: number;
};
export interface Datum {
    id: DatumId;
    title?: React.ReactNode;
    ranges: number[];
    measures: number[];
    markers?: number[];
}
export declare type EnhancedDatum = Datum & {
    scale: ScaleLinear<number, number, never>;
};
export interface ComputedRangeDatum {
    index: number;
    v0: number;
    v1: number;
    color: string;
}
export interface ComputedMarkersDatum {
    index: number;
    value: number;
    color: string;
}
export declare type MouseEventHandler<D, T> = (datum: D, event: React.MouseEvent<T>) => void;
export declare type CommonBulletProps = Dimensions & {
    margin: Box;
    layout: 'horizontal' | 'vertical';
    reverse: boolean;
    spacing: number;
    titlePosition: 'before' | 'after';
    titleAlign: 'start' | 'middle' | 'end';
    titleOffsetX: number;
    titleOffsetY: number;
    titleRotation: number;
    rangeComponent: React.ComponentType<BulletRectsItemProps>;
    rangeColors: Colors;
    measureComponent: React.ComponentType<BulletRectsItemProps>;
    measureColors: Colors;
    measureSize: number;
    markerComponent: React.ComponentType<BulletMarkersItemProps>;
    markerColors: Colors;
    markerSize: number;
    axisPosition: 'before' | 'after';
    theme: Theme;
    role: string;
};
export declare type BulletHandlers = {
    onRangeClick?: MouseEventHandler<WithDatumId<ComputedRangeDatum>, SVGRectElement>;
    onMeasureClick?: MouseEventHandler<WithDatumId<ComputedRangeDatum>, SVGRectElement>;
    onMarkerClick?: MouseEventHandler<WithDatumId<ComputedMarkersDatum>, SVGLineElement>;
};
export declare type BulletSvgProps = Partial<CommonBulletProps> & Dimensions & BulletHandlers & ModernMotionProps & {
    data: Datum[];
};
declare type MouseEventWithDatum<D, Element> = (datum: D, event: React.MouseEvent<Element, MouseEvent>) => void;
export declare type BulletRectComputedRect = Point & Dimensions & {
    data: ComputedRangeDatum;
};
export declare type BulletRectAnimatedProps = Point & Dimensions & Pick<ComputedRangeDatum, 'color'>;
export declare type BulletRectsItemProps = Pick<BulletRectsProps, 'onMouseEnter' | 'onMouseLeave' | 'onClick'> & Point & Dimensions & {
    animatedProps: SpringValues<BulletRectAnimatedProps>;
    index: number;
    color: string;
    data: ComputedRangeDatum;
    onMouseMove: BulletRectsProps['onMouseEnter'];
};
export declare type BulletMarkersItemProps = Pick<BulletMarkersProps, 'onMouseEnter' | 'onMouseLeave' | 'onClick'> & Point & {
    animatedProps: SpringValues<PositionWithColor>;
    size: number;
    rotation: number;
    color: string;
    data: {
        index: number;
        value: number;
        color: string;
    };
    onMouseMove: BulletMarkersProps['onMouseEnter'];
};
export declare type BulletRectsProps = Pick<CommonBulletProps, 'layout' | 'reverse'> & Dimensions & Point & {
    animatedProps?: SpringValues<{
        measuresY: number;
        transform: string;
    }>;
    scale: ScaleLinear<number, number, never>;
    data: ComputedRangeDatum[];
    component: CommonBulletProps['rangeComponent'];
    onMouseEnter: MouseEventWithDatum<ComputedRangeDatum, SVGRectElement>;
    onMouseLeave: MouseEventWithDatum<ComputedRangeDatum, SVGRectElement>;
    onClick: MouseEventWithDatum<ComputedRangeDatum, SVGRectElement>;
};
export declare type Position = Point & {
    size: number;
    rotation: number;
};
export declare type MarkerWithPosition = ComputedMarkersDatum & {
    position: Position;
};
export declare type PositionWithColor = {
    color: string;
    transform: string;
    x: number;
    y1: number;
    y2: number;
};
export declare type BulletMarkersProps = Pick<CommonBulletProps, 'layout' | 'reverse'> & Pick<Dimensions, 'height'> & {
    scale: ScaleLinear<number, number, never>;
    markerSize: number;
    markers: ComputedMarkersDatum[];
    component: CommonBulletProps['markerComponent'];
    onMouseEnter: MouseEventWithDatum<ComputedMarkersDatum, SVGLineElement>;
    onMouseLeave: MouseEventWithDatum<ComputedMarkersDatum, SVGLineElement>;
    onClick: MouseEventWithDatum<ComputedMarkersDatum, SVGLineElement>;
};
export declare type BulletItemProps = Omit<CommonBulletProps, 'outerWidth' | 'outerHeight' | 'margin' | 'spacing' | 'role' | 'measureSize' | 'markerSize' | 'theme'> & BulletHandlers & EnhancedDatum & ModernMotionProps & Point & {
    measureHeight: number;
    markerHeight: number;
};
export {};
//# sourceMappingURL=types.d.ts.map