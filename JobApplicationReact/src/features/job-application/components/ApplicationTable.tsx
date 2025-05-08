import { z } from "zod";
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type Row,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { useGetApplications } from "../ApiHooks";
import DropdownMenuActionButton from "./ApplicationTable/DropdownMenuActionButton";
import ApplicationStatusBadge from "./ApplicationTable/ApplicationStatusBadge";

export const schema = z.object({
  jobApplicationId: z.number(),
  companyName: z.string(),
  position: z.string(),
  status: z.number(),
  dateApplied: z.date(),
});

const columns: ColumnDef<z.infer<typeof schema>>[] = [
  {
    accessorKey: "CompanyName",
    header: "Company Name",
    cell: ({ row }) => {
      return <div>{row.original.companyName}</div>;
    },
    enableHiding: false,
  },
  {
    accessorKey: "Position",
    header: "Position",
    cell: ({ row }) => {
      return <div>{row.original.position}</div>;
    },
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <ApplicationStatusBadge status={row.original.status} />,
  },
  {
    accessorKey: "dateApplied",
    header: "Date Applied",
    cell: ({ row }) => {
      return <div>{new Date(row.original.dateApplied).toDateString()}</div>;
    },
    enableHiding: false,
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <DropdownMenuActionButton
        id={row.original.jobApplicationId}
        status={row.original.status}
      />
    ),
  },
];

function ApplicationRow({ row }: { row: Row<z.infer<typeof schema>> }) {
  return (
    <TableRow>
      {row.getVisibleCells().map((cell) => (
        <TableCell key={cell.id}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </TableCell>
      ))}
    </TableRow>
  );
}

export function ApplicationTable({
  data: initialData,
}: {
  data: z.infer<typeof schema>[];
}) {
  const [data, setData] = useState(() => initialData);

  const table = useReactTable({
    data,
    columns,
    state: {
      // sorting,
      // columnVisibility,
      // rowSelection,
      // columnFilters,
      // pagination,
    },
    getRowId: (row) => row.jobApplicationId.toString(),
    enableRowSelection: true,
    // onRowSelectionChange: setRowSelection,
    // onSortingChange: setSorting,
    // onColumnFiltersChange: setColumnFilters,
    // onColumnVisibilityChange: setColumnVisibility,
    // onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  const applicationsResp = useGetApplications();

  useEffect(() => {
    if (applicationsResp.data) {
      setData(applicationsResp.data);
    }
  }, [applicationsResp.data]);

  return (
    <>
      <Table>
        <TableHeader className="sticky top-0 z-10 bg-muted">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className="**:data-[slot=table-cell]:first:w-8">
          {table.getRowModel().rows?.length ? (
            <>
              {table.getRowModel().rows.map((row) => (
                <ApplicationRow key={row.id} row={row} />
              ))}
            </>
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}
