export type Theme = {
  colors: {
    primary: string;
    secondary: string;
    third: string;
    error: string;
  };
  background: {
    primary: string;
    secondary: string;
    third: string;
  };
  shadow: {
    trend: string;
    trendHover: string;
  };
  footer: {
    primary: string;
  };
  button: {
    white: string;
    red: string;
  };
  border: {
    primary: string;
  };
  link: {
    white: string;
    red: string;
  };
};

export const theme = {
  colors: {
    primary: "#FFFFFF",
    secondary: "#B7B7B7",
    third: "#9A9A9A",
    error: "#ED4040",
  },
  background: {
    primary: "#111111",
    secondary: "#141414",
    third: "#232323",
  },
  shadow: {
    trend: "6px 12px 48px rgba(0, 0, 0, 0.75)",
    trendHover: "2px 10px 100px rgba(0, 0, 0, 0.9);",
  },
  footer: {
    primary: "#434343",
  },
  button: {
    white: "#FFFFFF",
    red: "#ED4040",
  },
  border: {
    primary: "#353535",
  },
  link: {
    white: "#FFFFFF",
    red: "#E31C25",
  },
};
