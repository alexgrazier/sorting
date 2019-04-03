// describe('Swap', function() {
//   beforeAll(function() {
//     spyOn(swap).and.callThrough();
//   });
//   it('swaps 0 times on an empty array', function() {
//     swap([]);
//     expect(swap.calls.count()).toEqual(0);
//   });
//   it('swaps 0 times on an array with 1 element', function() {
//     swap([4]);
//     expect(swap.calls.count()).toEqual(0);
//   });
//   it('swaps 4 times on an array with multiple items', function() {
//     swap([9, 4, 1, 5]);
//     expect(swap.calls.count()).toEqual(4);
//   });
// })

describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
    // expect(counter).toEqual(0);
  });
  it('handles an array with a single item', function() {
    expect(bubbleSort([4])).toEqual([4]);//swap count 0
    // expect(counter).toEqual(0);
  });
  it('handles an array with multiple items', function() {
    expect(bubbleSort([9, 4, 1, 5])).toEqual([1, 4, 5, 9]);//swap calls: 4
  });
  // it('handles an array with double-digit numbers', function() {
  //   expect(bubbleSort([21, 30, 27, 16])).toEqual([16, 21, 27, 30]);
  // });
});

//Swap counts:
//call 1: [4, 9, 1, 5]
//call 2: [4, 1, 9, 5]
//call 3: [4, 1, 5, 9]
//call 4: [1, 4, 5, 9]


//don't need a separate comparison function?
//counter:
//within call1: 1, 1, 1

