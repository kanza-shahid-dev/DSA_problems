// Input:
//   duration = 60
//   segments = [[3, 10], [15, 20], [18, 30], [45, 55]]
// Output: [
//   [0, 3],
//   [10, 15],
//   [30, 45],
//   [55, 60],
// ];

const segmentsOutput = () => {
  let startIndex = 0;

  let output = [];

  let lastTimeSeen = 0;

  let value = [];

  for (let segment of segments) {
    let extractedArray = segment;
    let firstIndex = extractedArray[0];
    let secondIndex = extractedArray[1];
    startIndex = lastTimeSeen;

    // If gap exists
    if (firstIndex > lastTimeSeen) {
      value = [startIndex, firstIndex];
      output.push(value);
    }

    // Handle overlap / update coverage
    lastTimeSeen = Math.max(lastTimeSeen, secondIndex);
  }

  // Final gap after last segment
  if (lastTimeSeen < duration) {
    output.push([lastTimeSeen, duration]);
  }

  return output;
};
