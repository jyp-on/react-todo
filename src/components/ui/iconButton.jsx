const IconButton = ({icon, textColor, onClick}) => {
  return (
    <button onClick={onClick} className={`w-8 text-xl font-semibold cursor-pointer ${textColor}`}>
        {icon}
    </button>
  )
}

export default IconButton