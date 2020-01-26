import React, { useContext } from 'react'
import DataContext from '../../context/context'

const Repertory = () => {
  const { data } = useContext(DataContext)
  return (
    <>
      witaj świecie
    </>
  );
};

export default Repertory