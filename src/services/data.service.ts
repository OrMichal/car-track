import type { IDesign } from "../types/IDesign";
import { Design } from "./runes";

export function SaveDesign() {
  let designs = localStorage.getItem("saved");
  if(designs) {
    let parsed: IDesign[] = JSON.parse(designs);
    let des;
    Design.subscribe(x => des = x);

    localStorage.setItem("saved", JSON.stringify([...parsed, des]));
    return;
  }

  let des;
  Design.subscribe(x => des = x);

  localStorage.setItem("saved", JSON.stringify([des]));
}
