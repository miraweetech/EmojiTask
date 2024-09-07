import React from "react";
import { EmojiPicker } from "react-emoji-search";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedEmoji } from "../redux/reducers/EmojiSlice";

const Emojis = () => {
  const dispatch = useDispatch();
  const selectedEmoji = useSelector((state) => state.emoji.selectedEmoji);

  const handleEmojiClick = (emojiObject) => {
    dispatch(setSelectedEmoji(emojiObject.emoji));
  };

  return (
    <>
      <div className="emoji-container">
        <EmojiPicker 
          onEmojiClick={handleEmojiClick} 
          set="apple" 
          emojiSize={32} 
          emojiSpacing={8}
          styles={{
            backgroundColor: "#2e4960",
            indicatorColor: "#b04c2d",
            fontColor: "lightgrey",
            searchBackgroundColor: "#263d51",
            tabsFontColor: "#8cdce4",
            searchFontColor: "lightgrey",
            skinTonePickerBackgroundColor: "#284155",
          }}
        />
        
        {selectedEmoji && <p>Selected Emoji: {selectedEmoji}</p>}
      </div>
    </>
  );
};

export default Emojis;