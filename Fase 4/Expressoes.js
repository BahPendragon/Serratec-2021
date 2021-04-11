const x = 6.0; 
const y = 2; 
const z = 4.000; 
const a = 8; 
const b = 7.5; 
const c = 12;
const d = (x - y) > a
const e = (x - y * a) > (c % y)
const f =  y != c
const g = (x * y) != c
const h = (c % y) <= (y % c)
const i = a < b
const j =  (((z / a) + (x * y )) - 5) >= b
const k =  ((c * z) + 2) == ((a * x) + y)
const l = c == (z + b)
const m = (y * 2) !=  (7 - b)

console.log("x - y M a?", d );
console.log("x - y * a M c mod y?", e);
console.log("y <> c?", f);
console.log("x * y <> c?", g);
console.log("c mod y mi y mod c?", h);
console.log("a m b?", i);
console.log("z / a + x * y - 5 MI b?", j);
console.log("c * z + 2 = a * x + y?", k);
console.log("c = z + b?", l);
console.log("y * 2 <> 7 - b?", m);