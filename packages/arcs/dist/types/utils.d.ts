import { DatumWithArc } from './types';
/**
 * Make sure an angle (expressed in radians)
 * always falls in the range 0~2*PI.
 */
export declare const getNormalizedAngle: (angle: number) => number;
/**
 * Filter out arcs with a length below `skipAngle`.
 */
export declare const filterDataBySkipAngle: <Datum extends DatumWithArc>(data: Datum[], skipAngle: number) => Datum[];
/**
 * Memoized version of `filterDataBySkipAngle`.
 */
export declare const useFilteredDataBySkipAngle: <Datum extends DatumWithArc>(data: Datum[], skipAngle: number) => Datum[];
//# sourceMappingURL=utils.d.ts.map