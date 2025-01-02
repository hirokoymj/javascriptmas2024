export const findMostRequestedToy = (toyRequests) => {
  const toyCounts = toyRequests.reduce((acc, location) => {
    location.toys.forEach((toy) => {
      const toyName = Object.keys(toy)[0];
      acc[toyName] = (acc[toyName] || 0) + toy[toyName];
    });
    return acc;
  }, {});
  console.log(toyCounts);
};

output.sort((a, b) => {
  const toyA = Object.values(a)[0];
  const toyB = Object.values(b)[0];
  return toyB - toyA;
});
