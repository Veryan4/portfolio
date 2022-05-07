import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { routerService, translateService } from "./services";
import { RouteController, ToastController } from "./controllers";

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

  private router = new RouteController(this);
  private toaster = new ToastController(this);

  @property({ type: Boolean })
  hasLoadedTranslations: boolean;

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="main">${this.router.navigation()}</div>
      ${this.toaster.wait()}
    `;
  }

  shouldUpdate(
    changedProperties: Map<string | number | symbol, unknown>
  ): boolean {
    return this.hasLoadedTranslations && super.shouldUpdate(changedProperties);
  }

  async connectedCallback() {
    super.connectedCallback();

    window.dispatchEvent(new CustomEvent(routerService.ROUTE_EVENT));
    window.onpopstate = () => {
      window.dispatchEvent(new CustomEvent(routerService.ROUTE_EVENT));
    };

    !this.hasLoadedTranslations &&
      (await translateService.initTranslateLanguage());
    this.hasLoadedTranslations = true;
  }
}
