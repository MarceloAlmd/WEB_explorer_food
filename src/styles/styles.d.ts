import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      body: string;
      search: string;
      dishes: string;

      text: {
        primary: string;
        secondary: string;
        neutral: string;
        price: string;
        pending: string;
        preparing: string;
        delivered: string;
      };
    };
  }
}
