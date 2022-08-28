function ResetButton({ onClick }) {
  const buttonStyle = { backgroundColor: 'lightgreen' }

  return (
    <div>
      <button onClick={onClick} style={buttonStyle}>
        Reset
      </button>
    </div>
  )
}

export default ResetButton
