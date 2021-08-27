export interface Movie {
  title: string;
  year: string;
  genres: string[];
  duration: number;
  description: string;
  link: string;
  images: Image;
  id: number;
}

export interface Image {
    medium: string;
    original: string;
}