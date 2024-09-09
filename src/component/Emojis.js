import React from "react";
import { EmojiPicker as EmojiSearch } from "react-emoji-search";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedEmoji } from "../redux/reducers/EmojiSlice";

const Emojis = () => {
  const dispatch = useDispatch();
  const selectedEmoji = useSelector((state) => state.emoji.selectedEmoji);

  const handleEmojiClick = (emojiObject) => {
    dispatch(setSelectedEmoji(emojiObject));
    console.log("selectedEmoji", selectedEmoji);
  };

  return (
    <>
      <div className="emoji-container">
        {selectedEmoji && (
          <div className="selectedEmoji">
            {selectedEmoji}
          </div>
        )}

        <EmojiSearch
          onEmojiClick={handleEmojiClick}
          set="apple"
          emojiSize={32}
          emojiSpacing={8}
          styles={{
            indicatorColor: "#b04c2d",
            fontColor: "lightgrey",
            searchBackgroundColor: "#263d51",
            tabsFontColor: "#8cdce4",
            searchFontColor: "lightgrey",
            skinTonePickerBackgroundColor: "#284155",
          }}
        />
      </div>
    </>
  );
};

export default Emojis;
