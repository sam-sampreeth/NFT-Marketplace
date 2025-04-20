import React, {useState, useEffect} from 'react';
import { BsFillAlarmFill, BsFillCalenderDateFill, BsCalendar3, BsAlarmFill } from 'react-icons/bs';

//Internal Imports
import Styles from './Collection.module.css';
import DayComponent from './DayComponent/DayComponent';

const Collection = () => {
    const [popular, setPopular] = useState(true);
    const [following, setFollowing] = useState(false)
    const [news, setNews] = useState(false);

    const cardArray =[1, 2, 3, 4, 5, 6, 7, 8];
    const followingArray = [1, 2, 3, 4];
    const newsArray = [1, 2, 3, 4, 5, 6];


  return (
    <div className={Styles.collection}>
        <div className={Styles.collection_title}>
            <h2>Top Creators</h2>
            <div className={Styles.collection_collections}>
                <div className={Styles.collection_collections_btn}>
                    <button onClick={()=> openPopular()}>
                        <BsFillAlarmFill/> Last 24 hrs
                    </button>

                    <button onClick={()=> openFollower()}>
                        <BsCalendar3/> Last 7 days
                    </button>

                    <button onClick={()=> openNews()}>
                        <BsCalendar3/> Last 30 days
                    </button>
                </div>
            </div>
        </div>
        {
            popular && (
                <div className={Styles.collection_box}>
                    {cardArray.map((el, i)=> (
                        <DayComponent key={i+1} />
                    ))}
                </div>
            )
        }
    </div>
  );
};

export default Collection