import React from 'react';

interface SkillBadgeProps {
  name: string;
  logo: string;
  color: string;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ name, logo, color }) => {
  return (
    <img
      src={`https://img.shields.io/badge/${name}-${color}?style=for-the-badge&logo=${logo}&logoColor=white`}
      alt={name}
      className="h-8"
    />
  );
};