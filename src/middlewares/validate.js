const httpStatus = require("http-status");

const ApiEror = require("../utils/ApiError");

// const validateSchema = (schemas) => (req, res, next) => {
//   const options = {
//     abortEarly: false, // include all errors
//     allowUnknown: true, // ignore unknown props
//     stripUnknown: true, // remove unknown props
//   };

//   let errors = '';
//   const keys = ['params', 'query', 'body'];
//   const schemaKeys = Object.keys(schemas); // keys for which schema are defined

//   keys.forEach((key) => {
//     if (!schemaKeys.includes(key)) {
//       req[key] = {};
//       return;
//     }

//     const { error, value } = schemas[key].validate(req[key], options);
//     if (error) {
//       errors = error.details.map((x) => x.message).join(', ');
//       errors += ' ';
//       return;
//     }
//     req[key] = value;
//   });

//   if (errors) {
//     return next(new ApiEror(httpStatus.BAD_REQUEST, errors));
//   }

//   return next();
// };

const validateSchema = (req, schemas) => {
  const options = {
    abortEarly: false, // include all errors
    allowUnknown: true, // ignore unknown props
    stripUnknown: true, // remove unknown props
    errors: {
      wrap: {
        label: "",
      },
    },
  };

  // let errors = '';
  const keys = ["params", "query", "body"];
  const schemaKeys = Object.keys(schemas); // keys for which schema are defined

  keys.forEach((key) => {
    if (!schemaKeys.includes(key)) {
      req[key] = {};
      return;
    }

    const { error, value } = schemas[key].validate(req[key], options);
    if (error) {
      let errors = error.details.map((x) => x.message).join(", ");
      throw new ApiEror(httpStatus.BAD_REQUEST, errors);
      // errors += ' ';
      // return;
    }
    req[key] = value;
  });

  // if (errors) {
  //   throw new ApiEror(httpStatus.BAD_REQUEST, errors);
  // }
};

module.exports = validateSchema;
