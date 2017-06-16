// @strictNullChecks: true
function f(x: { y: string } | undefined): { y: string } {
    return { y: 123, ...x } // y: string | number
}
f(undefined)


function g(t?: { a: number } | null): void {
    let b = { ...t };
    let c: number = b.a;  // might not have 'a'
}
g()
g(undefined)
g(null)
