import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { styles } from "./home.styles";
import "../../components/tabs/tabs";


@customElement("portfolio-home")
class HomeComponent extends LitElement {
  static styles = [styles];

  @state()
  isFormValid = false;

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="background"></div>
      <h1>Veryan Goodship</h1>

      <div class="wrap">
        <div class="content">
          <app-tabs></app-tabs>
        </div>
      </div>

      <div class="img-wrap">
        <img
          class="figure"
          @click=${(e: Event) => e.preventDefault()}
          src="./me.png"
        />
      </div>
    `;
  }

}
