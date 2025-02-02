const newArray = workshopData.map((data) => ({
  name: data.name,
  totalShipped: Object.values(data.toysShipped).reduce((acc, region) => {
    Object.values(region).forEach((location) => {
      location.forEach((item) => {
        acc[item.toy] = (acc[item.toy] || 0) + item.count;
      });
    });
    return acc;
  }, {}),
}));
console.log(newArray);
