import PropTypes from 'prop-types'

export default function Input({type}) {
  return (
     <input type={type} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    default: 'text'
}
