import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmojis } from "../redux/reducers/EmojiSlice";
import Loader from "./Loader";

const Emojis = () => {
  const dispatch = useDispatch();
  const { emojis, loading} = useSelector((state) => state.emoji);

  useEffect(() => {
    dispatch(fetchEmojis());
  }, [dispatch]);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {loading && <Loader/>}
      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
        {emojis.length > 0 &&
          emojis.map((emoji) => (
            <li key={emoji.slug} style={{ fontSize: "24px", margin: "10px 0" }}>
              {emoji.character} {emoji.unicodeName}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Emojis;

