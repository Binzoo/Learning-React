import { data } from "autoprefixer";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Github() {
  let data;
  const { userName } = useParams();
  const [img, setImg] = useState();
  const [follower, setFollower] = useState();

  // https://api.github.com/users/${userName}
  const value = async () => {
    data = await fetch(`https://api.github.com/users/${userName}`);
    let values = await data.json();
    setImg(values.avatar_url);
    setFollower(values.followers);
  };

  value();

  return (
    <div>
      <img src={img} alt="" />
      <h1>Followers: {follower}</h1>
    </div>
  );
}

export default Github;
