import React from 'react';

interface TeamMemberProps {
    name: string;
    role: string;
    image: string;
    bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, bio }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="w-full h-64 bg-white flex items-center justify-center overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="object-contain max-h-full max-w-full"
                />
            </div>
            <div className="p-4 rtl">
                <h3 className="text-xl font-bold text-rawaa-dark mb-1">{name}</h3>
                <p className="text-rawaa-primary font-medium mb-2">{role}</p>
                <p className="text-gray-600 text-sm">{bio}</p>
            </div>
        </div>
    );
};

export default TeamMember;
