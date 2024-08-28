import { ReactNode } from "react";

export interface SectionProps {
    title: string;
    link?: string;
    linkText?: string;
    description: string;
    children?: ReactNode;
  }