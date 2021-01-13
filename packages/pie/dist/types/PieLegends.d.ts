import { CompletePieSvgProps, ComputedDatum } from './types';
interface PieLegendsProps<RawDatum> {
    width: number;
    height: number;
    legends: CompletePieSvgProps<RawDatum>['legends'];
    dataWithArc: ComputedDatum<RawDatum>[];
}
declare const PieLegends: <RawDatum>({ width, height, legends, dataWithArc, }: PieLegendsProps<RawDatum>) => JSX.Element;
export default PieLegends;
//# sourceMappingURL=PieLegends.d.ts.map