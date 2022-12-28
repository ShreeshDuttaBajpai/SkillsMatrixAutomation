import React, { useState } from 'react'
import css from '../PopupComponent/PopupComponent.css'
import x from '../../assests/x.png'
function PopupComponent() {
    const [open, setOpen] = React.useState();
    const [openActions, setOpenActions] = useState();
    const [selected, setSelected] = useState();
   
    const handleOpen = () => {
      setOpen(!open);
    };
  return (
        <div className={css.formdiv}>
            <form className={css.form_popup} id="myForm" >
			<div className={css.head}>
			<h5>Add Ticket</h5>
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
                            
							<img src={x} />
						</button>
					</span>
				</div>	
              {/* onSubmit={postPassenger} */}
           
		

            <span className={css.book_input}>
                <div className={css.nextline}>
				<h6>Ticket No.</h6>
						<input
							id="Ticket No"
							placeholder="Ticket No"
							required
							// onChange={(e) => {
							// 	handleChangeName(index, e);
							// }}
						/>
                    </div>
                    <div className={css.nextline}>
                        <h6>Ticket Type</h6>
						<select
							id="Ticket Type"
							// placeholder="Ticket Type"
							// onChange={(e) => {
							// 	handleChangeGender(index, e);
							// }}
						>
							<option>Story</option>
							<option>Bug</option>
							<option>Task</option>
                            <option>Sub Task</option>
						</select>
                    </div>
				</span>
                    

          <span className={css.book_input}>
          <div className={css.nextline}>
		  <h6>Team</h6>
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
            </div>
            <div className={css.nextline}>
            <h6>Story Points</h6>
						<input
							type="number"
							id="Story Points"
							placeholder="Story Points"
							required
							// onChange={(e) => {
							// 	handleChangeAge(index, e);
							// }}
						/>
            </div>
			</span>
				
			
                    {/* <div className={css.Dates}> */}
					<span className={css.book_input}>
                    <div className={css.nextline}>
					    <h6>Start Date</h6>
						<input
							type="Date"
							id="Start Date"
							placeholder="Start Date"
							// onChange={(e) => {
							// 	handleChangeUid(index, e);
							// }}
						></input>
            </div>
            <div className={css.nextline}>
						 <h6>End Date</h6>
						<input
							type="Date"
							id="End Date"
							placeholder="End Date"
							// onChange={(e) => {
							// 	handleChangeUid(index, e);
							// }}
						></input> 
            </div>   
					</span>
                    {/* </div> */}

          <span className={css.book_input}>
          <div className={css.nextline}>
		  <h6>Hours</h6>
						<input
							type="number"
							id="Hours"
							placeholder="Hours"
							required
							// onChange={(e) => {
							// 	handleChangeAge(index, e);
							// }}
						/>
                        </div>
                        <div className={css.nextline}>
						<h6>Status</h6>
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
                        </div>
					</span>

                    {/* <span className={css.book_input}> */}
                    <div className={css.next}>
                    <h6>CodeReviewer</h6>
						<input
							id="CodeReviewer"
							placeholder="CodeReviewer"
							required
							// onChange={(e) => {
							// 	handleChangeName(index, e);
							// }}
						/>
                        </div>
					{/* </span> */}

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
				<button type="submit">Save</button>
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
  )
}

export default PopupComponent