import React from 'react';
// import uuid from "react-uuid";
const Table = ({ tableData, setTableData, callback }) => {

    // const[editVal , setEditVal] = useState()

    const headerArray = ["", " ", "Name", "E-mail", "DOB", "Profile Pic", "Gender", "Level Of Education", "Password"]
    const headerRow = headerArray.map((tHead) => {
        return (
            <th key={tHead}>{tHead}</th>
        )
    })

    // for deleting table row 
    const handleDelete = (index) => {
        setTableData(tableData.filter((element, rowIndex) => rowIndex !== index))
    }

    const handleCallback = (index) => {
        callback(index)
    }

    const tableRows = tableData.map((userInfo, index) => {
        return (
            <tr>
                <td><a href="#" onClick={(e) => handleDelete(index)}>DEL</a></td>
                <td><a href="#" onClick={() => handleCallback(index)}>Edit</a></td>
                <td>{userInfo.name}</td>
                <td>{userInfo.email}</td>
                <td>{userInfo.dob}</td>
                <td><img className="imgDisplay" src={userInfo.image} alt="Profile Pic"></img></td>
                <td>{userInfo.gender}</td>
                <td>{userInfo.levelOfEducation}</td>
                <td>{userInfo.password}</td>
            </tr>
        )
    })
    return (<table className='table'>
        <thead>
            <tr>
                {headerRow}
            </tr>
        </thead>
        <tbody>
            {tableRows}
        </tbody>
    </table>)
}
export default Table

