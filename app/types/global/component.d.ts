// creeate a component.d.ts with a global type HasChildren that can be used in any component
namespace Component {
  export type HasChildren = {
    children: React.ReactNode;
  };

  export type HasClassName = {
    className?: string;
  };

  export type HasChildrenAndClassName = HasChildren & HasClassName;
}
