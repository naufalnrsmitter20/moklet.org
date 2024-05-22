import { default as NextImage, ImageProps } from "next/image";

export default function Image(props: Readonly<ImageProps>) {
  return (
    <NextImage
      {...props}
      referrerPolicy="no-referrer"
      className={
        props.className +
        " pointer-events-none object-cover bg-center bg-no-repeat"
      }
    />
  );
}
