import React, { useState, useEffect } from "react";
import InputText from "./InputText";
import GetDate from "./GetDate";
import SelectOptions from "./SelectOptions";
import RadioOptions from "./RadioOptions";
import InputFile from "./InputFile";
import Table from "./Table";

const Form = () => {
    const initialState = {
        name: '',
        email: '',
        dob: '',
        image: null,
        gender: '',
        levelOfEducation: '',
        password: '',
        confirmPassword: ''
    }
    const [tableData, setTableData] = useState([])
    const [userData, setUserData] = useState({ ...initialState })
    const [editUser, setEditUser] = useState(false)

    // saving form data to local storage
    useEffect((e) => {
        if (tableData.length > 0) {
            localStorage.setItem("tableData", JSON.stringify(tableData))
            for (const value of tableData){
                var imageURL = value.image;
                console.log(imageURL)
                // for (const entry of Object.keys(value)){
                //         if (entry === "image") {
                //             const fileReader = new FileReader();
                //             fileReader.readAsDataURL(imageURL);
                //             fileReader.onload = () => {
                //                 const finalResult = fileReader.result;
                //                 localStorage.setItem("imageURL", finalResult)
                //             }
                //         }
                // }
            }
           
        }
    }, [tableData])


    // fetching data from local storage
    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem("tableData"));
        if (savedData) {
            setTableData(savedData)
        }
    }, [])
    // const item = localStorage.getItem("imageURL")

    const validatePassword = (e) => {
        e.preventDefault();
        if (userData.password !== userData.confirmPassword) {
            alert("Password confirmation doesn't match !")
        }
        else {
            console.log({ ...userData });
            const checkEmptyInput = !Object.values(userData).every(result => result === "")
            if (checkEmptyInput) {
                const newData = (data) => ([...data, userData])
                if(editUser){
                    // let updatedUser = userData.map((user) => 
                    // {if (user.id === id)})
                    // setTableData()
                    setEditUser(false)
                }
                else{
                    setTableData(newData);
                }
                setUserData({ ...initialState });
            }
        }
    }

    const handleImage = (e) => {
        if (e.target.files && e.target.files[0]) {
            setUserData({ ...userData, image: URL.createObjectURL(e.target.files[0]) })
        }
    }
    
    const callback = (index) => {
        setEditUser(true)
        setUserData(tableData[index])
        }

    return (
        <>
            <div className="form">
                <form onSubmit={validatePassword}>
                    <div>
                        <InputText
                            label="Name"
                            placeholder="Name"
                            type="text"
                            onChange={e => setUserData({ ...userData, name: e.target.value })}
                            value={userData.name} />
                    </div>
                    <div>
                        <InputText
                            label="Email"
                            placeholder="e-mail"
                            type="email"
                            onChange={e => setUserData({ ...userData, email: e.target.value })}
                            value={userData.email} />
                    </div>
                    <div>
                        <GetDate
                            label="Date of Birth"
                            placeholder="DOB"
                            type="date"
                            onChange={e => setUserData({ ...userData, dob: e.target.value })}
                            value={userData.dob} />
                    </div>
                    <div>
                        <InputFile label="Upload Profile Pic" onChange={handleImage} image={userData.image} />
                    </div>
                    <div>
                        <RadioOptions
                            label="Gender"
                            btnList={["Male", "Female", "Other", "Wish not to Specify"]}
                            onChange={e => setUserData({ ...userData, gender: e.target.value })}
                            value={userData.gender}
                        />
                    </div>
                    <div>
                        <SelectOptions
                            label="Level of education"
                            optionList={["Higher Secondary (HSC)", "Senior Secondary (SSC)", "Diploma", "UnderGraduate (B.E. /B.Tech / BSc / BBA / B.Com)", "PostGraduate (M.E. / M.Tech / MSc / MBA / M.Com)"]}
                            onChange={e => setUserData({ ...userData, levelOfEducation: e.target.value })}
                            value={userData.levelOfEducation}
                        />
                    </div>
                    <div>
                        <InputText
                            label="Password"
                            placeholder="password"
                            type="password"
                            onChange={e => setUserData({ ...userData, password: e.target.value })}
                            value={userData.password} />
                    </div>
                    <div>
                        <InputText
                            label="Confirm Password"
                            placeholder="password"
                            type="password"
                            onChange={e => setUserData({ ...userData, confirmPassword: e.target.value })}
                            value={userData.confirmPassword} />
                    </div>
                    <button type="submit">Submit</button>
                    {/* type="submit" & onClick ={} should not be used together
                  instead the function should be provided to form opening tag */}
                </form>
            </div>
            <h1>Form Data</h1>
            <div className="tableHolder">
                <Table tableData={tableData} setTableData={setTableData} callback={callback} />
            </div>
        </>
    );
}
export default Form