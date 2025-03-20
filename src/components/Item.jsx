/* eslint-disable react/prop-types */
const Item = ({ item, onDelete }) => {
    const handleDelete = () => {
        onDelete(item.id);
    };

    return (
        <div className="item-card">
            <h3>{item.name}</h3>
            <p>Status: <span className={`status ${item.status}`}>{item.status}</span></p>
            <div className="item-actions">
                <button 
                    className="delete-btn" 
                    onClick={handleDelete}
                >
                    Delete
                </button>
                <button className="edit-btn">Edit</button>
            </div>
        </div>
    );
};

export default Item;