import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { iconButtonStyles, buttonStyles } from "../../styles";
import { styles } from "./tabs.styles";
import { Tab } from "../../models";

import "@veryan/clock-component";

@customElement("app-tabs")
class TabsComponent extends LitElement {
  static styles = [iconButtonStyles, buttonStyles, styles];

  @state()
  selectedTab: Tab = Tab.bio;

  @state()
  selectedExperience = "";

  constructor() {
    super();
    const uri = decodeURI(window.location.pathname);
    if (uri !== "/") {
      this.selectedTab = uri.replace("/", "") as Tab
    }
  }

  render() {
    return html`
        <div class="tabs">
          <div class="tab ${this.selectedTab == Tab.bio ? "selected" : ""}" @click=${() => this.toggleTab(Tab.bio)}>Bio</div>
          <div class="tab ${this.selectedTab == Tab.experience ? "selected" : ""}" @click=${() => this.toggleTab(Tab.experience)}>Exp</div>
          <div class="tab ${this.selectedTab == Tab.projects ? "selected" : ""}" @click=${() => this.toggleTab(Tab.projects)}>Projects</div>
          <div class="tab ${this.selectedTab == Tab.socials ? "selected" : ""}" @click=${() => this.toggleTab(Tab.socials)}>Socials</div>
          <div class="tab ${this.selectedTab == Tab.stacks ? "selected" : ""}" @click=${() => this.toggleTab(Tab.stacks)}>Stacks</div>
        </div>

        <div class="content">
          ${this.selectedTab == Tab.bio ? html`
            <div class="bio">
              Experienced full-stack developer with an interest in innovative technologies.
            </div>
            <div 
              class="button"
              @click=${this.download}>
              Download CV
            </div>
          ` : ""}

          ${this.selectedTab == Tab.experience ? html`
              <div class="experience">
                  <div class="experience-title" @click=${() => this.toggleExperience("nbc")}>SENIOR SOFTWARE DEVELOPER</div>
                  <div class="employer" @click=${() => this.toggleExperience("nbc")}>National Bank of Canada | Aug 2022 - Present</div>
                  ${this.selectedExperience == "nbc" ? html`
                    <ul class="responsibilities">
                        <li>Delivering new business capabilities</li>
                    </ul>
                  `: ""}
              </div>

              <div class="experience">
                  <div class="experience-title" @click=${() => this.toggleExperience("stradigi")}>SENIOR SOFTWARE DEVELOPER</div>
                  <div class="employer" @click=${() => this.toggleExperience("stradigi")}>Stradigi.ai | May 2022 - Jul 2022</div>
                  ${this.selectedExperience == "stradigi" ? html`
                    <ul class="responsibilities">
                        <li>Maintaining and upgrading a custom framework for rendering statistical graphs.</li>
                        <li>Training junior developers</li>
                    </ul>
                  `: ""}
              </div>

              <div class="experience">
                  <div class="experience-title" @click=${() => this.toggleExperience("pivohub")}>SOFTWARE DEVELOPER</div>
                  <div class="employer" @click=${() => this.toggleExperience("pivohub")}>PivoHub | Oct 2021- April 2022</div>
                  ${this.selectedExperience == "pivohub" ? html`
                    <ul class="responsibilities">
                        <li>Delivering React/Node features within a custom Framework.</li>
                        <li>Documenting design patterns.</li>
                    </ul>
                  `: ""}
              </div>
              <div class="experience">
                  <div class="experience-title" @click=${() => this.toggleExperience("pomelo")}>SOFTWARE DEVELOPER</div>
                  <div class="employer" @click=${() => this.toggleExperience("pomelo")}>Pomelo Health (Telus Health) | Mar 2020 - Oct 2021</div>
                  ${this.selectedExperience == "pomelo" ? html`
                    <ul class="responsibilities">
                        <li>Delivering a variety of Angular, Vue, and Java applications.</li>
                        <li>Documenting APIs and complex features.</li>
                        <li>Participating in sprint organization</li>
                    </ul>
                  `: ""}
              </div>
              <div class="experience">
                  <div class="experience-title" @click=${() => this.toggleExperience("embrionix")}>SOFTWARE DEVELOPER</div>
                  <div class="employer" @click=${() => this.toggleExperience("embrionix")}>Embrionix (Riedel) | Jan 2019 - Nov 2019</div>
                  ${this.selectedExperience == "embrionix" ? html`
                    <ul class="responsibilities">
                        <li>Solely inherited a large outsourced project, without prior experience in the languages or tools.</li>
                        <li>Troubleshot CPU and bandwidth performance issues.</li>
                    </ul>
                  `: ""}
              </div>
              <div class="experience">
                  <div class="experience-title" @click=${() => this.toggleExperience("truba")}>CO-FOUNDER</div>
                  <div class="employer" @click=${() => this.toggleExperience("truba")}>truba.news | May 2017 - Present</div>
                  ${this.selectedExperience == "truba" ? html`
                    <ul class="responsibilities">
                        <li>Designed and coded the full stack application.</li>
                        <li>Winner of the FinTech Formathon, the Desjardins Cooperathon, and the CenTech Propulsion Program, which helped raised tens of thousands of dollars.</li>
                        <li>Recruited and lead a team of 3 developers with varying degrees of experience.</li>
                    </ul>
                  `: ""}
              </div>
              <div class="experience">
                  <div class="experience-title" @click=${() => this.toggleExperience("sunlife")}>VARIOUS ROLES</div>
                  <div class="employer" @click=${() => this.toggleExperience("sunlife")}>Sun Life Financial | Jan 2014 - May 2017</div>
                  ${this.selectedExperience == "sunlife" ? html`
                    <ul class="responsibilities">
                        <li>Provided clients with needs based financial recommendations.</li>
                        <li>Regularly surpassed daily stretch targets.</li>
                    </ul>
                  `: ""}
              </div>
          ` : ""}

          ${this.selectedTab == Tab.projects ? html`
            <div class="cards-wrap">
              <div class="card" @click=${() => window.open("https://truba.news")}>
                <div
                  class="card-image"
                >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1205 400" enable-background="new 0 0 1205 400">
                  <rect x="418" y="-282" fill="none" width="724" height="221"/>
                  <text transform="matrix(1 0 0 1 494.0703 -71.3311)" display="none" fill="white" font-family="'GothicA1-Medium'" font-size="273">Trub</text>
                  <g>
                    <g>
                      <path d="M585.698,116.289v31.953h26.234v19.249h-26.234v79.755c0,5.293,2.416,10.984,5.112,13.115    c6.703,5.297,15.842,2.759,21.128,2.759l-0.013,19.52c-25.575,1.478-33.462-3.049-38.584-9.147s-7.101-14.757-7.101-25.977    v-80.024h-25.532v-19.249h25.532v-31.953H585.698z"/>
                      <path d="M810.558,265.998c-8.659,10.326-22.618,15.488-39.373,15.488c-13.871,0-23-3.636-30.255-11.808    c-7.257-8.171-10.922-19.894-11.001-35.912v-85.381h19.457v84.294c0,20.002,8.016,30.002,24.052,30.002    c16.996,0,31.508-7.815,37.12-20.662v-93.634h19.457v132.033h-19.457V265.998z"/>
                      <path d="M955.605,215.818c0,20.06-4.265,36.175-12.793,48.347c-8.53,12.174-19.977,18.258-34.342,18.258    c-15.338,0-26.563-5.863-34.942-17.591v15.53H854.07V116.507h19.457v46.42c8.378-11.241,19.977-16.625,34.718-16.625    c14.738,0,26.317,6.026,34.735,18.077c8.417,12.053,12.625,28.552,12.625,49.499V215.818z M936.375,213.175    c0-15.287-0.962-27.094-6.423-35.426c-5.462-8.329-13.318-12.496-23.567-12.496c-13.692,0-26.872,7.208-32.857,20.957v56.433    c6.359,13.75,19.614,20.638,33.081,20.638c9.95,0,17.694-4.165,23.232-12.496C935.376,242.455,936.375,229.918,936.375,213.175z"/>
                      <path d="M1058.8,281.07c0.349,0,0-14.285,0-14.285c-10.354,10.897-20.828,16.39-35.196,16.39    c-12.843,0-23.378-3.677-31.604-11.038c-8.229-7.357-12.341-16.686-12.341-27.989c0-13.739,5.156-24.411,15.471-32.014    c10.313-7.602,24.822-11.403,43.525-11.403l20.146,0.144v-10.367c0-7.886-2.329-14.166-6.983-18.842    c-4.656-4.675-10.661-6.414-19.73-6.414c-7.946,0-14.004,1.87-19.38,5.934c-5.378,4.067-8.067,8.913-8.067,14.686l-19.624-0.222    c0-6.586,2.306-12.946,6.922-19.087c4.615-6.138,10.876-10.924,18.783-14.503c7.904-3.577,12.516-4.987,21.988-4.987    c15.009,0,25.323,3.423,33.832,11.024c8.507,7.604,11.395,18.071,11.717,31.404v60.736v30.832H1058.8z M1024.04,263.898    c6.983,0,13.605-1.83,19.865-5.488c6.261-3.659,12.084-8.416,14.895-14.269v-27.075h-18.747c-27.292,0-40.936,8.091-40.936,24.269    c0,7.074,2.328,12.604,6.983,16.587C1010.754,261.907,1016.734,263.898,1024.04,263.898z"/>
                      <path d="M705.867,167.842c-3.415-0.568-14.555-1.586-18.538-1.586c-14.799,0-26.602,8.707-31.885,21.309v92.853h-19.457V148.46    h19.457v15.309c7.397-11.788,19.412-17.748,32.991-17.748c4.391,0,15.163,1.301,17.44,2.439L705.867,167.842z"/>
                    </g>
                    <g id="carousel">
                      <path d="M198.812,283.443h-65.812c-3.456,0-6.258-2.802-6.258-6.258v-154.37c0-3.456,2.802-6.258,6.258-6.258h65.812V283.443z"/>
                      <path d="M461.182,283.443h-65.875V116.557h65.875c3.421,0,6.194,2.773,6.194,6.194v154.497    C467.377,280.67,464.604,283.443,461.182,283.443z"/>
                      <g>
                        <g>
                          <path d="M378.245,308.461h-162.37c-3.763,0-6.814-3.051-6.814-6.814V98.353c0-3.763,3.051-6.814,6.814-6.814h162.37      c3.763,0,6.814,3.051,6.814,6.814v203.293C385.059,305.41,382.008,308.461,378.245,308.461z"/>
                        </g>
                      </g>
                    </g>
                  </g>
                  </svg>
              </div>
                <div
                  class="card-description"
                >
                Personalized news website
                </div>
              </div>

              <div class="card" @click=${() => window.open("https://d-rummy.com")}>
                <div
                  class="card-image"
                  style='background-image: url("/d-rummy-logo.png");'
                ></div>
                <div
                  class="card-description"
                >
                  Decentralized card game of Rummy
                </div>
              </div>

              <div class="card" @click=${() => window.open("https://github.com/Veryan4/clock")}>
                <div style="display:flex;justify-content:center;">
                  <div style="width:100px;height:100px;">
                    <app-clock clockColor="white" secondsColor="white"></app-clock>
                  </div>
                </div>
                <div
                  class="card-description"
                >
                  Analog Clock Web Component
                </div>
              </div>
            </div>
          ` : ""}

          ${this.selectedTab == Tab.socials ? html`
            <div class="socials">
              <a class="social" href="https://www.linkedin.com/in/veryan-goodship">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                LinkedIn
              </a>
              <a class="social" href="https://v-goodship.medium.com/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 1280">
                  <g id="Monogram" fill-rule="nonzero" fill="white">
                    <path d="M0,0 L1280,0 L1280,1280 L0,1280 L0,0 Z M305.454476,428.082907 L305.454476,808.14483 C307.793289,821.855081 303.471341,835.860191 293.81254,845.870093 L203.487179,955.433879 L203.487179,969.881849 L459.609758,969.881849 L459.609758,955.433879 L369.284397,845.870093 C359.554756,835.876759 354.965188,821.96394 356.83957,808.14483 L356.83957,479.453474 L581.649357,969.881849 L607.74335,969.881849 L800.838899,479.453474 L800.838899,870.35138 C800.838899,880.786025 800.838899,882.792684 794.01432,889.61534 L724.564152,957.039209 L724.564152,971.487179 L1061.77883,971.487179 L1061.77883,957.039209 L994.737342,891.22067 C988.819193,886.709511 985.88349,879.295107 987.109868,871.95671 L987.109868,388.350985 C985.88349,381.012586 988.819193,373.59818 994.737342,369.087023 L1063.38462,303.268485 L1063.38462,288.820513 L825.728558,288.820513 L656.318322,711.423685 L463.624219,288.820513 L214.326223,288.820513 L214.326223,303.268485 L294.615433,399.989629 C302.497477,407.094029 306.522833,417.527186 305.454476,428.082907 Z" id="Rectangle-path"></path>
                  </g>
                </svg>
                Medium
              </a>
              <a class="social" href="https://github.com/Veryan4">
                <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="#1B1F23"/>
                </svg>
                Github
              </a>
              <a class="social" href="mailto:v.goodship@gmail.com">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="white" viewBox="0 0 330.001 330.001" xml:space="preserve">
                <g fill="white">
                  <path d="M173.871,177.097c-2.641,1.936-5.756,2.903-8.87,2.903c-3.116,0-6.23-0.967-8.871-2.903L30,84.602   L0.001,62.603L0,275.001c0.001,8.284,6.716,15,15,15L315.001,290c8.285,0,15-6.716,15-14.999V62.602l-30.001,22L173.871,177.097z"/>
                  <polygon points="165.001,146.4 310.087,40.001 19.911,40  "/>
                </g>
                </svg>
                Email
              </a>
            </div>
          ` : ""}
          
          ${this.selectedTab == Tab.stacks ? html`
          <div class="stacks">
              <div class="stack">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="white" d="M2 63.91v62.5h125v-125H2zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1A23 23 0 0180 109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73l4.6-2.64 3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H57.16v46.23H45.65V69.26H29.38v-5a49.19 49.19 0 01.14-5.16c.06-.08 10-.12 22-.1h21.81z"/></svg>
                Typescript
              </div>
              <div class="stack">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="white" d="M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.183c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191C37.098 6.188 35 10.758 35 19.183V30h29v4H23.776c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 17.919 0 29.53C7.614 86.983 12.569 93 21.054 93H31V79.952C31 70.315 39.428 62 49.33 62zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zm74.789 25.921C120.183 40.363 116.178 34 107.682 34H97v12.981C97 57.031 88.206 65 78.489 65H49.33C41.342 65 35 72.326 35 80.326v27.8c0 7.91 6.745 12.564 14.462 14.834 9.242 2.717 17.994 3.208 29.051 0C85.862 120.831 93 116.549 93 108.126V97H64v-4h43.682c8.484 0 11.647-5.776 14.599-14.66 3.047-9.145 2.916-17.799 0-29.529zm-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547 0 3.076-2.451 5.579-5.479 5.579-3.015 0-5.478-2.502-5.478-5.579 0-3.068 2.463-5.547 5.478-5.547z"/></svg>
                Python
              </div>
              <div class="stack">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill-rule="evenodd" clip-rule="evenodd" fill="white" d="M90.491 57.282c-.37-4.79-1.496-9.409-3.062-13.934-3.244-10.104-8.45-19.046-15.783-26.74-1.854-1.946-3.916-3.729-5.209-6.151-.818-1.532-1.597-3.085-2.394-4.629l-.505-1.273c-.085.292-.139.396-.142.501-.065 2.517-1.491 4.224-3.267 5.817-1.997 1.793-3.856 3.739-5.775 5.618l-5.901 7.763c-1.592 2.925-3.182 5.85-4.772 8.775l-3.19 8.617-.096.134c-1.756 5.768-2.622 11.698-3.048 17.688-.16 2.251.022 4.535.149 6.798.181 3.235.743 6.415 1.586 9.545 3.062 11.372 9.276 20.805 17.771 28.819 1.579 1.489 3.199 2.843 4.847 4.26.282-.965.507-1.93.763-2.895.256-.961.515-1.917.688-2.881-.174.964-.369 1.92-.562 2.881l-.826 2.895.738 2.501.684 3.884.326 4.053c-.003.823-.036 1.648.014 2.47.012.21.288.404.442.606l1.376.483 1.434.558-.246-3.603-.011-3.548.495-5.405.359-1.177 1.027-1.82c1.268-1.02 2.629-1.946 3.784-3.081 2.09-2.054 4.175-4.134 6.045-6.383a47.846 47.846 0 006.191-9.516c1.122-2.284 2.178-4.614 3.052-7.001.77-2.104 1.247-4.315 1.854-6.479.054-.156.126-.309.16-.468 1.254-5.841 1.465-11.741 1.004-17.682zm-23.599 49.375l-.805-1.763.805 1.763 1.183 1.01-1.183-1.01z"/></svg>
                MongoDB
              </div>
              <div class="stack">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="white" d="M124.8 52.1c-4.3-2.5-10-2.8-14.8-1.4-.6-5.2-4-9.7-8-12.9l-1.6-1.3-1.4 1.6c-2.7 3.1-3.5 8.3-3.1 12.3.3 2.9 1.2 5.9 3 8.3-1.4.8-2.9 1.9-4.3 2.4-2.8 1-5.9 2-8.9 2H79V49H66V24H51v12H26v13H13v14H1.8l-.2 1.5c-.5 6.4.3 12.6 3 18.5l1.1 2.2.1.2c7.9 13.4 21.7 19 36.8 19 29.2 0 53.3-13.1 64.3-40.6 7.4.4 15-1.8 18.6-8.9l.9-1.8-1.6-1zM28 39h10v11H28V39zm13.1 44.2c0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-1.7 1.4-3.1 3.1-3.1 1.7.1 3.1 1.4 3.1 3.1zM28 52h10v11H28V52zm-13 0h11v11H15V52zm27.7 50.2c-15.8-.1-24.3-5.4-31.3-12.4 2.1.1 4.1.2 5.9.2 1.6 0 3.2 0 4.7-.1 3.9-.2 7.3-.7 10.1-1.5 2.3 5.3 6.5 10.2 14 13.8h-3.4zM51 63H40V52h11v11zm0-13H40V39h11v11zm13 13H53V52h11v11zm0-13H53V39h11v11zm0-13H53V26h11v11zm13 26H66V52h11v11zM38.8 81.2c-.2-.1-.5-.2-.8-.2-1.2 0-2.2 1-2.2 2.2 0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2c0-.3-.1-.6-.2-.8-.2.3-.4.5-.8.5-.5 0-.9-.4-.9-.9.1-.4.3-.7.5-.8z"/></svg>
                Docker
              </div>
              <div class="stack">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g fill="white"><path d="M56.484 55.098c.37.27.82.43 1.31.43 1.2 0 2.18-.95 2.23-2.13l.05-.03.75-13.26c-.9.11-1.8.26-2.7.46-4.93 1.12-9.2 3.55-12.54 6.83l10.87 7.71.03-.01zM55.034 74.528a2.218 2.218 0 00-2.58-1.69l-.02-.03-13.05 2.21a26.15 26.15 0 0010.51 13.15l5.06-12.22-.04-.05c.17-.42.23-.89.12-1.37zM50.694 65.118c.44-.12.85-.38 1.16-.76.75-.94.62-2.29-.28-3.07l.01-.05-9.93-8.88a26.07 26.07 0 00-3.7 16.48l12.73-3.67.01-.05zM60.334 69.018l3.66 1.76 3.66-1.75.9-3.95-2.53-3.16h-4.06l-2.54 3.16zM67.934 53.348c.02.46.18.91.49 1.29.75.94 2.1 1.11 3.06.41l.04.02 10.8-7.66c-4.08-3.99-9.4-6.6-15.15-7.3l.75 13.24h.01zM75.514 72.778c-.17-.03-.34-.05-.51-.04-.29.01-.58.09-.85.22a2.23 2.23 0 00-1.08 2.89l-.02.02 5.11 12.34c4.93-3.14 8.61-7.83 10.54-13.24l-13.16-2.23-.03.04zM65.954 79.318a2.246 2.246 0 00-2.04-1.17c-.77.03-1.5.46-1.89 1.18h-.01l-6.42 11.6a26.16 26.16 0 0014.27.73c.88-.2 1.74-.44 2.57-.72l-6.43-11.63h-.05z"/><path d="M124.544 76.788l-10.44-45.33a8.012 8.012 0 00-4.37-5.43l-42.24-20.18a8.157 8.157 0 00-3.92-.78 8.15 8.15 0 00-3.1.78l-42.24 20.18a8.055 8.055 0 00-4.37 5.43l-10.41 45.34a7.92 7.92 0 001.1 6.14c.14.22.3.43.46.64l29.24 36.35a8.087 8.087 0 006.32 3.01l46.89-.01c2.46 0 4.78-1.11 6.32-3.01l29.23-36.36a7.981 7.981 0 001.53-6.77zm-16.07-.55c-.31 1.35-1.76 2.17-3.26 1.85-.01 0-.03 0-.04-.01-.02 0-.03-.01-.05-.02-.21-.05-.47-.09-.65-.14-.86-.23-1.49-.58-2.27-.88-1.67-.6-3.06-1.1-4.41-1.3-.69-.05-1.04.27-1.42.52-.18-.04-.75-.14-1.08-.19-2.42 7.61-7.58 14.21-14.57 18.33.12.29.33.91.42 1.02-.16.43-.4.83-.19 1.49.49 1.27 1.28 2.52 2.24 4.01.46.69.94 1.22 1.36 2.02.1.19.23.48.33.68.65 1.39.17 2.99-1.08 3.59-1.26.61-2.82-.03-3.5-1.43-.1-.2-.23-.46-.31-.65-.36-.82-.48-1.52-.73-2.32-.57-1.68-1.05-3.07-1.73-4.25-.39-.57-.86-.64-1.29-.78-.08-.14-.38-.69-.54-.97-1.4.53-2.84.97-4.34 1.31-6.56 1.49-13.13.89-18.99-1.37l-.57 1.04c-.43.11-.84.23-1.09.53-.92 1.1-1.29 2.86-1.96 4.54-.25.79-.37 1.5-.73 2.32-.08.19-.22.45-.31.64v.01l-.01.01c-.67 1.39-2.23 2.03-3.49 1.43-1.25-.6-1.72-2.2-1.08-3.59.1-.2.22-.49.32-.68.42-.79.89-1.33 1.36-2.02.96-1.5 1.8-2.84 2.29-4.11.12-.42-.06-1-.22-1.43l.46-1.1c-6.73-3.99-12.04-10.34-14.58-18.21l-1.1.19c-.3-.17-.89-.56-1.45-.51-1.35.2-2.74.7-4.41 1.3-.78.3-1.4.64-2.27.87-.18.05-.44.1-.65.15-.02 0-.03.01-.05.02-.01 0-.03 0-.04.01-1.5.32-2.95-.5-3.26-1.85-.31-1.35.65-2.72 2.14-3.08.01 0 .03-.01.04-.01.01 0 .01 0 .02-.01.21-.05.48-.12.68-.16.88-.17 1.6-.13 2.43-.19 1.77-.19 3.23-.34 4.53-.75.41-.17.81-.74 1.09-1.1l1.06-.31c-1.19-8.22.82-16.28 5.16-22.81l-.81-.72c-.05-.32-.12-1.04-.51-1.46-.99-.93-2.25-1.71-3.76-2.64-.72-.42-1.38-.69-2.1-1.23-.15-.11-.36-.29-.52-.42-.01-.01-.03-.02-.04-.03-1.21-.97-1.49-2.64-.62-3.73.49-.61 1.24-.92 2.01-.89.6.02 1.23.24 1.76.66.17.14.41.32.56.45.68.58 1.09 1.16 1.66 1.77 1.25 1.27 2.28 2.32 3.41 3.08.59.35 1.05.21 1.5.15.15.11.63.46.91.65 4.3-4.57 9.96-7.95 16.52-9.44 1.53-.35 3.05-.58 4.57-.7l.06-1.07c.34-.33.71-.79.82-1.31.11-1.36-.07-2.82-.28-4.59-.12-.82-.31-1.51-.35-2.4-.01-.18 0-.44.01-.65 0-.02-.01-.05-.01-.07 0-1.55 1.13-2.81 2.53-2.81s2.53 1.26 2.53 2.81c0 .22.01.52.01.72-.03.89-.23 1.58-.35 2.4-.21 1.76-.4 3.23-.29 4.59.1.68.5.95.83 1.26.01.18.04.79.06 1.13 8.04.71 15.5 4.39 20.99 10.14l.96-.69c.33.02 1.04.12 1.53-.17 1.13-.76 2.16-1.82 3.41-3.08.57-.61.99-1.18 1.67-1.77.15-.13.39-.31.56-.45 1.21-.97 2.9-.86 3.77.23s.59 2.76-.62 3.73c-.17.14-.39.33-.56.45-.72.53-1.38.8-2.1 1.23-1.51.93-2.77 1.71-3.76 2.64-.47.5-.43.98-.48 1.43-.14.13-.63.57-.9.8a32.75 32.75 0 014.74 10.95c.92 3.99 1.06 7.97.53 11.8l1.02.3c.18.26.56.89 1.09 1.1 1.3.41 2.76.56 4.53.75.83.07 1.55.03 2.43.19.21.04.52.12.73.17 1.5.37 2.45 1.74 2.14 3.09z"/><path d="M86.274 52.358l-9.88 8.84.01.03c-.34.3-.6.7-.71 1.18-.27 1.17.44 2.33 1.58 2.65l.01.05 12.79 3.68c.27-2.76.11-5.62-.55-8.48-.66-2.89-1.77-5.56-3.25-7.95z"/></g></svg>
                Kubernetes
              </div>
            </div>
          ` : ""}
        </div>
    `;
  }

  download() {
    const a = document.createElement('a')
    a.download = "CV.pdf"
    a.href = "/" + a.download
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  toggleExperience(experience: string) {
    if (this.selectedExperience === experience) {
      this.selectedExperience = ""
    } else {
      this.selectedExperience = experience;
    }
  }

  toggleTab(tab: Tab) {
    window.history.pushState({}, "", tab);
    if (this.selectedTab !== tab) {
      this.selectedTab = tab
      if (tab !== Tab.experience) {
        this.selectedExperience = ""
      }
    }
  }

}
