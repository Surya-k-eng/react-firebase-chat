import { create } from "zustand";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase"; // or wherever you defined db
import { useUserStore } from "./userStore";

export const useChatStore = create((set) => ({
  chatID: null,
  user: null,
  isCurrentUserBlocked: false,
  isReceiverBlocked: false,

  changeChat: (chatID, user) => {
    
    const currentUser = useUserStore.getState().currentUser;

    // check if current user is blocked
    if (user.blocked?.includes(currentUser.id)) {
      return set({
        chatID,
        user: null,
        isCurrentUserBlocked: true,
        isReceiverBlocked: false,
      });
    }

    // check if the receiver is blocked
    if (currentUser.blocked?.includes(user.id)) {
      return set({
        chatID,
        user: user,
        isCurrentUserBlocked: false,
        isReceiverBlocked: true,
      });
    }

    console.log("yeahhhh")
    set({
            chatID,
            user,
            isCurrentUserBlocked: false,
            isReceiverBlocked: false,
        });
    // default case: no blocking
    
  },

  changeBlock: () => {
    set((state) => ({
      ...state,
      isReceiverBlocked: !state.isReceiverBlocked,
    }));
  },
}));
