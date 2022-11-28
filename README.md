# @snowcodes/nanostores-rxjs

## Add reactivity to [nanostores](https://github.com/nanostores/nanostores).

With `@snowcodes/nanostores-rxjs`, add rxjs in the game.<br>
You can now use the power of observable with nanostores.

## How to use it ?

We expose to simple functions : `listenStore` and `subscribeStore`.

### Basic usage

You can listen your store with `listenStore`.

> Important note: `listenStore` use `listen` from `nanostores`.<br>
> First value will be read not immediately.

```typescript
import { atom } from 'nanostores';
import { listenStore } from '@snowcodes/nanostores-rxjs';
import { map } from 'rxjs/operators';

const counterState = atom<number>(0);

listenStore(counterState)
  .pipe(map((value) => doSomething(value)))
  .subscribe((afterDoSomething) => {
    // ...
  });
```

You can also use `subscribeStore`.

> Important note: `subscribeStore` use `subscribe` from `nanostores`.<br>
> First value will be read immediately.

```typescript
import { atom } from 'nanostores';
import { subscribeStore } from '@snowcodes/nanostores-rxjs';
import { map } from 'rxjs/operators';

const counterState = atom<number>(0);

subscribeStore(counterState)
  .pipe(map((value) => doSomething(value)))
  .subscribe((afterDoSomething) => {
    // ... Read immediately
  });
```

### Advanced usage

You can select or transform data directly.

`listenStore` or `subscribeStore` accept a second parameter. Follow the example :

```typescript
import { map } from 'nanostores';
import { subscribeStore, listenStore } from '@snowcodes/nanostores-rxjs';
import { Observable } from 'rxjs';

type ApplicationState = {
  loading: boolean;
};

const applicationState = map<ApplicationState>({ loading: false });

// 1. Create a selector or a transformation or what you waht
const selectLoading = (state: ApplicationState) => state.loading;

// 2. Use it as second parameter
const isLoadingFromListen$: Observable<boolean> = listenStore(applicationState, selectLoading);
const isLoadingFromSubscribe$: Observable<boolean> = subscribeStore(applicationState, selectLoading);
```
