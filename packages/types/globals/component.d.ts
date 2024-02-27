export declare global {
  namespace Component {
    type HasChildren = {
      children?: React.ReactNode;
    };

    type HasClassName = {
      className?: string;
    };

    type HasChildrenAndClassName = HasChildren & HasClassName;
  }
}
