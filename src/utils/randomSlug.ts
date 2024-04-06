export default function generateRandomSlug() {
  let time = Date.now().toString();

  const charset =
    "SbARtL8YDzncVl6ef02uXIH9OpaygPNjo1mFGCrMxZ75Eh3UTKQBdwksqvJW4i";

  let segmented = time.match(/[\s\S]{1,2}/g),
    legal: string[] = [];

  segmented!.forEach((segment, index) => {
    if (parseInt(segment) > 60) {
      legal[index] = (Math.floor(Math.random() * 60) + 1).toString();
    } else {
      legal[index] = (parseInt(segmented![index]) + 1).toString();
    }
  });

  const slug =
    charset[
      Math.floor(Math.random() * parseInt(legal[Math.floor(Math.random() * 6)]))
    ] +
    charset[
      Math.floor(Math.random() * parseInt(legal[Math.floor(Math.random() * 6)]))
    ] +
    charset[
      Math.floor(Math.random() * parseInt(legal[Math.floor(Math.random() * 6)]))
    ] +
    charset[
      Math.floor(Math.random() * parseInt(legal[Math.floor(Math.random() * 6)]))
    ] +
    charset[
      Math.floor(Math.random() * parseInt(legal[Math.floor(Math.random() * 6)]))
    ] +
    charset[
      Math.floor(Math.random() * parseInt(legal[Math.floor(Math.random() * 6)]))
    ];

  return slug;
}
