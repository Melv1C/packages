import { Avatar, AvatarFallback, AvatarImage } from '@melv1c/ui-core';

export default function AvatarBasic() {
  return (
    <Avatar>
      <AvatarImage
        src="https://github.com/shadcn.png"
        alt="@shadcn"
        className="grayscale"
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
