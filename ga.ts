import ReactGA from "react-ga";
ReactGA.initialize(process.env.NEXT_PUBLIC_Ga || "");

export function pageview(url: string) {
  ReactGA.pageview(url);
}
