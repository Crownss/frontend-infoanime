import Link from "next/link";
import { Data } from "./response";
import Image from "next/image";
export default function Cards(props: { data: Data[] }) {
  return (
    <>
      <div
        className={
          props.data.length > 1 ? "flex items-center h-full" : "hidden"
        }
      >
        <div className="mx-auto">
          <div className="h-screen carousel carousel-vertical rounded-box shadow-2xl">
            {props.data.map((result) => (
              <div
                className="carousel-item h-full card bg-inherit image-full"
                key={result.mal_id}
              >
                <figure>
                  <Image
                    src={result.images?.webp.large_image_url || "/alice.png"}
                    alt={result.title_english || ""}
                    fill={true}
                  />
                </figure>
                <div className="card-body">
                  <div className="card-title font-bold text-center tooltip text-2xl select-none">
                    {result.trailer?.url === null ? (
                      <>
                        {result.title_english || ""} (
                        {result.title_japanese || ""})
                      </>
                    ) : (
                      <>
                        <Link href={result.trailer?.url || ""} target="_blank">
                          {result.title_english || ""} (
                          {result.title_japanese || ""})
                        </Link>
                      </>
                    )}
                  </div>
                  <div
                    className={
                      result.aired?.string.includes("Not available")
                        ? "hidden"
                        : "card-title font-normal text-center tooltip text-base select-none"
                    }
                  >
                    {result.aired?.string}
                  </div>
                  <div
                    className={
                      result.rating
                        ? "card-title font-normal text-center tooltip text-base select-none"
                        : "hidden"
                    }
                  >
                    Rating: {result.rating}
                  </div>
                  <div
                    className={
                      result.rating
                        ? "card-title font-normal text-center tooltip text-base select-none"
                        : "hidden"
                    }
                  >
                    Source: {result.source}
                  </div>
                  <div
                    className={
                      result.genres?.length
                        ? "card-title font-normal text-center tooltip text-base select-none"
                        : "hidden"
                    }
                  >
                    Genre&apos;s:{" "}
                    {result.genres?.map((genre) => (
                      <>{genre.name} </>
                    ))}
                  </div>
                  <div
                    className={
                      result.studios?.length
                        ? "card-title font-normal text-center tooltip text-base select-none"
                        : "hidden"
                    }
                  >
                    Studio&apos;s:{" "}
                    {result.studios?.map((studio) => (
                      <>{studio.name} </>
                    ))}
                  </div>
                  <div className="mt-5"></div>
                  <p
                    className="text-ellipsis overflow-hidden text-left indent-5 hyphens-auto"
                    lang="en"
                  >
                    {result.synopsis}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
