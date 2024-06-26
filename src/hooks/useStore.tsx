import { MailboxTab, Theme, User } from "@/utils/types";
import { StoreApi, UseBoundStore, create } from "zustand";

type State = {
  user: User | null;
  setUser: (user: User) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  navUnfolded: boolean;
  setNavUnfolded: (navUnfolded: boolean) => void;
  layoutLoading: boolean;
  setLayoutLoading: (layoutLoading: boolean) => void;
  mailboxActiveTab: MailboxTab;
  setMailboxActiveTab: (mailboxActiveTab: MailboxTab) => void;
  connected: boolean;
  setConnected: (connected: boolean) => void;
  users: User[];
  setUsers: (users: User[]) => void;
};

const getCurrentTheme = () => {
  if (typeof window !== "undefined") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
};

const useStore: UseBoundStore<StoreApi<State>> = create((set) => {
  return {
    user: null,
    setUser: (user: User) => set({ user }),
    theme: getCurrentTheme() ? "dark" : ("light" as Theme),
    setTheme: (theme: Theme) => set({ theme }),
    navUnfolded: true,
    setNavUnfolded: (navUnfolded: boolean) => set({ navUnfolded }),
    layoutLoading: true,
    setLayoutLoading: (layoutLoading: boolean) => set({ layoutLoading }),
    mailboxActiveTab: "Personnes",
    setMailboxActiveTab: (mailboxActiveTab: MailboxTab) =>
      set({ mailboxActiveTab }),
    connected: false,
    setConnected: (connected: boolean) => set({ connected }),
    users: [],
    setUsers: (users: User[]) => set({ users }),
  };
});

export default useStore;
