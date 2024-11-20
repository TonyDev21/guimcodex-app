const CardDetailItem = ({title, price}) => {
  return (
    <div className="flex justify-between px-4 py-4  border-b border-gray-400">
        <p className="inline">{title}</p>
        <span className="">{price}</span>
    </div>
  )
}

export default CardDetailItem
