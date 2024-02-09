import { SwaggerUIBundle, SwaggerUIStandalonePreset } from "swagger-ui-dist";
import "swagger-ui-dist/swagger-ui.css";

export default function Swagger() {
  SwaggerUIBundle({
    url: "",
    dom_id: "#swagger-ui",
    deepLinking: true,
    presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
    plugins: [SwaggerUIBundle.plugins.DownloadUrl],
    layout: "StandaloneLayout",
    configUrl: "/swagger-config.yaml",
  });

  return <div id="swagger-ui"></div>;
}
