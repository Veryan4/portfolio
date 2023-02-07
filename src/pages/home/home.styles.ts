import { css } from "lit";

export const styles = css`

  @keyframes spin {
    to { transform: rotate(360deg) }
  }

  .background {
    position: fixed;
    top:-50vh;
    bottom:0;
    right:0;
    left:-60vw;
    height:200vh;
    width:200vw;
    background: linear-gradient(225deg, black 50%, white 50%);
    animation-name: spin;
    animation-duration: 240s;
    animation-iteration-count: infinite;
    z-index: -1;
  }

  .wrap {
    position: fixed; /* or absolute */
    top: 40%;
    left: 50%;
    display:flex;
    justify-content: center;
    mix-blend-mode: difference;
  }
  .filler{
    width:50%;
  }

  .content {
    max-width:40vw;
    font-family: var(--font-family);
  }

  h1 {
    mix-blend-mode: difference;
    font-size: 5rem;
    font-family: var(--font-family);
    display: flex;
    justify-content: center;
  }

  img {
    width: 25vw;
    bottom: 0;
    position: absolute;
  }

  .img-wrap {
    position: absolute;
    bottom: 0;
    left:10vw;
  }

  .donut {
    position: relative;
    font-size: 2em;
    border-radius: 50%;
    width: 25vw;
    height: 25vw;
    background-color: white; 
    mix-blend-mode: difference;
    bottom:11vw;
  } 

  .donut::after {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: black; 
    content: "";
    width: 20vw;
    height: 20vw;
  }

  ::selection {
    color: black;
    background: white;
  }


  @media only screen and (max-width: 752px) {
    .background {
      top:-50vh;
      left:-60vh;
      height:200vh;
      width:200vh;
    }
    h1 {
      margin-top: 0;
      position: fixed;
      left: 1rem;
    }
    .img-wrap{
      display: none;
    }
    img {
      width: auto;
      height: 25vh;
    }
    .wrap {
      top: 35%;
      left: 1rem;
    }
    .content {
      max-width: 95vw;
    }
  }
`;
