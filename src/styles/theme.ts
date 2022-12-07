export type Theme = {
  colors: {
    primary: string;
    secondary: string;
    third: string;
    quantery: string;
    fiftery: string;
    sixtery: string;
    seventhtery: string;
    error: string;
  };
  background: {
    primary: string;
  };
  shadow: {
    trend: string;
    trendHover: string;
  };
};

export const theme = {
  colors: {
    primary: "#FFFFFF",
    secondary: "#B7B7B7",
    third: "#232323",
    quantery: "#141414",
    fiftery: "#ED4040",
    sixtery: "#626262",
    seventhtery: "#757575",
    error: "#E31C25",
  },
  background: {
    primary: "#111111",
  },
  shadow: {
    trend: "0px 2px 5px rgba(250, 67, 67, 0.25)",
    trendHover: "5px 5px 20px rgba(250, 67, 67, 0.25)",
  },
};
