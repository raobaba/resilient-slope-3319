import React from 'react'
import styles from '../Components/Navbar.module.css';
import Footer from './Footer';
import { useState, useEffect } from "react";

const getData = async (page) => {
  try {
    let res = await fetch(
      `https://learn-with-google-garage-back.herokuapp.com/api/data`
    );
    let data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
const OnlineCourses = () => {
  const [data, setData] = useState([]);
  // const [page,setPage] = useState(1)
  useEffect(() => {
    fetchAndUpdateData();
  });

  const fetchAndUpdateData = async (page=1) => {
    try {
      const res = await getData(page);
      setData(res);
    } catch (err) {
      console.log(err);
    }
  };
  // const handlePageChange = (changeBy) => {
  //   setPage(page + changeBy);
  // };
  console.log(data);
  return (
    <div>
       <div className={styles.online_1}>
        <h1>Online Courses</h1>
        <p>Discover a range of free learning content designed to help your business or in your career. You can learn by selecting individual modules, or dive right in and take an entire course end-to-end.</p>
       </div>
      <div className={styles.online_2}>
          <div>
            <div className={styles.online_3}>
                <h3>CATEGORIES</h3>
                <div>
                  <input type="checkbox" />
                  <p>Digital Marketing</p>
                </div>
                <div>
                  <input type="checkbox" />
                  <p>Career Development</p>
                </div>
                <div>
                  <input type="checkbox" />
                  <p>Data</p>
                </div>
            </div>
            <div className={styles.online_3}>
                <h3>COURSE LENGTH</h3>
                <div>
                  <input type="checkbox" />
                  <p>under 2 hours</p>
                </div>
                <div>
                  <input type="checkbox" />
                  <p>2-10 hours</p>
                </div>
                <div>
                  <input type="checkbox" />
                  <p>11-20 hours</p>
                </div>
                <div>
                  <input type="checkbox" />
                  <p>20+ hours</p>
                </div>
            </div>
            <div className={styles.online_3}>
                <h3>CERTIFICATION</h3>
                <div>
                  <input type="checkbox" />
                  <p>Free Certificate</p>
                </div>
                <div>
                  <input type="checkbox" />
                  <p>Paid Certificate</p>
                </div>
            </div>
            <div className={styles.online_3}>
                <h3>COURSE DIFICULTY</h3>
                <div>
                  <input type="checkbox" />
                  <p>Beginner</p>
                </div>
                <div>
                  <input type="checkbox" />
                  <p>Intermediate</p>
                </div>
                <div>
                  <input type="checkbox" />
                  <p>Advanced</p>
                </div>
            </div>
            <div className={styles.online_3}>
                <h3>COURSE PROVIDER</h3>
                <div>
                  <input type="checkbox" />
                  <p>Google</p>
                </div>
                <div>
                  <input type="checkbox" />
                  <p>Applied Digital Skills</p>
                </div>
                <div>
                  <input type="checkbox" />
                  <p>Coursera</p>
                </div>
                <div>
                  <input type="checkbox" />
                  <p>University Of Vergina</p>
                </div>
                <div>
                  <input type="checkbox" />
                  <p>FutureLearn</p>
                </div>
                <div>
                  <input type="checkbox" />
                  <p>GoodWill Foundation</p>
                </div>
                <div>
                  <input type="checkbox" />
                  <p>Google Cloud</p>
                </div>
                <div>
                  <input type="checkbox" />
                  <p>Grasshoper</p>
                </div>
                <div>
                  <input type="checkbox" />
                  <p>Great Learning</p>
                </div>
                <div>
                  <input type="checkbox" />
                  <p>Manas University</p>
                </div>
                <div>
                  <input type="checkbox" />
                  <p> Chiao Tung University</p>
                </div>
                <div>
                  <input type="checkbox" />
                  <p>Open ClassRoom</p>
                </div>
                <div>
                  <input type="checkbox" />
                  <p>SimpliLearn</p>
                </div>
                <div>
                  <input type="checkbox" />
                  <p>Skillshop</p>
                </div>
                <div>
                  <input type="checkbox" />
                  <p>The Open University</p>
                </div>
                <div>
                  <input type="checkbox" />
                  <p>Udacity</p>
                </div>
                <div>
                  <input type="checkbox" />
                  <p>University of Auckland</p>
                </div>
                <div>
                  <input type="checkbox" />
                  <p>University of Groningen</p>
                </div>
                <div>
                  <input type="checkbox" />
                  <p>University of Helsinki</p>
                </div>
            </div>
          </div>
          <div> 
          <h1>Results:{data.length} Courses</h1>
            <div className={styles.map}>
             {data.map((ele)=>(
              <div key={ele.id}>
                  <img src={ele.img} alt="circle" width='100%' height='200px' />
                  <p style={{ display: "flex", fontSize: "20px",color:"#3C4043" }}>{ele.title}</p>
                  <p style={{ fontSize: "14px", color: "grey" }}>Create By Google</p>
                <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                  <div style={{display:"flex",gap:"10px"}}>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/7205/7205436.png"
                      width="20px"
                      alt="circle"
                    />
                    {ele.hour}: hours
                  </div>
                  <div style={{display:"flex",gap:"10px"}}>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1827/1827379.png"
                      width="20px"
                      alt="circle"
                    />
                    {ele.module}: modules
                  </div>
            </div>

              </div>
             ))}
            </div> 
          </div>
      </div>
      <Footer />
    </div>
  )
}

export default OnlineCourses
