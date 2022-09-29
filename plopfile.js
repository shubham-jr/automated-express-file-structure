module.exports = (plop) => {
  // create your generators here
  plop.setGenerator("init", {
    description: "Setting up the express project",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Create a boiler plate for your express app ? ",
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: "add",
        path: "./index.js",
        templateFile: "plop_templates/index.hbs",
      },
      {
        type: "add",
        path: "./app.js",
        templateFile: "plop_templates/app.hbs",
      },
      {
        type: "add",
        path: "./utils/AppError.js",
        templateFile: "plop_templates/appError.hbs",
      },
      {
        type: "add",
        path: "./utils/catchAsync.js",
        templateFile: "plop_templates/catchAsync.hbs",
      },
      {
        type: "add",
        path: "./controllers/errorController.js",
        templateFile: "plop_templates/errorController.hbs",
      },
      {
        type: "add",
        path: "./env/config.env",
        templateFile: "plop_templates/config.hbs",
      },
    ], // array of actions
  });

  // -------------------Second Generator----------------------

  plop.setGenerator("model", {
    description: "plop generating models with route + controller",
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
        path: "./models/{{name}}Model.js",
        templateFile: "plop_templates/schema.hbs",
      },
      {
        type: "add",
        path: "./controllers/{{name}}Controllers.js",
        templateFile: "plop_templates/controllers.hbs",
      },
      {
        type: "add",
        path: "./routes/{{name}}Routes.js",
        templateFile: "plop_templates/routes.hbs",
      },
      {
        type: "append",
        path: "./app.js",
        templateFile: "plop_templates/routesImport.hbs",
        pattern: "Requiring_Routes",
      },
      {
        type: "append",
        path: "./app.js",
        templateFile: "plop_templates/useRouteInApp.hbs",
        pattern: "Using_Routes",
      },
    ],
  });
};
