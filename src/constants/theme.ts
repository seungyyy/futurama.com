// color
const colors = {
  white: '#fcfff6',
  black: '#0e0e0e',
  grey: '#9c9b9b',
  lightGrey: '#b5b8b0',
  green: '#236e2d',
  orange: '#f89700',
  mint: '#00e6c7',
  pink: '#ffc0cd',
};

const common = {
  buttonStyle: `
    font-size: 1rem;
    cursor: pointer;
    padding: 0.5em 1em;
    border-radius: 8px;
    font-size: 0.8rem;
    color: #fcfff6;
    background-color: #f89700;
    box-sizing: border-box;
  `,
  containerShadow: `
    text-align: center;
    background-color: #fcfff6;
    border-radius: 6px;
    padding: 1rem;
    box-sizing: border-box;
    box-shadow: rgba(49, 160, 49, 0.575) 5px 5px, rgba(49, 160, 49, 0.3) 10px 10px,
      rgba(49, 160, 49, 0.2) 15px 15px, rgba(49, 160, 49, 0.1) 20px 20px;
  `,
  category: `
    color: #236e2d;
    font-size: 37px;
    border-bottom: 1px solid #236e2d;
  `,
  section: `
    width: 80%;
    margin: 0 auto;
    box-sizing: border-box;
  `,
  boxShadow: `
  rgba(49, 160, 49, 0.575) 5px 5px, rgba(49, 160, 49, 0.3) 10px 10px,
    rgba(49, 160, 49, 0.2) 15px 15px, rgba(49, 160, 49, 0.1) 20px 20px;
  `,
  seletedList: `
    position: absolute;
    top: -7px;
    right: 0;
    font-size: 24px;
    color: #fcfff6;
    text-align: right;
    padding: 0 25px 0 10px;
    z-index: 20;
    background-color: rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    cursor: pointer;
    &::before {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      top: 18px;
      right: 0;
      border-top: 7px solid #236e2d;
      border-right: 7px solid transparent;
      border-left: 7px solid transparent;
      border-bottom: 7px solid transparent;
    }
  `,
};

export const theme = {
  colors,
  common,
};
