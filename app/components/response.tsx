export interface Root {
  pagination: Pagination;
  data: Data[];
}

export interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: Items;
}

export interface Items {
  count: number;
  total: number;
  per_page: number;
}

export interface Data {
  mal_id?: number;
  url?: string;
  images?: Images;
  trailer?: Trailer;
  approved?: boolean;
  titles?: Title[];
  title?: string;
  title_english?: string;
  title_japanese?: string;
  title_synonyms?: string[];
  type?: string;
  source?: string;
  episodes: any;
  status?: string;
  airing?: boolean;
  aired?: Aired;
  duration?: string;
  rating?: string;
  score: any;
  scored_by: any;
  rank: any;
  popularity?: number;
  members?: number;
  favorites?: number;
  synopsis?: string;
  background: any;
  season: any;
  year: any;
  broadcast?: Broadcast;
  producers?: Producer[];
  licensors?: any[];
  studios?: Studio[];
  genres?: Genre[];
  explicit_genres?: any[];
  themes?: Theme[];
  demographics?: Demographic[];
}

export interface Images {
  jpg: Jpg;
  webp: Webp;
}

export interface Jpg {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface Webp {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface Trailer {
  youtube_id: string;
  url: string;
  embed_url: string;
  images: Images2;
}

export interface Images2 {
  image_url: string;
  small_image_url: string;
  medium_image_url: string;
  large_image_url: string;
  maximum_image_url: string;
}

export interface Title {
  type: string;
  title: string;
}

export interface Aired {
  from: any;
  to: any;
  prop: Prop;
  string: string;
}

export interface Prop {
  from: From;
  to: To;
}

export interface From {
  day: any;
  month: any;
  year: any;
}

export interface To {
  day: any;
  month: any;
  year: any;
}

export interface Broadcast {
  day: any;
  time: any;
  timezone: any;
  string: string;
}

export interface Producer {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface Studio {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface Genre {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface Theme {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface Demographic {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}