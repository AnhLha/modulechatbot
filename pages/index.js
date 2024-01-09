
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../assets/styles/main.module.scss';
import {
  GET_LISTBRANCH, GET_DATA_BRANCH_AT_POSITION, BOOK_SERVICES, GET_TIMELINE,
  BOOK_SERVICES_SUCCESS, BOOK_SERVICES_FAILED
} from "../actions/index.action"
import "react-datepicker/dist/react-datepicker.css";

import BookingService from '../components/booking/bookingService.component';
import ReactLoading from 'react-loading';
import { useAlert } from "react-alert";
import NoticeSuccessModal from "../components/notice-success-modal.component";
import NoticeFailedModal from "../components/notice-failed-modal.component";
import Services from '../components/home/services.component';
// import ChatBox from '../components/home/chatBox.component';

export default function Main() {
  const bookingServiceDefault = {
    quantity: 0,
    service: {
      id: 0,
      name: '',
      serviceDetails: [],
    },
    serviceDetails: []
  }
  const { branches, services, listTimeLine, bookingSuccess, isLoading } = useSelector(state => state.index);
  const quantities = ["1", "2", "3", "4", "5", "6+"]
  const [customerName, setCustomerName] = useState();
  const [numberPhone, setNumberPhone] = useState();
  const [description, setDescription] = useState();
  const [branchCode, setBranchCode] = useState();
  const [bookingDate, setBookingDate] = useState();
  const [timeLineId, setTimeLineId] = useState();
  const [bookingServices, setBookingServices] = useState([bookingServiceDefault])
  // const alert = useAlert();
  let dispatch = useDispatch();
  let dispatchToStore = (action) => {
    dispatch(action);
  }

  useEffect(() => {
    // fetch branches
    // console.log("send event get list branch")
    dispatchToStore({
      type: GET_LISTBRANCH
    })
  }, []);

  useEffect(() => {
    // fetch timeline
    dispatchToStore({
      type: GET_TIMELINE,
      data: branches[0].value
    })

    setBranchCode(branches[0].value)

    // fetch data of branch 1: name, price, service,...
    dispatchToStore({
      type: GET_DATA_BRANCH_AT_POSITION,
      data: branches[0].value
    })
  }, [branches])

  const choosseBranch = (branch) => {
    // fetch data of this branch: name, price, service,...
    // console.log("structure branch ", branch.target.value)
    dispatchToStore({
      type: GET_DATA_BRANCH_AT_POSITION,
      data: branches[branch.target.value].value
    })

    // fetch timeline
    dispatchToStore({
      type: GET_TIMELINE,
      data: branches[branch.target.value].value
    })

    setBranchCode(branches[branch.target.value].value)
  }

  const addBookingService = () => {
    setBookingServices(
      [
        ...bookingServices,
        bookingServiceDefault,
      ]
    )
  }

  const updateName = (event) => {
    setCustomerName(event.target.value)
  }

  const updatePhone = (event) => {
    setNumberPhone(event.target.value)
  }

  const updateDate = (event) => {
    console.log("booking date ", event.target.value)
    setBookingDate(event.target.value)
  }

  const updateTimeLine = (event) => {

    setTimeLineId(event.target.value)
  }

  const updateService = (service, index) => {
    // console.log(service)
    setBookingServices(
      bookingServices.map((bookingService, _index) => {
        if (index == _index) {
          return {
            ...bookingService,
            service: service,
          }
        } else {
          return bookingService;
        }
      })
    )
  }

  const updateServiceDetails = (serviceDetails, index) => {
    setBookingServices(
      bookingServices.map((bookingService, _index) => {
        if (index == _index) {
          return {
            ...bookingService,
            serviceDetails: serviceDetails
          }
        } else {
          return bookingService;
        }
      })
    )
  }

  const updateQuantity = (quantity, index) => {
    setBookingServices(
      bookingServices.map((bookingService, _index) => {
        if (index == _index) {
          return {
            ...bookingService,
            quantity: quantity
          }
        } else {
          return bookingService;
        }
      })
    )

  }

  const bookServices = () => {
    console.log("bookingServices ", bookingServices);
    let data = []
    for (let i = 0; i < bookingServices.length; i++) {
      const { quantity, service, serviceDetails } = bookingServices[i];
      if (serviceDetails.length != 0) {
        for (let j = 0; j < serviceDetails.length; j++) {
          data.push({
            quantity: quantity,
            serviceDetailId: serviceDetails[j].value
          })
        }
      } else {
        data.push({
          quantity: quantity,
          serviceDetailId: service.id
        })
      }
    }

    const dataBody = {
      customerName: customerName,
      numberPhone: numberPhone,
      description: description,
      branchCode: branchCode,
      bookingDate: bookingDate,
      timeLineId: timeLineId,
      bookingDetails: data
    }

    console.log("data body in screen ", dataBody)
    dispatchToStore({
      type: BOOK_SERVICES,
      data: dataBody
    })

  }

  return (
    <div className={styles.container}>
      <div className={styles.main}>

        <div className={styles.time_container}>
          <h3>Choose branch</h3>
          <div className={styles.row}>
            <select className={styles.text_box} onChange={choosseBranch}>
              {
                branches.map((e, index) => {
                  return (
                    <option value={index} key={index}>
                      {e.title}
                    </option>
                  )
                })
              }
            </select>
          </div>

          <h3>Business Hours</h3>
          <ul className={styles.time_list}>
            <li>
              <span className={styles.day}>Mon</span>
              <span className={styles.time}>10AM - 7:30PM</span>
            </li>
            <li>
              <span className={styles.day}>Tue</span>
              <span className={styles.time}>10AM - 7:30PM</span>
            </li>
            <li>
              <span className={styles.day}>Wed</span>
              <span className={styles.time}>10AM - 7:30PM</span>
            </li>
            <li>
              <span className={styles.day}>Thu</span>
              <span className={styles.time}>10AM - 7:30PM</span>
            </li>
            <li>
              <span className={styles.day}>Fri</span>
              <span className={styles.time}>10AM - 7:30PM</span>
            </li>
            <li>
              <span className={styles.day}>Sat</span>
              <span className={styles.time}>9:30AM - 7PM</span>
            </li>
            <li>
              <span className={styles.day}>Sun</span>
              <span className={styles.time}>11:30AM - 6PM</span>
            </li>
          </ul>
        </div>

        <div className={styles.booking_container}>
          <div className={styles.title_container}>
            <h3>Book Appointment</h3>
            <h3>5 Off For Make Online Appointment All Services</h3>
            <p>Please book appointment online at least 2 hours in advance. If you in a hurry, please call (817) 508-8777 for availability.</p>
          </div>

          <div className={styles.form_container}>
            <div className={styles.row}>
              <input className={styles.text_box} placeholder="Name" onChange={updateName} />
              <input className={styles.text_box} placeholder="Phone" onChange={updatePhone} />
            </div>

            {/* Date time */}
            <div className={styles.row}>
              <input className={styles.text_box} placeholder="Date" type="date" onChange={updateDate} />
              <select className={styles.text_box} onChange={updateTimeLine}>
                <option value="" selected disabled hidden>Time</option>
                {
                  listTimeLine ?
                    listTimeLine.map((e, index) => {
                      return (
                        <option value={e.value} key={index}>
                          {e.title}
                        </option>
                      )
                    }) : null
                }
              </select>
            </div>

            {/* Services */}
            {bookingServices.map((bookingService, index) => {
              return <BookingService
                key={index}
                bookingService={bookingService}
                services={services}
                quantities={quantities}
                updateService={(service) => updateService(service, index)}
                updateQuantity={(quantity) => updateQuantity(quantity, index)}
                updateServiceDetails={(serviceDetails) => updateServiceDetails(serviceDetails, index)} />
            })}

            <div className={styles.row}>
              <a className={styles.button} href="#" onClick={addBookingService}>+ Service</a>
            </div>

            <div className={styles.row}>
              <textarea className={styles.text_area} rows="4" placeholder="Message & special request" />
            </div>


            {/* capcha */}
            {/* <div className={styles.row}>
              <input className={styles.text_box} />
            </div> */}

            <div className={styles.row}>
              <a className={styles.button} onClick={bookServices}>Book it</a>
            </div>

            {
              isLoading ?
                <div className={styles.loadingButton}>
                  <ReactLoading type='spin' color='#CA3E65' height={40} width={40} />
                </div>
                :
                null
            }

            <NoticeSuccessModal />
            <NoticeFailedModal/>
          </div>
        </div>

        
        
      </div>

      <Services/>
      {/* <ChatBox/> */}
    </div>
  )
}
