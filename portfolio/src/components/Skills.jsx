import React from 'react';
import pythonLogo from '../assets/skills/python.svg';
import jsLogo from '../assets/skills/javascript.svg';
import javaLogo from '../assets/skills/java.svg';
import htmlLogo from '../assets/skills/html.svg';
import cssLogo from '../assets/skills/css.svg';
import reactLogo from '../assets/skills/react.svg';
import nodeLogo from '../assets/skills/node.svg';
import expressLogo from '../assets/skills/express.svg';
import mongoLogo from '../assets/skills/mongodb.svg';
import dockerLogo from '../assets/skills/docker.svg';
import awsLogo from '../assets/skills/aws.svg';
import gitLogo from '../assets/skills/git.svg';

const skills = [
  { name: 'Python', logo: pythonLogo, level: 'Intermediate', labelColor: 'bg-yellow-400 text-black' },
  { name: 'JavaScript', logo: jsLogo, level: 'Advanced', labelColor: 'bg-green-600 text-black' },
  { name: 'Java', logo: javaLogo, level: 'Intermediate', labelColor: 'bg-yellow-400 text-black' },
  { name: 'HTML', logo: htmlLogo, level: 'Advanced', labelColor: 'bg-green-600 text-black' },
  { name: 'CSS', logo: cssLogo, level: 'Advanced', labelColor: 'bg-green-600 text-black' },
  { name: 'React.js', logo: reactLogo, level: 'Advanced', labelColor: 'bg-green-600 text-black' },
  { name: 'Node.js', logo: nodeLogo, level: 'Advanced', labelColor: 'bg-green-600 text-black' },
  { name: 'Express.js', logo: expressLogo, level: 'Intermediate', labelColor: 'bg-yellow-400 text-black' },
  { name: 'MongoDB', logo: mongoLogo, level: 'Intermediate', labelColor: 'bg-yellow-400 text-black' },
  { name: 'Docker', logo: dockerLogo, level: 'Intermediate', labelColor: 'bg-yellow-400 text-black' },
  { name: 'AWS', logo: awsLogo, level: 'Intermediate', labelColor: 'bg-yellow-400 text-black' },
  { name: 'Git', logo: gitLogo, level: 'Advanced', labelColor: 'bg-green-600 text-black' },
];

const Skills = () => {
  const skillPairs = [];
  for (let i = 0; i < skills.length; i += 2) {
    skillPairs.push(skills.slice(i, i + 2));
  }

  return (
    <section className="w-full min-h-screen bg-black text-white py-20 px-6 scroll-smoothx">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-center mb-16">
          Skills
        </h2>

        <div className="flex flex-col gap-10">
          {skillPairs.map((pair, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:justify-between gap-10"
            >
              {pair.map((skill, idx) => (
                <div
                  key={idx}
                  className="w-full flex items-center justify-between border-b border-white/10 pb-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-10 h-10 object-contain"
                    />
                    <span className="text-lg font-medium">{skill.name}</span>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${skill.labelColor}`}
                  >
                    {skill.level}
                  </span>
                </div>
              ))}
              {pair.length === 1 && <div className="hidden sm:block w-full" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
