import path from "node:path";
import { generateApi } from "swagger-typescript-api";


console.log("API_SWAGGER_URL", process.env.API_SWAGGER_URL);
/* NOTE: all fields are optional expect one of `input`, `url`, `spec` */
generateApi({
  name: "Api.ts",
  // set to `false` to prevent the tool from writing to disk
  output: path.resolve('.', 'src'),
  
  url: process.env.API_SWAGGER_URL,
  // input: path.resolve(".", "swagger.json"),
  httpClientType: "fetch", // or "fetch"
  defaultResponseAsSuccess: false,
  generateClient: true,
  generateRouteTypes: true,
  generateResponses: true,
  generateApi: true,
  moduleNameIndex: 0,
  extractRequestParams: true,
  extractRequestBody: true,
  unwrapResponseData: true,
  modular: false,
  singleHttpClient: true,
  primitiveTypeConstructs: (constructs) => ({
    ...constructs,
    string: {
      "date-time": "Date",
    },
  }),
  // hooks: {
  //   onCreateComponent: (component) => {},
  //   onCreateRequestParams: (rawType) => {},
  //   onCreateRoute: (routeData) => {},
  //   onCreateRouteName: (routeNameInfo, rawRouteInfo) => {},
  //   onFormatRouteName: (routeInfo, templateRouteName) => {},
  //   onFormatTypeName: (typeName, rawTypeName, schemaType) => {},
  //   onInit: (configuration) => {},
  //   onPreParseSchema: (originalSchema, typeName, schemaType) => {},
  //   onParseSchema: (originalSchema, parsedSchema) => {},
  //   onPrepareConfig: (currentConfiguration) => {},
  // },
})