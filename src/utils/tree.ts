type Tree = {
  children?: Tree[];
};
/**
 * Recursively find tree node
 * @param pred Search condition function
 * @returns Tree node
 */
export function deepFind(pred: (o: any) => boolean) {
  return ([x, ...xs] = [] as Tree[]): Tree =>
    x && (pred(x) ? x : deepFind(pred)(x.children) || deepFind(pred)(xs));
}
