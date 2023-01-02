import React, { useState, useEffect } from 'react';
import css from '../PopupComponent/PopupComponent.css';
import x from '../../assests/x.png';
import jwt_decode from 'jwt-decode';
import { useAuth } from '../auth.context';
import axios from 'axios';

function PopupComponent() {
  const [open, setOpen] = React.useState();
  const [openActions, setOpenActions] = useState();
  const [selected, setSelected] = useState();
  const [ticketList, setTicketList] = useState([{ value: '' }]);
  const { userToken } = useAuth();
  const userName = jwt_decode(userToken).Emp_name;
  const decodtoken = jwt_decode(userToken);
  console.log(decodtoken);
  console.log(userName);

  const handleOpen = () => {
    setOpen(!open);
  };

  const [ticketDetails, setticketDetails] = useState({
    ticket_no: '',
    client: 'CW',
    team: 'CNS',
    name: userName,
    ticket_type: 'Story',
    story_point: '',
    start_date: '',
    end_date: '',
    hours: '',
    status: 'Completed',
    code_reviewer: '',
    code_deviation_count: '',
    bug_count: '',
    remarks: ''
  });

  useEffect(() => {}, [ticketDetails]);

  const postUser = async e => {
    // e.preventDefault();
    console.log(ticketDetails);
    axios.post('https://localhost:7040/api/User', ticketDetails).then(res => {
      alert('Ticket added successfully!!');
    });
  };

  const handleChangeticketno = e => {
    setticketDetails(prev => {
      return { ...prev, ticket_no: e.target.value };
    });
  };

  const handleChangetickettype = e => {
    setticketDetails(prev => {
      return { ...prev, ticket_type: e.target.value };
    });
  };

  const handleChangeteam = e => {
    setticketDetails(prev => {
      return { ...prev, team: e.target.value };
    });
  };

  const handleChangestorypoints = e => {
    setticketDetails(prev => {
      return { ...prev, story_point: e.target.value };
    });
  };

  const handleChangestartdate = e => {
    setticketDetails(prev => {
      return { ...prev, start_date: e.target.value };
    });
  };
  const handleChangeenddate = e => {
    setticketDetails(prev => {
      return { ...prev, end_date: e.target.value };
    });
  };

  const handleChangehours = e => {
    setticketDetails(prev => {
      return { ...prev, hours: e.target.value };
    });
  };

  const handleChangestatus = e => {
    console.log(e.target.value);
    setticketDetails(prev => {
      return { ...prev, status: e.target.value };
    });
  };
  const handleChangecodereveiwer = e => {
    setticketDetails(prev => {
      return { ...prev, code_reviewer: e.target.value };
    });
  };

  return (
    <div className={css.formdiv}>
      <form className={css.form_popup} id="myForm" onSubmit={postUser}>
        <div className={css.head}>
          <h5>Add Ticket</h5>
          <span>
            <button
              className={css.remove_btn}
              // onClick={() => {
              // 	const remove = passList.filter((i, j) => {
              // 		return index !== j;
              // 	});
              // 	setPassList(remove);
              // }}
            >
              <img src={x} onClick={handleOpen} />
            </button>
          </span>
        </div>
        {/* onSubmit={postPassenger} */}
        {/* {ticketList.map((singlepass, index) => (
          <div key={index} className="form-content"> */}
        <span className={css.book_input}>
          <div className={css.nextline}>
            <h6>Ticket No.
                    <span className={css.color}>*</span>
                </h6>
            <input
              id="Ticket No"
              placeholder="Ticket No"
              required
              onChange={e => {
                handleChangeticketno(e);
              }}
            />
          </div>
          <div className={css.nextline}>
            <h6>Ticket Type
                        <span className={css.color}>*</span>
                        </h6>
            <select
              id="Ticket Type"
                            required
              // placeholder="Ticket Type"
              onChange={e => {
                handleChangetickettype(e);
              }}
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
            <h6>Team
          <span className={css.color}>*</span>
          </h6>
            <select
              // type="number"
              id="Team"
              placeholder="Team"
              required
              onChange={e => {
                handleChangeteam(e);
              }}
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
            <h6>Story Points
            <span className={css.color}>*</span>
            </h6>
            <input
              type="number"
              id="Story Points"
              placeholder="Story Points"
              required
              onChange={e => {
                handleChangestorypoints(e);
              }}
            />
          </div>
        </span>

        {/* <div className={css.Dates}> */}
        <span className={css.book_input}>
          <div className={css.nextline}>
            <h6>Start Date
                        <span className={css.color}>*</span>
                        </h6>
            <input
              type="Date"
              id="Start Date"
              placeholder="Start Date"
                            required
              onChange={e => {
                handleChangestartdate(e);
              }}
            ></input>
          </div>
          <div className={css.nextline}>
            <h6>End Date</h6>
            <input
              type="Date"
              id="End Date"
              placeholder="End Date"
              onChange={e => {
                handleChangeenddate(e);
              }}
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
              onChange={e => {
                handleChangehours(e);
              }}
            />
          </div>
          <div className={css.nextline}>
            <h6>Status
            <span className={css.color}>*</span>
            </h6>
          
            <select
              id="Status"
              placeholder="Status"
              onChange={e => {
                handleChangestatus(e);
              }}
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
    
            onChange={e => {
              handleChangecodereveiwer(e);
            }}
          />
        </div>
        {/* </div>
        ))} */}
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
  );
}

export default PopupComponent;
