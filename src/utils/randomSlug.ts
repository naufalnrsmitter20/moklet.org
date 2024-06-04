export default function generateRandomSlug() {
  const time = Date.now().toString();

  const charset =
    "SbARtL8YDzncVl6ef02uXIH9OpaygPNjo1mFGCrMxZ75Eh3UTKQBdwksqvJW4i";

  const segmented = time.match(/[\s\S]{1,2}/g),
    legal: string[] = [];

  segmented!.forEach((segment, index) => {
    if (parseInt(segment) > 60) {
      legal[index] = (Math.floor(Math.random() * 60) + 1).toString();
    } else {
      legal[index] = (parseInt(segmented![index]) + 1).toString();
    }
  });

  const slug: string[] = [];

  Array.from({ length: 6 }, (x, i) => i).forEach((n, i) => {
    slug[i] =
      charset[
        Math.floor(
          Math.random() * parseInt(legal[Math.floor(Math.random() * 6)]),
        )
      ];
  });

  return slug.join("");
}
