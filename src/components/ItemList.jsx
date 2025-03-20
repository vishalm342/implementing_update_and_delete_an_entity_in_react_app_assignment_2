/* eslint-disable react/prop-types */
import Item from "./Item";

const ItemList = ({ items, onDelete }) => {
    if (!items || items.length === 0) {
        return <p>No items found.</p>;
    }

    return (
        <div className="item-list">
            {items.map((item) => (
                <Item key={item.id} item={item} onDelete={onDelete} />
            ))}
        </div>
    );
};

export default ItemList;