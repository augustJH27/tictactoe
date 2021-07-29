import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';

const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border:'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}

function PhoneBookForm({ addEntryToPhoneBook }) {
  const name = useRef(null)
  const lastName = useRef(null);
  const phone = useRef(null);

  return (
    <form onSubmit={e => 
    { e.preventDefault()
    addEntryToPhoneBook(prev => ([...prev, 
    {userFirstName: name.current.value,
    userLastName: lastName.current.value,
    userPhone: phone.current.value }]))
     }} 
     style={style.form.container}>
      <label>First name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname' 
        ref={name}
        type='text'
        required
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userLastname'
        name='userLastname' 
        ref={lastName}
        type='text' 
        required
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone' 
        name='userPhone' 
        type='text'
        ref={phone}
        required
      />
      <br/>
      <input 
        style={style.form.submitBtn} 
        className='submitButton'
        type='submit' 
        value='Add User' 
      />
    </form>
  )
}

function InformationTable({ phoneBook }) {
  return (
    <table style={style.table} className='informationTable'>
      <thead> 
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
      <tbody>
      {phoneBook.map(el => (
        <tr>
        <td>{el.userFirstName}</td>
        <td>{el.userLastName}</td>
        <td>{el.userPhone}</td>
        </tr>
      ))} 
      </tbody>
    </table>
  );
}

function Application(props) {
  const [book, setBook] = useState([{
  userFirstName: 'Coder',
  userLastName: 'Byte',
  userPhone: '8885559999'
  }]);

  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={setBook} />
      <InformationTable phoneBook={book}/>
    </section>
  );
}

ReactDOM.render(
  <Application />,
  document.getElementById('root')
);