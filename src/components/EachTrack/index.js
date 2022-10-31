import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const EachTrack = props => {
  const {itemDetails, onDelete} = props
  const {id, name, imageUrl, genre, duration} = itemDetails

  const onDeleteItem = () => {
    onDelete(id)
  }
  return (
    <li>
      <img src={imageUrl} alt="track" />
      <p>{name}</p>
      <p>{genre}</p>
      <p>{duration}</p>
      <button type="button" testid="delete" onClick={onDeleteItem}>
        <AiOutlineDelete />
      </button>
    </li>
  )
}
export default EachTrack
