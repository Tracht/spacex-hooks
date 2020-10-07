const inventoryOfItemsA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const inventoryOfItemsB = [1];
const ITEMS_TO_DISPLAY = 8;

const pageClickA = pageNumber => {
  if (pageNumber === 1) {
    var startSlice = 0;
    var endSlice = ITEMS_TO_DISPLAY;
  } else {
    startSlice = ITEMS_TO_DISPLAY * (pageNumber - 1);
    endSlice = ITEMS_TO_DISPLAY * pageNumber;
  }
  return inventoryOfItemsA.slice(startSlice, endSlice);
};

const pageClickB = pageNumber => {
  if (pageNumber === 1) {
    var startSlice = 0;
    var endSlice = ITEMS_TO_DISPLAY;
  } else {
    startSlice = ITEMS_TO_DISPLAY * (pageNumber - 1);
    endSlice = ITEMS_TO_DISPLAY * pageNumber;
  }
  return inventoryOfItemsB.slice(startSlice, endSlice);
};

describe("when there are 10 items in the array", () => {
  const page1 = [1, 2, 3, 4, 5, 6, 7, 8];
  const page2 = [9, 10];

  it("clicking on page1 shows items 1-8", () => {
    expect(pageClickA(1)).toEqual(page1);
  });

  it("clicking on page 2 shows items 9-10", () => {
    expect(pageClickA(2)).toEqual(page2);
  });
});

describe("when there is 1 item in the array", () => {
  const page1 = [1];
  it("clicking on page 1 displays 1 item", () => {
    expect(pageClickB(1)).toEqual(page1);
  });
});
