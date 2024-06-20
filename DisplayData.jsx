import React, { useState } from 'react';
import EditForm from './EditForm';
import DeleteButton from './DeleteButton';

const DisplayData = ({ data, handleUpdate, handleDelete }) => {
  const [editItemId, setEditItemId] = useState(null); // State to track the item being edited

  const handleEdit = (id) => {
    setEditItemId(id);
  };

  const cancelEdit = () => {
    setEditItemId(null);
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{editItemId === item.id ? (
                <EditForm
                  initialData={item}
                  onSubmit={(updatedItem) => {
                    handleUpdate(updatedItem);
                    cancelEdit();
                  }}
                  onCancel={cancelEdit}
                />
              ) : (
                item.name
              )}</td>
              <td>{editItemId === item.id ? (
                <EditForm
                  initialData={item}
                  onSubmit={(updatedItem) => {
                    handleUpdate(updatedItem);
                    cancelEdit();
                  }}
                  onCancel={cancelEdit}
                />
              ) : (
                item.age
              )}</td>
              <td>{editItemId === item.id ? (
                <EditForm
                  initialData={item}
                  onSubmit={(updatedItem) => {
                    handleUpdate(updatedItem);
                    cancelEdit();
                  }}
                  onCancel={cancelEdit}
                />
              ) : (
                item.phone
              )}</td>
              <td>{editItemId === item.id ? (
                <EditForm
                  initialData={item}
                  onSubmit={(updatedItem) => {
                    handleUpdate(updatedItem);
                    cancelEdit();
                  }}
                  onCancel={cancelEdit}
                />
              ) : (
                item.email
              )}</td>
              <td>
                {editItemId === item.id ? (
                  <>
                    <button onClick={() => handleUpdate(item)}>Save</button>
                    <button onClick={cancelEdit}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEdit(item.id)}>Edit</button>
                    <DeleteButton onDelete={() => handleDelete(item.id)} />
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayData;

