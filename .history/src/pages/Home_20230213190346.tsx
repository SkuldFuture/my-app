import { Articles } from "../components/Articles";
import { Header } from "../components/Header";
import { Projects } from "../components/Projects";

export function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-row justify-around">
        <div>
        <Projects />
        </div>
        <div>
        <Articles />
        </div>
      </div>
    </>
  );
}
