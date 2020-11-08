import React from "react";
import Title from "../Title/Title";
import './calender.css'
import {Link} from "react-router-dom";
import useLaunches from "../../hooks/useLaunches/useLaunches";


const Calendar = () => {

  const {data} = useLaunches()

  return (
    <>
      <Title name={'Календарь SpaceX'}/>

      <section className="calendar">
        <div className="container">
          <ul className="calendar-list">

            {
              data.map(item=>(
                <li key={item.id} className="calendar-item">
                  <article className="launches">
                    <div className="launches-image">
                      <img src={item.links.patch.small} alt=""/>
                    </div>
                    <div className="launches-content">
                      <h2 className="launches-title">{item.name}</h2>
                      <Link
                        to={`/detail/${item.id}`}
                        className="button launches-details"
                      >Подробнее
                      </Link>
                    </div>
                  </article>
                </li>
              ))
            }


          </ul>
        </div>
      </section>
    </>

  )
};

export default Calendar;