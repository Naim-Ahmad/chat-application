// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types'
export default function Input({type, placeholder, name, label}) {
  return (
    <div className='mb-3'>
      <label htmlFor={name} className='block mb-2'>{label}</label>
       <input type={type} placeholder={placeholder} name={name} className="input input-bordered w-full max-w-xs" />
    </div>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string
}
