import React, { useEffect } from 'react';
import css from '../PopupComponent/PopupComponent.css';
import x from '../../assests/x.png';

const PopupComponent = props => {
  useEffect(() => {
    console.log(open);
  }, [open]);

  useEffect(() => {}, [props.ticketDetails]);

  return (
    <div className={props.ename}>
      <div className={css.formdiv}>
        <form
          className={css.form_popup}
          id="myForm"
          onSubmit={e => {
            // e.preventDefault();
            props.val2();
          }}
        >
          <div className={css.head}>
            <h5>{props.val1}</h5>
            <span>
              <button
                type="button"
                className={css.remove_btn}
                onClick={props.handleOpen}
              >
                <img src={x} />
              </button>
            </span>
          </div>
          {window.location.pathname === '/CodeReview' ? (
            <>
              <span className={css.book_input}>
                <div className={css.nextline}>
                  <h6>Code Deviation Count</h6>
                  <input
                    type="number"
                    id="code_deviation_count"
                    placeholder="code_deviation_count"
                    defaultValue={props.code_deviation_count}
                    onChange={e => {
                      props.handleChangeTicketDetails(
                        e.target.value,
                        'code_deviation_count'
                      );
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
                      props.handleChangeTicketDetails(
                        e.target.value,
                        'bugs_count'
                      );
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
                    props.handleChangeTicketDetails(e.target.value, 'remarks');
                  }}
                />
              </div>
            </>
          ) : (
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
                      props.handleChangeTicketDetails(
                        e.target.value,
                        'ticket_no'
                      );
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
                    defaultValue={props.tickettype ? props.tickettype : ''}
                    onChange={e => {
                      props.handleChangeTicketDetails(
                        e.target.value,
                        'ticket_type'
                      );
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
                    id="Team"
                    placeholder="Team"
                    required
                    defaultValue={props.team ? props.team : ''}
                    onChange={e => {
                      props.handleChangeTicketDetails(e.target.value, 'team');
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
                      props.handleChangeTicketDetails(
                        e.target.value,
                        'story_point'
                      );
                    }}
                  />
                </div>
              </span>

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
                    defaultValue={props.startdate ? props.startdate : ''}
                    onChange={e => {
                      props.handleChangeTicketDetails(
                        e.target.value,
                        'start_date'
                      );
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
                      props.handleChangeTicketDetails(
                        e.target.value,
                        'end_date'
                      );
                    }}
                  ></input>
                </div>
              </span>

              <span className={css.book_input}>
                <div className={css.nextline}>
                  <h6>Hours</h6>
                  <input
                    type="number"
                    id="Hours"
                    placeholder="Hours"
                    defaultValue={props.hours}
                    onChange={e => {
                      props.handleChangeTicketDetails(e.target.value, 'hours');
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
                      props.handleChangeTicketDetails(e.target.value, 'status');
                    }}
                  >
                    <option>Completed</option>
                    <option>Incomplete</option>
                    <option>InProgress</option>
                  </select>
                </div>
              </span>

              <div className={css.next}>
                <h6>CodeReviewer</h6>
                <input
                  id="CodeReviewer"
                  placeholder="CodeReviewer"
                  defaultValue={props.codereviewer ? props.codereviewer : ''}
                  onChange={e => {
                    props.handleChangeTicketDetails(
                      e.target.value,
                      'code_reviewer'
                    );
                  }}
                />
              </div>
            </>
          )}
          <div className={css.submitadd_btn}>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupComponent;
