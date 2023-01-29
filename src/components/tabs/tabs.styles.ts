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
        flex-wrap: wrap;
        padding-left: 4px;
        padding-top: 1rem;
        gap: 1.5rem;
    }
    .social, .stack {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        mix-blend-mode: difference;
        height: 5rem;
        width: 5rem;
        filter: brightness(100) saturate(0%);
    }

    .social svg, .stack svg {
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

    .cards-wrap {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .card {
        font-family: var(--font-family);
        padding: 1rem;
        background: rgba(211,211,211, 0.1);
        border-radius: 4px;
        width: 40%;
        color: var(--primary-color);
        cursor: pointer;
    }

    .card-description {
        font-family: var(--font-family-2);
        font-size: 1.2rem;
        padding-top: 1rem;
        font-weight: 500;
    }
    .card-image {
        display: flex;
        justify-content: center;
        align-items: center;
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
    .content{
        font-family: var(--font-family-2);
        font-size:1.2rem;
        height:50vh;
        overflow-y: scroll;
    }
    .button {
        margin-top: 1rem;
        background-color: white;
        color: black;
        border-radius: 4px;
        padding: 0.5rem;
        width: fit-content;
        cursor: pointer;
        font-family: var(--font-family);
    }
`;
