import { auth } from "../../lib/firebase"
import "./detail.css"

const Detail = () => {

  const handleLogout = async () => {
  try {
    await auth.signOut();
    console.log("Signed out successfully");
  } catch (err) {
    console.error("Logout failed:", err);
  }
};


  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Jane Doe</h2>
        <p>Be Crazy</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy &help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
        
        <div className="photos">
          <div className="photoItem">
            <div className="photoDetail">
              <img src="https://picsum.photos/200/300" alt="" />
              <span>
                 photo_2024_2.png
              </span>
            </div>
            <img src="./download.png" alt="" className="icon" />
          </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
        <button className="logout" onClick={handleLogout}>Logout</button>
        

      </div>
    </div>
    )
}

export default Detail