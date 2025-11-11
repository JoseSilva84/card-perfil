"use client";

import React, { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { ProfileStats } from "./ProfileStats";

/* Ícones inline */
const UserCheck = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" width="16" height="16" aria-hidden="true" {...props}>
    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const UsersIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" width="16" height="16" aria-hidden="true" {...props}>
    <path
      d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="9" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M21 21v-3a5 4 0 0 0-4-3.87"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13 6.13a4 4 0 0 1 0 8.75"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" width="16" height="16" aria-hidden="true" {...props}>
    <path
      d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 6l-10 7L2 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* Botão */
type ButtonVariant = "default" | "secondary" | "following";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}
const Button = ({ variant = "default", children, className = "", ...props }: ButtonProps) => {
  const variants: Record<ButtonVariant, string> = {
    default:
      "bg-primary text-white bg-gradient-to-r from-[#667EEA] to-[#764BA2] hover:opacity-90 shadow-md transition cursor-pointer",
    following: "bg-green-600 text-white hover:bg-green-800 shadow-md cursor-pointer",
    secondary: "bg-gray-200 border-none text-foreground text-black hover:bg-gray-300 shadow-md cursor-pointer",
  };

  return (
    <button
      {...props}
      type={props.type ?? "button"}
      className={`px-3 py-2 rounded-md text-sm font-medium flex items-center justify-center gap-2 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

/* Card */
interface ProfileCardProps {
  name?: string;
  role?: string;
  bio?: string;
  avatarUrl?: string | StaticImageData;
  className?: string;
}

const ProfileCard = ({
  name = "José Silva",
  role = "Frontend Developer",
  bio = "Apaixonado por criar experiências digitais incríveis.",
  avatarUrl = "/jno.jpg",
  className = "",
}: ProfileCardProps) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowClick = () => setIsFollowing((s) => !s);

  return (
    <div
      className={`
        w-full max-w-xs mx-auto h-[65vh] p-6 bg-gray-100
        shadow-card hover:shadow-card-hover rounded-xl
        transition-all duration-300
        border-none
        ${className}
      `}
    >
      {/* Foto */}
      <div className="flex flex-col items-center mb-4">
        <div className="relative group">
          <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-[#8149A7] transition-all duration-300 group-hover:ring-primary/20 group-hover:scale-105 border-3 border-white">
            <Image
              src={avatarUrl}
              alt={`Foto de perfil de ${name}`}
              width={96}
              height={96}
              className="w-full h-full object-cover"
              priority={false}
            />
          </div>
        </div>
      </div>

      {/* Nome e cargo */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-foreground mb-1">{name}</h2>
        <p className="text-sm text-gray-600">{role}</p>
      </div>

      {/* Estatísticas */}
      <ProfileStats />

      {/* Botões */}
      <div className="flex gap-3 mt-6">
        <Button
          onClick={handleFollowClick}
          variant={isFollowing ? "following" : "default"}
          className="flex-1"
        >
          {isFollowing ? (
            <>
              <UserCheck />
              Seguindo
            </>
          ) : (
            <>
              <UsersIcon />
              Seguir
            </>
          )}
        </Button>

        <Button variant="secondary" className="flex-1">
          <MailIcon />
          Mensagem
        </Button>
      </div>

      {/* Bio */}
      <p className="text-center p-2 text-sm text-gray-600 leading-relaxed mt-3">{bio}</p>
    </div>
  );
};

export default ProfileCard;
