import { LitElement, html, css, PropertyValueMap } from "lit";
import { customElement } from "lit/decorators.js";
import { RouteController, TranslationController } from "@veryan/lit-spa";
import { routes } from "./app.routes";

@customElement("my-app")
class Portfolio extends LitElement {
  static styles = [
    css`
      .main {
        padding: 1rem 10rem;
        display: flex;
        justify-content: center;
      }
      @media only screen and (max-width: 752px) {
        .main {
          padding: 1rem;
        }
      }
    `,
  ];

  private router = new RouteController(this, routes);
  private i18n = new TranslationController(this, {
    supportedLanguages: ["en", "fr"],
  });

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="main">${this.router.navigation()}</div>
    `;
  }

  protected shouldUpdate(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>,
  ): boolean {
    return this.i18n.hasLoadedTranslations;
  }
}
