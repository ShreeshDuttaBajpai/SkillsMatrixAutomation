import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Tables from '../components/TableComponent/Tables'
import css from '../../src/Pages/TablePage.css'
import bgHomePicture from '../assests/bg-image.jpg';
import { ButtonComponent } from '../components/ButtonComponent/ButtonComponent';

function TablePage() {
  const [open, setOpen] = React.useState();
  const [openActions, setOpenActions] = useState();
  const [selected, setSelected] = useState();
  const handleOpen = () => {
    setOpen(!open);
  };

  const handleOpenActions = () => {
    setOpenActions(!openActions);
  };

  return (    
    <div className={css.tabb}>  
      <Navbar/>
      <h2>User Dashboard</h2>
      <div className={css.dropdowndiv}>
            <ButtonComponent selected={selected}
                cname={css.Actionsbutton}
                value="Actions"
                disable={true}
                run={handleOpenActions}
            /> </div>
            {selected && openActions ?(
        <ul className={css.menu}>
          <li className={css.menu_item}>
            <ButtonComponent 
            cname={css.button1}
            value="Edit"
            disable={true} />
          </li>
          <li className={css.menu_item}>
            <ButtonComponent  
            cname={css.button1}
            value="Delete"
            disable={true} />
          </li>
        </ul>
      ) : null}
     
      <div className={css.dropdowndiv}>
        <ButtonComponent
        cname={css.button1}
        value="Add"
        disable={false}
        run={handleOpen}
        />
        {open?(
          <div className={css.formdiv}>
			
            <form className={css.form_popup} id="myForm" >
			<span>
						<button
							className={css.remove_btn}
							onClick={handleOpen}
							// onClick={() => {
							// 	const remove = passList.filter((i, j) => {
							// 		return index !== j;
							// 	});
							// 	setPassList(remove);
							// }}
						>
							X
						</button>
					</span>

					
              {/* onSubmit={postPassenger} */}
            <h3>Add Ticket</h3>
			<span className={css.book_input}>
		  <h5>Name</h5>
						<input
							id="Name"
							placeholder="Name"
							required
							// onChange={(e) => {
							// 	handleChangeName(index, e);
							// }}
						/>
					</span>

            <span className={css.book_input}>
				<h5>Ticket No.</h5>
						<input
							id="Ticket No"
							placeholder="Ticket No"
							required
							// onChange={(e) => {
							// 	handleChangeName(index, e);
							// }}
						/>
					</span>

          <span className={css.book_input}>
		  <h5>Team</h5>
			<select
					// type="number"
					id="Team"
					placeholder="Team"
					required
            	>
            	<option>CNS</option>
				<option>Mobile Team</option>
				<option>Partner Service</option>
            	<option>Contact</option>
				<option>CP</option>
				<option>Event Bridge</option>
            </select>
			</span>
         
					<span className={css.book_input}>
					<h5>Ticket Type</h5>
						<select
							id="Ticket Type"
							placeholder="Ticket Type"
							// onChange={(e) => {
							// 	handleChangeGender(index, e);
							// }}
						>
							<option>Story</option>
							<option>Bug</option>
							<option>Task</option>
              <option>Sub Task</option>
						</select>
					</span>
			
          <span className={css.book_input}>
		  <h5>Story Points</h5>
						<input
							type="number"
							id="Story Points"
							placeholder="Story Points"
							required
							// onChange={(e) => {
							// 	handleChangeAge(index, e);
							// }}
						/>
					</span>

					<span className={css.Date_input}>
					<h5>Start Date</h5>
						<input
							type="Date"
							id="Start Date"
							placeholder="Start Date"
							// onChange={(e) => {
							// 	handleChangeUid(index, e);
							// }}
						></input>
						 <h5>End Date</h5>
						<input
							type="Date"
							id="End Date"
							placeholder="End Date"
							// onChange={(e) => {
							// 	handleChangeUid(index, e);
							// }}
						></input>
					</span>
          <span className={css.book_input}>
		 
					</span>

          <span className={css.book_input}>
		  <h5>Hours</h5>
						<input
							type="number"
							id="Hours"
							placeholder="Hours"
							required
							// onChange={(e) => {
							// 	handleChangeAge(index, e);
							// }}
						/>

						<h5>Status</h5>
						<select
							id="Status"
							placeholder="Status"
							// onChange={(e) => {
							// 	handleChangeGender(index, e);
							// }}
						>
							<option>Completed</option>
							<option>Incomplete</option>
							<option>Inprogress</option>
						</select>
					</span>

          <span className={css.book_input}>
		  
					</span>

					{/* <span>
						<button
							className={css.remove_btn}
							onClick={() => {
								const remove = passList.filter((i, j) => {
									return index !== j;
								});
								setPassList(remove);
							}}
						>
							X
						</button>
					</span> */}
				
			{/* <div className={css.add_user}>
				<button
					className={css.add_btn}
					onClick={() => {
						addPassenger();
					}}
				>
					+ Add Another User
				</button>
			</div> */}
			<div className={css.submitadd_btn}>
				<button type="submit">Submit</button>
      </div>
      </form>
            
              {/* <div className={css.Main}>
                <div className={css.popup}>
                  <div className={css.popup_header}>
                    <h1>Add User</h1>
                    <h1>x</h1>
                  </div>
                </div>
                <input type="text">Name</input>
              </div> */}
          </div>
          ) : null}
      </div>
      <Tables setSelected={setSelected}/>
    </div>
  )
}

export default TablePage;