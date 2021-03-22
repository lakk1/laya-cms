import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Image,
  chakra,
  Text,
  Flex,
} from "@chakra-ui/react";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { useTable, useSortBy } from "react-table";
import { useMemo } from "react";
import Router from "next/router";

const getImageURL = (media) => {
  if (media && media?.length > 0) {
    return media[0].imageURL;
  }
};

function ProductsTable({ products }) {
  const data = useMemo(() => [...products], []);

  const columns = useMemo(
    () => [
      {
        Header: "Title",
        accessor: (data) => {
          const imageURL = getImageURL(data?.media);
          return (
            <Flex
              cursor="pointer"
              onClick={() => {
                Router.push(`/admin/products/${data.id}`);
              }}
              _hover={{ bg: "pink.100" }}
            >
              {imageURL && <Image width="40px" src={imageURL} />}
              <Text ml={4} alignSelf="center">
                {data.title}
              </Text>
            </Flex>
          );
        },
        id: "title",
      },
      {
        Header: "Brand",
        accessor: "brand",
      },
      {
        Header: "Code",
        accessor: "sku",
      },
      {
        Header: "Price",
        accessor: "price",
      },

      {
        Header: "Quantity",
        accessor: "quantity",
        isNumeric: true,
      },
      {
        Header: "Status",
        accessor: "status",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy);

  return (
    <Table {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup) => (
          <Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <Th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                isNumeric={column.isNumeric}
              >
                {column.render("Header")}
                <chakra.span pl="4">
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <TriangleDownIcon aria-label="sorted descending" />
                    ) : (
                      <TriangleUpIcon aria-label="sorted ascending" />
                    )
                  ) : null}
                </chakra.span>
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <Tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <Td {...cell.getCellProps()} isNumeric={cell.column.isNumeric}>
                  {cell.render("Cell")}
                </Td>
              ))}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
}

export default ProductsTable;
