import React, { useState } from 'react'
import {
  Table,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
  TablePagination
} from '@material-ui/core'
import TableHeader from "./TableHeader"

const columns = [
  {
    name: 'Id',
    key: 'id'
  },
  {
    name: 'Name',
    key: 'name'
  },
  {
    name: 'Manufacturer',
    key: 'manufacturer'
  },
  {
    name: 'Color',
    key: 'color'
  },
  {
    name: 'Price',
    key: 'price'
  },
  {
    name: 'Availability',
    key: 'availability'
  }
]

const ProductTable = ({ data }) => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(50)

  const handleChangePage = (event, newPage) => {
      setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(event.target.value)
      setPage(0)
  }

  return (
      <>
        <TableContainer style={{overflow: "initial"}}>
          <Table stickyHeader>
            <TableHeader columnNames={columns.map((column) => column.name)}/>
            <TableBody>
              {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((productObject) => {
                return (
                  <TableRow hover key={productObject.id}>
                    {columns.map((column, index) => {
                      return (
                        <TableCell
                          key={index}
                          align={'center'}
                        >
                            {productObject[column.key]}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 50, 100, 200, 500, 1000, 5000, { value: -1, label: 'All' }]}
          component='div'
          count={data.length}
          page={page}
          rowsPerPage={rowsPerPage}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          style={{position: "fixed", width: "100%", bottom: 0, backgroundColor: "white", borderTop: "solid gray 1px", zIndex: 1}}
        />
      </>
  )
}
export default ProductTable