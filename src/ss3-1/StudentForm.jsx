import React from 'react';

const StudentForm = () => {
  return (
    <form style={{ marginTop: 20 }}>
      <h3>Thông Tin Sinh Viên</h3>
      <input placeholder="Mã sinh viên" /><br />
      <input placeholder="Tên sinh viên" /><br />
      <input placeholder="Tuổi" /><br />
      <input placeholder="Giới tính" value="Nam" readOnly /><br />
      <input placeholder="dd/mm/yyyy" /><br />
      <input placeholder="Hà Nội" /><br />
      <textarea placeholder="Địa chỉ"></textarea><br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;
