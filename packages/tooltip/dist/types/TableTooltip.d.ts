import React, { ReactNode } from 'react';
interface TableTooltipProps {
    title?: ReactNode;
    renderContent?: () => JSX.Element;
    rows?: ReactNode[][];
}
export declare const TableTooltip: React.MemoExoticComponent<({ title, rows, renderContent }: TableTooltipProps) => JSX.Element | null>;
export {};
//# sourceMappingURL=TableTooltip.d.ts.map