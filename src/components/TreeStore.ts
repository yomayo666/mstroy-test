export interface TreeNode {
  id: number | string;
  parent: number | string | null;
  type?: string | null;
}

export class TreeStore {
  private items: TreeNode[];

  constructor(items: TreeNode[]) {
    this.items = items;
  }

  getAll(): TreeNode[] {
    return this.items;
  }

  getItem(id: number | string): TreeNode | undefined {
    return this.items.find((item) => item.id === id);
  }

  getChildren(id: number | string): TreeNode[] {
    return this.items.filter((item) => item.parent === id);
  }

  getAllChildren(id: number | string): TreeNode[] {
    const result: TreeNode[] = [];
    const queue: TreeNode[] = this.getChildren(id);

    while (queue.length > 0) {
      const current = queue.shift()!;
      result.push(current);

      const children = this.getChildren(current.id);
      queue.push(...children);
    }

    return result;
  }

  getAllParents(id: number | string): TreeNode[] {
    const result: TreeNode[] = [];
    let currentId: number | string | null = id;
  
    while (currentId !== null) {
      const parent = this.items.find((item) => item.id === currentId);
      if (parent) {
        result.push(parent);
        currentId = parent.parent;
      } else {
        currentId = null;
      }
    }
  
    return result.reverse(); // Вернуть массив в обратном порядке
  }
  
}
const items: TreeNode[] = [
  { id: 1, parent: "root" },
  { id: 2, parent: 1, type: "test" },
  { id: 3, parent: 1, type: "test" },
  { id: 4, parent: 2, type: "test" },
  { id: 5, parent: 2, type: "test" },
  { id: 6, parent: 2, type: "test" },
  { id: 7, parent: 4, type: null },
  { id: 8, parent: 4, type: null },
];

const ts = new TreeStore(items);

console.log(ts.getAll());
console.log(ts.getItem(7));
console.log(ts.getChildren(4));
console.log(ts.getChildren(5));
console.log(ts.getChildren(2));
console.log(ts.getAllChildren(2));
console.log(ts.getAllParents(7));
