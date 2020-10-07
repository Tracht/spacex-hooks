const sortAtoZ = array => {
  return array.sort(function (a, b) {
    if (a.mission_name) {
      a = a.mission_name;
      b = b.mission_name;
      return a < b ? -1 : a > b ? 1 : 0;
    } else if (a.core_serial) {
      a = a.core_serial;
      b = b.core_serial;
      return a < b ? -1 : a > b ? 1 : 0;
    } else if (a.rocket_name) {
      a = a.rocket_name;
      b = b.core_serial;
      return a < b ? -1 : a > b ? 1 : 0;
    }
    return null;
  });
};

export default sortAtoZ;
