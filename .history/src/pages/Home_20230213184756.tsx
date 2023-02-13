import { Articles } from "../components/Articles";
import { Header } from "../components/Header";
import { Projects } from "../components/Projects";

export function Home() {
  return (
    <>
      <Header />
      <div>
        <Articles />
        <Projects />
      </div>
    </>
  );
}
