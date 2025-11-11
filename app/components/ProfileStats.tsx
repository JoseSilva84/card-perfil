"use client";

interface ProfileStatsProps {
  seguidores?: number;
  seguindo?: number;
  projetos?: number;
}

export function ProfileStats({
  seguidores = 1195,
  seguindo = 7500,
  projetos = 40,
}: ProfileStatsProps) {
  return (
    <div className="flex justify-center items-center space-x-12 mt-4">
      <div className="text-center">
        <p className="text-2xl font-bold text-black">{seguidores}</p>
        <p className="text-gray-500 text-sm">Seguidores</p>
      </div>
      <div className="text-center">
        <p className="text-2xl font-bold text-black">{seguindo}</p>
        <p className="text-gray-500 text-sm">Seguindo</p>
      </div>
      <div className="text-center">
        <p className="text-2xl font-bold text-black">{projetos}</p>
        <p className="text-gray-500 text-sm">Projetos</p>
      </div>
    </div>
  );
}
