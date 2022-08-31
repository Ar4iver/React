import Card from './Card'

function CardList(props) {

    const { goods } = props

  return (
    <>
      <div>
        {goods.map((card) => (
            <Card key={card.id} />
        ))}
      </div>
    </>
  )
}

export default CardList
