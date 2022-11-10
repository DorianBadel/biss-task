import React, { createContext, useMemo } from "react";
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

export function NoteProvider({
  children,
}: NoteContextProps): React.ReactElement {
  const [ctNotes, setCtNotes] = useLocalStorage<NoteT[]>("notes", initState);

  const value = useMemo(() => {
    return { ctNotes, setCtNotes };
  }, [setCtNotes, ctNotes]);

  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
}
