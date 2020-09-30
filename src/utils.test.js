import sortAtoZ from './utils';

const UnorderedArray = [{mission_name: "Zebra"}, {mission_name: "Monkey"}, {mission_name: "Dog"}, {mission_name: "Apple"}, {mission_name: "Rainforest"}]

describe('sortAtoZ', ()=> {
  const sortedArray = [{mission_name: "Apple"}, {mission_name: "Dog"}, {mission_name: "Monkey"}, {mission_name: "Rainforest"}, {mission_name: "Zebra"}]
  it('should correctly sort the Array', ()=> {
    expect(sortAtoZ(UnorderedArray)).toEqual(sortedArray);
  });

})

