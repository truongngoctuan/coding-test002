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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { CheckCircle2Icon, MoreVerticalIcon } from "lucide-react";
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
import { Badge } from "@/components/ui/badge";
import { JobApplicationStatus } from "../api/types";
import { getJobApplicationStatusString } from "../utils";

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
    cell: ({ row }) => (
      <Badge
        variant="outline"
        className="flex gap-1 px-1.5 text-muted-foreground [&_svg]:size-3"
      >
        {row.original.status === JobApplicationStatus.Offer && (
          <CheckCircle2Icon className="text-green-500 dark:text-green-400" />
        )}
        {getJobApplicationStatusString(row.original.status)}
      </Badge>
    ),
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
    cell: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex size-8 text-muted-foreground data-[state=open]:bg-muted"
            size="icon"
          >
            <MoreVerticalIcon />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-32">
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Make a copy</DropdownMenuItem>
          <DropdownMenuItem>Favorite</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
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
