type GetCheckStockeResult = {
    result: string;
};
export const getCheckStockResult = (data: any): GetCheckStockeResult => {
  let veryGood = [];
  let good = [];
  let normal = [];
  let bad = [];
  let tooBad = [];
  console.log(data);
  Object.values(data).forEach((element) => {
    switch (element) {
    case "1":
      tooBad.push(element);
      break;
    case "2":
      bad.push(element);
      break;
    case "3":
      normal.push(element);
      break;
    case "4":
      good.push(element);
      break;
    case "5":
      veryGood.push(element);
      break;
    default:
      break;
    }
  });
  const resultScore =
        veryGood.length * 3 +
        good.length * 2 +
        normal.length * 1 -
        bad.length * 2 -
        tooBad.length * 3;
  if (resultScore > 30) {
    return {
      result: "素晴らしい企業だと思います",
    };
  } else if (resultScore > 15) {
    return {
      result: "購入しても大丈夫です",
    };
  } else if (resultScore > 0) {
    return {
      result: "今後の変化に注目が必要です",
    };
  } else {
    return {
      result: "購入しなくて良いです",
    };
  }
};
