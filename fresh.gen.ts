// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $dummy_css_fix from "./routes/dummy/css-fix.tsx";
import * as $grid_demo from "./routes/grid-demo.tsx";
import * as $index from "./routes/index.tsx";
import * as $LandCount from "./islands/LandCount.tsx";
import * as $ManaCalc from "./islands/ManaCalc.tsx";
import * as $ManaCalcTabs from "./islands/ManaCalcTabs.tsx";
import * as $ManaSources from "./islands/ManaSources.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/dummy/css-fix.tsx": $dummy_css_fix,
    "./routes/grid-demo.tsx": $grid_demo,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/LandCount.tsx": $LandCount,
    "./islands/ManaCalc.tsx": $ManaCalc,
    "./islands/ManaCalcTabs.tsx": $ManaCalcTabs,
    "./islands/ManaSources.tsx": $ManaSources,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
