import React, { useState } from 'react';

const AddContact = (props) => {
    let[name, setName] = useState('');
    let[surname, setSurname] = useState('');
    let[phone, setPhone] = useState('')


    function handleClick(){
        let newContact ={
            name,
            surname,
            phone,
            id: Date.now()
        }
        props.handleNewContact(newContact)
        setName('')
        setSurname('')
        setPhone('')
    }

    return (
        <div>
            <input className='add' onChange={(e) => setName(e.target.value)} type="text" placeholder='Имя' value={name}/>
            <input className='add' onChange={(e) => setSurname(e.target.value)} type="text" placeholder='Фамилия'value={surname}/>
            <input className='add' onChange={(e) => setPhone(e.target.value)} type="text" placeholder='Номер телефона' value={phone}/>
            <button className='dobavit' onClick={handleClick}>Добавить контакт</button>
        </div>
    );
};

export default AddContact;