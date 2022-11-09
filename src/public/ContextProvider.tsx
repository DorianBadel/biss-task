import React, { createContext, FC, ReactNode, useMemo } from "react";
import { useLocalStorage } from "./LocalStorage";

export type NoteT = {
  id: number;
  title: string;
  text: string;
  label?: string;
};

const initState: NoteT[] = [];

type NoteTContext = {
  ctNotes: NoteT[] | undefined;
  setCtNotes: (newVal: NoteT[] | ((prevVal: NoteT[]) => NoteT[])) => void;
};

export const NoteContext = createContext<NoteTContext>({
  ctNotes: initState,
  setCtNotes: () => {},
});

type NoteContextProps = {
  children: React.ReactNode;
};

export const NoteProvider: FC<NoteContextProps> = ({ children }) => {
  const [ctNotes, setCtNotes] = useLocalStorage<NoteT[]>("note", initState);

  const value = useMemo(() => {
    return { ctNotes, setCtNotes };
  }, [setCtNotes, ctNotes]);

  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
};
