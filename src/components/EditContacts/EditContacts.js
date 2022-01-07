import React, {useState} from 'react';


const EditContacts = (props) => {
    let[name, setName] = useState(props.editContact.name);
    let[surname, setSurname] = useState(props.editContact.surname);
    let[phone, setPhone] = useState(props.editContact.phone)

    function handleSaveClick(){
        let contact = {...props.editContact}
        contact.name = name;
        contact.surname = surname;
        contact.phone = phone;

        props.handleSaveEditedContact(contact)
        setName('')
        setSurname('')
        setPhone('')
    }

    return (
        <div>
            <input className='edited'
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder='Имя'
                value={name}/>
            <input className='edited'
                onChange={(e) => setSurname(e.target.value)}
                type="text"
                placeholder='Фамилия'
                value={surname}/>
            <input className='edited'
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                placeholder='Номер телефона'
                value={phone}/>
            <button className='btn-save' onClick={handleSaveClick}>Сохранить</button>
        </div>
    );
};

export default EditContacts;