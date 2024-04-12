import Column from "../components/Column.tsx";
import Grid from "../components/Grid.tsx";
import ManaCalc from "../islands/ManaCalc.tsx";

export default function Home() {

  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        {/* <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        /> */}
        <ManaCalc />
      </div>
    </div>
  );
}
