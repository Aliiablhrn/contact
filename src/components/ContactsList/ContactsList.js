import React from 'react';

const ContactsList = (props) => {
    return (
        <div>
            <h2>Контакты</h2>
            {props.contacts.map((item, index) => (
                <ul className='imena' key={item.id}>
                    <li className='spisok'>{item.name}</li>
                    <li className='spisok'>{item.surname}</li>
                    <li className='spisok'>{item.phone}</li>
                    <li> 
                        <button className='delete' onClick={() => props.handleDeleteContact(item.id)}>Удалить</button>
                        <button className='update' onClick={() => props.handleEditIndex(index)}>Редактировать</button>
                    </li>
                </ul>
            ))}
        </div>
    );
};

export default ContactsList;