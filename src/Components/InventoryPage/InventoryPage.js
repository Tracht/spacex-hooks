import React, { useState, useEffect } from "react";
import axios from "axios";
import sortArray from "../../Utils/utils";
import DisplayAll from "./DisplayAll";
import ActiveSelectionModalData from "../ActiveSelectionData/ActiveSelectionModalData";
import Filter from "./Filter";
import Pagination from "./Pagination";
import InventoryStyle from "./InventoryStyle";

const INVENTORY = ["capsules", "cores", "dragons", "missions", "ships"];
const ITEMS_TO_DISPLAY = 8;

const InventoryPage = () => {
  const [inventoryCategory, setInventoryCategory] = useState("dragons");
  const [isError, setIsError] = useState(false);
  const [allInventory, setAllInventory] = useState(null);
  const [someInventory, setSomeInventory] = useState(null);
  const [inventoryCount, setInventoryCount] = useState(null);
  const [pages, setPages] = useState([1, 2, 3]);
  const [activeSelection, setActiveSelection] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get(`https://api.spacexdata.com/v3/${inventoryCategory}`)
      .then(response => {
        // console.log('succesful api request', response.data)
        setAllInventory(sortArray(response.data));
        setInventoryCount(response.data.length);
        setPages([
          ...Array(Math.ceil(inventoryCount / ITEMS_TO_DISPLAY)).keys(),
        ]);
        setSomeInventory(sortArray(response.data.slice(0, ITEMS_TO_DISPLAY))); // only displays 8 items
      })
      .catch(error => {
        // console.log('error with the request', error)
        setIsError(true);
      });
  }, [inventoryCategory, inventoryCount]);

  const pageClick = pageNumber => {
    if (pageNumber === 1) {
      var startSlice = 0;
      var endSlice = ITEMS_TO_DISPLAY;
    } else {
      startSlice = ITEMS_TO_DISPLAY * (pageNumber - 1);
      endSlice = ITEMS_TO_DISPLAY * pageNumber;
    }
    return setSomeInventory(allInventory.slice(startSlice, endSlice));
  };

  const handleActiveSelection = (item, boolean) => {
    setActiveSelection(item);
    setShowModal(boolean);
  };

  const keepOpenActiveSelection = () => {
    setShowModal(false);
  };

  return (
    <>
      <InventoryStyle>
        <Filter
          INVENTORY={INVENTORY}
          setInventoryCategory={setInventoryCategory}
        />
        <Pagination
          inventoryCategory={inventoryCategory}
          pages={pages}
          pageClick={pageClick}
        />
      </InventoryStyle>

      <DisplayAll
        data={someInventory}
        isError={isError}
        handleActiveSelection={handleActiveSelection}
      ></DisplayAll>

      {showModal && (
        <ActiveSelectionModalData
          inventoryCategory={inventoryCategory}
          activeSelection={activeSelection}
          keepOpenActiveSelection={keepOpenActiveSelection}
        ></ActiveSelectionModalData>
      )}
    </>
  );
};
export default InventoryPage;
