import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface TableColumn<T> {
  key: keyof T;
  header: string;
  render?: (row: T) => React.ReactNode;
}

interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  actionLabel?: string;
  onActionClick?: (row: T) => void;
  className?: string;
}

export const Table = <T extends object>({
  columns,
  data,
  actionLabel = "View",
  onActionClick,
  className
}: TableProps<T>) => {
  if (data.length === 0) {
    return (
      <div className="text-muted-foreground text-center py-8">
        No submissions found.
      </div>
    );
  }

  return (
    <div className={cn("w-full overflow-auto rounded-md border border-border", className)}>
      <table className="w-full text-sm text-left">
        <thead className="bg-muted text-muted-foreground">
          <tr>
            {columns.map((col, index) => (
              <th key={`${String(col.key)}-${index}`} className="px-4 py-2 font-medium">
                {col.header}
              </th>
            ))}
            {onActionClick && <th className="px-4 py-2">Action</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="border-t border-border hover:bg-muted/50 transition-colors">
              {columns.map((col, index) => (
                <td key={`${String(col.key)}-${index}`} className="px-4 py-2">
                  {col.render
                    ? col.render(row)
                    : (row[col.key as keyof T] as React.ReactNode)}
                </td>
              ))}
              {onActionClick && (
                <td className="px-4 py-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => onActionClick(row)}
                  >
                    {actionLabel}
                  </Button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
