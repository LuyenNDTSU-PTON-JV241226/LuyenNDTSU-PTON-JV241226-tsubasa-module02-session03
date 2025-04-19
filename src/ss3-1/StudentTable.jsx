import React from 'react';
import StudentRow from './StudentRow';

const StudentTable = ({ students }) => {
  return (
    <table border="1" cellPadding="10" style={{ width: "100%", marginTop: 20 }}>
      <thead>
        <tr>
          <th>#</th>
          <th>Mã sinh viên</th>
          <th>Tên sinh viên</th>
          <th>Tuổi</th>
          <th>Giới tính</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <StudentRow key={student.id} index={index + 1} student={student} />
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
