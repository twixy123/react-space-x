import React, { useEffect, useState } from "react";
import {useHistory} from 'react-router-dom';
import Title from "../Title/Title";
import useLaunches from "../../hooks/useLaunches/useLaunches";
import YouTube from "react-youtube";
import './detail.css'

const Details = (props) => {

  const [launch, setLaunch] = useState(null)

  const {getLaunch} = useLaunches()

  useEffect(()=>{
    setLaunch(getLaunch(props.match.params.id))
  }, [getLaunch])

  const history = useHistory()

  if(!launch) return <div>Загрузка</div>

  return (
    <>
      <Title name={launch.name}/>
      <main className="details">
        <div className="container">
          <div className="details-row">
            <div className="details-image">
              <img src={launch.links.patch.small} alt={launch.name}/>
            </div>
            <div className="details-content">
              <p className="details-description">{launch.details}</p>
            </div>
          </div>
          <YouTube className='details-youtube' videoId={launch.links.youtube_id}/>
        </div>
        <a onClick={history.goBack} className="button button-back">go back</a>
      </main>
    </>
  );
}

export default Details;

