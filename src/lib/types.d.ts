export interface Project {
  title: string;
  shortDescription: string;
  priority: number;
  cover: string | StaticImageData; // Accept both string (URL) and StaticImageData
  livePreview?: string;
  githubLink?: string;
  visitors?: string;
  earned?: string;
  githubStars?: string;
  ratings?: string;
  numberOfSales?: string;
  type?: string;
  siteAge?: string;
}


export interface Heading {
  id: string
  title: string
  items: Heading[]
}

export interface Testimonial {
 name: string; title: string; feedback: string }

