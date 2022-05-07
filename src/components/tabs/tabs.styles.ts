import { css } from "lit";

export const styles = css`
    .material-icons {
        font-family: "Material Icons";
        font-weight: normal;
        font-style: normal;
        font-size: 24px;
        line-height: 1;
        letter-spacing: normal;
        text-transform: none;
        display: inline-block;
        white-space: nowrap;
        word-wrap: normal;
        direction: ltr;
        -webkit-font-feature-settings: "liga";
        -webkit-font-smoothing: antialiased;
    }

    .tabs {
        display: flex;
        margin-bottom: 1rem;
    }

    .tab {
        margin-right: 1rem;
        cursor: pointer;
        font-size: 1.5rem;
    }

    .tab.selected, .tab:hover{
        border-bottom: 4px solid white;
    }

    .experience {
        margin-bottom: 1rem;
    }

    .experience-title ,.employer {
        cursor: pointer;
    }

    .socials, .stacks {
        display:flex;
        padding-left: 4px;
    }
    .social, .stack {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        margin-right: 1rem;
        margin-top: 1rem;
        mix-blend-mode: difference;
    }

    .stack {
        height: 3rem;
        width: 3rem;
        filter: brightness(100) saturate(0%);
        font-size: 12px;
    }
    .stack svg {
        margin-bottom: 0.5rem;
    }

    .icon {
        background-size: contain;
        background-repeat: no-repeat;
        cursor: pointer;
        height: 2rem;
        width: 2rem;
        filter: invert(100%);
    }

    .linkedin {
        background-image: url("/linkedin.png");
    }
    .medium {
        background-image: url("/medium.svg");
    }
    .github {
        background-image: url("/github.png");
    }
    .gitlab {
        background-image: url("/gitlab.png");
    }
    .email {
        background-image: url("/email.svg");
    }


    .card-wrap {
        padding-bottom: 1rem;
    }

    .card {
        font-family: var(--font-family);
        padding: 1rem;
        background: rgba(211,211,211, 0.1);
        border-radius: 4px;
        width: 220px;
        color: var(--primary-color);
        cursor: pointer;
    }

    h4 {
        font-weight: 500;
    }

    .card-title {
        font-size: 18px;
        font-weight: 600;
        font-family: "Source Sans Pro", sans-serif;
    }
    .card-description {
        font-family: "Open Sans", sans-serif;
        padding-top: 5px;
    }
    .card-image {
        display: block;
        border-radius: 2px 2px 0 0;
        position: relative;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        object-fit: cover;
        cursor: pointer;
        background-size: contain;
        height: 50px;
        background-repeat: no-repeat;
        background-position: center;
        filter: invert(100%);
    }

    a {
        text-decoration: none;
    }
    i.material-icons {
        cursor: pointer;
        z-index: 999;
        margin-bottom: 0.5rem;
    }
`;
