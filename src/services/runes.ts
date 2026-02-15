import type { Writable} from "svelte/store";
import { writable } from "svelte/store";
import type { IDesign } from "../types/IDesign";
import { GridFieldType } from "../types/GridFieldType";
import { GetDesign, GetDesigns } from "./data.service";

export const Design: Writable<IDesign> = writable({
  name: "new design",
  design: []
});

export const Route: Writable<string> = writable("");

export const SelectedGridFieldType: Writable<GridFieldType> = writable(GridFieldType.Water);

for(let i = 0; i < 30; i++) {
  for(let j = 0; j < 20; j++) {
    Design.update(x => ({
      ...x,
      design: [ ...x.design, {x: i, y: j, type: GridFieldType.Grass } ]
    }));
  }
}

export function GenerateNewDesign(): void {
  const count = GetDesigns("new design").length;

  Design.set({
    name: `new design ${count}`,
    design: []
  });

  for(let i = 0; i < 30; i++) {
    for(let j = 0; j < 20; j++) {
      Design.update(x => ({
        ...x,
        design: [ ...x.design, {x: i, y: j, type: GridFieldType.Grass } ]
      }));
    }
  }
}
