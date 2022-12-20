import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Tables from '../components/TableComponent/Tables'
import css from '../../src/Pages/TablePage.css'
import bgHomePicture from '../assests/bg-image.jpg';
import { ButtonComponent } from '../components/ButtonComponent/ButtonComponent';


 

  const add = () =>  {
    function openForm() {
      document.getElementById("myForm").style.display = "block";
    }
    
    function closeForm() {
      document.getElementById("myForm").style.display = "none";
    }

    return 
    <form className={css.showForm}>
      <h1>Column Name</h1>
  
      <label for="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="email" required></input>
  
      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required></input>
  
      <button type="submit" class="btn">Login</button>
      <button type="button" class="btn cancel" onclick="closeForm()">Submit</button>
    </form>
    
    }
    

function TablePage() {
  const [openForm, setOpenForm] = useState(false);
  return (
    <div className={css.tabb}>
      <Navbar/>
            <ButtonComponent
                cname={css.button1}
                value="Add table"
                openForm = {openForm}
                setOpenForm = {setOpenForm}
            />
        <div className={openForm ? css.showForm : css.hideForm }>
          <h2>Hii</h2>
        </div>
      <Tables />
      
    </div>
  )
}

export default TablePage;
