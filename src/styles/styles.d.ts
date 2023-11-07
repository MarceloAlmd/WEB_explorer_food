import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;

      body: string;

      text: {
        primary: string;
        secondary: string;

        neutral: string;
      };
    };
  }
}
