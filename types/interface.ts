export interface Experience {
  id: number;
  name: string;
  company: string;
  start_date: string;
  end_date: string;
}

export interface Award {
  id: number;
  title: string;
  year_place: string;
  link: string;
}

export interface Project {
  id: number;
  project_name: string;
  thumbnail: string;
  description: string;
  date_project: string;
  client_name: string;
  services: string;
  photos: ProjectPhotos[];
  features: ProjectFeatures[];
  teches: ProjectTeches[];
}

interface ProjectPhotos {
  id: number;
  photo: string;
}
export interface ProjectFeatures {
  id: number;
  name: string;
  description: string;
}

interface ProjectTeches {
  id: number;
  title: string;
}
