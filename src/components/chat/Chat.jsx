import { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [Text, setText] = useState("");
  console.log(Text);
  const endRef = useRef(null)

  useEffect(()=>{
    endRef.current?.scrollIntoView({behavior:"smooth"})     
  },[])

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  return (
    <div className="chat">
      {/* Top Section */}
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="User Avatar" />
          <div className="texts">
            <h1>Surya</h1>
            <p>BaseBall huh?</p>
          </div>
        </div>

        <div className="icons">
          <img src="./phone.png" alt="Phone" />
          <img src="./video.png" alt="Video Call" />
          <img src="./info.png" alt="Info" />
        </div>
      </div>

      {/* Chat Messages */}
      <div className="center">
        <div className="messages own">
          <div className="texts">
            <p>
              Do you want me to also tweak this so that the picker anchors to
              the right corner of the input bar (like WhatsApp) instead of
              always from the left?
            </p>
          </div>
          <span className="timestamp">1 min ago</span>
        </div>

        <div className="messages">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Do you want me to also tweak this so that the picker anchors to
              the right corner of the input bar (like WhatsApp) instead of
              always from the left?
            </p>
          </div>
          <span className="timestamp">1 min ago</span>
        </div>

        <div className="messages own">
          <div className="texts">
            <img src="https://picsum.photos/200/300" alt="Random" />
            <p>
              Do you want me to also tweak this so that the picker anchors to
              the right corner of the input bar (like WhatsApp) instead of
              always from the left?
            </p>
          </div>
          <span className="timestamp">1 min ago</span>
        </div>
        <div ref={endRef}></div>
      </div>

      {/* Bottom Input Section */}
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="Attach" />
          <img src="./camera.png" alt="Camera" />
          <img src="./mic.png" alt="Mic" />
        </div>

        <input
          type="text"
          placeholder="Type a message"
          value={Text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
        
      </div>
    </div>
  );
};

export default Chat;
