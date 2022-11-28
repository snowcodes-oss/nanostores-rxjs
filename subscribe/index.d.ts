import { Store } from "nanostores";
import { ReadonlyIfObject } from "nanostores/atom";
import { Observable } from "rxjs";

export declare const subscribeStore: <T, U = ReadonlyIfObject<T>> (
  store: Store<T>,
  mapTo?: (state: ReadonlyIfObject<T>) => U,
) => Observable<U>;
