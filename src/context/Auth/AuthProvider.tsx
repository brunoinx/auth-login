import { useState } from "react";
import { useApi } from "../../hooks/useApi";
import { User } from "../../types/user";
import { AuthContext } from "./AuthContext";

type ProviderProps = {
  children: JSX.Element;
};

export const AuthProvider = ({ children }: ProviderProps) => {
  const api = useApi();

  const [user, setUser] = useState<User | null>(null);

  async function signIn(email: string, password: string) {
    const data = await api.signIn(email, password);

    if (data.user && data.token) {
      setUser(data.user);
      return true;
    }

    return false;
  }

  async function signOut() {
    await api.signOut();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
