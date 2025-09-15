// src/lib/voiceStore.js
import { create } from "zustand";
import { useUserStore } from "./userStore";

export const useVoiceStore = create((set) => ({
  peer: null,
  callUser: null,
  callID: null,
  isMuted: false,
  isCalling: false,

  startCall: (peer, user, callID) => set({ peer, callUser: user, callID, isCalling: true }),
  endCall: () => set({ peer: null, callUser: null, callID: null, isCalling: false }),
  toggleMute: () => set((state) => ({ isMuted: !state.isMuted })),
}));
