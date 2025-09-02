export interface IHeadlineWidgetProps {
  text: string;
  settings: {
    fontSize: number;
    fontFamily: string;
    fontWeight: string;
    gradient: boolean;
    gradientDirection: string;
    gradientColors: string[];
  };
}
