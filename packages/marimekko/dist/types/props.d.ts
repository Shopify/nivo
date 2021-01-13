import { LayerId, Layout } from './types';
export declare const defaultProps: {
    layout: Layout;
    offset: "expand" | "diverging" | "none" | "silouhette" | "wiggle";
    outerPadding: number;
    innerPadding: number;
    layers: LayerId[];
    enableGridX: boolean;
    enableGridY: boolean;
    colors: {
        scheme: string;
    };
    borderWidth: number;
    borderColor: {
        from: string;
        modifiers: import("./types").DatumId[][];
    };
    isInteractive: boolean;
    animate: boolean;
    motionConfig: string;
};
//# sourceMappingURL=props.d.ts.map