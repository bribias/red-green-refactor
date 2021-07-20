const copyAndPush = (ogArr, pushedItem) => {
  const newArray = ogArr;
  newArray.push(pushedItem);
  return newArray;
};

export default copyAndPush;
