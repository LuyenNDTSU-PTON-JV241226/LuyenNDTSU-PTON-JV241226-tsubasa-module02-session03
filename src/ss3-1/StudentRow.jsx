import React from 'react';

const StudentRow = ({ index, student }) => {
  return (
    <tr>
      <td>{index}</td>
      <td>{student.studentCode}</td>
      <td>{student.studentName}</td>
      <td>{student.age}</td>
      <td>{student.gender}</td>
      <td>
        <button style={{ background: 'red', color: 'white', marginRight: 5 }}>Xem</button>
        <button style={{ background: 'orange', color: 'white', marginRight: 5 }}>Sửa</button>
        <button style={{ background: 'green', color: 'white' }}>Xóa</button>
      </td>
    </tr>
  );
};

export default StudentRow;
