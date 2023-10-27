const createDriver = async ({ Driver, register }) => {
  let codeDriver = null;
  let numberDriver = null;
  let descriptionDriver = null;
  if (register?.code != "\\N") codeDriver = register?.code;
  if (Number.isInteger(register?.number)) numberDriver = register?.number;
  if (register?.description?.length > 10 && register?.description)
    descriptionDriver = register?.description;
  await Driver.findOrCreate({
    where: {
      referenceDriver: register?.driverRef,
      foreNameDriver: register?.name?.forename,
      surNameDriver: register?.name?.surname,
      numberDriver: numberDriver,
      codeDriver: codeDriver,
      dateOfBornDriver: register?.dob,
      nationalityDriver: register?.nationality,
      urlDriver: register?.url,
      descriptionDriver: descriptionDriver,
    },
  });
};

module.exports = {
  createDriver,
};
