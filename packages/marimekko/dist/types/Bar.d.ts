import { SpringValues } from 'react-spring';
import { BarDatum, CommonProps, MouseEventHandlers } from './types';
interface BarProps<RawDatum> extends MouseEventHandlers<RawDatum, SVGRectElement> {
    bar: BarDatum<RawDatum>;
    animatedProps: SpringValues<{
        x: number;
        y: number;
        width: number;
        height: number;
        opacity: number;
        color: string;
        borderColor: string;
    }>;
    isInteractive: boolean;
    tooltip: CommonProps<RawDatum>['tooltip'];
}
export declare const Bar: <RawDatum>({ bar, animatedProps, isInteractive, tooltip, onClick, onMouseEnter, onMouseMove, onMouseLeave, }: BarProps<RawDatum>) => JSX.Element;
export {};
//# sourceMappingURL=Bar.d.ts.map