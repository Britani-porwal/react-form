const SelectOptions = ({ label, optionList , onChange , value}) => {
  const list = optionList.map((option) => {
    return <option key={option} value={option} >{option}</option>
  })

  return (
    <label>{label}{' '}<sup>*</sup> : {' '}
      <select value = {value} onChange={onChange} required>
        {list}
      </select>
    </label>
  )
}
export default SelectOptions