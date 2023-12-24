function parseTextNum(input) {
  switch (input) {
    case "one":
      return "1";
    case "two":
      return "2";
    case "three":
      return "3";
    case "four":
      return "4";
    case "five":
      return "5";
    case "six":
      return "6";
    case "seven":
      return "7";
    case "eight":
      return "8";
    case "nine":
      return "9";
    default:
      return input;
  }
}

function getFirstAndLastNum(input = "") {
  const matches = input.match(
    /(\d|one|two|three|four|five|six|seven|eight|nine)/g
  );
  const matchesv2 = input.match(
    /(\d|one|two|three|four|five|six|seven|eight|nine)$/g
  );
  console.log("matches", matches);
  if (!matches) {
    console.log(input);
    return 0;
  }
  if (!matchesv2) {
    console.log(input);
    return 0;
  }

  return parseTextNum(matches[0]) + parseTextNum(matchesv2[matchesv2.length - 1]);
}

fetch("1-input.txt")
  .then((res) => res.text())
  .then((text) => {
    const input = text.split(/\r?\n/);

    // const input = [
    //   "twone",
    // ];

    let total = 0;
    input.forEach((element) => {
      total += Number(getFirstAndLastNum(element));
      console.log(Number(getFirstAndLastNum(element)));
    });
    console.log(total);
  })
  .catch((e) => console.error(e));
