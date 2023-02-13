import { Articles } from "../components/Articles";
import { Header } from "../components/Header";
import { Projects } from "../components/Projects";

export function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-around">
        <ul>
        <Articles />
        </ul>
        <ul>
        <Projects />
        </ul>
      </div>
    </>
  );
}
