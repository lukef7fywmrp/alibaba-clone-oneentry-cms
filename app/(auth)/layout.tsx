import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import logoBrandColor from "@/app/logoBrandColor.png";
import Link from "next/link";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex items-center space-x-4 py-7 px-12">
        <Link href={"/"}>
          <Image
            src={logoBrandColor}
            alt="logo"
            className="w-48 object-contain"
          />
        </Link>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="English" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="ar">Arabic</SelectItem>
            <SelectItem value="es">Spanish</SelectItem>
            <SelectItem value="fr">French</SelectItem>
            <SelectItem value="de">German</SelectItem>
            <SelectItem value="it">Italian</SelectItem>
            <SelectItem value="ja">Japanese</SelectItem>
            <SelectItem value="ko">Korean</SelectItem>
            <SelectItem value="pt">Portuguese</SelectItem>
            <SelectItem value="ru">Russian</SelectItem>
            <SelectItem value="tr">Turkish</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="max-w-lg mx-auto flex items-center justify-between w-full flex-1">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
