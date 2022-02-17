import Item from '../Item/Item'

export default function ItemList ({ product }) {
  return (
    <>{product.map(item => <Item items={item} key={item.id} />)}</>
  )
}
