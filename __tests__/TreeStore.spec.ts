import { TreeStore, TreeNode } from '../src/components/TreeStore';

describe('TreeStore', () => {
  const items: TreeNode[] = [
    { id: 1, parent: 'root' },
    { id: 2, parent: 1, type: 'test' },
    { id: 3, parent: 1, type: 'test' },
    { id: 4, parent: 2, type: 'test' },
    { id: 5, parent: 2, type: 'test' },
    { id: 6, parent: 2, type: 'test' },
    { id: 7, parent: 4, type: null },
    { id: 8, parent: 4, type: null },
  ];

  const ts = new TreeStore(items);

  it('should return the initial array of elements', () => {
    expect(ts.getAll()).toEqual(items);
  });

  it('should return the correct item by id', () => {
    expect(ts.getItem(7)).toEqual({ id: 7, parent: 4, type: null });
  });

  it('should return the correct children of an item', () => {
    expect(ts.getChildren(4)).toEqual([
      { id: 7, parent: 4, type: null },
      { id: 8, parent: 4, type: null },
    ]);
  });

  it('should return an empty array for non-existent children', () => {
    expect(ts.getChildren(999)).toEqual([]);
  });

  it('should return all children of an item', () => {
    expect(ts.getAllChildren(2)).toEqual([
      { id: 4, parent: 2, type: 'test' },
      { id: 5, parent: 2, type: 'test' },
      { id: 6, parent: 2, type: 'test' },
      { id: 7, parent: 4, type: null },
      { id: 8, parent: 4, type: null },
    ]);
  });

  it('should return an empty array for non-existent item when getting all children', () => {
    expect(ts.getAllChildren(999)).toEqual([]);
  });

  it('should return all children of an item', () => {
    expect(ts.getAllChildren(2)).toEqual([
      { id: 4, parent: 2, type: 'test' },
      { id: 5, parent: 2, type: 'test' },
      { id: 6, parent: 2, type: 'test' },
      { id: 7, parent: 4, type: null },
      { id: 8, parent: 4, type: null },
    ]);
  });

  it('should return an empty array for non-existent item when getting all children', () => {
    expect(ts.getAllChildren(999)).toEqual([]);
  });
});
