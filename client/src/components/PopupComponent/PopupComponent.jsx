import React, { useState, useEffect } from 'react';
import css from '../PopupComponent/PopupComponent.css';
import x from '../../assests/x.png';
import jwt_decode from 'jwt-decode';
import { useAuth } from '../auth.context';
import axios from 'axios';
import { ButtonComponent } from '../ButtonComponent/ButtonComponent';


function PopupComponent(props) {
  const [open, setOpen] = React.useState();
  const [openActions, setOpenActions] = useState();
  const [selected, setSelected] = useState();
  const { userToken } = useAuth();
  const userName = jwt_decode(userToken).Emp_name;
  const decodtoken = jwt_decode(userToken);

  const handleOpen = () => {
    setOpen(!open);
  };
  

  const [ticketDetails, setticketDetails] = useState({
    ticket_no: '',
    client: 'CW',
    team: 'CNS',
    name: userName,
    ticket_type: 'Story',
    story_point: 0,
    start_date: '',
    end_date: '',
    hours: 0,
    status: 'Completed',
    code_reviewer: '',
    code_deviation_count: '',
    bug_count: '',
    remarks: ''
  });

  useEffect(() => {}, [ticketDetails]);

  const handleChangeticketno = e => {
    props.setNewData(prev => {
      return { ...prev, ticket_no: e.target.value };
    });
  };

  const handleChangetickettype = e => {
    props.setNewData(prev => {
      return { ...prev, ticket_type: e.target.value };
    });
  };

  const handleChangeteam = e => {
    props.setNewData(prev => {
      return { ...prev, team: e.target.value };
    });
  };

  const handleChangestorypoints = e => {
    props.setNewData(prev => {
      return { ...prev, story_point: e.target.value };
    });
  };

  const handleChangestartdate = e => {
    props.setNewData(prev => {
      return { ...prev, start_date: e.target.value };
    });
  };
  const handleChangeenddate = e => {
    props.setNewData(prev => {
      return { ...prev, end_date: e.target.value };
    });
  };

  const handleChangehours = e => {
    props.setNewData(prev => {
      return { ...prev, hours: e.target.value };
    });
  };

  const handleChangestatus = e => {
    console.log(e.target.value);
    props.setNewData(prev => {
      return { ...prev, status: e.target.value };
    });
  };
  const handleChangecodereveiwer = e => {
    props.setNewData(prev => {
      return { ...prev, code_reviewer: e.target.value };
    });
  };

  const handleChangecode_deviation_count = e => {
    props.setNewData(prev => {
      return { ...prev, code_deviation_count: e.target.value };
    });
  };
  const handleChangebugs_count = e => {
    props.setNewData(prev => {
      return { ...prev, bugs_count: e.target.value };
    });
  };

  const handleChangeremarks = e => {
    props.setNewData(prev => {
      return { ...prev, remarks: e.target.value };
    });
  };


  return (

  <div className={props.ename}>
    <div className={css.formdiv} >
      <form
        className={css.form_popup}
        id="myForm"
        onSubmit={e => {
          props.val2();
        }}
      >
        <div className={css.head}>
          <h5>{props.val1}</h5>
          <span>
            <button className={css.remove_btn} onClick={handleOpen}>
              <img src={x} />
            </button>
          </span>
        </div>
        {/* onSubmit={postPassenger} */}
        {/* {ticketList.map((singlepass, index) => (
          <div key={index} className="form-content"> */}
        {window.location.pathname=== '/CodeReview' ?
        (<>
         <span className={css.book_input}>
        <div className={css.nextline}>
            <h6>Code Deviation Count</h6>
            <input
              type="number"
              id="code_deviation_count"
              placeholder="code_deviation_count"
              defaultValue={props.code_deviation_count}
              onChange={e => {
                handleChangecode_deviation_count(e);
              }}
            />
          </div>
      <div className={css.nextline}>
      <h6>Bugs Count</h6>
      <input
      type="number"
      id="bugs_count"
      placeholder="BugsCount"
      defaultValue={props.bugs_count}
      onChange={e => {
        handleChangebugs_count(e);
      }}
     />
    </div>
    </span> 
    <div className={css.next}>
          <h6>Remarks</h6>
          <input
            id="remarks"
            placeholder="remarks"
            defaultValue={props.remarks}
            onChange={e => {
              handleChangeremarks(e);
            }}
          />
        </div>
    </>):
(
  <>
        <span className={css.book_input}>
          <div className={css.nextline}>
            <h6>
              Ticket No.
              <span className={css.color}>*</span>
            </h6>
            <input
              id="Ticket No"
              placeholder="Ticket No"
              required
              defaultValue={props.ticketno ? props.ticketno : ''}
              onChange={e => {
                handleChangeticketno(e);
              }}
            />
          </div>
          <div className={css.nextline}>
            <h6>
              Ticket Type
              <span className={css.color}>*</span>
            </h6>
            <select
              id="Ticket Type"
              required
              // placeholder="Ticket Type"
              defaultValue={props.tickettype ? props.tickettype : ''}
              onChange={e => {
                handleChangetickettype(e);
              }}
            >
              <option>Story</option>
              <option>Bug</option>
              <option>Task</option>
              <option>Sub-Task</option>
            </select>
          </div>
        </span>

        <span className={css.book_input}>
          <div className={css.nextline}>
            <h6>
              Team
              <span className={css.color}>*</span>
            </h6>
            <select
              // type="number"
              id="Team"
              placeholder="Team"
              required
              defaultValue={props.team ? props.team : ''}
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
            <h6>
              Story Points
              <span className={css.color}>*</span>
            </h6>
            <input
              type="number"
              id="Story Points"
              placeholder="Story Points"
              required
              defaultValue={props.storypoints ? props.storypoints : ''}
              onChange={e => {
                handleChangestorypoints(e);
              }}
            />
          </div>
        </span>

        {/* <div className={css.Dates}> */}
        <span className={css.book_input}>
          <div className={css.nextline}>
            <h6>
              Start Date
              <span className={css.color}>*</span>
            </h6>
            <input
              type="Date"
              id="Start Date"
              placeholder="Start Date"
              required
              defaultValue={props.startdate ? props.startdate : ''}
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
              defaultValue={props.enddate ? props.enddate : ''}
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
              defaultValue={props.hours}
              onChange={e => {
                handleChangehours(e);
              }}
            />
          </div>
          <div className={css.nextline}>
            <h6>
              Status
              <span className={css.color}>*</span>
            </h6>
            <select
              id="Status"
              placeholder="Status"
              defaultValue={props.status ? props.status : ''}
              onChange={e => {
                handleChangestatus(e);
              }}
            >
              <option>Completed</option>
              <option>Incomplete</option>
              <option>InProgress</option>
            </select>
          </div>
        </span>

        {/* <span className={css.book_input}> */}
        <div className={css.next}>
          <h6>CodeReviewer</h6>
          <input
            id="CodeReviewer"
            placeholder="CodeReviewer"
            defaultValue={props.codereviewer ? props.codereviewer : ''}
            onChange={e => {
              handleChangecodereveiwer(e);
            }}
          />
        </div>
        </>
)
          }
        {/* </div>
        ))} */}
        <div className={css.submitadd_btn}>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
    </div>     
  );
  
}

export default PopupComponent;
