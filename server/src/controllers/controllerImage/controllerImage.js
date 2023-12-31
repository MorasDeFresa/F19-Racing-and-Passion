const createImage = async ({ Image, register, driverFilter }) => {
  let imageBy = "N/A";
  let urlImage =
    "https://media.discordapp.net/attachments/1145765718227435656/1166468813689192488/11-racing-512.png?ex=654a99bd&is=653824bd&hm=3c32fff6cbb3a7ee6301dc8dfbc910e682977ad902fff07abd5e5fcd499b4835&=&width=432&height=432";
  if (register?.image?.imageby || register?.imageby)
    imageBy = register?.image?.imageby
      ? register?.image?.imageby
      : register?.imageby;
  if (register?.image?.url !== "" || register?.urlImage)
    urlImage = register?.image?.url ? register?.image?.url : register?.urlImage;
  let [image] = await Image.findOrCreate({
    where: {
      urlImage: urlImage,
      imageBy: imageBy,
      driver: driverFilter?.id,
    },
  });
  image.setDriver(driverFilter?.id);
};

module.exports = {
  createImage,
};
