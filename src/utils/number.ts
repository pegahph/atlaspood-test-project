export function formatNumber(number: number | string) {
  let strNumber = number + "";
  strNumber = strNumber.replace(",", "");
  const x = strNumber.split(".");
  let y = x[0];
  const z = x.length > 1 ? "." + x[1] : "";
  const rgx = /(\d+)(\d{3})/;
  while (rgx.test(y)) y = y.replace(rgx, "$1" + "," + "$2");
  return y + z;
}
