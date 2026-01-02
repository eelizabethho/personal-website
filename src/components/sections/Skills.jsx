const Skills = () => {
  const skills = [
    'Java',
    'JavaScript',
    'TypeScript',
    'Python',
    'React',
    'HTML',
    'CSS',
    'Node.js',
    'React Native',
    'Tailwind CSS',
    'AWS',
    'AWS Lambda',
    'AWS Cognito',
    'AWS S3',
    'AWS EventBridge',
    'AWS Athena',
    'API Gateway',
    'DynamoDB',
    'Firebase',
    'OpenAI',
    'Git',
    'Figma',
    'Vite',
    'Chrome',
    'Expo'
  ];

  return (
    <div className="pt-16 pb-32 md:pt-12 md:pb-24 px-4 md:px-8  flex flex-col items-center md:items-center md:justify-start relative z-10 bg-black">
      <h2 className="text-4xl md:text-6xl font-semibold text-white mb-6 text-center">
        Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto font-light ">
        {skills.map((skill) => (
          <div
            key={skill}
            className="px-4 py-2 md:px-6 md:py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 backdrop-blur-sm cursor-default"
          >
            <span className="text-white text-sm md:text-base font-light">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;