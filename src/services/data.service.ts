import type { IDesign } from "../types/IDesign";
import { Design } from "./runes";

export function SaveDesign(name: string): void {
  Design.update(x => ({ ...x, name: name }));

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

export function DeleteDesign(name: string): void {
  let designs = localStorage.getItem("saved");
  if(designs) {
    let parsed: IDesign[] = JSON.parse(designs);
    parsed = parsed.filter(x => x.name != name);

    localStorage.setItem("saved", JSON.stringify(parsed));
  }
}
