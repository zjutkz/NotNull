# NotNull
A ts decorator that avoid undefined parameters

### Download

```
npm i @zjutkzwayne/notnull --save
```

### Usage

```typescript
import {required, notNull} from "../index";

class Clz {

    @notNull
    foo(n: number, @required m: string) {
        return n * 2;
    }
}

console.log(new Clz().foo(10));
```

