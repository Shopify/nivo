export declare const defaultProps: {
    readonly layout: "horizontal";
    readonly reverse: false;
    readonly spacing: 30;
    readonly axisPosition: "after";
    readonly titlePosition: "before";
    readonly titleAlign: "middle";
    readonly titleRotation: 0;
    readonly titleOffsetX: 0;
    readonly titleOffsetY: 0;
    readonly rangeComponent: ({ animatedProps: { x, y, width, height, color }, data, onMouseEnter, onMouseMove, onMouseLeave, onClick, }: import("./types").BulletRectsItemProps) => JSX.Element;
    readonly rangeColors: "seq:cool";
    readonly measureComponent: ({ animatedProps: { x, y, width, height, color }, data, onMouseEnter, onMouseMove, onMouseLeave, onClick, }: import("./types").BulletRectsItemProps) => JSX.Element;
    readonly measureColors: "seq:red_purple";
    readonly markers: readonly [];
    readonly markerComponent: ({ animatedProps: { color, transform, x, y1, y2 }, data, onMouseEnter, onMouseMove, onMouseLeave, onClick, }: import("./types").BulletMarkersItemProps) => JSX.Element;
    readonly markerColors: "seq:red_purple";
    readonly rangeBorderWidth: 0;
    readonly rangeBorderColor: {
        readonly from: "color";
    };
    readonly measureSize: 0.4;
    readonly measureBorderWidth: 0;
    readonly measureBorderColor: {
        readonly from: "color";
    };
    readonly markerSize: 0.6;
    readonly isInteractive: true;
    readonly animate: boolean;
    readonly motionConfig: string;
    readonly margin: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    readonly role: "img";
};
//# sourceMappingURL=props.d.ts.map