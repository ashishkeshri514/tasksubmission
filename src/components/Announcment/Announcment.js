import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import db from "../../lib/firebase";
import "./style.css";


const Announcment = ({ classData }) => {
  const [announcment, setAnnouncment] = useState([]);
  

  useEffect(() => {
    if (classData) {
      let unsubscribe = db
        .collection("announcments")
        .doc("classes")
        .collection(classData.id)
        .onSnapshot((snap) => {
          setAnnouncment(snap.docs.map((doc) => doc.data()));
        });
      return () => unsubscribe();
    }
  }, [classData]);
  console.log(announcment);
  return (
    <div>
      {announcment.map((item) => (
        <div className="amt">
          <div className="amt__Cnt">
            <div className="amt__top">
              <Avatar />
              <div>{item.sender}</div>
            </div>
            <p className="amt__txt">{item.text}</p>
             
            <button class="button"><a href={item.imageUrl} target="_blank" rel="noreferrer" class="link"> Click to open file</a></button>
            
            
          </div>
        </div>
      ))}
    </div>
  );
};


export default Announcment;
