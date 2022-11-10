import React, { createContext, useMemo } from "react";
import { useLocalStorage } from "./LocalStorage";

export type NoteT = {
  id: number;
  title: string;
  text: string;
  label?: string;
};

const initState: NoteT[] = [];
const initLabels: string[] = [];

type NoteTContext = {
  ctNotes: NoteT[] | undefined;
  setCtNotes: (newVal: NoteT[] | ((prevVal: NoteT[]) => NoteT[])) => void;
};

type stringStateT = {
  ctLabels: string[] | undefined;
  setCtLabels: (newVal: string[] | ((prevVal: string[]) => string[])) => void;

}

export const NoteContext = createContext<NoteTContext>({
  ctNotes: initState,
  setCtNotes: () => {},
});

export const LabelContext = createContext<stringStateT>({
  ctLabels: initLabels,
  setCtLabels: ()=>{}
})

export function NoteProvider({
  children,
}:{children:React.ReactNode}): React.ReactElement {
  const [ctNotes, setCtNotes] = useLocalStorage<NoteT[]>("notes", initState);

  const value = useMemo(() => {
    return { ctNotes, setCtNotes };
  }, [setCtNotes, ctNotes]);

  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
}

export function LabelProvider({
  children,
}:{children:React.ReactNode}): React.ReactElement {
  const [ctLabels, setCtLabels] = useLocalStorage<string[]>("labels",initLabels);
  
  const value = useMemo(()=>{
    return { ctLabels, setCtLabels };
  },[ctLabels, setCtLabels])

  return <LabelContext.Provider value={value}>{children}</LabelContext.Provider>
}

