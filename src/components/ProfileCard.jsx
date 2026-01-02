"use client";

export default function ProfileCard({ image, name }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <img
        src={image}
        alt={name}
        className="w-60 h-60 rounded-full border-4 border-white object-cover"
      />

      <p className="text-white text-lg font-medium">
        {name}
      </p>
    </div>
  );
}
