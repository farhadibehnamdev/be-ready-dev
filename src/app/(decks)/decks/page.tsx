import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Button,
} from "@nextui-org/react";

const columns = [
  {
    key: "deck",
    label: "Deck",
  },
  {
    key: "new",
    label: "New",
  },
  {
    key: "learn",
    label: "Learn",
  },
  {
    key: "due",
    label: "Due",
  },
];

export default async function Deck() {
  return (
    <div className="my-32 px-10 text-center container h-screen">
      <Button
        className="mb-10"
        startContent={<Icon icon="codicon:add" />}
        size="lg"
        color="primary"
        variant="solid"
      >
        Create Deck
      </Button>
      <Table>
        <TableHeader>
          {columns.map((column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          ))}
        </TableHeader>
        <TableBody className="text-white font-bold text-2xl" items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <p className="my-20">Studied 0 cards in 0 seconds today (0s/card)</p>
    </div>
  );
}
