import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type AuthorInfoProps = {
  userName: string;
  userImage: string;
};

export const AuthorInfo = ({ userName, userImage }: AuthorInfoProps) => {
  {/* セマンティクスは親で確定する設計にする！ここは再利用性重視で div を採用。*/}
  return (
    <div className="flex items-center space-x-3">
      <Avatar>
        <AvatarImage src={userImage} alt={userName} />
        <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
      </Avatar>
      <span className="text-sm font-medium text-gray-700">{userName}</span>
    </div>
  );
};
