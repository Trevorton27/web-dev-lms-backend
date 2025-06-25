// src/lib/api/types.ts

export interface Media {
  data: {
    attributes: {
      url: string;
      alternativeText?: string;
    };
  } | null;
}

export interface CourseAttributes {
  title: string;
  slug: string;
  description?: string;
  publishedAt?: string;
  createdAt?: string;
  updatedAt?: string;
  image?: Media;
  [key: string]: unknown; // for additional dynamic fields
}

export interface Course {
  id: number;
  attributes: CourseAttributes;
}
