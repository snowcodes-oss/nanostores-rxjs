import { Observable } from "rxjs";

export const subscribeStore = (
  store,
  mapTo = (state) => state,
) => {
  return new Observable((obs) => {
    const unsubscribe = store.subscribe((value) => {
      obs.next(mapTo(value));
    });
    return () => unsubscribe && unsubscribe();
  });
}

