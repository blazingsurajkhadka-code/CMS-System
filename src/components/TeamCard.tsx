import { Link as LinkIcon, MessageSquare, Mail } from "lucide-react";
import type { TeamMember } from "../data/data";

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <div className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl shadow-gray-900/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-400/10">
      <div className="relative overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 translate-y-4 gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <a
            href={member.socials.linkedin}
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-700 transition-colors hover:bg-blue-600 hover:text-white"
          >
            <LinkIcon className="h-4 w-4" />
          </a>
          <a
            href={member.socials.twitter}
            aria-label="Twitter"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-700 transition-colors hover:bg-blue-600 hover:text-white"
          >
            <MessageSquare className="h-4 w-4" />
          </a>
          <a
            href={member.socials.email}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-700 transition-colors hover:bg-blue-600 hover:text-white"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="p-6 text-center">
        <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
          <p className="mt-1 text-sm font-medium text-gray-700">
          {member.role}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;