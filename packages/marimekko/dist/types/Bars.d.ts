import { BarDatum, CommonProps, MouseEventHandlers } from './types';
interface BarsProps<RawDatum> extends MouseEventHandlers<RawDatum, SVGRectElement> {
    isInteractive: boolean;
    bars: BarDatum<RawDatum>[];
    tooltip: CommonProps<RawDatum>['tooltip'];
}
export declare const Bars: <RawDatum>({ bars, isInteractive, tooltip, onClick, onMouseEnter, onMouseMove, onMouseLeave, }: BarsProps<RawDatum>) => JSX.Element;
export {};
//# sourceMappingURL=Bars.d.ts.map