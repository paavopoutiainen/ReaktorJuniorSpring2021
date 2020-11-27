import React from 'react'
import {
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core'


const TableHeader = ({ columnNames }) => {
  return (
    <TableHead>
      <TableRow>
        {columnNames.map((name) => (
          <TableCell
            key={name}
            align={'center'}
          >
            {name}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;