"use client";

import React, { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { ProfileStats } from "./ProfileStats";

/* Ícones */
const UserCheck = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" width="16" height="16" aria-hidden="true" {...props}>
    <path
      d="M20 6L9 17l-5-5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
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
    <circle cx="9" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M21 21v-3a5 4 0 0 0-4-3.87"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path d="M13 6.13a4 4 0 0 1 0 8.75" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" width="16" height="16" aria-hidden="true" {...props}>
    <path
      d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5" />
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
      "bg-gradient-to-r from-[#667EEA] to-[#764BA2] text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#764BA2] focus:ring-offset-2 shadow-md transition cursor-pointer",
    following:
      "bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-md cursor-pointer",
    secondary:
      "bg-gray-200 text-black hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 shadow-md cursor-pointer",
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
  role = "Desenvolvedor Full Stack",
  bio = "Apaixonado por criar experiências digitais incríveis - Next.js/Tailwind CSS.",
  avatarUrl = "/jno.jpg",
  className = "",
}: ProfileCardProps) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [seguindo, setSeguindo] = useState(7500); // valor inicial

  const handleFollowClick = () => {
    setIsFollowing((prev) => !prev);
    setSeguindo((prev) => (isFollowing ? prev - 1 : prev + 1));
  };

  return (
    <motion.div
      role="region"
      aria-label={`Perfil de ${name}`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative w-full max-w-xs mx-auto p-6 bg-gray-100 shadow-lg rounded-xl border-none overflow-hidden ${className}`}
    >
      <div className="absolute top-0 left-0 w-full h-24 bg-gray-200 rounded-t-xl"></div>

      {/* Foto */}
      <div className="flex flex-col items-center mb-4 relative mt-8">
        <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-[#8149A7] border-4 border-white transition-all duration-300 hover:scale-105">
          <Image
            src={avatarUrl}
            alt={`Foto de perfil de ${name}`}
            width={96}
            height={96}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Nome e cargo */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-foreground mb-1">{name}</h2>
        <p className="text-sm text-gray-600">{role}</p>
      </div>

      {/* Estatísticas */}
      <ProfileStats seguidores={1195} seguindo={seguindo} projetos={40} />

      {/* Botões */}
      <div className="flex gap-3 mt-6">
        <Button
          onClick={handleFollowClick}
          variant={isFollowing ? "following" : "default"}
          className="flex-1"
          aria-pressed={isFollowing}
          aria-label={isFollowing ? `Deixar de seguir ${name}` : `Seguir ${name}`}
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

        <a
          href="https://linktr.ee/JoseSilva84"
          target="_blank"
          rel="noopener noreferrer"
          role="button"
          aria-label={`Enviar mensagem para ${name}`}
          className="flex-1 bg-gray-200 text-black py-2 px-3 rounded-md text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 shadow-md transition"
        >
          <MailIcon className="w-5 h-5 inline mr-1" />
          Mensagem
        </a>
      </div>

      <p className="text-center p-2 text-sm text-gray-600 leading-relaxed mt-3">{bio}</p>
    </motion.div>
  );
};

export default ProfileCard;
