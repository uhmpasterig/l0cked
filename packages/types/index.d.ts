import React from "react";
// creeate a component.d.ts with a global type HasChildren that can be used in any component
declare global {
  namespace Component {
    type HasChildren = {
      children: React.ReactNode;
    };
  
    type HasClassName = {
      className?: string;
    };
  
    type HasChildrenAndClassName = HasChildren & HasClassName;
  }
}