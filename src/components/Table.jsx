import { useState } from "react";
import {
  flexRender,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

const Table = ({ queries = {}, columns = [], data = [] }) => {
  const [filtering, setFiltering] = useState("");
  const [sorting, setSorting] = useState([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  return (
    <div className="mt-2 overflow-x-auto">
      {/* User location page */}
      {queries?.pageName && queries?.sectionName && queries?.accordionName ? (
        <p className="capitalize mt-2 text-gray-600">{`${queries?.pageName} > ${queries?.sectionName} > ${queries?.accordionName}`}</p>
      ) : null}

      {/* --> Input search */}
      {data?.length !== 0 && (
        <>
          <input
            type="search"
            value={filtering}
            onChange={(e) => setFiltering(e.target.value)}
            className="outline-none my-4 px-2 py-1 rounded-sm focus:border-secondary border"
            placeholder="Buscar..."
          />
        </>
      )}

      {/* Table */}
      <table className="min-w-[30rem] w-full border-collapse border-spacing-0">
        {/* Head */}
        <thead className="bg-slate-50 rounded-md">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="group table-cell cursor-pointer  py-2 px-2"
                  onClick={header.column.getToggleSortingHandler()}
                >
                  <div className="flex items-center gap-2 justify-between px-1.5 py-1.5">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}

                    <span className="group-hover:opacity-100 opacity-0 transition-opacity">
                      {/* <img loading="lazy" decoding="async" src={sort} alt="asc-desc" /> */}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        {/* Body */}
        <tbody className="text-lg">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className={`border-b border-b-gray-300 ${row.id}`}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className={`py-3 px-3 text-base text-start text-gray-400`}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      {data?.length !== 0 && (
        <>
          <footer className="flex justify-between mt-5">
            <div className="flex items-center gap-2">
              {table.getCanPreviousPage() && (
                <button
                  className="rounded shadow-lg btn inline-flex px-3 gap-3"
                  onClick={() => table.previousPage()}
                >
                  Pág Prevía
                </button>
              )}

              {table.getCanNextPage() && (
                <button
                  className="rounded shadow-lg btn inline-flex px-3 gap-3"
                  onClick={() => table.nextPage()}
                >
                  Siguiente Pág
                </button>
              )}
            </div>

            <form
              className="flex gap-3 items-center"
              onSubmit={(e) => {
                e.preventDefault();
                table.setPageIndex(e.target.page.value);
              }}
            >
              <span>Página</span>

              <input
                type="number"
                name="page"
                id="page"
                min="0"
                className="inline-block rounded border w-12 py-1 text-center border-b-gray-300"
              />

              <span>de {table.getPageCount()}</span>
            </form>
          </footer>
        </>
      )}
    </div>
  );
};

export default Table;
