import HomePage from "../pages/HomePage";
import PropTypes from 'prop-types';

function PaintingList({ items }) {
    return (
            <ul>
        {items.map(item => (
        <li  key={item.id}>
        <HomePage
       
        imageUrl={item.url}
        title={item.title}
        author={item.author.tag}
        price={item.price}
        quantity={item.quantity}
  
      />
        </li>
    ))}
    </ul>
    )

}

PaintingList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })),
}

export default PaintingList;