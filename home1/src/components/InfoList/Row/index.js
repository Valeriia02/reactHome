import React from 'react';

const Row = ({ name, price, time }) => {
    return (
        <>
        <input type="checkbox"  /> 
        <tr>
            <td> {name} </td>
            <td>{price}</td>
            <td>{time}</td>
        </tr>
        <br />
      </>
    );
}

export default Row;
