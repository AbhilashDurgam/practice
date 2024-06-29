import { useState } from "react";
import DisplayActors from "./DisplayActors";

function Acters() {
  const [actorsList, setActorsList] = useState([
  {
    actorname: "Ramcharan",
    actordod: "27 March 1985",
    actormovie: "Magadheera",
    actorimage:"https://static.javatpoint.com/biography/images/ram-charan.png",
  },
  {
    actorname: "samantha",
    actordod: "27 March 1985",
    actormovie: "Baby",
    actorimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2h4x7I3HZWHVn4tTDG-4nlXf304NQYFrHLA&s",
  },
  {
    actorname: "vijay devarakonda",
    actordod: "27 March 1985",
    actormovie: "Geetha Govindham",
    actorimage:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Vijay_Deverakonda_at_NOTA_pressmeet_%28cropped%29.jpg/640px-Vijay_Deverakonda_at_NOTA_pressmeet_%28cropped%29.jpg",
  },
  {
    actorname: "vijay thalapathysamantha",
    actordod: "27 March 1985",
    actormovie: "Polisodu",
    actorimage:"https://1847884116.rsc.cdn77.org/tamil/home/atlee030324_2.jpg",
  }]);
  return (
    <div>
      <DisplayActors actorInformation={actorsList} />
    </div>
  );
}
export default Acters;
