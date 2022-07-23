import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { api } from "./services/api";

interface ISubList {
  id: string;
  description: string;
  isFinished: boolean;
  isEditable: boolean;
}

interface ILists {
  id: string;
  title: string;
  description: string;
  status: string;
  tasks: ISubList[];
  createdAt: Date;
}

interface ListProviderProps {
  children: ReactNode;
}

interface ListContextData {
  lists: ILists[];
  setLists: Dispatch<SetStateAction<ILists[]>>;
}

export const ListContext = createContext<ListContextData>(
  {} as ListContextData
);

export function ListProvider({ children }: ListProviderProps) {
  const tokenStorage = localStorage.getItem('token');

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (tokenStorage) {
      setIsAuthenticated(isAuthenticated);


      // setLists(allListsWithEditableFalse);
    }
  }, []);

  // useEffect(() => {
  //   localStorage.setItem('lists', JSON.stringify(lists));
  // }, [lists]);

  // return (
  //   <ListContext.Provider value={{ lists, setLists }}>
  //     {children}
  //   </ListContext.Provider>
  // );
}

// export function useList() {
//   const context = useContext(ListContext);

//   return context;
// }