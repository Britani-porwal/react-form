const GetDate = ({ label, placeholder, type, onChange, value }) => {
    return (
        <label>
            {label}{' '}<sup>*</sup> : {' '}
            <input
                placeholder={"Enter " + placeholder}
                type={type}
                onChange={onChange}
                value={value}
                required >
            </input>
        </label>
    )
}
export default GetDate