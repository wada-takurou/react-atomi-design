import { UserProvider } from "./providers/UserProvider";
import { Router } from "./router/Router";
import "./styles.css";

const user = {
  name: "じゃけぇ",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "12345@gmail.com",
  phone: "09092920390",
  company: {
    name: "テスト株式会社"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}
