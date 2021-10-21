//宝藏问题
function pirate() {
  let weights = [3, 5, 4, 10, 7, 14, 2, 11];
  weights.sort((a, b) => a - b);
  const capacity = 30;
  let weight = 0,
    count = 0;
  for (let i = 0; i < weights.length; i++) {
    const newWeight = weight + weights[i];
    if (newWeight <= capacity) {
      weight = newWeight;
      count++;
    }
  }
  console.log('一共选了', count, '件古董');
}
pirate();
