import type { Writable} from "svelte/store";
import { writable } from "svelte/store";
import type { IDesign } from "../types/IDesign";
import { GridFieldType } from "../types/GridFieldType";

export const Design: Writable<IDesign> = writable({
  name: "new design",
  design: []
});

export const SelectedGridFieldType: Writable<GridFieldType> = writable(GridFieldType.Water);

for(let i = 0; i < 30; i++) {
  for(let j = 0; j < 20; j++) {
    Design.update(x => ({
      ...x,
      design: [ ...x.design, {x: i, y: j, type: GridFieldType.Grass } ]
    }));
  }
}
