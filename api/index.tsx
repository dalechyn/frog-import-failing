import { Frog } from "frog";
import { handle } from "frog/vercel";
import { frame } from "./frame";

// Uncomment to use Edge Runtime.
// export const config = {
//   runtime: 'edge',
// }

export const app = new Frog({
  basePath: "/api",
  // Supply a Hub API URL to enable frame verification.
  // hubApiUrl: 'https://api.hub.wevm.dev',
});

app.route('/', frame);

export const GET = handle(app);
export const POST = handle(app);
