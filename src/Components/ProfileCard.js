import  React,{useEffect, useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {Row, Col, Jumbotron, Spinner, Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faEnvelope, faCircleUser, faG } from '@fortawesome/free-solid-svg-icons'
import { v4 as uuidv4 } from "uuid";
import firebase from 'firebase'
import { auth, database} from "../config";
import redirect from "react-router-dom/es/Redirect";

export default function ProfileCard() {

    //Authstate
    const [authState, setAuthState] = useState(null);
    const [userUid, setUserUid] = useState(null);
    const [profileCheck, setProfileCheck] = useState(null)
    //snapshots
    const [profileData, setProfileData] = useState([])
    //spinner
    const [loading, setLoading] = useState(true)
    const [childKey, setChildkey] = useState("")
    //
    const [city, setCity] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [thumbnail, setThumbnail] = useState("")
    const [gender, setgender] = useState("")
    const [age, setage] = useState("")
    const [filterQuery, setFilterQuery] = useState("")
    const [yes, setYes] = useState("Yes")


    useEffect(() => {
         firebase.auth().onAuthStateChanged(function (user) {
           if (!user) {
             setAuthState(false)
           }else{
             setAuthState(true)
             setUserUid(user.uid)
           }
         });
       }, [])


useEffect(() => {
    database.ref("My-Profile").orderByChild("userUid").equalTo(userUid).once("value", (snapshot) => {
      if (snapshot.exists()) {
        setProfileCheck(true)
        {setLoading(false)}
      }else{
        setProfileCheck(false)
        {setLoading(false)}
      }
    }).catch((error) => {
        setProfileCheck(false)
        {setLoading(false)}
      console.error(error);
    });
    },[userUid])
//

//get profile data
useEffect(() => {
database.ref("My-Profile").orderByChild("userUid").equalTo(userUid).on('value', (snapshot) => {
    const items = [];
    snapshot.forEach((childSnapshot) => {
      var childkeyFirebase = childSnapshot.key;
      setChildkey(childkeyFirebase)
      var childData = childSnapshot.val();
      var city = childSnapshot.val().city;
      var email = childSnapshot.val().email;
      var name = childSnapshot.val().name;
      var thumbnail = childSnapshot.val().thumbnail;
        var gender = childSnapshot.val().gender;
        var age = childSnapshot.val().age;
      var filter = childSnapshot.val().filter;

      setCity(city);
      setEmail(email);
      setName(name);
      setThumbnail(thumbnail);
      setFilterQuery(city);
      setgender(gender)
        setage(age)

      items.push(childData);
    });
    setProfileData(items)
  });
},[userUid])
//

    return (
        <div>

        {profileCheck == false ? <div className="text-center"><Link to="/create-profile"><Button variant="primary mr-top">Create Profile Now</Button></Link></div>:""}

        {/* SPINNER */}
        { loading==true ? (<div className="spinner-border spinner text-primary"></div>) : ""}

        {profileData.map((data)=>( 
        <Jumbotron className="mt-5" key={uuidv4()}>
        <Row>
        <Col sm={12} lg={2} md={2}>
        <img src={data.thumbnail} className="img-fluid img-thumbnail profile-picture"/>
        </Col>
        <Col sm={12} lg={10} md={10}>
        <h1 className="display-4">{data.name}</h1>
        <p className="lead"><FontAwesomeIcon icon={faMapMarkerAlt}/> {data.city}</p>
        <p><FontAwesomeIcon icon={faEnvelope}/> {data.email}</p>
       <p><FontAwesomeIcon icon={faCircleUser}/> {data.age}</p>
       <p><FontAwesomeIcon icon={faG}/> {data.gender}</p>
        <hr className="my-2" />
        <p>{data.homeSearch=="Yes" ? "I'm Searching For Homes" : ""}</p>

        <p>{data.homeSearch =="Yes" ?<Button variant="warning"
        onClick={()=>{
          firebase.database().ref("My-Profile").child(childKey)
        .set({ homeSearch: "No", city: city, email: email, name: name, thumbnail: thumbnail, userUid: userUid, filter: "No", age: age, gender: gender})}
        }
        >Remove Status</Button> :
        <Button variant="success"
        onClick={()=>{
          firebase.database().ref("My-Profile").child(childKey)
        .set({ homeSearch: "Yes", city: city, email: email, name: name, thumbnail: thumbnail, userUid: userUid, filter: city+yes, age: age, gender: gender})}
        }
        >Change Status To: I'm searching for homes</Button>}</p>
        </Col>
        </Row>
            <div className="d-flex justify-content-end">
                <Link to="/change-profile">
                <Button> Update Profile</Button>
                </Link>
            </div>
        </Jumbotron>

        ))}
        </div>
    )
}

