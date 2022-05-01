
const ItemList = ( {dogData} ) => {
  return (
    <div style={{border:'solid green 2px', margin:'20px', padding:'20px'}}>
        <strong>{dogData.name}</strong>
        <div>{dogData.breed}</div>
    </div>
  )
}
export default ItemList