const inventoryOfItemsA = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const inventoryOfItemsB = [ 1 ];
const ITEMS_TO_DISPLAY = 8;

const pageClickA = (pageNumber) => {
  if (pageNumber === 1) {
    var startSlice = 0; 
    var endSlice = ITEMS_TO_DISPLAY; 
  } else {
    startSlice = ITEMS_TO_DISPLAY * (pageNumber - 1); 
    endSlice = (ITEMS_TO_DISPLAY * pageNumber); 
  }
  return (inventoryOfItemsA.slice(startSlice, endSlice));
} 

const pageClickB = (pageNumber) => {
  if (pageNumber === 1) {
    var startSlice = 0; 
    var endSlice = ITEMS_TO_DISPLAY; 
  } else {
    startSlice = ITEMS_TO_DISPLAY * (pageNumber - 1); 
    endSlice = (ITEMS_TO_DISPLAY * pageNumber); 
  }
  return (inventoryOfItemsB.slice(startSlice, endSlice));
} 

describe('pageClickA', ()=> {
  const page1 = [1, 2, 3, 4, 5, 6, 7, 8];
  const page2 = [9, 10];

  it('displays items 1-8 when user clicks on page 1', ()=> {
    expect(pageClickA(1)).toEqual(page1);
  });

  it('displays items 9-10 when user clicks on page 2', ()=> {
    expect(pageClickA(2)).toEqual(page2);
  });

})

describe('pageClickB', ()=> {
  const page1 = [1]
  it('displays 1 item when user clicks on page 1', ()=> {
    expect(pageClickB(1)).toEqual(page1);
  });
})