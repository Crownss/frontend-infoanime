export type TheProps = Root2[];

export interface Root2 {
  mal_id: number;
  url: string;
  images: Images;
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: any[];
  type: string;
  source: string;
  episodes: any;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: any;
  scored_by: any;
  rank: any;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: any;
  season: string;
  year: number;
  broadcast: Broadcast;
  producers: Producer[];
  licensors: any[];
  studios: Studio[];
  genres: Genre[];
  explicit_genres: any[];
  themes: Theme[];
  demographics: Demographic[];
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
  from: string;
  to: any;
  prop: Prop;
  string: string;
}

export interface Prop {
  from: From;
  to: To;
}

export interface From {
  day: number;
  month: number;
  year: number;
}

export interface To {
  day: any;
  month: any;
  year: any;
}

export interface Broadcast {
  day: string;
  time: string;
  timezone: string;
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

export default function Cards() {
  return (
    <>
      <div className="flex items-center h-full">
        <div className="mx-auto">
          <div className="h-screen carousel carousel-vertical rounded-box shadow-2xl">
            <div className="carousel-item h-full card bg-inherit image-full">
              <figure>
                <img src="https://cdn.myanimelist.net/images/anime/1700/134791l.webp" />
              </figure>
              <div className="card-body">
                <div className="card-title font-bold text-center tooltip text-2xl select-none">
                  Shoes!
                </div>
                <div className="mt-5"></div>
                <p className="text-ellipsis overflow-hidden text-left indent-5">
                  If a dog chews shoes whose shoes does he choose?
                </p>
              </div>
            </div>
            <div className="carousel-item h-full card bg-inherit image-full">
              <figure>
                <img src="https://cdn.myanimelist.net/images/anime/1370/140362l.webp" />
              </figure>
              <div className="card-body">
                <div className="card-title font-bold text-center tooltip text-2xl select-none">
                  Shoes!
                </div>
                <div className="mt-5"></div>
                <p className="text-ellipsis overflow-hidden text-left indent-5">
                  If a dog chews shoes whose shoes does he choose?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
