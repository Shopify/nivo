import { DatumWithArc } from './types';
import { ArcTransitionMode, TransitionExtra } from './arcTransitionMode';
/**
 * This hook can be used to animate a group of arcs,
 * if you want to animate a single arc,
 * please have a look at the `useAnimatedArc` hook.
 */
export declare const useArcsTransition: <Datum extends DatumWithArc, ExtraProps = unknown>(data: Datum[], mode?: ArcTransitionMode, extra?: TransitionExtra<Datum, ExtraProps> | undefined) => {
    transition: import("@react-spring/core").TransitionFn<Datum, [{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps] extends [import("@alloc/types").Any] ? any : { [P_7 in keyof { [P_6 in keyof (({ [P in keyof Pick<import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps extends {
        from?: infer From | undefined;
    } ? import("@alloc/types").ObjectType<From> : object, {}>, Exclude<keyof import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps extends {
        from?: infer From | undefined;
    } ? import("@alloc/types").ObjectType<From> : object, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>]: Pick<import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps extends {
        from?: infer From | undefined;
    } ? import("@alloc/types").ObjectType<From> : object, {}>, Exclude<keyof import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps extends {
        from?: infer From | undefined;
    } ? import("@alloc/types").ObjectType<From> : object, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P] extends import("fluids").FluidValue<infer U, any> ? U : Pick<import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps extends {
        from?: infer From | undefined;
    } ? import("@alloc/types").ObjectType<From> : object, {}>, Exclude<keyof import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps extends {
        from?: infer From | undefined;
    } ? import("@alloc/types").ObjectType<From> : object, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P]; } extends any ? (k: { [P in keyof Pick<import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps extends {
        from?: infer From | undefined;
    } ? import("@alloc/types").ObjectType<From> : object, {}>, Exclude<keyof import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps extends {
        from?: infer From | undefined;
    } ? import("@alloc/types").ObjectType<From> : object, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>]: Pick<import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps extends {
        from?: infer From | undefined;
    } ? import("@alloc/types").ObjectType<From> : object, {}>, Exclude<keyof import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps extends {
        from?: infer From | undefined;
    } ? import("@alloc/types").ObjectType<From> : object, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P] extends import("fluids").FluidValue<infer U, any> ? U : Pick<import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps extends {
        from?: infer From | undefined;
    } ? import("@alloc/types").ObjectType<From> : object, {}>, Exclude<keyof import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps extends {
        from?: infer From | undefined;
    } ? import("@alloc/types").ObjectType<From> : object, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P]; }) => void : never) | ((("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps) extends never ? { [P_1 in keyof Pick<import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps, {}>, Exclude<keyof import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>]: Pick<import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps, {}>, Exclude<keyof import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P_1] extends import("fluids").FluidValue<infer U, any> ? U : Pick<import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps, {}>, Exclude<keyof import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P_1]; } & ({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps extends {
        to?: any;
    } ? Exclude<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)["to"], Function | readonly any[]> extends infer To ? { [P_2 in keyof Pick<import("@react-spring/shared").Constrain<[To] extends [object] ? To : Partial<Extract<To, object>>, {}>, Exclude<keyof import("@react-spring/shared").Constrain<[To] extends [object] ? To : Partial<Extract<To, object>>, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>]: Pick<import("@react-spring/shared").Constrain<[To] extends [object] ? To : Partial<Extract<To, object>>, {}>, Exclude<keyof import("@react-spring/shared").Constrain<[To] extends [object] ? To : Partial<Extract<To, object>>, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P_2] extends import("fluids").FluidValue<infer U, any> ? U : Pick<import("@react-spring/shared").Constrain<[To] extends [object] ? To : Partial<Extract<To, object>>, {}>, Exclude<keyof import("@react-spring/shared").Constrain<[To] extends [object] ? To : Partial<Extract<To, object>>, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P_2]; } : never : unknown) : { [P_5 in keyof Pick<{ [P_4 in keyof { [P_3 in keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never)]: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends infer U_1 ? P_3 extends keyof U_1 ? U_1[P_3] : never : never; }]: { [P_3 in keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never)]: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends infer U_1 ? P_3 extends keyof U_1 ? U_1[P_3] : never : never; }[P_4]; }, Exclude<keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never), "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>]: Pick<{ [P_4 in keyof { [P_3 in keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never)]: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends infer U_1 ? P_3 extends keyof U_1 ? U_1[P_3] : never : never; }]: { [P_3 in keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never)]: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends infer U_1 ? P_3 extends keyof U_1 ? U_1[P_3] : never : never; }[P_4]; }, Exclude<keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never), "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P_5] extends import("fluids").FluidValue<infer U, any> ? U : Pick<{ [P_4 in keyof { [P_3 in keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never)]: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends infer U_1 ? P_3 extends keyof U_1 ? U_1[P_3] : never : never; }]: { [P_3 in keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never)]: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends infer U_1 ? P_3 extends keyof U_1 ? U_1[P_3] : never : never; }[P_4]; }, Exclude<keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never), "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P_5]; }) extends any ? (k: ("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps) extends never ? { [P_1 in keyof Pick<import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps, {}>, Exclude<keyof import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>]: Pick<import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps, {}>, Exclude<keyof import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P_1] extends import("fluids").FluidValue<infer U, any> ? U : Pick<import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps, {}>, Exclude<keyof import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P_1]; } & ({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps extends {
        to?: any;
    } ? Exclude<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)["to"], Function | readonly any[]> extends infer To ? { [P_2 in keyof Pick<import("@react-spring/shared").Constrain<[To] extends [object] ? To : Partial<Extract<To, object>>, {}>, Exclude<keyof import("@react-spring/shared").Constrain<[To] extends [object] ? To : Partial<Extract<To, object>>, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>]: Pick<import("@react-spring/shared").Constrain<[To] extends [object] ? To : Partial<Extract<To, object>>, {}>, Exclude<keyof import("@react-spring/shared").Constrain<[To] extends [object] ? To : Partial<Extract<To, object>>, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P_2] extends import("fluids").FluidValue<infer U, any> ? U : Pick<import("@react-spring/shared").Constrain<[To] extends [object] ? To : Partial<Extract<To, object>>, {}>, Exclude<keyof import("@react-spring/shared").Constrain<[To] extends [object] ? To : Partial<Extract<To, object>>, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P_2]; } : never : unknown) : { [P_5 in keyof Pick<{ [P_4 in keyof { [P_3 in keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never)]: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends infer U_1 ? P_3 extends keyof U_1 ? U_1[P_3] : never : never; }]: { [P_3 in keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never)]: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends infer U_1 ? P_3 extends keyof U_1 ? U_1[P_3] : never : never; }[P_4]; }, Exclude<keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never), "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>]: Pick<{ [P_4 in keyof { [P_3 in keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never)]: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends infer U_1 ? P_3 extends keyof U_1 ? U_1[P_3] : never : never; }]: { [P_3 in keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never)]: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends infer U_1 ? P_3 extends keyof U_1 ? U_1[P_3] : never : never; }[P_4]; }, Exclude<keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never), "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P_5] extends import("fluids").FluidValue<infer U, any> ? U : Pick<{ [P_4 in keyof { [P_3 in keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never)]: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends infer U_1 ? P_3 extends keyof U_1 ? U_1[P_3] : never : never; }]: { [P_3 in keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never)]: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends infer U_1 ? P_3 extends keyof U_1 ? U_1[P_3] : never : never; }[P_4]; }, Exclude<keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never), "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P_5]; }) => void : never) extends (k: infer I) => void ? I : never)]: ({ [P in keyof Pick<import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps extends {
        from?: infer From | undefined;
    } ? import("@alloc/types").ObjectType<From> : object, {}>, Exclude<keyof import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps extends {
        from?: infer From | undefined;
    } ? import("@alloc/types").ObjectType<From> : object, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>]: Pick<import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps extends {
        from?: infer From | undefined;
    } ? import("@alloc/types").ObjectType<From> : object, {}>, Exclude<keyof import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps extends {
        from?: infer From | undefined;
    } ? import("@alloc/types").ObjectType<From> : object, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P] extends import("fluids").FluidValue<infer U, any> ? U : Pick<import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps extends {
        from?: infer From | undefined;
    } ? import("@alloc/types").ObjectType<From> : object, {}>, Exclude<keyof import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps extends {
        from?: infer From | undefined;
    } ? import("@alloc/types").ObjectType<From> : object, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P]; } extends infer U_1 ? P_6 extends keyof U_1 ? U_1[P_6] : never : never) | ((("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps) extends never ? { [P_1 in keyof Pick<import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps, {}>, Exclude<keyof import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>]: Pick<import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps, {}>, Exclude<keyof import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P_1] extends import("fluids").FluidValue<infer U, any> ? U : Pick<import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps, {}>, Exclude<keyof import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P_1]; } & ({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps extends {
        to?: any;
    } ? Exclude<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)["to"], Function | readonly any[]> extends infer To ? { [P_2 in keyof Pick<import("@react-spring/shared").Constrain<[To] extends [object] ? To : Partial<Extract<To, object>>, {}>, Exclude<keyof import("@react-spring/shared").Constrain<[To] extends [object] ? To : Partial<Extract<To, object>>, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>]: Pick<import("@react-spring/shared").Constrain<[To] extends [object] ? To : Partial<Extract<To, object>>, {}>, Exclude<keyof import("@react-spring/shared").Constrain<[To] extends [object] ? To : Partial<Extract<To, object>>, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P_2] extends import("fluids").FluidValue<infer U, any> ? U : Pick<import("@react-spring/shared").Constrain<[To] extends [object] ? To : Partial<Extract<To, object>>, {}>, Exclude<keyof import("@react-spring/shared").Constrain<[To] extends [object] ? To : Partial<Extract<To, object>>, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P_2]; } : never : unknown) : { [P_5 in keyof Pick<{ [P_4 in keyof { [P_3 in keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never)]: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends infer U_1 ? P_3 extends keyof U_1 ? U_1[P_3] : never : never; }]: { [P_3 in keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never)]: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends infer U_1 ? P_3 extends keyof U_1 ? U_1[P_3] : never : never; }[P_4]; }, Exclude<keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never), "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>]: Pick<{ [P_4 in keyof { [P_3 in keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never)]: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends infer U_1 ? P_3 extends keyof U_1 ? U_1[P_3] : never : never; }]: { [P_3 in keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never)]: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends infer U_1 ? P_3 extends keyof U_1 ? U_1[P_3] : never : never; }[P_4]; }, Exclude<keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never), "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P_5] extends import("fluids").FluidValue<infer U, any> ? U : Pick<{ [P_4 in keyof { [P_3 in keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never)]: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends infer U_1 ? P_3 extends keyof U_1 ? U_1[P_3] : never : never; }]: { [P_3 in keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never)]: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends infer U_1 ? P_3 extends keyof U_1 ? U_1[P_3] : never : never; }[P_4]; }, Exclude<keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never), "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P_5]; }) extends infer U_1 ? P_6 extends keyof U_1 ? U_1[P_6] : never : never); }]: { [P_6 in keyof (({ [P in keyof Pick<import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps extends {
        from?: infer From | undefined;
    } ? import("@alloc/types").ObjectType<From> : object, {}>, Exclude<keyof import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps extends {
        from?: infer From | undefined;
    } ? import("@alloc/types").ObjectType<From> : object, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>]: Pick<import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps extends {
        from?: infer From | undefined;
    } ? import("@alloc/types").ObjectType<From> : object, {}>, Exclude<keyof import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps extends {
        from?: infer From | undefined;
    } ? import("@alloc/types").ObjectType<From> : object, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P] extends import("fluids").FluidValue<infer U, any> ? U : Pick<import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps extends {
        from?: infer From | undefined;
    } ? import("@alloc/types").ObjectType<From> : object, {}>, Exclude<keyof import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps extends {
        from?: infer From | undefined;
    } ? import("@alloc/types").ObjectType<From> : object, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P]; } extends any ? (k: { [P in keyof Pick<import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps extends {
        from?: infer From | undefined;
    } ? import("@alloc/types").ObjectType<From> : object, {}>, Exclude<keyof import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps extends {
        from?: infer From | undefined;
    } ? import("@alloc/types").ObjectType<From> : object, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>]: Pick<import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps extends {
        from?: infer From | undefined;
    } ? import("@alloc/types").ObjectType<From> : object, {}>, Exclude<keyof import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps extends {
        from?: infer From | undefined;
    } ? import("@alloc/types").ObjectType<From> : object, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P] extends import("fluids").FluidValue<infer U, any> ? U : Pick<import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps extends {
        from?: infer From | undefined;
    } ? import("@alloc/types").ObjectType<From> : object, {}>, Exclude<keyof import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps extends {
        from?: infer From | undefined;
    } ? import("@alloc/types").ObjectType<From> : object, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P]; }) => void : never) | ((("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps) extends never ? { [P_1 in keyof Pick<import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps, {}>, Exclude<keyof import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>]: Pick<import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps, {}>, Exclude<keyof import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P_1] extends import("fluids").FluidValue<infer U, any> ? U : Pick<import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps, {}>, Exclude<keyof import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P_1]; } & ({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps extends {
        to?: any;
    } ? Exclude<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)["to"], Function | readonly any[]> extends infer To ? { [P_2 in keyof Pick<import("@react-spring/shared").Constrain<[To] extends [object] ? To : Partial<Extract<To, object>>, {}>, Exclude<keyof import("@react-spring/shared").Constrain<[To] extends [object] ? To : Partial<Extract<To, object>>, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>]: Pick<import("@react-spring/shared").Constrain<[To] extends [object] ? To : Partial<Extract<To, object>>, {}>, Exclude<keyof import("@react-spring/shared").Constrain<[To] extends [object] ? To : Partial<Extract<To, object>>, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P_2] extends import("fluids").FluidValue<infer U, any> ? U : Pick<import("@react-spring/shared").Constrain<[To] extends [object] ? To : Partial<Extract<To, object>>, {}>, Exclude<keyof import("@react-spring/shared").Constrain<[To] extends [object] ? To : Partial<Extract<To, object>>, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P_2]; } : never : unknown) : { [P_5 in keyof Pick<{ [P_4 in keyof { [P_3 in keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never)]: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends infer U_1 ? P_3 extends keyof U_1 ? U_1[P_3] : never : never; }]: { [P_3 in keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never)]: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends infer U_1 ? P_3 extends keyof U_1 ? U_1[P_3] : never : never; }[P_4]; }, Exclude<keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never), "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>]: Pick<{ [P_4 in keyof { [P_3 in keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never)]: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends infer U_1 ? P_3 extends keyof U_1 ? U_1[P_3] : never : never; }]: { [P_3 in keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never)]: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends infer U_1 ? P_3 extends keyof U_1 ? U_1[P_3] : never : never; }[P_4]; }, Exclude<keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never), "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P_5] extends import("fluids").FluidValue<infer U, any> ? U : Pick<{ [P_4 in keyof { [P_3 in keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never)]: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends infer U_1 ? P_3 extends keyof U_1 ? U_1[P_3] : never : never; }]: { [P_3 in keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never)]: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends infer U_1 ? P_3 extends keyof U_1 ? U_1[P_3] : never : never; }[P_4]; }, Exclude<keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never), "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P_5]; }) extends any ? (k: ("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps) extends never ? { [P_1 in keyof Pick<import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps, {}>, Exclude<keyof import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>]: Pick<import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps, {}>, Exclude<keyof import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P_1] extends import("fluids").FluidValue<infer U, any> ? U : Pick<import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps, {}>, Exclude<keyof import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P_1]; } & ({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps extends {
        to?: any;
    } ? Exclude<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)["to"], Function | readonly any[]> extends infer To ? { [P_2 in keyof Pick<import("@react-spring/shared").Constrain<[To] extends [object] ? To : Partial<Extract<To, object>>, {}>, Exclude<keyof import("@react-spring/shared").Constrain<[To] extends [object] ? To : Partial<Extract<To, object>>, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>]: Pick<import("@react-spring/shared").Constrain<[To] extends [object] ? To : Partial<Extract<To, object>>, {}>, Exclude<keyof import("@react-spring/shared").Constrain<[To] extends [object] ? To : Partial<Extract<To, object>>, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P_2] extends import("fluids").FluidValue<infer U, any> ? U : Pick<import("@react-spring/shared").Constrain<[To] extends [object] ? To : Partial<Extract<To, object>>, {}>, Exclude<keyof import("@react-spring/shared").Constrain<[To] extends [object] ? To : Partial<Extract<To, object>>, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P_2]; } : never : unknown) : { [P_5 in keyof Pick<{ [P_4 in keyof { [P_3 in keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never)]: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends infer U_1 ? P_3 extends keyof U_1 ? U_1[P_3] : never : never; }]: { [P_3 in keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never)]: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends infer U_1 ? P_3 extends keyof U_1 ? U_1[P_3] : never : never; }[P_4]; }, Exclude<keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never), "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>]: Pick<{ [P_4 in keyof { [P_3 in keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never)]: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends infer U_1 ? P_3 extends keyof U_1 ? U_1[P_3] : never : never; }]: { [P_3 in keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never)]: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends infer U_1 ? P_3 extends keyof U_1 ? U_1[P_3] : never : never; }[P_4]; }, Exclude<keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never), "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P_5] extends import("fluids").FluidValue<infer U, any> ? U : Pick<{ [P_4 in keyof { [P_3 in keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never)]: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends infer U_1 ? P_3 extends keyof U_1 ? U_1[P_3] : never : never; }]: { [P_3 in keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never)]: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends infer U_1 ? P_3 extends keyof U_1 ? U_1[P_3] : never : never; }[P_4]; }, Exclude<keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never), "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P_5]; }) => void : never) extends (k: infer I) => void ? I : never)]: ({ [P in keyof Pick<import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps extends {
        from?: infer From | undefined;
    } ? import("@alloc/types").ObjectType<From> : object, {}>, Exclude<keyof import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps extends {
        from?: infer From | undefined;
    } ? import("@alloc/types").ObjectType<From> : object, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>]: Pick<import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps extends {
        from?: infer From | undefined;
    } ? import("@alloc/types").ObjectType<From> : object, {}>, Exclude<keyof import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps extends {
        from?: infer From | undefined;
    } ? import("@alloc/types").ObjectType<From> : object, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P] extends import("fluids").FluidValue<infer U, any> ? U : Pick<import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps extends {
        from?: infer From | undefined;
    } ? import("@alloc/types").ObjectType<From> : object, {}>, Exclude<keyof import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps extends {
        from?: infer From | undefined;
    } ? import("@alloc/types").ObjectType<From> : object, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P]; } extends infer U_1 ? P_6 extends keyof U_1 ? U_1[P_6] : never : never) | ((("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps) extends never ? { [P_1 in keyof Pick<import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps, {}>, Exclude<keyof import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>]: Pick<import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps, {}>, Exclude<keyof import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P_1] extends import("fluids").FluidValue<infer U, any> ? U : Pick<import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps, {}>, Exclude<keyof import("@react-spring/shared").Constrain<{
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P_1]; } & ({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps extends {
        to?: any;
    } ? Exclude<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)["to"], Function | readonly any[]> extends infer To ? { [P_2 in keyof Pick<import("@react-spring/shared").Constrain<[To] extends [object] ? To : Partial<Extract<To, object>>, {}>, Exclude<keyof import("@react-spring/shared").Constrain<[To] extends [object] ? To : Partial<Extract<To, object>>, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>]: Pick<import("@react-spring/shared").Constrain<[To] extends [object] ? To : Partial<Extract<To, object>>, {}>, Exclude<keyof import("@react-spring/shared").Constrain<[To] extends [object] ? To : Partial<Extract<To, object>>, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P_2] extends import("fluids").FluidValue<infer U, any> ? U : Pick<import("@react-spring/shared").Constrain<[To] extends [object] ? To : Partial<Extract<To, object>>, {}>, Exclude<keyof import("@react-spring/shared").Constrain<[To] extends [object] ? To : Partial<Extract<To, object>>, {}>, "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P_2]; } : never : unknown) : { [P_5 in keyof Pick<{ [P_4 in keyof { [P_3 in keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never)]: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends infer U_1 ? P_3 extends keyof U_1 ? U_1[P_3] : never : never; }]: { [P_3 in keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never)]: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends infer U_1 ? P_3 extends keyof U_1 ? U_1[P_3] : never : never; }[P_4]; }, Exclude<keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never), "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>]: Pick<{ [P_4 in keyof { [P_3 in keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never)]: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends infer U_1 ? P_3 extends keyof U_1 ? U_1[P_3] : never : never; }]: { [P_3 in keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never)]: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends infer U_1 ? P_3 extends keyof U_1 ? U_1[P_3] : never : never; }[P_4]; }, Exclude<keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never), "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P_5] extends import("fluids").FluidValue<infer U, any> ? U : Pick<{ [P_4 in keyof { [P_3 in keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never)]: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends infer U_1 ? P_3 extends keyof U_1 ? U_1[P_3] : never : never; }]: { [P_3 in keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never)]: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends infer U_1 ? P_3 extends keyof U_1 ? U_1[P_3] : never : never; }[P_4]; }, Exclude<keyof ((import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}> extends any ? (k: import("@react-spring/shared").Constrain<import("@alloc/types").ObjectType<({
        progress: number;
        startAngle: number;
        endAngle: number;
        innerRadius: number;
        outerRadius: number;
    } & ExtraProps)[("initial" & keyof ExtraProps) | ("enter" & keyof ExtraProps) | ("update" & keyof ExtraProps) | ("leave" & keyof ExtraProps)] extends infer T ? T extends readonly (infer Element_1)[] ? Element_1 : T extends (...args: any[]) => infer Return ? Return extends readonly (infer ReturnElement)[] ? ReturnElement : Return : T : never>, {}>) => void : never) extends (k: infer I) => void ? I : never), "ref" | "from" | "to" | "children" | "onChange" | "initial" | "loop" | "reset" | "default" | "reverse" | "sort" | "keys" | "enter" | "update" | "leave" | "trail" | "expires" | "config" | "onRest" | "onDelayEnd" | "onStart" | "onProps" | "delay" | "immediate" | "cancel" | "pause" | "items" | "callId" | "parentId">>[P_5]; }) extends infer U_1 ? P_6 extends keyof U_1 ? U_1[P_6] : never : never); }[P_7]; }>;
    interpolate: (startAngleValue: import("@react-spring/core").SpringValue<number>, endAngleValue: import("@react-spring/core").SpringValue<number>, innerRadiusValue: import("@react-spring/core").SpringValue<number>, outerRadiusValue: import("@react-spring/core").SpringValue<number>, arcGenerator: import("./types").ArcGenerator) => import("@react-spring/core").Interpolation<string | null, any>;
};
//# sourceMappingURL=useArcsTransition.d.ts.map