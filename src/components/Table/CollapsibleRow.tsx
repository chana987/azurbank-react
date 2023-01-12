import React, { useState } from 'react';
import { Column } from 'utils/types';
import CollapsedRow from './CollapsedRow';
import Row from './Row';

interface RowProps<T> {
  columns: Column[];
  index: number;
  row: T;
}

const CollapsibleRow = <T extends { id: string }> (props: RowProps<T>) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Row key={props.index + 1} row={props.row} columns={props.columns} open={open} setOpen={setOpen} />
      <CollapsedRow key={(props.index + 1) * 1000} row={props.row} open={open} />
    </>
  );
}

export default CollapsibleRow;