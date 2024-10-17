export interface CardProps {
  title?: string;
  format?: "border" | "shadow";
  slotHeaderRight?: Function;
  children?: React.ReactNode;
}

export interface CardCollapsibleProps extends CardProps {
  icon?: React.ReactElement;
  slotBodyContent?: Function;
}
