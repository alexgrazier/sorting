describe('Split Array function', function() {
  it('is able to split an even array into two halves', function() {
    expect(split([5, 2, 4, 1])).toEqual([[5, 2], [4, 1]]);
  });
  it('is able to split an odd array into two halves', function() {
    expect(split([5, 2, 4, 1, 3])).toEqual([[5, 2, 4], [1, 3]]);
  });
});

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    expect(merge([38], [27])).toEqual([27, 38]);
    expect(merge([27, 38], [3, 43])).toEqual([3, 27, 38, 43]);
    expect(merge([3, 27, 38, 43], [9, 10, 82])).toEqual([
      3,
      9,
      10,
      27,
      38,
      43,
      82,
    ]);
  });
});

describe('Merge Sort function', function() {
  it('is able to sort an array', function() {
    // expect(mergeSort([38, 27, 43, 3, 9, 82, 10])).toEqual([3, 9, 10, 27, 38, 43, 82]);
    expect(mergeSort([6, 2, 4])).toEqual([2, 4, 6]);
  });
});
