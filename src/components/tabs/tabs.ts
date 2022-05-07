import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { iconButtonStyles, buttonStyles } from "../../styles";
import { styles } from "./tabs.styles";
import { Tab } from "../../models";

import "@material/mwc-button";

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
            Experienced full-stack developer with an interest in innovative technologies.
            <div style="margin-top:1rem;">
              <mwc-button
                dense
                unelevated
                label=${"Download CV"}
                @click=${this.download}
                ></mwc-button>
            </div>
          ` : ""}

          ${this.selectedTab == Tab.experience ? html`
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
            <div class="card-wrap">
              <div class="card" @click=${() => window.open("https://truba.news")}>
                <div
                  class="card-image"
                  style='background-image: url("https://truba.news/truba-logo.svg");'
                ></div>
                <div class="card-text">
                  <h4
                    class="card-description"
                  >
                  Personalized news website
                  </h4>
                </div>
              </div>
            </div>

            <div class="card-wrap">
              <div class="card" @click=${() => window.open("https://d-rummy.com")}>
                <div
                  class="card-image"
                  style='background-image: url("https://d-rummy.com/d-rummy-logo.png");'
                ></div>
                <div class="card-text">
                  <h4
                    class="card-description"
                  >
                    Decentralized card game of Rummy
                  </h4>
                </div>
              </div>
            </div>
          ` : ""}

          ${this.selectedTab == Tab.socials ? html`
            <div class="socials">
              <a class="social" href="https://www.linkedin.com/in/veryan-goodship">
                  <i class="material-icons mdc-icon-button__icon icon linkedin"></i>
                  LinkedIn
              </a>
              <a class="social" href="https://v-goodship.medium.com/">
                <i class="material-icons mdc-icon-button__icon icon medium"></i>
                Medium
              </a>
              <a class="social" href="https://github.com/Veryan4">
                <i class="material-icons mdc-icon-button__icon icon github"></i>
                Github
              </a>
              <a class="social" href="https://gitlab.com/trubanews/truba">
                <i class="material-icons mdc-icon-button__icon icon gitlab"></i>
                Gitlab
              </a>
              <a class="social" href="mailto:v.goodship@gmail.com">
                <i class="material-icons mdc-icon-button__icon icon email"></i>
                Email
              </a>
            </div>
          ` : ""}
          
          ${this.selectedTab == Tab.stacks ? html`
          <div class="stacks">
              <div class="stack">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#007acc" d="M2 63.91v62.5h125v-125H2zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1A23 23 0 0180 109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73l4.6-2.64 3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H57.16v46.23H45.65V69.26H29.38v-5a49.19 49.19 0 01.14-5.16c.06-.08 10-.12 22-.1h21.81z"/></svg>
                Typescript
              </div>
              <div class="stack">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#FFD845" d="M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.183c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191C37.098 6.188 35 10.758 35 19.183V30h29v4H23.776c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 17.919 0 29.53C7.614 86.983 12.569 93 21.054 93H31V79.952C31 70.315 39.428 62 49.33 62zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zm74.789 25.921C120.183 40.363 116.178 34 107.682 34H97v12.981C97 57.031 88.206 65 78.489 65H49.33C41.342 65 35 72.326 35 80.326v27.8c0 7.91 6.745 12.564 14.462 14.834 9.242 2.717 17.994 3.208 29.051 0C85.862 120.831 93 116.549 93 108.126V97H64v-4h43.682c8.484 0 11.647-5.776 14.599-14.66 3.047-9.145 2.916-17.799 0-29.529zm-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547 0 3.076-2.451 5.579-5.479 5.579-3.015 0-5.478-2.502-5.478-5.579 0-3.068 2.463-5.547 5.478-5.547z"/></svg>
                Python
              </div>
              <div class="stack">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill-rule="evenodd" clip-rule="evenodd" fill="#4FAA41" d="M90.491 57.282c-.37-4.79-1.496-9.409-3.062-13.934-3.244-10.104-8.45-19.046-15.783-26.74-1.854-1.946-3.916-3.729-5.209-6.151-.818-1.532-1.597-3.085-2.394-4.629l-.505-1.273c-.085.292-.139.396-.142.501-.065 2.517-1.491 4.224-3.267 5.817-1.997 1.793-3.856 3.739-5.775 5.618l-5.901 7.763c-1.592 2.925-3.182 5.85-4.772 8.775l-3.19 8.617-.096.134c-1.756 5.768-2.622 11.698-3.048 17.688-.16 2.251.022 4.535.149 6.798.181 3.235.743 6.415 1.586 9.545 3.062 11.372 9.276 20.805 17.771 28.819 1.579 1.489 3.199 2.843 4.847 4.26.282-.965.507-1.93.763-2.895.256-.961.515-1.917.688-2.881-.174.964-.369 1.92-.562 2.881l-.826 2.895.738 2.501.684 3.884.326 4.053c-.003.823-.036 1.648.014 2.47.012.21.288.404.442.606l1.376.483 1.434.558-.246-3.603-.011-3.548.495-5.405.359-1.177 1.027-1.82c1.268-1.02 2.629-1.946 3.784-3.081 2.09-2.054 4.175-4.134 6.045-6.383a47.846 47.846 0 006.191-9.516c1.122-2.284 2.178-4.614 3.052-7.001.77-2.104 1.247-4.315 1.854-6.479.054-.156.126-.309.16-.468 1.254-5.841 1.465-11.741 1.004-17.682zm-23.599 49.375l-.805-1.763.805 1.763 1.183 1.01-1.183-1.01z"/></svg>
                MongoDB
              </div>
              <div class="stack">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M124.8 52.1c-4.3-2.5-10-2.8-14.8-1.4-.6-5.2-4-9.7-8-12.9l-1.6-1.3-1.4 1.6c-2.7 3.1-3.5 8.3-3.1 12.3.3 2.9 1.2 5.9 3 8.3-1.4.8-2.9 1.9-4.3 2.4-2.8 1-5.9 2-8.9 2H79V49H66V24H51v12H26v13H13v14H1.8l-.2 1.5c-.5 6.4.3 12.6 3 18.5l1.1 2.2.1.2c7.9 13.4 21.7 19 36.8 19 29.2 0 53.3-13.1 64.3-40.6 7.4.4 15-1.8 18.6-8.9l.9-1.8-1.6-1zM28 39h10v11H28V39zm13.1 44.2c0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-1.7 1.4-3.1 3.1-3.1 1.7.1 3.1 1.4 3.1 3.1zM28 52h10v11H28V52zm-13 0h11v11H15V52zm27.7 50.2c-15.8-.1-24.3-5.4-31.3-12.4 2.1.1 4.1.2 5.9.2 1.6 0 3.2 0 4.7-.1 3.9-.2 7.3-.7 10.1-1.5 2.3 5.3 6.5 10.2 14 13.8h-3.4zM51 63H40V52h11v11zm0-13H40V39h11v11zm13 13H53V52h11v11zm0-13H53V39h11v11zm0-13H53V26h11v11zm13 26H66V52h11v11zM38.8 81.2c-.2-.1-.5-.2-.8-.2-1.2 0-2.2 1-2.2 2.2 0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2c0-.3-.1-.6-.2-.8-.2.3-.4.5-.8.5-.5 0-.9-.4-.9-.9.1-.4.3-.7.5-.8z" fill="#019BC6"/></svg>
                Docker
              </div>
              <div class="stack">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g fill="#486bb3"><path d="M56.484 55.098c.37.27.82.43 1.31.43 1.2 0 2.18-.95 2.23-2.13l.05-.03.75-13.26c-.9.11-1.8.26-2.7.46-4.93 1.12-9.2 3.55-12.54 6.83l10.87 7.71.03-.01zM55.034 74.528a2.218 2.218 0 00-2.58-1.69l-.02-.03-13.05 2.21a26.15 26.15 0 0010.51 13.15l5.06-12.22-.04-.05c.17-.42.23-.89.12-1.37zM50.694 65.118c.44-.12.85-.38 1.16-.76.75-.94.62-2.29-.28-3.07l.01-.05-9.93-8.88a26.07 26.07 0 00-3.7 16.48l12.73-3.67.01-.05zM60.334 69.018l3.66 1.76 3.66-1.75.9-3.95-2.53-3.16h-4.06l-2.54 3.16zM67.934 53.348c.02.46.18.91.49 1.29.75.94 2.1 1.11 3.06.41l.04.02 10.8-7.66c-4.08-3.99-9.4-6.6-15.15-7.3l.75 13.24h.01zM75.514 72.778c-.17-.03-.34-.05-.51-.04-.29.01-.58.09-.85.22a2.23 2.23 0 00-1.08 2.89l-.02.02 5.11 12.34c4.93-3.14 8.61-7.83 10.54-13.24l-13.16-2.23-.03.04zM65.954 79.318a2.246 2.246 0 00-2.04-1.17c-.77.03-1.5.46-1.89 1.18h-.01l-6.42 11.6a26.16 26.16 0 0014.27.73c.88-.2 1.74-.44 2.57-.72l-6.43-11.63h-.05z"/><path d="M124.544 76.788l-10.44-45.33a8.012 8.012 0 00-4.37-5.43l-42.24-20.18a8.157 8.157 0 00-3.92-.78 8.15 8.15 0 00-3.1.78l-42.24 20.18a8.055 8.055 0 00-4.37 5.43l-10.41 45.34a7.92 7.92 0 001.1 6.14c.14.22.3.43.46.64l29.24 36.35a8.087 8.087 0 006.32 3.01l46.89-.01c2.46 0 4.78-1.11 6.32-3.01l29.23-36.36a7.981 7.981 0 001.53-6.77zm-16.07-.55c-.31 1.35-1.76 2.17-3.26 1.85-.01 0-.03 0-.04-.01-.02 0-.03-.01-.05-.02-.21-.05-.47-.09-.65-.14-.86-.23-1.49-.58-2.27-.88-1.67-.6-3.06-1.1-4.41-1.3-.69-.05-1.04.27-1.42.52-.18-.04-.75-.14-1.08-.19-2.42 7.61-7.58 14.21-14.57 18.33.12.29.33.91.42 1.02-.16.43-.4.83-.19 1.49.49 1.27 1.28 2.52 2.24 4.01.46.69.94 1.22 1.36 2.02.1.19.23.48.33.68.65 1.39.17 2.99-1.08 3.59-1.26.61-2.82-.03-3.5-1.43-.1-.2-.23-.46-.31-.65-.36-.82-.48-1.52-.73-2.32-.57-1.68-1.05-3.07-1.73-4.25-.39-.57-.86-.64-1.29-.78-.08-.14-.38-.69-.54-.97-1.4.53-2.84.97-4.34 1.31-6.56 1.49-13.13.89-18.99-1.37l-.57 1.04c-.43.11-.84.23-1.09.53-.92 1.1-1.29 2.86-1.96 4.54-.25.79-.37 1.5-.73 2.32-.08.19-.22.45-.31.64v.01l-.01.01c-.67 1.39-2.23 2.03-3.49 1.43-1.25-.6-1.72-2.2-1.08-3.59.1-.2.22-.49.32-.68.42-.79.89-1.33 1.36-2.02.96-1.5 1.8-2.84 2.29-4.11.12-.42-.06-1-.22-1.43l.46-1.1c-6.73-3.99-12.04-10.34-14.58-18.21l-1.1.19c-.3-.17-.89-.56-1.45-.51-1.35.2-2.74.7-4.41 1.3-.78.3-1.4.64-2.27.87-.18.05-.44.1-.65.15-.02 0-.03.01-.05.02-.01 0-.03 0-.04.01-1.5.32-2.95-.5-3.26-1.85-.31-1.35.65-2.72 2.14-3.08.01 0 .03-.01.04-.01.01 0 .01 0 .02-.01.21-.05.48-.12.68-.16.88-.17 1.6-.13 2.43-.19 1.77-.19 3.23-.34 4.53-.75.41-.17.81-.74 1.09-1.1l1.06-.31c-1.19-8.22.82-16.28 5.16-22.81l-.81-.72c-.05-.32-.12-1.04-.51-1.46-.99-.93-2.25-1.71-3.76-2.64-.72-.42-1.38-.69-2.1-1.23-.15-.11-.36-.29-.52-.42-.01-.01-.03-.02-.04-.03-1.21-.97-1.49-2.64-.62-3.73.49-.61 1.24-.92 2.01-.89.6.02 1.23.24 1.76.66.17.14.41.32.56.45.68.58 1.09 1.16 1.66 1.77 1.25 1.27 2.28 2.32 3.41 3.08.59.35 1.05.21 1.5.15.15.11.63.46.91.65 4.3-4.57 9.96-7.95 16.52-9.44 1.53-.35 3.05-.58 4.57-.7l.06-1.07c.34-.33.71-.79.82-1.31.11-1.36-.07-2.82-.28-4.59-.12-.82-.31-1.51-.35-2.4-.01-.18 0-.44.01-.65 0-.02-.01-.05-.01-.07 0-1.55 1.13-2.81 2.53-2.81s2.53 1.26 2.53 2.81c0 .22.01.52.01.72-.03.89-.23 1.58-.35 2.4-.21 1.76-.4 3.23-.29 4.59.1.68.5.95.83 1.26.01.18.04.79.06 1.13 8.04.71 15.5 4.39 20.99 10.14l.96-.69c.33.02 1.04.12 1.53-.17 1.13-.76 2.16-1.82 3.41-3.08.57-.61.99-1.18 1.67-1.77.15-.13.39-.31.56-.45 1.21-.97 2.9-.86 3.77.23s.59 2.76-.62 3.73c-.17.14-.39.33-.56.45-.72.53-1.38.8-2.1 1.23-1.51.93-2.77 1.71-3.76 2.64-.47.5-.43.98-.48 1.43-.14.13-.63.57-.9.8a32.75 32.75 0 014.74 10.95c.92 3.99 1.06 7.97.53 11.8l1.02.3c.18.26.56.89 1.09 1.1 1.3.41 2.76.56 4.53.75.83.07 1.55.03 2.43.19.21.04.52.12.73.17 1.5.37 2.45 1.74 2.14 3.09z"/><path d="M86.274 52.358l-9.88 8.84.01.03c-.34.3-.6.7-.71 1.18-.27 1.17.44 2.33 1.58 2.65l.01.05 12.79 3.68c.27-2.76.11-5.62-.55-8.48-.66-2.89-1.77-5.56-3.25-7.95z"/></g></svg>
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
