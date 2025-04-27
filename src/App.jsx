import './App.css'
import StudentForm from './ss3-1/StudentForm';
import StudentTable from './ss3-1/StudentTable';
import LandingPage from './ss3-3/pages/LandingPage';

function App() {
  const students = [
    { id: 1, studentCode: 'SV001', studentName: 'Nguyễn Văn A', age: 20, gender: 'Nam' },
    { id: 2, studentCode: 'SV002', studentName: 'Nguyễn Văn B', age: 21, gender: 'Nữ' },
    { id: 3, studentCode: 'SV003', studentName: 'Nguyễn Văn C', age: 19, gender: 'Nam' },
  ];
  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: 20 }}>
      <div style={{ flex: 1 }}>
        <button>Thêm mới sinh viên</button>
        <input placeholder="Search Here" />
        <button>Tìm kiếm</button>
        <button>Sắp xếp</button>

        <StudentTable students={students} />
      </div>
      <div style={{ flex: 1 }}>
        <StudentForm/>
      </div>
    </div>
    <LandingPage/>
    </>
  )
}

export default App
