export default ({children, onRemove}) => (
  <div className='card'>
    {children}
    <button onClick={onRemove}>Remove</button>
  </div>
)
