import React from 'react';
import css from '../FormComponent/FormComponent.css';

const FormComponent = () => {
  return (
    <div className={css.formdiv}>
      <form className={css.form_popup} id="myForm">
        <span>
          <button className={css.remove_btn} onClick={handleOpen}>
            X
          </button>
        </span>

        <h3>Add Ticket</h3>
        <span className={css.book_input}>
          <h5>Name</h5>
          <input id="Name" placeholder="Name" required />
        </span>

        <span className={css.book_input}>
          <h5>Ticket No.</h5>
          <input id="Ticket No" placeholder="Ticket No" required />
        </span>

        <span className={css.book_input}>
          <h5>Team</h5>
          <select id="Team" placeholder="Team" required>
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
          <select id="Ticket Type" placeholder="Ticket Type">
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
          />
        </span>

        <span className={css.Date_input}>
          <h5>Start Date</h5>
          <input type="Date" id="Start Date" placeholder="Start Date"></input>
          <h5>End Date</h5>
          <input type="Date" id="End Date" placeholder="End Date"></input>
        </span>
        <span className={css.book_input}></span>

        <span className={css.book_input}>
          <h5>Hours</h5>
          <input type="number" id="Hours" placeholder="Hours" required />

          <h5>Status</h5>
          <select id="Status" placeholder="Status">
            <option>Completed</option>
            <option>Incomplete</option>
            <option>Inprogress</option>
          </select>
        </span>

        <span className={css.book_input}></span>
        <div className={css.submitadd_btn}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
