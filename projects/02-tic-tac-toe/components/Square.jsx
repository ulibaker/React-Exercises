export const Square = ({ children, isSelected, updateBoard, index }) => {
    const classNameS = `square ${isSelected ? 'is-selected' : '' }`
  const handleClick = () => {
    updateBoard(index)
  }
  
    return (
      <div onClick = {handleClick} className = {classNameS}>
        {children}
      </div>
    )
  }