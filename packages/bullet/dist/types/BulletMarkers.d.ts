import React from 'react';
import { BulletMarkersProps, ComputedMarkersDatum } from './types';
declare type MouseEventWithDatum = (datum: ComputedMarkersDatum, event: React.MouseEvent<SVGLineElement, MouseEvent>) => void;
declare type EventHandlers = Record<'onMouseEnter' | 'onMouseLeave' | 'onClick', MouseEventWithDatum>;
export declare const BulletMarkers: ({ scale, layout, reverse, markers, height, markerSize, component, onMouseEnter, onMouseLeave, onClick, }: BulletMarkersProps & EventHandlers) => JSX.Element;
export {};
//# sourceMappingURL=BulletMarkers.d.ts.map