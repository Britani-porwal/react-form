const InputFile = ({ label, onChange, image }) => {
    return (
        <label>
            {label} : {' '}
            <input
                type="file"
                onChange={onChange}
                accept="image/*" >
            </input>
            {image && <img className="imgDisplay" src={image} alt="Pofile Pic" />}
        </label>
    )
}
export default InputFile