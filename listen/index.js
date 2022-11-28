import { Observable } from "rxjs";

export const listenStore = (
  store,
  mapTo = (state) => state,
) => {
  return new Observable((obs) => {
    const unlisten = store.listen((value) => {
      obs.next(mapTo(value));
    });
    return () => unlisten && unlisten();
  });
}
