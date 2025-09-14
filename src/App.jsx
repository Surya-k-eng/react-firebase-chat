import { useEffect } from "react"
import Chat from "./components/chat/Chat"
import Detail from "./components/detail/Detail"
import List from "./components/list/List"
import Login from "./components/login/login"
import Notification from "./components/notification/Notification"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./lib/firebase"
import { useUserStore } from "./lib/userStore"
import { useChatStore } from "./lib/chatStore"

const App = () => {
  const {currentUser,isLoading,fetchUserInfo} = useUserStore()
  const {chatID,user} = useChatStore()
  console.log("App sees chatId:", );



  useEffect(()=>{
    const unSub = onAuthStateChanged(auth,(user)=>{
      fetchUserInfo(user?.uid);
    });
    return () => {
      unSub();
    };
  },[fetchUserInfo])

  console.log(currentUser)
  if (isLoading) return <div className="loading">Loading</div>;

if (!currentUser) {
  // Not logged in → show login screen
  return (
  <div className="container">
    <Login />
  </div>);
}

return (
  <div className="container">
    <List />
    {chatID ? (
      <>
        <Chat />
        <Detail />
      </>
    ) : (
      <div className="empty-chat">Select a chat to start messaging</div>
    )}
    <Notification />
  </div>
);


};

export default App