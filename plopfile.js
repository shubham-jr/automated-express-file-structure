module.exports = (plop) => {
  plop.setGenerator("init", {
    description: "initial setup",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "press any key to continue...",
      },
    ],
    actions: [
      {
        type: "add",
        path: "./src/app.js",
        templateFile: "plop_templates/app.hbs",
      },
      {
        type: "add",
        path: "./src/index.js",
        templateFile: "plop_templates/index.hbs",
      },
      {
        type: "add",
        path: "./src/.env",
        templateFile: "plop_templates/config.hbs",
      },
      {
        type: "add",
        path: "./src/routes/index.js",
        templateFile: "plop_templates/routeIndex.hbs",
      },
      {
        type: "add",
        path: "./src/middlewares/error.js",
        templateFile: "plop_templates/error.hbs",
      },
      {
        type: "add",
        path: "./src/middlewares/validate.js",
        templateFile: "plop_templates/validateMiddleware.hbs",
      },
      {
        type: "add",
        path: "./src/utils/ApiError.js",
        templateFile: "plop_templates/apiError.hbs",
      },
      {
        type: "add",
        path: "./src/utils/config.js",
        templateFile: "plop_templates/utilsConfig.hbs",
      },
      {
        type: "add",
        path: "./src/utils/deleteFile.js",
        templateFile: "plop_templates/deleteFile.hbs",
      },
      {
        type: "add",
        path: "./src/utils/fileUpload.js",
        templateFile: "plop_templates/fileUpload.hbs",
      },
      {
        type: "add",
        path: "./src/utils/logger.js",
        templateFile: "plop_templates/logger.hbs",
      },
      {
        type: "add",
        path: "./src/utils/toJSON.js",
        templateFile: "plop_templates/toJSON.hbs",
      },
    ],
  });
  plop.setGenerator("model", {
    description:
      "generating models with route + controller + service + validator",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "type name of model",
      },
    ],
    actions: [
      {
        type: "add",
        path: "./src/models/{{name}}.model.js",
        templateFile: "plop_templates/schema.hbs",
      },
      {
        type: "add",
        path: "./src/controllers/{{name}}.controller.js",
        templateFile: "plop_templates/controller.hbs",
      },
      {
        type: "add",
        path: "./src/routes/{{name}}.route.js",
        templateFile: "plop_templates/routes.hbs",
      },
      {
        type: "add",
        path: "./src/services/{{name}}.service.js",
        templateFile: "plop_templates/service.hbs",
      },
      {
        type: "add",
        path: "./src/validations/{{name}}.validation.js",
        templateFile: "plop_templates/validate.hbs",
      },
      {
        type: "append",
        path: "./src/routes/index.js",
        templateFile: "plop_templates/appendRoute.hbs",
        pattern: "Routes_Appending",
      },
      {
        type: "append",
        path: "./src/routes/index.js",
        templateFile: "plop_templates/appendRequireRouteFile.hbs",
        pattern: "File_Appending",
      },
    ],
  });
  plop.setHelper("camel", (txt) => txt.charAt(0).toUpperCase() + txt.slice(1));
};
