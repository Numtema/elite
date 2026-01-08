
import React from 'react';

export interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  hasSubmenu?: boolean;
}

export interface CourseData {
  id: string;
  title: string;
  progress: number;
  category: string;
  image: string;
}
