import type { IDesign } from "../types/IDesign";
import { Design } from "./runes";
import { get } from "svelte/store";

export function SaveDesign(name: string): void {
  Design.update(x => ({ ...x, name }));

  const des = get(Design);

  let designs = localStorage.getItem("saved");

  if (!designs) {
    localStorage.setItem("saved", JSON.stringify([des]));
    return;
  }

  let parsed: IDesign[] = JSON.parse(designs);

  const index = parsed.findIndex(x => x.name === name);

  if (index !== -1) {
    parsed[index] = des;
  } else {
    parsed.push(des);
  }

  localStorage.setItem("saved", JSON.stringify(parsed));
}

export function DeleteDesign(name: string): void {
  let designs = localStorage.getItem("saved");
  if(designs) {
    let parsed: IDesign[] = JSON.parse(designs);
    parsed = parsed.filter(x => x.name != name);

    localStorage.setItem("saved", JSON.stringify(parsed));
  }
}

export function GetDesign(name: string): IDesign | undefined {
  let designs = localStorage.getItem("saved");
  if(designs) {
    let parsed: IDesign[] = JSON.parse(designs);
    return parsed.find(x => x.name === name);
  }

  return undefined;
}

export function GetDesigns(pattern: string): IDesign[] {
  let designs = localStorage.getItem("saved");
  if(designs) {
    let parsed: IDesign[] = JSON.parse(designs);
    return parsed.filter(x => x.name.includes(pattern));
  }

  return [];
}
