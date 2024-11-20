const CardInfo = ({icon, title, description}) => {
  return (
    <div className="w-full border rounded-lg p-8 bg-white flex flex-col items-center text-center mb-8 shadow-xl shadow-primary-color min-h-[350px]">
      <div className="text-5xl text-primary-color mb-6">{icon}</div>
      <h4 className="text-2xl font-montserrat font-bold mb-4">{title}</h4>
      <p className="text-base font-montserrat font-normal">{description}</p>
    </div>
  )
}

export default CardInfo
